import type { BlogAnchorInterface } from '@/interfaces/BlogInterface'
import { onMounted, ref, type PropType } from 'vue'

export default defineNuxtComponent({
  props: {
    items: {
      type: Array as PropType<BlogAnchorInterface[]>,
      required: true
    }
  },
  setup() {
    const readmoreActive = ref<boolean>(false)
    const targetOffset = ref<number>(95)

    const readmore = () => {
      readmoreActive.value = !readmoreActive.value
    }

    onMounted(() => {
      if (window.innerWidth >= 992) {
        targetOffset.value = 110
      }
    })

    return {
      targetOffset,
      readmore,
      readmoreActive
    }
  }
})
