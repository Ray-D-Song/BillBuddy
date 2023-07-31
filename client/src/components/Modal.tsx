import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['handleClose'],
  setup(_, { emit }) {
    const amount = ref()

    return () => (
      <div onClick={() => emit('handleClose')} class="w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm flex justify-center fixed inset-0 z-50">
        <div onClick={e => e.stopPropagation()} class="w-10/12 h-40 bg-dark mt-32 flex flex-col items-center shadow-sm shadow-black rounded-md border border-solid border-gray-900">
          <input type="number" pattern="[0-9]*" v-model={amount.value} autofocus="true" class="bg-gray-700 rounded-md w-3/5 h-12 shadow-slate-900 shadow-sm mt-6 px-5"/>
          <button class="mt-7 bg-gray-700 rounded-lg shadow-black shadow-sm w-32 h-10 border border-solid border-gray-900">提交</button>
        </div>
      </div>
    )
  }
})