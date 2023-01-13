<template>
  <div class="col-md-8">
    <h2 class="mb-5">Create Post</h2>
    <PostForm
      @formData="createPost"
      :button-loading="loading"
      button-text="Create Post"
    />
  </div>
</template>

<script>
import PostForm from "@/components/pages/posts/Form.vue";
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "@vue/reactivity";

export default {
  components: {
    PostForm,
  },

  setup() {
    const loading = ref(false);

    function createPost(formData) {
      loading.value = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function (response) {
          // handle success
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post Created Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { createPost, loading };
  },
};
</script>

<style>
</style>