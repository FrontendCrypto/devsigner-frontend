<template>
  <div class="blog">
    <div class="container">
      <div>
        <h1>Cuaderno de bitacora</h1>
      </div>
      <div class="content">
        <Articles list-type="list" :limit="20" />
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '@/containers/Articles.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'BlogView',
  components: {
    Articles,
    Sidebar,
  },
  // mounted() {
  //   this.$gtm.trackView(`Blog`, 'currentPath');
  // },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  gap: 24px;
  height: min-content;
  padding: 0;

  @media (width >=1024px) {
    grid-template-columns: 1fr 300px;
    grid-template-rows: min-content;
  }

  // @media (width >=1024px) {
  //   grid-template-columns: 1fr 300px;
  // }
}

h1 {
  margin-bottom: 32px;
}
</style>
