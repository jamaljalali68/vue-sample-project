<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <UserCardView :user="user" :loading="loading" />
  </div>
</template>

<script>
import UserCardView from "./CardView.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

export default {
  components: {
    UserCardView,
  },

  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      // Make a request for a user
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUser();

    return { user, loading };
  },
};
</script>

<style>
</style>