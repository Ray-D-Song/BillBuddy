import login from '@/api/login';
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  async setup() {
    const router = useRouter()

    const param = reactive({
      username: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        const res = await login(param)
        if(res.code === 200) {
          window.localStorage.setItem('token', res.token)
          router.push({name: 'mainland'}) 
        }
      } catch (e) {
        console.log(e)
      }
    }

    return () => (
      <div class="w-full h-screen flex justify-center items-center flex-col">
        <input
          v-model={param.username}
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
          v-model={param.password}
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
          <button onClick={handleLogin} class="mt-7 bg-gray-700 rounded-lg shadow-black shadow-sm w-32 h-10 border border-solid border-gray-700">
            Login
          </button>
      </div>
    )
  }
})