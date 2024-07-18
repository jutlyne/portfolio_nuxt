import { injectionKeys } from '@/constants/injectionKeys'
import type { TagInterface } from '@/interfaces/TagInterface'
import { inject, type PropType, type Ref } from 'vue'

export default defineNuxtComponent({
  props: {
    data: {
      type: Array as PropType<TagInterface[]>,
      default: () => [],
      required: true
    }
  },
  setup() {
    const tagRef = inject<Ref<TagInterface | null>>(injectionKeys.skillTag)!

    const formatString = (str: string) => {
      if (!str) return

      return str.toLowerCase().replace(/\s+/g, '-')
    }

    const handleSkillClick = (tag: TagInterface) => {
      if (tag?.name == 'All') {
        tagRef.value = null
      } else {
        tagRef.value = tag
      }
    }

    const getTag = (): TagInterface | null => {
      return tagRef.value
    }

    const getActiveClass = (id: number | null) => {
      let btnClass = ''
      const tag = getTag()
      if (tag?.id == id) {
        btnClass = 'active'
      }

      return btnClass
    }

    return {
      handleSkillClick,
      formatString,
      getActiveClass,
      tagRef
    }
  }
})
