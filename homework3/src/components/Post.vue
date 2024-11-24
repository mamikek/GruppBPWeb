<template>
    <div class="post">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <img v-if="showImage" :src={{ image }} alt="Post Image"/>
      <button @click="likePost">Like ({{ likes }})</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'content','image', 'likes'],
    methods: {
      likePost() {
        this.$emit('like');
      },
    },
  };
  </script>
  