import { defineComponent, provide, ref } from 'vue'
import Card from '../components/Card'
import FloatButton from '../components/FloatButton'
import { amountAndLimit } from '@/api/amount'

export default defineComponent({
  async setup() {

    const trigger = async () => {
      data.value = await amountAndLimit()
    }

    provide('trigger', trigger)

    const data = ref({
      quota: 0,
      usedAmount: 0
    })
    
    data.value = await amountAndLimit()

    return () => (
      <div class="flex flex-col items-center w-full">
        <Card quota={data.value.quota} usedAmount={data.value.usedAmount} class="my-8"/>
        <FloatButton />
      </div>
    )
  }
})