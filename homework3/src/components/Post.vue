<template>
    <div class="post">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <button @click="likePost">Like ({{ likes }})</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'content', 'likes'],
    methods: {
      likePost() {
        this.$emit('like');
      },
    },
  };
  </script>
  