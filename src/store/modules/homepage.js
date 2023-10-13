import axios from 'axios';

const state = {
  homepage: [],
};

const mutations = {
  SET_HOMEPAGE(state, homepage) {
    state.homepage = homepage;
  },
};

const actions = {
  async fetchHomepage({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/homepage?populate=*`
      );
      const homepage = response.data.data;

      commit('SET_HOMEPAGE', homepage);
      // commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching homepage:', error);
      // commit('SET_LOADING', true);
    }
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
