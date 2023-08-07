import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    quota: Number,
    usedAmount: Number
  },
  setup(props) {
    const amountColor = computed(() => {
      if(props.usedAmount&&props.quota)
        return props.usedAmount>=props.quota?'text-red-400':'text-green-500'
    })

    return () => (
      <div class="bg-gray-900 rounded-xl w-4/5 h-40">
        <div class="text-lg opacity-70 p-4">
          今日剩余额度:
        </div>
        <div class="text-5xl text-center w-full">
          <span class={amountColor.value}>{props.usedAmount}</span>
          <span class="opacity-70">/{props.quota}</span>
        </div>
      </div>
    )
  }
})