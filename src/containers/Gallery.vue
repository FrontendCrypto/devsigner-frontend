<template>
  <section
    class="section section-features section-features--develop"
    role="region"
    aria-labelledby="section-heading"
  >
    <div class="container">
      <div class="content">
        <div class="section-header">
          <h3 id="section-heading">
            <span class="section-title">MACHINE LEARNING:</span>
            <span class="section-subtitle">HERRAMIENTA Y RETO</span>
          </h3>
        </div>
        <div class="section-content">
          <div class="sidebar">
            <p>
              El machine learning es una herramienta que puede automatizar
              tareas repetitivas y liberarme para centrarme en la creatividad e
              innovación.
            </p>

            <p>
              Esta tecnología me permite dedicar más tiempo a explorar nuevas
              ideas, experimentar con diseños y mucho más. En breve me gustaría
              poder profundizar en este campo a nivel técnico, creo que sería un
              gran reto personal.
            </p>

            <p>
              Esta herramienta no reemplaza mi experiencia y juicio, sino que
              complementa mis habilidades y me ayuda a crear productos de mayor
              calidad.
            </p>

            <p>
              No temo perder mi trabajo por culpa de ella. Al contrario, creo
              que puede potenciar mi trabajo y ayudarme a ser más productivo y
              creativo.
            </p>
          </div>
          <div>
            <div class="items-content">
              <div v-if="loading" class="gallery-items" role="list">
                <div
                  class="gallery-loading-item"
                  v-for="item in 9"
                  role="listitem"
                  aria-busy="true"
                >
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="gallery-items" v-else role="list">
                <div
                  class="gallery-item"
                  v-for="item in gallery"
                  :key="item.id"
                  role="listitem"
                >
                  <img
                    loading="lazy"
                    class="gallery-image"
                    :alt="item.attributes.prompt"
                    :title="item.attributes.title"
                    :src="
                      getImageUrl(
                        item.attributes.image_thumbail.data.attributes.url
                      )
                    "
                    width="256"
                    height="256"
                    aria-labelledby="gallery-item-title"
                  />
                  <div class="gallery-item-overlay">
                    <h3 id="gallery-item-title">{{ item.attributes.title }}</h3>
                    <router-link
                      class="gallery-item-link"
                      :to="{ name: 'gallery', params: { id: item.id } }"
                      tabindex="0"
                      role="link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Gallery',
  computed: {
    ...mapState('gallery', ['loading', 'gallery']),
    ...mapGetters('gallery', ['getImageUrl']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('gallery', ['fetchGallery']),
  },
  mounted() {
    this.fetchGallery();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.gallery-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  @media (width >=480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width >=768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width >=1080px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (width >=1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &:hover {
    .gallery-image {
      filter: grayscale(0.5);
    }
  }
}

.gallery-loading-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item {
  position: relative;
  user-select: none;

  &:hover {
    .gallery-item-overlay {
      opacity: 1;
    }

    .gallery-image {
      filter: grayscale(0);
    }
  }
}

.gallery-item-overlay {
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  will-change: opacity;
  background-color: transparent;
  color: $contentOnSurface;
  text-align: center;
  background-color: $overlay;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.gallery-item-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-image {
  aspect-ratio: 1/1;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
  transition: 0.3s ease-in-out;
  will-change: filter;
}

.items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.section-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;

  @media (width >=1200px) {
    grid-template-columns: minmax(auto, 304px) 1fr;
    gap: 64px;
  }
}
</style>
