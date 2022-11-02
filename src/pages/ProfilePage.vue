<template>
  <div class="row">
    <div class="col flex flex-center items-center">
      <q-page class="flex flex-center" style="width: 50%">
        <q-form
          flex-center
          @submit.prevent="updateProfile()"
          class="column q-gutter-sm"
          action="http://localhost:9000"
          method="GET"
          style="width: 100%"
        >
          <AvatarUploadComponent
            v-model:path="avatar_url"
            @upload="updateProfile"
          />
          <q-input
            outlined
            v-model="username"
            name="username"
            id="username"
            label="User name or Nickname"
          ></q-input>
          <q-input
            outlined
            v-model="aboutProfile"
            type="text"
            id="aboutProfile"
            label="aboutProfile"
          ></q-input>
          <q-input
            outlined
            v-model="website"
            type="website"
            id="website"
            label="Website"
          ></q-input>

          <small v-if="errorMsg">{{ errorMsg }}</small>

          <q-btn label="Update Profile" type="submit" color="primary"></q-btn>
        </q-form>
      </q-page>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";
import { storeToRefs } from "pinia";
import AvatarUploadComponent from "src/components/AvatarUploadComponent.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const loading = ref(true);
const username = ref("");
const website = ref("");
const aboutProfile = ref("");
const avatar_url = ref("");

console.log(user);
console.log(user.value);

// async function getProfile() {
//   try {
//     loading.value = true;
//     userStore.user = supabase.auth.user();

//     let { data, error, status } = await supabase
//       .from("profiles")
//       .select(`username, website, avatar_url`)
//       .eq("id", store.user.id)
//       .single();

//     if (error && status !== 406) throw error;

//     if (data) {
//       username.value = data.username;
//       website.value = data.website;
//       avatar_url.value = data.avatar_url;
//     }
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     loading.value = false;
//   }
// }

// async function updateProfile() {
//   try {
//     loading.value = true;
//     store.user = supabase.auth.user();

//     const updates = {
//       id: store.user.id,
//       username: username.value,
//       website: website.value,
//       avatar_url: avatar_url.value,
//       updated_at: new Date(),
//     };

//     let { error } = await supabase.from("profiles").upsert(updates, {
//       returning: "minimal", // Don't return the value after inserting
//     });

//     if (error) throw error;
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     loading.value = false;
//   }
// }

// onMounted(() => {
//   getProfile();
// });
</script>

<style></style>
