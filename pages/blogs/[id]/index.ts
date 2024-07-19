import { getDetail, getListByTag } from '@/api/blog'
import paginationControls from '@/composables/paginationControls'
import { injectionKeys } from '@/constants/injectionKeys'
import { anchorSample } from '@/constants/sample'
import type { BlogAnchorInterface } from '@/interfaces/BlogInterface'
import { LeftOutlined } from '@ant-design/icons-vue'
import { inject, onBeforeMount, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineNuxtComponent({
  setup() {
    const route = useRoute()
    const isLoading = inject<Ref<boolean>>(injectionKeys.isLoading)!

    const blogId = ref<number>()
    const releatedBlogs = ref<Object[]>([])
    const anchor = ref<BlogAnchorInterface[]>([])

    const { setCategory, activePaginate } = paginationControls()
    setCategory([])
    activePaginate(false)

    const fetchBlogDetail = async (id: number) => {
      isLoading.value = true
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      })
      try {
        const data = await getDetail(id)
        anchor.value = anchorSample
        if (Object.keys(data).length !== 0) {
          releatedBlogs.value = (await getListByTag(data.tags)).posts
        }
      } finally {
        isLoading.value = false
      }
    }

    onBeforeMount(async () => {
      blogId.value = route.params?.id as unknown as number
      await fetchBlogDetail(blogId.value)
    })

    watch(route, async () => {
      const id = route.params?.id as unknown as number

      if (id != blogId.value) {
        blogId.value = id
        await fetchBlogDetail(id)
      }
    })

    return {
      releatedBlogs,
      anchor
    }
  }
})
