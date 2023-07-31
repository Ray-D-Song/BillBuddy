import { defineComponent } from 'vue'
import Card from '../components/Card'
import FloatButton from '../components/FloatButton'

export default defineComponent({
  setup() {
    return () => (
      <div class="flex flex-col items-center w-full">
        <Card quota={40} usedAmount={12} class="my-8"/>
        <FloatButton />
      </div>
    )
  }
})