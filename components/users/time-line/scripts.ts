export default defineNuxtComponent({
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    totalData: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {}
  }
})
