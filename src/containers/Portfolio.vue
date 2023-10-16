<template>
  <div class="portfolio" role="region" aria-labelledby="portfolio-section-heading">
    <div class="content">
      <div class="section-header">
      <h3 id="portfolio-section-heading">
        <span class="section-title">PROYECTOS</span>
      </h3>
    </div>
    <div class="cards-wrapper-3">
      <router-link :to="{ name: 'portfolio', params: { id: portfolio.id } }" class="portfolio-item card"
        v-for="(portfolio, index) in portfolio" :key="portfolio.id">
        <div class="card-image-wrapper">
          <img loading="lazy" class="card-image" :src="getImageUrl(portfolio.attributes.image.data.attributes.url)"
            :alt="portfolio.attributes.image.data.attributes.alternativeText" />
        </div>
        <div class="card-content">
          <h4 class="card-title">{{ portfolio.attributes.title }}</h4>
          <p>{{ portfolio.attributes.description }}</p>
        </div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Portfolio',
  async mounted() {
    await this.fetchPortfolio();
  },
  computed: {
    ...mapState('portfolio', ['portfolio', 'loading']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('portfolio', ['fetchPortfolio']),
  },
};
</script>
<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.portfolio-item {
  text-decoration: none;
}

.portfolio-item {
  gap: 0;
}

.card-image-wrapper {
  aspect-ratio: 16/9;
  width: 100%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</styles>
