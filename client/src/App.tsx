import { Suspense, defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {

    return () => (
      <Suspense>
        <div class="text-white opacity-80">
          <Suspense>
            <RouterView></RouterView>
          </Suspense>
        </div>
      </Suspense>
    )
  }
})