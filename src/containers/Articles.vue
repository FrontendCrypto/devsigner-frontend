<template>
  <div>
    <div class="articles-content">
      <div v-if="loading">Loading...</div>
      <div class="articles cards-wrapper-3" v-else>
        <div class="article card" v-for="article in articles" :key="article.id">
          <div class="article-content">
            <h3 class="article-title">{{ article.attributes.title }}</h3>
            <p>
              {{ getTruncateDescription(article.attributes.description) }}
            </p>
          </div>
          <!-- <img
            :src="article.attributes.image.data.attributes.url"
            alt="Article Image"
          /> -->
          <div class="article-meta">
            <div class="meta-item">
              <span class="meta-title">Fecha y autor</span>
              <span class="meta-content">{{
                this.getFormattedDate(article.attributes.publishedAt)
              }}</span>
            </div>

            <div class="meta-item">
              <span class="meta-title">Categorías</span>
              <!-- @todo implement get multiple categories -->
              <span class="meta-content">{{
                article.attributes.category.data.attributes.name
              }}</span>
            </div>
            <router-link :to="{ name: 'article', params: { id: article.id } }" class="card-link">
              Leer más
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Articles',
  async mounted() {
    await this.fetchArticles();
  },
  computed: {
    ...mapState('articles', ['articles', 'loading']),
    ...mapGetters('articles', ['getFormattedDate', 'getTruncateDescription']),
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
  },
};

</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.articles-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.article-meta {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-title,
.meta-content {
  font-size: 12px;
}

.meta-title {
  font-weight: 600;
}

.meta-content {
  font-weight: 400;
}

.article-title {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.article {
  &:hover {
    background-color: darken($surface2, 1%);
  }
}
</style>
