<template>
  <div class="main-page">
    <h1>Home Page</h1>
    <div class="posts">
      <!-- Iterate through posts and pass them to PostComponent -->
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @like="likePost"
      />
    </div>
    
    <nav>
      <button class="reset-likes" @click="resetLikes">Reset Likes</button>
      <button class="add-post" @click="goToPost">Add Post</button>
    </nav>
    
    <button class="logout-button" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostComponent from "../components/PostComponent.vue";

export default {
  components: { PostComponent }, // Register PostComponent
  computed: {
    ...mapGetters(["getPosts"]), // Map Vuex getter to fetch posts
    posts() {
      return this.getPosts; // Access posts via Vuex store
    },
  },
  methods: {
    ...mapActions(["likePost", "resetAllLikes"]), // Map Vuex actions
    resetLikes() {
      this.resetAllLikes(); // Trigger Vuex mutation to reset likes
    },
    goToPost() {
      this.$router.push("/post"); // Navigate to Add Post page
    },
    logout() {
      localStorage.removeItem("jwt"); // Remove JWT from storage
      this.$router.push("/"); // Redirect to LoginPage
    },
  },
};
</script>

