<template>
    <div class="post-page">
        <div class="PostingDiv">
            <h1>Add Post</h1>
            <label for="title">Body: </label>
            <input name="title" type="title" id="title" required v-model="post.title">
            <label for="picture">Picture URL: </label>
            <input name="picture" type="text" id="text" required v-model="post.picture">
            <!--Reusing signup-button style-->
            <button @click="addPost" class="signup-button">Submit the post</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "AddPost",
    data() {
        return {
            post: { //Give post parameters default value/empty
                title: "",
                picture: "",
            },
        };
    },
    methods: {
        addPost() { //@click addPost method
            var data = {
                title: this.post.title, //give title the data from "title" input
                picture: this.post.picture, //give picture the data from "picture" input
            };
            fetch("http://localhost:3000/home", { //Get the id from homepage
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(data)
            })
            .then((response) => { //afther the post
                console.log(response.data);
                this.$router.push('/home'); //direct to home page
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }
}
</script>