<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import WebFontLoader from 'webfontloader';

export default {
  components: {
    AppHeader,
  },
  mounted() {
    WebFontLoader.load({
      google: {
        families: ['Inter:400,600', 'Koulen:400'],
      },
    });
  },
};
</script>

<style lang="scss"></style>
