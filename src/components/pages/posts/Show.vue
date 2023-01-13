<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <PostCardView :post="post" :loading="loading" />
  </div>
  <div class="card-footer">
    <button @click="deletePost" class="btn btn-danger ms-3 me-3">Delete</button>
    <router-link
      class="btn btn-dark"
      :to="{ name: 'editPost', params: '{id:post.id}' }"
      >Edit</router-link
    >
  </div>
</template>

<script>
import PostCardView from "./CardView.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  components: {
    PostCardView,
  },

  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Ohh!",
            text: `Post ${route.params.id}  Deleted Successfully`,
            icon: "warning",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { post, loading, deletePost };
  },
};
</script>

<style>
</style>