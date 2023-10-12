<template>
  <div class="blog-entry">
    <div class="container portfolio-container">
      <div v-if="hasPortfolioData" class="content">
        <article class="portfolio">
          <div id="editor" class="editor" v-html="parsedContent"></div>
          <div class="gallery">
            <div
              v-for="image in portfolio.attributes.gallery.data"
              class="gallery-item"
            >
              <img
                class="gallery-item-image"
                :src="getImageUrl(image.attributes.url)"
              />
            </div>
          </div>
          <hr class="separator" />
          <p class="published-at">
            Publicado el {{ portfolio.attributes.publishedAt }} por Pablo
            Carballeda
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MarkdownIt from 'markdown-it';

export default {
  name: 'PortfolioView',
  data() {
    return {
      loading: true,
      portfolio: {},
      baseUrl: import.meta.env.VITE_APP_STRAPI_API_URL,
      md: new MarkdownIt(),
      parsedContent: '',
    };
  },
  computed: {
    hasPortfolioData() {
      return (
        this.portfolio &&
        this.portfolio.attributes &&
        this.portfolio.attributes.title
      );
    },
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  mounted() {
    const portfolioId = this.$route.params.id;
    const apiUrl = `${this.baseUrl}/api/portfolios/${portfolioId}?populate=*`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.portfolio = response.data.data;
        this.$gtm.trackView(
          `Artículo - ${this.portfolio.attributes.title}`,
          'currentPath'
        );
        this.parsedContent = this.md.render(this.portfolio.attributes.content);
      })
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 48px 0;
  gap: 8px;

  @media (width >=768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width >=1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.gallery-item {
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
}

.gallery-item-image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
