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
          <div v-for="affiliate in affiliates" class="website card">
            <h3>{{ affiliate.attributes.title }}</h3>
            <div>
              {{ affiliate.attributes.description }}
              <a class="button button--primary button--medium" :href="affiliate.attributes.url" target="_blank">
                {{ affiliates.attributes.button }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Affiliates',
  computed: {
    ...mapState('affiliates', ['affiliates', 'loading']),
  },
  methods: {
    ...mapActions('affiliates', ['fetchAffiliates']),
  },
  async mounted() {
    await this.fetchAffiliates();
    console.log('afiliados', this.affiliates)
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.website {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    margin-bottom: 24px;
  }

  a {
    display: inline-flex;
    margin-top: 24px;
  }

  &:hover {
    background-color: darken($surface2, 1%);
  }
}
</style>
