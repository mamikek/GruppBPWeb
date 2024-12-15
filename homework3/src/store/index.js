import { createStore } from 'vuex';

export default createStore({
  state: { /*
    posts: [
      {
        id: 1,
        content: 'Postituste testimine on tore',
        date: 'Nov 24, 2024',
        likes: 0,
        image: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww",
      },
    ],*/
  },

  mutations: { /*
    // Mutation to increment likes for a specific post by its ID.
    incrementLike(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
    // Mutation to reset likes for all posts to zero.
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },*/
  },
  getters: { /*
    // Getter to provide posts to components.
    getPosts: (state) => state.posts, */
  },
  actions: { /*
    // Action to trigger the mutation for liking a post.
    likePost({ commit }, postId) {
      commit('incrementLike', postId);
    },
    // Action to trigger the mutation for resetting all likes.
    resetAllLikes({ commit }) {
      commit('resetLikes');
    }, */
  },
});
