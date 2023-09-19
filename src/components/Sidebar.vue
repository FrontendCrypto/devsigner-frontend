<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <h4 class="title">Otros articulos</h4>
      <div v-if="loading">Loading...</div>
      <div v-else class="sidebar-articles">
        <div v-for="article in sidebarArticles.slice(0, 5)" :key="article.id" class="sidebar-article">
          <router-link class="article-link" :to="{ name: 'article', params: { id: article.id } }">
            <span>{{ article.attributes.title }}</span>
            <small v-if="article.attributes.category.data.attributes.name">
              {{ article.attributes.category.data.attributes.name }}
            </small>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapState('articles', ['loading', 'sidebarArticles']),
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.article-link {
  position: relative;
  background-color: $surface2;
  padding: 16px;
  transition: 0.2s ease;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: $contentOnSurface;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: $surface3;
    color: $tertiary;
  }
}

.sidebar-content {
  background-color: $surface1;
  padding: 16px;
  border-radius: 8px;
  height: fit-content;
  width: 100%;

  h4 {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    text-align: center;
  }

  .sidebar-articles {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sidebar-article {
    small {
      font-size: 12px;
      font-weight: 600;
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
