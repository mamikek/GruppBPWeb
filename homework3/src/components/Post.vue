<template>
    <div class="post">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'content', 'likes'],
  };
  </script>
  