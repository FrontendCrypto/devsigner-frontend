import axios from 'axios';

const state = {
  loading: true,
  portfolio: [],
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.portfolio = portfolio;
  },
};

const actions = {
  async fetchPortfolio({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/portfolios?populate=*`
      );
      const portfolio = response.data.data;
      commit('SET_PORTFOLIO', portfolio);
      commit('SET_LOADING', true);
    } catch (error) {
      console.error('Error fetching portfolio', error);
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
