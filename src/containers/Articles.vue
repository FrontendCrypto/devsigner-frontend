<template>
  <div class="articles" role="region" aria-live="polite">
    <div v-if="loading">Loading...</div>
    <div v-else :class="['cards-wrapper-3', this.listClass]">
      <router-link
        v-for="(article, index) in articles.slice(0, this.limit)"
        :key="article.id"
        :to="{ name: 'article', params: { id: article.id } }"
        class="article card"
        tag="div"
        role="link"
        tabindex="0"
      >
        <div v-if="index === 0" class="article-badge">
          <span>NUEVO</span>
        </div>
        <div class="card-image">
          <img
            loading="lazy"
            :src="getImageUrl(article.attributes.image.data.attributes.url)"
            :alt="article.attributes.title + ' Image'"
          />
        </div>
        <div class="card-content">
          <div class="article-header">
            <span class="card-date">
              {{ this.getFormattedDate(article.attributes.publishedAt) }}
            </span>
            <h4 class="card-title">{{ article.attributes.title }}</h4>
            <p>
              {{ getTruncatedDescription(article.attributes.description) }}
            </p>
          </div>
          <div class="article-categories">
            <span
              class="article-category"
              v-if="article.attributes.categories.data.length"
              v-for="category in article.attributes.categories.data"
              >{{ category.attributes.name }}</span
            >
            <span v-else class="article-category">Sin categoría</span>
          </div>
        </div>
      </router-link>
      <router-link
        to="/blog"
        class="card article-button"
        v-show="this.showArticleButton"
        role="link"
        tabindex="0"
      >
        Ver mas
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Articles',
  props: {
    listType: String,
    limit: Number,
  },
  data() {
    return {
      showArticleButton: true,
    };
  },
  created() {
    if (this.listType === 'list') {
      this.showArticleButton = false;
      this.listClass = 'list';
    } else {
      this.showArticleButton = true;
      this.listClass = 'grid';
    }
  },
  async mounted() {
    await this.fetchArticles();
  },
  computed: {
    ...mapState('articles', ['articles', 'loading']),
    getTruncatedDescription() {
      return this.$store.getters.getTruncatedDescription;
    },
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
    getFormattedDate() {
      return this.$store.getters.getFormattedDate;
    },
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    onClick(eventValue) {
      // this.$gtm.trackEvent({
      //   event: 'interaction',
      //   category: 'Artículo',
      //   action: 'click',
      //   label: 'Click en artículo',
      //   value: eventValue,
      // });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.grid {
  .article {
    .article-header {
      margin-bottom: 24px;
    }
    .card-image {
      display: none;
    }
  }
}
.list {
  .article {
    flex-direction: column;
    height: auto;
    @media (width >=768px) {
      flex-direction: row;
    }

    .card-image {
      background-color: $primary;
      width: 100%;
      height: 200px;
      @media (width >=768px) {
        height: 100%;
        max-width: 196px;
      }
      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
    .card-content {
      padding: 24px 16px;
    }
  }
}
.article-button {
  background-color: $surfacePrimary;
  color: $contentOnPrimary;
  text-decoration: none;
  font-size: 32px;
  font-family: Koulen, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  &:hover {
    background-color: darken($surfacePrimary, 5%);
    .article-badge {
      background-color: darken($primary, 5%);
    }
  }
}

.cards-wrapper-3 {
  grid-auto-rows: auto;
}
.article-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 16px !important;
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

.article {
  text-decoration: none;
  overflow: hidden;
}

.article-badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: $primary;
  font-size: 10px;
  color: $contentOnPrimary;
  padding: 2px 4px;
  transform: rotate(45deg);
  text-align: center;
  top: 7px;
  right: -14px;
  width: 60px;
  transition: 0.2s ease;
}
</style>
