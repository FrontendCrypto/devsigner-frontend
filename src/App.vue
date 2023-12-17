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
    PageLoader,
  },
  created() {
    document.body.classList.add('app-loading');
  },
  mounted() {
    WebFontLoader.load({
      google: {
        families: ['Inter:400,600', 'SpaceMono: 400,700'],
      },
      active: () => {
        this.$store.commit('app/SET_FONTS_LOADED', true);
      },
    });
  },
};
</script>

<style lang="scss"></style>
