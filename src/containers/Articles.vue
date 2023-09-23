<template>
  <div class="articles">

    <div v-if="loading">Loading...</div>
    <div v-else :class="['cards-wrapper-3', this.listClass]">
      <router-link @click="onClick(article.attributes.title)" :to="{ name: 'article', params: { id: article.id } }"
        class="article card" v-for="article in articles.slice(0, 5)" :key="article.id">
        <div class="article-content">
          <span class="article-date">
            {{ this.getFormattedDate(article.attributes.publishedAt) }}
          </span>
          <h3 class="article-title">{{ article.attributes.title }}</h3>
          <p>
            {{ getTruncateDescription(article.attributes.description) }}
          </p>
        </div>

        <div>
          <div class="article-categories">
            <span class="article-category" v-if="article.attributes.categories.data.length"
              v-for="category in article.attributes.categories.data">{{ category.attributes.name }}</span>
            <span v-else class="article-category">Sin categoría</span>
          </div>
        </div>
      </router-link>
      <router-link to="/blog" class="card article-button" v-show="this.showArticleButton">
        Ver mas
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Articles',
  props: {
    listType: String
  },
  data() {
    return {
      showArticleButton: true,
    }
  },
  created() {
    if (this.listType === 'list') {
      this.showArticleButton = false;
      this.listClass = 'list'
    } else {
      this.showArticleButton = true;
      this.listClass = ''
    }
  },
  async mounted() {
    await this.fetchArticles();

  },
  computed: {
    ...mapState('articles', ['articles', 'loading']),
    ...mapGetters('articles', ['getFormattedDate', 'getTruncateDescription']),
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    onClick(eventValue) {
      this.$gtm.trackEvent({
        event: 'interaction',
        category: 'Artículo',
        action: 'click',
        label: 'CLick en artículo',
        value: eventValue,
        noninteraction: false, // Optional
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';


.article-date {
  font-size: 12px;
  color: $neutral;
  margin-bottom: 8px;
}

.article-button {
  background-color: $surfacePrimary;
  color: $contentOnPrimary;
  text-decoration: none;
  font-size: 32px;
  font-family: Koulen;
  font-weight: 400;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darken($surfacePrimary, 5%);
  }
}

.article-categories {
  display: flex;
  gap: 8px;
}

.article-category {
  font-size: 12px;
  padding: 4px 8px;
  height: 24px;
  border-radius: 12px;
  background-color: $surface3;
  display: inline-flex;
  align-items: center;
  color: $contentOnSurface;
}

.articles-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  color: $contentOnSurface;
}

.article-title {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.article {
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;

  &:hover {
    background-color: darken($surface2, 1%);
  }
}
</style>
