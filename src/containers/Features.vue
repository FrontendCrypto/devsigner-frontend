<template>
  <section class="section section-features section-features--product">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">CARA A:</div>
          <div class="section-subtitle">PRODUCT MINDSET</div>
        </div>
        <div class="section-content">
          <div class="section-sidebar">
            <p>
              Tengo 11 años de experiencia en diseño y desarrollo de productos
              digitales. Mi experiencia es suficiente para enriquecer cualquier
              proyecto.
            </p>

            <p>
              Soy un profesional pragmático, centrado en el usuario y con
              capacidad para trabajar en equipo de manera efectiva.
            </p>

            <p>
              Soy autodidacta y me adapto fácilmente a entornos cambiantes. He
              trabajado en startups durante la mayor parte de mi carrera.
            </p>

            <p>
              Combino mi enfoque lógico y creativo para contribuir al éxito del
              proyecto.
            </p>

            <p>
              Mi experiencia en desarrollo frontend es una gran ventaja, ya que
              me permite hablar el mismo lenguaje que los programadores y hace
              que todo sea más fluido.
            </p>
          </div>
          <div class="features">
            <div
              v-for="(feature, index) in filteredDesignFeatures"
              :key="index"
              :class="['feature', feature.expanded ? 'active' : '']"
              @click="
                TOGGLE_DESCRIPTION({ section: 'design', index }),
                  onClick(feature.attributes.title)
              "
            >
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.attributes.title }}</h4>
                <div class="expander-button">
                  <button>
                    <div :class="{ 'rotate-180': feature.expanded }">
                      <unicon
                        v-if="feature.expanded"
                        class="icon"
                        name="minus-circle"
                        fill="#1b1b1b"
                      ></unicon>
                      <unicon
                        v-else
                        class="icon"
                        name="plus-circle"
                        fill="#1b1b1b"
                      ></unicon>
                    </div>
                  </button>
                </div>
              </div>
              <div class="feature-description" :data-index="index">
                <p>{{ feature.attributes.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-banner">
    <div class="banner">
      <img
        loading="lazy"
        class="banner__image br-16 position-absolute"
        src="@/assets/images/homepage/banner-section-image.avif"
        alt=""
      />
    </div>
  </section>

  <section class="section section-features section-features--develop">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">CARA B:</div>
          <div class="section-subtitle">DEVELOPER SKILLS</div>
        </div>
        <div class="section-content">
          <div class="section-sidebar">
            <p>
              Con más de 10 años de experiencia en desarrollo frontend, tengo un
              enfoque sólido que combina lógica y creatividad. Esto me permite
              abordar desafíos técnicos de manera pragmática y orientada al
              usuario.
            </p>
            <p>
              También me centro en la optimización del rendimiento, la
              escalabilidad y la experiencia del usuario.
            </p>
            <p>
              Creo que las interfaces deben ser receptivas, adaptables a
              diferentes dispositivos y mejorar la satisfacción del usuario.
            </p>
            <p>
              Uno de mis puntos fuertes es la capacidad de traducir diseños en
              código funcional de manera efectiva.
            </p>
            <p>
              Hablo el mismo lenguaje que los diseñadores, lo que facilita la
              comunicación y garantiza que la visión de diseño se convierta en
              una experiencia de usuario sólida y coherente.
            </p>
          </div>

          <div class="features">
            <div
              v-for="(feature, index) in filteredDevelopFeatures"
              :key="index"
              :class="['feature', feature.expanded ? 'active' : '']"
              @click="TOGGLE_DESCRIPTION({ section: 'develop', index })"
            >
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.attributes.title }}</h4>
                <div class="expander-button">
                  <button>
                    <div :class="{ 'rotate-180': feature.expanded }">
                      <unicon
                        v-if="feature.expanded"
                        class="icon"
                        name="minus-circle"
                        fill="#f9e9cb"
                      ></unicon>
                      <unicon
                        v-else
                        class="icon"
                        name="plus-circle"
                        fill="#f9e9cb"
                      ></unicon>
                    </div>
                  </button>
                </div>
              </div>
              <div class="feature-description" :data-index="index">
                <p>{{ feature.attributes.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Features',
  computed: {
    ...mapState('features', ['features', 'loading']),
    ...mapGetters('features', [
      'filteredDesignFeatures',
      'filteredDevelopFeatures',
    ]),
  },
  methods: {
    ...mapActions('features', ['fetchFeatures']),
    ...mapMutations('features', ['TOGGLE_DESCRIPTION']),
    onClick(eventValue) {
      this.$gtm.trackEvent({
        event: 'interaction',
        category: 'Features',
        action: 'click',
        label: 'Click en feature',
        value: eventValue,
      });
    },
  },
  mounted() {
    this.fetchFeatures();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.section-features {
  .section-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;

    @media (width >=1024px) {
      gap: 24px;
    }

    @media (width >=1200px) {
      grid-template-columns: minmax(auto, 304px) 1fr;
      gap: 64px;
    }

    .features {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: min-content;
      gap: 8px;
      height: fit-content;

      @media (width >=768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      @media (width >=1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .section-sidebar {
      display: flex;
      flex-direction: column;
    }
  }

  &--develop {
    background-color: $backgroundTertiary;

    .section-title {
      color: $primary;
    }

    .section-subtitle {
      color: $contentBody;
    }

    .section-sidebar {
      color: $contentBody;
    }

    .feature {
      background-color: $surface1;

      .feature-description {
        background-color: inherit;
      }

      &.active {
        box-shadow: 0px 4px 10px -6px rgba(0, 0, 0, 0.44);
      }

      &:hover,
      &.active {
        background-color: darken($surface1, 5%);

        .feature-description {
          color: $tertiary;
          background-color: darken($surface1, 5%);
        }
      }

      .icon {
        fill: $tertiary;
      }
    }

    .feature-title,
    .feature-description {
      color: $tertiary;
    }
  }

  &--product {
    background-color: $background;

    .section-title {
      color: $contentNeutral;
    }

    .section-subtitle {
      color: $contentOnSurface;
    }

    .section-sidebar {
      color: $contentOnSurface;
    }

    .feature {
      background-color: $surfaceTertiary;

      .feature-description {
        background-color: inherit;
      }

      &.active {
        box-shadow: 0px 4px 10px -6px rgba(0, 0, 0, 0.44);
      }

      &:hover,
      &.active {
        background-color: darken($surfaceTertiary, 5%);

        .feature-description {
          color: $contentOnTertiary;
          background-color: darken($surfaceTertiary, 5%);
        }
      }

      .icon {
        fill: $contentOnTertiary;
      }
    }

    .feature-title,
    .feature-description {
      color: $contentOnTertiary;
    }
  }

  .feature {
    padding: 16px;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    height: min-content;
    transition: 0.3s ease-in-out;
    will-change: height;

    button {
      width: 48px;
      height: 48px;
      grid-column: 2;
      grid-row: 1;
      background-color: transparent;
      border: 0;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(0deg);
        transition: transform 0.2s ease;
      }
    }

    .feature-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
    }

    .rotate-180 {
      transform: rotate(180deg);
    }

    .feature-description {
      height: 0;
      will-change: height, opacity;
      padding: 0 16px 16px 16px;
      transition: 0.2s ease;
      overflow: hidden;
      position: absolute;
      border-radius: 0 0 8px 8px;
      left: 0;
      right: 0;
      z-index: 1;
      opacity: 0;
    }

    &.active {
      .feature-description {
        transition: 0.2s ease;
        height: min-content;
        opacity: 1;
      }
    }
  }
}
</style>
