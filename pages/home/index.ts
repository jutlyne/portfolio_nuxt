import { injectionKeys } from '~/constants/injectionKeys'
import './style.scss'

export default defineNuxtComponent({
  setup() {
    definePageMeta({
      layout: 'users'
    })

    const isLoading = inject<Ref<boolean>>(injectionKeys.isLoading)!
    const { setCategory, activePaginate } = paginationControls()
    setCategory([])
    activePaginate(false)
    isLoading.value = false

    return {}
  }
})
