<template>
  <header class="header">
    <div class="header__content">
      <img loading="eager" alt="Vue logo" src="@/assets/header-logo.svg" />
      <div v-if="loading">Loading@.</div>
      <div v-else>
        <p v-if="homepage && homepage.attributes" class="text-body">
          {{ homepage.attributes.hero.title }}
        </p>
      </div>
    </div>
    <!-- @todo store getImageUrl -->
    <div>
      <img
        v-if="homepage && homepage.attributes"
        alt="Vue logo"
        :src="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
      />
    </div>
    <div>
      <img
        v-if="homepage && homepage.attributes"
        alt="Vue logo"
        :src="getImageUrl(homepage.attributes.imageright.data.attributes.url)"
      />
    </div>
    <!-- <div>
      <img loading="eager" alt="Vue logo" src="@/assets/left.png" />
    </div>
    <div>
      <img loading="eager" alt="Vue logo" src="@/assets/right.png" />
    </div> -->
  </header>
  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div v-if="homepage && homepage.attributes" class="section-header">
          <div class="section-title">{{ homepage.attributes.blog.title1 }}</div>
          <div class="section-subtitle">
            {{ homepage.attributes.blog.title2 }}
          </div>
          <p>{{ homepage.attributes.blog.subtitle }}</p>
        </div>
        <Articles list-type="grid" />
      </div>
    </div>
  </section>

  <Features />

  <section class="section section-banner">
    <div class="banner">
      <div class="banner__content banner__content">
        <div>
          <h3>find me on github</h3>
          <p>@frontendcrypto</p>
        </div>
        <a
          href="https://github.com/FrontendCrypto"
          target="_blank"
          class="button button--primary button--medium"
        >
          Echa un vistazo
        </a>
      </div>
      <img
        loading="lazy"
        class="banner__image position-absolute"
        src="@/assets/cat.png"
        alt=""
      />
    </div>
  </section>
  <Skills />
  <Gallery />
  <Affiliates />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Articles from '@/containers/Articles.vue';
import Skills from '@/containers/Skills.vue';
import Gallery from '@/containers/Gallery.vue';
import Features from '@/containers/Features.vue';
import Affiliates from '@/containers/Affiliates.vue';

export default {
  name: 'HomeView',
  components: {
    Articles,
    Skills,
    Gallery,
    Features,
    Affiliates,
  },
  computed: {
    ...mapState('homepage', ['homepage', 'loading']),
    // ...mapGetters('homepage', ['getImageUrl']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('homepage', ['fetchHomepage']),
  },
  mounted() {
    this.fetchHomepage();
    this.$gtm.trackView(`Inicio`, 'currentPath');
  },
};
</script>

<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.section-subtitle {
  color: $contentPrimary;
}
</styles>
