import axios from 'axios';

const state = {
  features: [],
  loading: true,
};

const mutations = {
  SET_FEATURES(state, features) {
    state.features = features;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  TOGGLE_DESCRIPTION(state, index) {
    state.features.forEach((feature, i) => {
      if (i !== index) {
        feature.expanded = false;
      }
    });

    state.features[index].expanded = !state.features[index].expanded;
  },
};

const actions = {
  async fetchFeatures({ commit }) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/features?populate=*`
      );
      const features = response.data.data;
      commit('SET_FEATURES', features);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching features:', error);
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  filteredDesignFeatures: (state) => {
    return state.features.filter(
      (feature) =>
        feature.attributes.feature_category.data.attributes.feature_category ===
        'design'
    );
  },
  filteredDevelopFeatures: (state) => {
    return state.features.filter(
      (feature) =>
        feature.attributes.feature_category.data.attributes.feature_category ===
        'develop'
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
