const state = {
  loaded: false,
  fontsLoaded: false,
};

const mutations = {
  SET_LOADED(state, loaded) {
    setTimeout(() => {
      state.loaded = loaded;
    }, 1500);
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
