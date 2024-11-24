<template>
    <div class="main-page">
      <h1>Home Page</h1>
      <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
        
          <div>
            <p>{{ post.date }}</p>
            <p>{{ post.content }}</p>
          </div>
          <div class="like-section">
          <button @click="likePost(post.id)">👍 Like</button>
          <span>{{ post.likes }} likes</span>
        </div>
          
        </div>
      </div>
      <button class="reset-likes" @click="resetLikes">Reset Likes</button>
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
    methods: {
    likePost(postId) {
      const post = this.posts.find((p) => p.id === postId);
      if (post) {
        post.likes++;
      }
    },
    resetLikes() {
      this.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
    
  };
  </script>
  
  
  