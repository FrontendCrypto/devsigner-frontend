<template>
  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">Webs</div>
          <div class="section-subtitle">amigas</div>
          <p>
            Sí, estos son enlaces de afiliado, hay que rascar de donde se pueda.
          </p>
        </div>
        <div class="websites cards-wrapper-3">
          <div
            v-for="affiliate in affiliates"
            class="website card"
            :key="affiliate.id"
          >
            <div class="card-header">
              <img
                loading="lazy"
                :src="
                  getImageUrl(affiliate.attributes.image.data.attributes.url)
                "
              />
            </div>
            <div class="card-content">
              <h4 class="card-title">{{ affiliate.attributes.title }}</h4>
              <div>
                <p>{{ affiliate.attributes.description }}</p>
                <a
                  class="button button--primary button--medium"
                  @click="onClick(affiliate.attributes.title)"
                  :href="affiliate.attributes.url"
                  target="_blank"
                >
                  {{ affiliate.attributes.button }}
                </a>
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
  name: 'Affiliates',
  computed: {
    ...mapState('affiliates', ['affiliates', 'loading']),
    ...mapGetters('affiliates', ['getImageUrl']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('affiliates', ['fetchAffiliates']),
    onClick(id) {
      this.$gtm.trackEvent({
        category: 'Affiliate',
        action: 'click',
        label: 'Affiliate click',
        value: id,
      });
    },
  },
  async mounted() {
    await this.fetchAffiliates();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.website {
  h3 {
    margin-bottom: 24px;
  }
}
</style>
