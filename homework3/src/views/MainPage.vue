<template>
    <div class="main-page">
      <h1>Main Page</h1>
      <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
        
          <div>
            <p>{{ post.date }}</p>
            <p>{{ post.content }}</p>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            date: "Nov 24, 2024",
            content: "Esimene",
            likes: 0,
          },
          {
            id: 2,
            content: "Teine",
            date: "Nov 24, 2024",
            likes: 0,
          },
        ],
      };
    },
    
  };
  </script>
  
  
  