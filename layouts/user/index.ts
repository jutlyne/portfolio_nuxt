import { provide, ref, type Ref } from 'vue'
import { injectionKeys } from '@/constants/injectionKeys'
import type { TagInterface } from '@/interfaces/TagInterface'

export default defineNuxtComponent({
  setup() {
    const isLoading = ref<boolean>(false)
    const needPaginate = ref<boolean>(false)
    const totalItem = ref<number>(0)
    const currentPage = ref<number>(1)
    const categories = ref<TagInterface[]>([])
    const skillTag = ref<string>('')
    const onPageChange: Ref<(...agrs: any) => Promise<void>> = ref(async () => {})

    provide(injectionKeys.isLoading, isLoading)
    provide(injectionKeys.needPaginate, needPaginate)
    provide(injectionKeys.totalItem, totalItem)
    provide(injectionKeys.onPageChange, onPageChange)
    provide(injectionKeys.categories, categories)
    provide(injectionKeys.skillTag, skillTag)
    provide(injectionKeys.currentPage, currentPage)

    return {
      isLoading,
      needPaginate,
      totalItem,
      onPageChange,
      categories,
      currentPage
    }
  }
})
