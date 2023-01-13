<template>
  <div>
    <router-link class="btn btn-dark" :to="{ name: 'createPost' }"
      >Create Post
    </router-link>
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
    <PostCardView :post="post"/>
  </div>
</template>


<script>
import PostCardView from "./CardView.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";

export default {
  components: {
    PostCardView,
  },

  setup() {
    const posts = ref([]);
    const loading = ref(true);
    function getPosts() {
      // Make a request for a user
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getPosts();

    return { posts, loading };
  },
};
</script>

<style>
</style>