<template>
    <div class="post-page">
        <div class="PostingDiv" @submit.prevent="checkPost">
            <h1>Add Post</h1>
            <label for="PostBody">Body: </label>
            <input type="text" id="text" v-model="text" placeholder="A Post Body" >
            <!--Reusing signup-button style-->
            <button class="signup-button">Submit the post</button>
        </div>
    </div>
</template>

<script>
</script>