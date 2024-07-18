import { inject, onBeforeMount, ref, watch, type Ref } from 'vue'
import { getList } from '@/api/blog'
import { injectionKeys } from '@/constants/injectionKeys'
import { pageSize } from '@/constants/constant'
import paginationControls from '@/composables/paginationControls'
import { useRoute, useRouter } from 'vue-router'

export default defineNuxtComponent({
  setup() {
    definePageMeta({
      layout: 'users'
    })
    
    const blogs = ref({})
    const isLoading = inject<Ref<boolean>>(injectionKeys.isLoading)!
    const totalItem = inject<Ref<number>>(injectionKeys.totalItem)!
    const onPageChange = inject<Ref<any>>(injectionKeys.onPageChange)!
    const categories = inject<Ref<string[]>>(injectionKeys.categories)!
    const tagRef = inject<Ref<string>>(injectionKeys.skillTag)!
    const currentPage = inject<Ref<number>>(injectionKeys.currentPage)!

    const route = useRoute()
    const router = useRouter()
    const getTag = () => {
      return tagRef.value || ''
    }

    const { setCategory, activePaginate } = paginationControls()
    // setCategory(['All', 'PHP', 'NodeJs', 'VueJs', 'AWS', 'CICD', 'Life'])
    activePaginate(true)

    const fetchBlogData = async (limit: number, skip: number) => {
      isLoading.value = true

      try {
        currentPage.value = Math.floor(skip / limit) + 1

        const data = await getList({ limit, skip })
        if (Object.keys(data).length !== 0) {
          blogs.value = data.posts
          totalItem.value = data.total
        }
      } finally {
        isLoading.value = false
      }
    }

    onBeforeMount(async () => {
      if (route.query?.ref) {
        currentPage.value = 1
        tagRef.value = ''
        tagRef.value = ''
        router.replace('blog')
      }

      const skip = (currentPage.value - 1) * pageSize
      await fetchBlogData(pageSize, skip)
    })

    onPageChange.value = async (page: number, pageSize: number) => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const skip = pageSize * (page - 1)
      await fetchBlogData(pageSize, skip)
    }

    // watch(tagRef, async () => {
    //   await fetchBlogData(pageSize, 0)
    // })

    return {
      categories,
      blogs,
      totalItem,
      getTag
    }
  }
})
