<template>
  <div class="main-page">
    <h1>Home Page</h1>
    <div class="posts">
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @like="likePost"
      />
    </div>
    <nav> <!--Uses same style for simplicity-->
      <button class="reset-likes" @click="resetLikes">Reset Likes</button>
      <button class="reset-likes" @click="goToPost">Make a Post</button>
    </nav>
  </div>
</template>

<!-- The main page fetches posts from Vuex and passes them to the PostComponent. -->

<script>
import { mapGetters, mapActions } from "vuex";
import PostComponent from "../components/PostComponent.vue";

export default {
  components: { PostComponent }, // register PostComponent
  computed: {
    ...mapGetters(["getPosts"]), // Map the Vuex getter to fetch posts
    posts() {
      return this.getPosts; // Access posts via the getter
    },
  },
  methods: {
    ...mapActions(["likePost", "resetAllLikes"]),
    resetLikes() {
      this.resetAllLikes();
    },
  },
};
</script>