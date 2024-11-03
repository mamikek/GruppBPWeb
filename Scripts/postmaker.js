//For JSON server we choose Tartu University Adalberg file server.
//works on local files.

//PLEASE USE THE LOCAL INSTEAD OF LINK BECAUSE OF DAILY REQUESTS (./Test.json or other)
//LINK: https://jsonhost.com/json/e61f2b6a8d00a02fdb3a4d181ba10b0d

window.onload = function() {
    fetch("./posts.json")
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                
                //Needs for
                for (const singleInfo of json) {
                    //Give constant and create text
                    const Post = document.createElement("div");
                    Post.classList.add("Post");
                    const PostHead = document.createElement("div");
                    PostHead.classList.add("PostHead");                    
                    const MiniAvatar = document.createElement("div");
                    MiniAvatar.classList.add("AvatarMini")
                    const plot = document.createElement("div");
                    plot.classList.add("Plot");

                    const ImageAvatar = document.createElement("img");

                    const MainText = document.createElement("h2");
                    MainText.classList.add("Anytext")

                    const text = document.createElement("p");

                    const PostImage = document.createElement("img");
                    PostImage.classList.add("Picture")

                    MainText.innerHTML = `${singleInfo.poster_name} ${singleInfo.creation_date} ${singleInfo.creation_time}`
                    text.innerHTML = singleInfo.post_text;
                    PostImage.innerHTML = singleInfo.post_media_path;
                    ImageAvatar.innerHTML = singleInfo.poster_avatar_path;
                    
                    
                    MiniAvatar.appendChild(ImageAvatar);
                    PostHead.appendChild(MiniAvatar);
                    PostHead.appendChild(MainText);
                    Post.appendChild(PostHead);
                    Post.appendChild(PostImage);
                    Post.appendChild(text)
                    Post.appendChild(plot);
                    
                    //Get the html where you want to place the text
                    const Flex = document.getElementById("PostsPlace")
                    
                    //add last things
                    Flex.appendChild(Post);

                }
            }
        );
}