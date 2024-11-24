import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      { id: 1, title: 'Post 1', content: 'Content for post 1', likes: 0 },
      { id: 2, title: 'Post 2', content: 'Content for post 2', likes: 0 },
      
    ],
  },
  
});
