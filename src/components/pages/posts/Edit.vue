<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-8">
    <h2 class="mb-5">Edit Post</h2>
    <PostForm
      @formData="updatePost"
      :button-loading="loading"
      button-text="Edit Post"
      :post="post"
    />
  </div>
</template>

<script>
import PostForm from "@/components/pages/posts/Form.vue";
import { ref } from "@vue/reactivity";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
export default {
  components: {
    PostForm,
  },

  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();

    function getPost() {
      // Make a request for a user
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          pageLoading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getPost();

    function updatePost(formData) {
      loading.value = true;
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function (response) {
          // handle success
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post Updated Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { updatePost, loading, post, pageLoading };
  },
};
</script>

<style>
</style>