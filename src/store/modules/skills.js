import axios from 'axios';

const state = {
  skills: [],
  loading: true,
};

const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};

const actions = {
  async fetchSkills({ commit }) {
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_STRAPI_API_URL + '/api/skills?populate=*'
      );
      const skills = response.data.data;
      commit('SET_SKILLS', skills);
      commit('SET_LOADING', false);
    } catch (error) {
      console.error('Error fetching skills:', error);
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  filteredSkills: (state) => (category) => {
    return state.skills.filter(
      (skill) =>
        skill.attributes.skill_category.data.attributes.skill_category ===
        category
    );
  },
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
