import './style.scss'
import { h, ref, watch } from 'vue'
import type { MenuEvent, MenuItem } from '@/interfaces/MenuInterface'
import { FacebookOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons-vue'

export default defineNuxtComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const socialIcon = ['facebook', 'instagram', 'twitter']

    const current = ref<(any | null | undefined)[]>([route.name])
    const items = ref<MenuItem[]>([
      {
        key: 'blogs',
        label: 'Blogs',
        title: 'Blogs',
        to: 'blogs'
      },
      // {
      //   key: 'resume',
      //   label: 'Resume',
      //   title: 'Resume',
      //   to: 'resume'
      // },
      {
        key: 'facebook',
        icon: () => h(FacebookOutlined, { class: 'social social-border' }),
        url: 'https://www.facebook.com/JutLyNee',
        title: 'Facebook'
      },
      {
        key: 'instagram',
        icon: () => h(InstagramOutlined, { class: 'social' }),
        url: 'https://www.instagram.com/jut_ly',
        title: 'Instagram'
      },
      {
        key: 'github',
        icon: () => h(GithubOutlined, { class: 'social' }),
        url: 'https://github.com/jutlyne',
        title: 'Github'
      }
    ])

    const handleMenuClick = async ({ item }: MenuEvent) => {
      if (item.to && route.name != item.to) {
        const query = item.to == 'blogs.index' ? { ref: 1 } : {}
        await router.push({ name: item.to, query })
      } else if (item.url) {
        window.open(item.url, '_blank')
      }
    }

    watch(current, (newValue, oldValue) => {
      if (socialIcon.includes(newValue[0] as string)) {
        current.value = oldValue
      }
    })

    watch(route, () => {
      current.value = [route.name]
    })

    return {
      current,
      items,
      handleMenuClick
    }
  }
})
