import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        content: 'Postituste testimine on tore',
        date: 'Nov 24, 2024',
        likes: 0,
        image: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww",
      },
      {
        id: 2,
        content: 'Why this work?',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 3,
        content: 'Share some love ❤️!',
        date: 'Nov 24, 2024',
        likes: 0,
        image: 'https://img.freepik.com/free-vector/hand-drawn-heart-drawing-illustration_23-2151294357.jpg',
      },
      {
        id: 4,
        content: 'Stop writing in this channel.',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 5,
        content: 'Noot noot!',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 6,
        content: 'Don’t spam this channel!',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 7,
        content: 'The night sky is beautiful',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 8,
        content: 'The food of all students',
        date: 'Nov 24, 2024',
        likes: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1b0SVFndeVze7JfeDUGSAHopzJQ7atUzWQ&s',
      },
      {
        id: 9,
        content: 'Cat taste good',
        date: 'Nov 24, 2024',
        likes: 0,
        image: null,
      },
      {
        id: 10,
        content: 'The money is worthless.....',
        date: 'Nov 24, 2024',
        likes: 0,
        image: 'https://winthropwealth.com/wp-content/uploads/2024/08/US-Debt-Levels.png',
      },
    ],
  },
  mutations: {
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
    },
  },
  getters: {
    // Getter to provide posts to components.
    getPosts: (state) => state.posts,
  },
  actions: {
    // Action to trigger the mutation for liking a post.
    likePost({ commit }, postId) {
      commit('incrementLike', postId);
    },
    // Action to trigger the mutation for resetting all likes.
    resetAllLikes({ commit }) {
      commit('resetLikes');
    },
  },
});
