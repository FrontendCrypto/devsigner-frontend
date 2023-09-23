<template>
  <div class="blog">
    <div class="container">
      <div class="content">
        <div>
          <h1>Cuaderno de bitacora</h1>
          <Articles list-type="list" />
        </div>
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
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  height: min-content;
  padding: 0;
}

h1 {
  margin-bottom: 32px;
}
</style>
