<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{ name: 'postId', params: { id: post.id } }">{{
        post.title
      }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username : {{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    
  },
};
</script>

<style>
</style>