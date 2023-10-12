<template>
  <section class="section section-portfolio">
    <div class="container">
      <div class="content">
        <div class="portfolio">
          <div class="cards-wrapper-3">
            <router-link
              :to="{ name: 'portfolio', params: { id: portfolio.id } }"
              class="portfolio-item card"
              v-for="(portfolio, index) in portfolio"
              :key="portfolio.id"
            >
            <div class="card-image-wrapper">
                <img class="card-image" src="@/assets/left.png" />
              </div>
              <div class="card-content">
                <h4 class="card-title">ApexTrader</h4>
                <p>Interfaz de trading desarrollada con Vue</p>
              </div>
            </router-link>
            <div class="portfolio-item card">
              <div class="card-image-wrapper">
                <img class="card-image" src="@/assets/left.png" />
              </div>
              <div class="card-content">
                <h4 class="card-title">Nostros</h4>
                <p>
                  Diseño de app para una red social descentralizada sobre el
                  protocolo nostr y con Lightning Network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  },
  methods: {
    ...mapActions('portfolio', ['fetchPortfolio']),
  },
};
</script>
<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.portfolio-item {
  gap: 0;
}
.card-image-wrapper {
  aspect-ratio: 16/9;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</styles>
