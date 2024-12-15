<template>
  <div class="post">
    <p><strong>Date:</strong> {{ post.date }}</p>
    <p>{{ post.content }}</p>
    <img v-if="post.image" :src="post.image" />
    <div class="like-section">
      <button @click="likePost">👍 Like</button>
      <button @click="editPost">⚙️ Edit</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likePost() {
      this.$emit("like", this.post.id);
    },
    editPost() {
      this.$emit()
    }
  },
};
</script>

<style>
.post {
  background: #2e2b2b;
  padding: 20px;
  border-radius: 10px;
  border: 3px solid #739e49;
  color: white;
  margin-bottom: 20px;
}
.like-section {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
button {
  background: #739e49;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: aquamarine;
}
</style>
