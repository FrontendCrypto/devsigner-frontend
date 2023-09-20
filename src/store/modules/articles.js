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

const getters = {
  getFormattedDate: (state) => (date) => {
    const publishedDate = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(publishedDate);
    return formattedDate;
  },
  getTruncateDescription: (state) => (description) => {
    if (description && description.length > 140) {
      return description.slice(0, 140) + '...';
    } else {
      return description;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
