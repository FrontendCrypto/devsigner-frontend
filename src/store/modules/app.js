const state = {
  loaded: false,
  fontsLoaded: false,
};

const mutations = {
  SET_LOADED(state, loaded) {
    state.loaded = loaded;
  },
  SET_FONTS_LOADED(state, loaded) {
    state.fontsLoaded = loaded;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
};
