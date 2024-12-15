<template>
  <div class="main-page">
    <h1>Home Page</h1>

    <nav>
      <button class="add-post-button" @click="goToPost">Add Post</button>
      <button class="delete-posts-button" @click="deleteAllPosts">Delete all posts</button>
      <button class="logout-button" @click="logout">Logout</button>
    </nav>
    


    <div class="posts">
      <!-- Iterate through posts and pass them to PostComponent -->
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @like="likePost"
      />
    </div>
    

  </div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue";

export default {
  components: { PostComponent },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    resetLikes() {
      this.posts.forEach((post) => {
        post.likes = 0;
      });
    },
    likePost(postId) {
      const post = this.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
    goToPost() {
      this.$router.push("/post");
    },
    deleteAllPosts() {
      if (confirm("Are you sure you want to delete all posts? This action cannot be undone.")) {
        fetch("http://localhost:3000/home", {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              this.posts = []; // Clear posts locally
              alert("All posts have been deleted.");
            } else {
              throw new Error("Failed to delete posts.");
            }
          })
          .catch((error) => {
            console.error("Error deleting posts:", error);
            alert("An error occurred while deleting posts.");
          });
      }
    },
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
    fetchPosts() {
      fetch("http://localhost:3000/home")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

