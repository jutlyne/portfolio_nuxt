import './style.scss'

export default defineNuxtComponent({
  setup() {
    const { setCategory, activePaginate } = paginationControls()
    setCategory([])
    activePaginate(false)

    return {}
  }
})
