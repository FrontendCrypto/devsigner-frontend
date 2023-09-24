import axios from 'axios';

const state = {
  loading: true,
  gallery: [],
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_GALLERY(state, gallery) {
    state.gallery = gallery.slice(0, 9);
  },
};

const actions = {
  async fetchGallery({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/galleries?populate=*`
      );
      const gallery = response.data.data;

      commit('SET_GALLERY', gallery);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  getImageUrl: (state) => (path) => {
    const apiUrl = import.meta.env.VITE_APP_STRAPI_API_URL;
    const host = (import.meta.env.MODE = 'development' ? apiUrl : '');
    const url = `${host}${path}`;
    return url;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
