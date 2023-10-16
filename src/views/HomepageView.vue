<template>
  <header class="header">
    <div class="header__content">
      <div class="heading">
        <!-- <h1 class="text-body">Diseño y desarrollo de producto digital</h1> -->
        <h1 v-if="homepage.attributes" class="text-body">
          {{ homepage.attributes.hero.title }}
        </h1>
      </div>
      <div class="header-logo">
        <svg width="208" height="67" fill="none">
          <rect width="207.585" height="66.406" fill="#292929" rx="8" />
          <path
            fill="#F9E9CB"
            d="m24.836 49.89-8.602.048c-.156 0-.234-.078-.234-.235l.094-32.976c0-.125.062-.188.187-.188l8.977-.047c1.781-.047 3.39.36 4.828 1.22a9.652 9.652 0 0 1 3.469 3.491c.875 1.454 1.312 3.063 1.312 4.829v13.78c0 1.845-.445 3.532-1.336 5.063a10.434 10.434 0 0 1-3.61 3.633c-1.5.89-3.194 1.352-5.085 1.383Zm.422-27.655-3.352.047-.047 21.75h2.977c1.187 0 2.187-.415 3-1.243.812-.828 1.219-1.82 1.219-2.976V25.985c0-1.016-.375-1.899-1.125-2.649-.75-.765-1.64-1.133-2.672-1.101ZM54.344 49.938H38.828c-.125 0-.187-.078-.187-.235l.047-32.976c0-.125.062-.188.187-.188h15.422c.125 0 .187.078.187.235v5.367c0 .125-.062.187-.187.187h-9.844v7.5h9.844c.125 0 .187.063.187.188l.047 5.437c0 .125-.062.188-.187.188h-9.89v8.39h9.89c.125 0 .187.079.187.235v5.484c0 .125-.062.188-.187.188ZM69.016 49.938h-5.813c-.14 0-.219-.078-.234-.235l-6.633-32.976c-.031-.125.031-.188.187-.188h5.438c.125 0 .203.063.234.188l3.938 21.984 3.844-21.984c.03-.125.109-.188.234-.188h5.367c.172 0 .234.063.188.188L69.25 49.703c-.016.157-.094.235-.234.235Z"
          />
          <path
            fill="#AF232B"
            d="M85.18 50.406a8.892 8.892 0 0 1-4.712-1.312 10.032 10.032 0 0 1-3.422-3.492c-.844-1.47-1.265-3.079-1.265-4.829V38.57c0-.172.078-.258.234-.258h5.39c.126 0 .188.086.188.258v2.203c0 1.047.352 1.954 1.055 2.72.703.75 1.547 1.124 2.531 1.124 1 0 1.852-.383 2.555-1.148.703-.782 1.055-1.68 1.055-2.696 0-1.171-.766-2.195-2.297-3.07-.25-.156-.579-.344-.985-.562-.39-.235-.86-.5-1.406-.797l-1.594-.867a82.368 82.368 0 0 0-1.5-.844c-1.75-1.031-3.055-2.32-3.914-3.867-.844-1.563-1.266-3.313-1.266-5.25 0-1.782.438-3.391 1.313-4.828a9.824 9.824 0 0 1 3.422-3.375 8.89 8.89 0 0 1 4.617-1.266c1.703 0 3.266.422 4.688 1.265 1.421.86 2.554 2 3.398 3.422.86 1.422 1.29 3.016 1.29 4.782v3.937c0 .125-.063.188-.188.188h-5.391c-.125 0-.188-.063-.188-.188l-.046-3.937c0-1.125-.352-2.04-1.055-2.743-.703-.703-1.54-1.054-2.508-1.054-.984 0-1.828.375-2.531 1.125a3.774 3.774 0 0 0-1.055 2.672c0 1.047.219 1.922.656 2.625.454.703 1.274 1.375 2.461 2.015.125.063.414.219.868.469.453.25.953.531 1.5.844.562.297 1.07.57 1.523.82l.82.422c1.594.89 2.852 1.984 3.774 3.281.937 1.297 1.406 2.89 1.406 4.781 0 1.829-.422 3.47-1.266 4.922a9.641 9.641 0 0 1-3.421 3.446c-1.422.843-3 1.265-4.735 1.265ZM103.601 49.938h-5.438c-.156 0-.234-.079-.234-.235l.047-32.976c0-.125.063-.188.188-.188h5.39c.125 0 .188.063.188.188l.046 32.976c0 .156-.062.234-.187.234ZM116.796 50.406c-1.734 0-3.297-.43-4.687-1.289a9.91 9.91 0 0 1-3.399-3.469c-.843-1.453-1.265-3.078-1.265-4.875v-15.21c0-1.75.429-3.344 1.289-4.782a9.643 9.643 0 0 1 3.398-3.468A8.732 8.732 0 0 1 116.796 16c1.766 0 3.36.422 4.782 1.266a9.526 9.526 0 0 1 3.375 3.445c.843 1.437 1.265 3.055 1.265 4.852v2.203c0 .125-.078.187-.234.187h-5.391c-.125 0-.187-.062-.187-.187v-1.828c0-1.22-.344-2.227-1.032-3.024-.687-.797-1.546-1.195-2.578-1.195-.922 0-1.742.383-2.461 1.148-.718.766-1.078 1.664-1.078 2.695v15.211c0 1.047.352 1.954 1.055 2.72.703.75 1.531 1.124 2.484 1.124 1.032 0 1.891-.367 2.578-1.101.688-.75 1.032-1.664 1.032-2.743v-2.367h-3.352c-.172 0-.258-.078-.258-.234v-5.367c0-.157.086-.235.258-.235h8.977c.125 0 .187.078.187.235v7.968c0 1.797-.422 3.422-1.265 4.875a9.91 9.91 0 0 1-3.399 3.47c-1.406.859-2.992 1.288-4.758 1.288ZM134.843 49.938h-4.805c-.25 0-.375-.11-.375-.329l-.046-32.695c0-.25.125-.375.375-.375h4.336l8.109 18.914-.234-18.539c0-.25.14-.375.421-.375h4.758c.188 0 .281.125.281.375l.047 32.742c0 .188-.078.282-.234.282h-4.219l-8.32-17.672.351 17.297c0 .25-.148.374-.445.374ZM167.585 49.938H152.07c-.125 0-.188-.079-.188-.235l.047-32.976c0-.125.063-.188.188-.188h15.421c.125 0 .188.078.188.234v5.368c0 .125-.063.187-.188.187h-9.843v7.5h9.843c.125 0 .188.063.188.188l.047 5.437c0 .125-.063.188-.188.188h-9.89v8.39h9.89c.125 0 .188.078.188.235v5.484c0 .125-.063.188-.188.188ZM177.663 49.938h-5.437c-.125 0-.188-.079-.188-.235l.094-32.976c0-.125.063-.188.188-.188h9.703c1.734 0 3.328.422 4.781 1.266a9.649 9.649 0 0 1 3.469 3.398c.875 1.422 1.312 3.031 1.312 4.828 0 1.172-.179 2.235-.539 3.188-.359.953-.781 1.758-1.265 2.414-.469.656-.899 1.14-1.289 1.453 1.734 1.922 2.601 4.18 2.601 6.773l.047 9.844c0 .156-.078.234-.234.234h-5.438c-.125 0-.187-.046-.187-.14v-9.938c0-1.156-.407-2.156-1.219-3-.813-.843-1.813-1.265-3-1.265h-3.164l-.047 14.11c0 .155-.063.233-.188.233Zm4.36-27.657h-4.125v7.547h4.125c.984 0 1.859-.367 2.625-1.101.781-.735 1.172-1.633 1.172-2.696 0-1.015-.375-1.89-1.125-2.625-.75-.75-1.641-1.125-2.672-1.125Z"
          />
        </svg>
      </div>
    </div>
    <div v-if="homepage.attributes">
      <link
        rel="preload"
        as="image"
        :href="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
        imagesizes="932px"
      />
      <img
        ref="leftImage"
        class="header-image fade-in header-image--left"
        fetchpriority="high"
        loading="eager"
        :alt="homepage.attributes.imageleft.data.attributes.alternativeText"
        :src="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
        width="932"
        height="640"
        @load="imageLoaded('left')"
      />
    </div>
    <div v-if="homepage.attributes">
      <link
        rel="preload"
        as="image"
        :href="getImageUrl(homepage.attributes.imageright.data.attributes.url)"
        imagesizes="932px"
      />
      <img
        ref="rightImage"
        class="header-image fade-in header-image--right"
        fetchpriority="high"
        loading="eager"
        :alt="homepage.attributes.imageleft.data.attributes.alternativeText"
        :src="getImageUrl(homepage.attributes.imageright.data.attributes.url)"
        width="932"
        height="640"
        @load="imageLoaded('right')"
      />
    </div>
  </header>

  <Features />

  <section class="section section-portfolio">
    <div class="container">
      <Portfolio />
    </div>
  </section>

  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div v-if="homepage.attributes" class="section-header">
          <h3>
            <span class="section-title">{{
              homepage.attributes.blog.title1
            }}</span>
            <span class="section-subtitle">
              {{ homepage.attributes.blog.title2 }}
            </span>
          </h3>
        </div>
        <Articles list-type="grid" :limit="5" />
      </div>
    </div>
  </section>

  <section class="section section-banner">
    <div class="banner" v-if="homepage.attributes">
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
        width="1864"
        height="300"
      />
    </div>
  </section>
  <Skills />
  <Gallery />
  <Affiliates />
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    imageLoaded(position) {
      const imageElement = this.$refs[`${position}Image`];
      if (imageElement) {
        imageElement.classList.add('loaded');
      }
    },
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

.header {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 450px;
  position: relative;
  background-color: $tertiary;
  @media (width >=1024px) {
    grid-template-rows: 540px;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 64px;
    z-index: 2;
    .header-logo,
    .heading {
      max-width: 380px;
    }
    .heading {
      h1,
      h2 {
        font-family: 'Space Mono', monospace;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        @media (width >=768px) {
          font-size: 32px;
        }
      }
      h2 {
        font-size: 16px;
      }
    }
  }

  .header-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    &--left {
      object-position: center right;
    }
    &--right {
      object-position: center left;
    }
  }
}
</styles>
