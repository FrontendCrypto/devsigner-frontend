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
    <div>
      <img
        class="header-image header-image--left"
        v-if="homepage && homepage.attributes"
        :alt="homepage.attributes.imageleft.data.attributes.alternativeText"
        :src="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
      />
    </div>
    <div>
      <img
        class="header-image header-image--right"
        v-if="homepage && homepage.attributes"
        :alt="homepage.attributes.imageleft.data.attributes.alternativeText"
        :src="getImageUrl(homepage.attributes.imageright.data.attributes.url)"
      />
    </div>
  </header>

  <Features />

  <section class="section section-portfolio">
    <div class="container">
      <div class="content">
        <div v-if="homepage && homepage.attributes" class="section-header">
          <h3>
            <span class="section-title">{{
              homepage.attributes.portfolio.title
            }}</span>
          </h3>
        </div>
        <Portfolio />
      </div>
    </div>
  </section>

  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div v-if="homepage && homepage.attributes" class="section-header">
          <h3>
            <span class="section-title">{{
              homepage.attributes.blog.title1
            }}</span>
            <span class="section-subtitle">
              {{ homepage.attributes.blog.title2 }}
            </span>
          </h3>
          <p>{{ homepage.attributes.blog.subtitle }}</p>
        </div>
        <Articles list-type="grid" :limit="5" />
      </div>
    </div>
  </section>

  <section class="section section-banner">
    <div class="banner" v-if="homepage && homepage.attributes">
      <div class="banner__content banner__content">
        <div>
          <h3>{{ homepage.attributes.github.title }}</h3>
          <p>{{ homepage.attributes.github.subtitle }}</p>
        </div>
        <a
          :href="homepage.attributes.github.buttonUrl"
          target="_blank"
          class="button button--primary button--medium"
        >
          {{ homepage.attributes.github.buttonText }}
        </a>
      </div>
      <img
        loading="lazy"
        class="banner__image position-absolute"
        src="@/assets/images/homepage/github-banner-section-image.avif"
        alt="GitHub banner image"
      />
    </div>
  </section>
  <Skills />
  <Gallery />
  <Affiliates />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';
import Articles from '@/containers/Articles.vue';
import Skills from '@/containers/Skills.vue';
import Portfolio from '@/containers/Portfolio.vue';

export default {
  name: 'HomeView',
  components: {
    Articles,
    Skills: defineAsyncComponent(() => import('@/containers/Skills.vue')),
    Gallery: defineAsyncComponent(() => import('@/containers/Gallery.vue')),
    Features: defineAsyncComponent(() => import('@/containers/Features.vue')),
    Affiliates: defineAsyncComponent(() =>
      import('@/containers/Affiliates.vue')
    ),
    Portfolio: defineAsyncComponent(() => import('@/containers/Portfolio.vue')),
  },
  computed: {
    ...mapState('homepage', ['homepage', 'loading']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('homepage', ['fetchHomepage']),
  },
  mounted() {
    this.fetchHomepage();
  },
};
</script>

<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.section-subtitle {
  color: $contentPrimary;
}
</styles>
