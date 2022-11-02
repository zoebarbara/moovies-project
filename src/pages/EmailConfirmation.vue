<template>
  <div
    class="fullscreen bg-teal-14 text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 10vh">Confirmation email sent</div>

      <div class="text-h2" style="opacity: 0.4">
        Please check your inbox and login after
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="teal-14"
        unelevated
        to="/login"
        label="Go to Login"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "emailConfirmation",
});
</script>
