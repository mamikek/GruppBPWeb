<template>
    <div class="post-page">
        <div class="PostingDiv">
            <h1>Edit the post</h1>
            <label for="title">Body: </label>
            <input name="title" type="title" id="title" required v-model="post.title">
            <label for="picture">Picture URL: </label>
            <input name="picture" type="text" id="text" required v-model="post.picture">
            <!--Reusing signup-button style-->
            <button @click="editPost" class="signup-button">Edit the post</button>
            <button @click="deletePost" class="signup-button">Delete the post</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "EditPage",
  data() {
    return {
      post: {
        id: "",
        title: "",
        picture: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/home/${id}`) //get the id
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/home/${this.post.id}`, { //use the post id to edit it
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => { //After the edit direct back to home
          console.log(response.data);
          this.$router.push("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      fetch(`http://localhost:3000/home/${this.post.id}`, { //Get the post id
        method: "DELETE", //Delete from database
        headers: { "Content-Type": "application/json" }, //update
      })
        .then((response) => { //ather the action
          console.log(response.data);
          this.$router.push("/home"); //direct back to home
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>