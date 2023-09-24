import axios from 'axios';

const state = {
  affiliates: [],
  loading: true,
};

const mutations = {
  SET_AFFILIATES(state, affiliates) {
    state.affiliates = affiliates;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};

const actions = {
  async fetchAffiliates({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/affiliates?populate=*`
      );
      const affiliates = response.data.data;
      commit('SET_AFFILIATES', affiliates);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching affiliates:', error);
      commit('SET_LOADING', true);
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
