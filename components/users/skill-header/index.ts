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
    const tagRef = inject<Ref<string | null>>(injectionKeys.skillTag)!

    const formatString = (str: string) => {
      return str.toLowerCase().replace(/\s+/g, '-')
    }

    const handleSkillClick = (skill?: string) => {
      let tag = null
      if (skill && skill !== 'All') {
        tag = formatString(skill)
      }

      tagRef.value = tag
    }

    const getTag = () => {
      return tagRef.value || ''
    }

    const getActiveClass = (str: string) => {
      return formatString(str) == getTag() || (formatString(str) == 'all' && !getTag())
        ? 'active'
        : ''
    }

    return {
      handleSkillClick,
      formatString,
      getActiveClass,
      tagRef
    }
  }
})
