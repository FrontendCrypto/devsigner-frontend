<template>
  <PageLoader />
  <AppHeader />
  <router-view></router-view>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import PageLoader from '@/components/PageLoader.vue';
import WebFontLoader from 'webfontloader';

export default {
  components: {
    AppHeader,
    PageLoader
  },
  created() {
    document.body.classList.add('app-loading');
  },
  mounted() {
    // Show loader
    // No scroll
    // Detect fonts loaded
    // Detect app mounted
    // When both true then hide loader and scroll
    WebFontLoader.load({
      google: {
        families: ['Inter:400,600', 'Koulen:400'],
      },
      active: () => {
        // Font loading is complete
        this.$store.commit('app/SET_FONTS_LOADED', true); // Adjust the mutation if needed
      },
    });
  },
};
</script>

<style lang="scss"></style>
