<template>
  <section class="section section-features section-features--develop">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">I.A</div>
          <div class="section-subtitle">HERRAMIENTA</div>
        </div>
        <div class="section-content">
          <div class="sidebar">
            <p>
              La forma en que veo la IA es como una herramienta que puede
              agilizar muchas rutinarias y repetitivas, permitiéndome enfocarme
              en lo que realmente importa: la creatividad y la innovación.
            </p>
            <p>
              Esta tecnología mer permite dedicas más tiempo a explorar nuevas
              ideas, experimentar con diseños y mucho más.
            </p>
            <p>
              En última instancia, la IA no reemplaza mi experiencia y juicio
              como diseñador, sino que complementa mis habilidades y me ayuda a
              entregar producto de mayor calidad.
            </p>
            <p>
              <b>¿Perder mi trabajo por culpa de una I.A.?</b>
            </p>

            <p>Más bien diría potenciar mi trabajo gracias a la I.A.</p>
          </div>
          <div>
            <div class="items-content">
              <div v-if="loading" class="gallery-items">
                <div class="gallery-loading-item" v-for="item in 9">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="gallery-items" v-else>
                <div
                  class="gallery-item"
                  v-for="item in gallery"
                  :key="item.id"
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
                  />
                  <div class="gallery-item-overlay">
                    <h3>{{ item.attributes.title }}</h3>
                    <router-link
                      class="gallery-item-link"
                      :to="{ name: 'gallery', params: { id: item.id } }"
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
