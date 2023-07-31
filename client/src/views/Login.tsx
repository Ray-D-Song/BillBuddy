import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="w-full h-screen flex justify-center items-center flex-col">
        <input
          class="
            h-12
            w-4/5
            block
            rounded-md
            bg-gray-800
            font-medium
            text-2xl
            shadow-sm
            shadow-gray-900
            my-4
            px-4
          "
          />
        <input
          type="password"
          class="
            h-12
            w-4/5
            block
            rounded-md
            bg-gray-800
            font-medium
            text-2xl
            shadow-sm
            shadow-gray-900
            my-4
            px-4
          "
          />
          <button class="mt-7 bg-gray-700 rounded-lg shadow-black shadow-sm w-32 h-10 border border-solid border-gray-700">
            Login
          </button>
      </div>
    )
  }
})