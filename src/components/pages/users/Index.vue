<template>
  
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user" />
      </div>
   
  
  
</template>


<script>
import UserCardView from "./CardView.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";

export default {
  components: {
    UserCardView,
  },

  setup() {
    const users = ref([]);
    const loading = ref(true);
    function getUsers() {
      // Make a request for a user
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUsers();

    return { users, loading };
  },
};
</script>

<style>
</style>