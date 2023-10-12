import axios from 'axios';

const state = {
  loading: true,
  articles: [],
  sidebarArticles: [],
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ARTICLES(state, articles) {
    state.articles = articles;
    state.sidebarArticles = articles.slice(0, 5);
  },
};

const actions = {
  async fetchArticles({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/articles?populate=*`
      );
      const articles = response.data.data;
      commit('SET_ARTICLES', articles);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      commit('SET_LOADING', false);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
