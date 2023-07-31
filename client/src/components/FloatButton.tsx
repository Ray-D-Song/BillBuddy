import { defineComponent, ref } from 'vue'
import Modal from './Modal'

export default defineComponent({
  setup() {
    const modalVisible = ref(false)
    const handleCloseModal = () => {
      modalVisible.value = false
    }
    return () => (
      <div class="z-20 bg-gray-700 w-14 h-14 flex items-center justify-center rounded-2xl fixed right-20 bottom-28">
        <Modal v-show={modalVisible.value} onHandleClose={handleCloseModal}/> 
        <div class="text-5xl text-center h-14" onClick={() => modalVisible.value=true}>
          +
        </div>
      </div>
    )
  }
})