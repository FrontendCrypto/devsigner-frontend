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
              Cuento con unos de 11 años de experiencia en diseño y desarrollo
              de productos digitales, creo que es experiencia suficiente para
              enriquecer cualquier proyecto.
            </p>
            <p>
              Me considero un profesional con un enfoque pragmático, centrado en
              el usuario y con capacidad para trabajar en equipo de manera
              efectiva.
            </p>
            <p>
              Soy autodidacta y considero que me adapto fácilmente a entornos
              cambiantes, he pasado la mayor parte de mi trayectoria profesional
              en startups.
            </p>
            <p>
              Combino mi enfoque lógico y creativo para contribuir al éxito del
              proyecto.
            </p>
            <p>
              Creo que mi experiencia en desarrollo frontend tiene mucho que
              aportar, al hablar el mismo lenguaje que quien tiene que tomar tu
              diseño para darle vida.
            </p>
          </div>

          <div class="features">
            <div v-for="(feature, index) in this.filteredDesignFeatures" :key="index"
              :class="['feature', feature.expanded ? 'active' : '']"
              @click="TOGGLE_DESCRIPTION(index, this.filteredDesignFeatures, feature.attributes.title), onClick(feature.attributes.title)">
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.attributes.title }}</h4>
                <div class="expander-button">
                  <button>
                    <span class="material-symbols-outlined" :class="{ 'rotate-180': feature.expanded }">
                      {{
                        feature.expanded ? 'do_not_disturb_on' : 'add_circle'
                      }}
                    </span>
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
      <img class="banner__image br-16 position-absolute" src="@/assets/middle.png" alt="" />
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
              Cuento con unos de 11 años de experiencia en diseño y desarrollo
              de productos digitales, creo que es experiencia suficiente para
              enriquecer cualquier proyecto.
            </p>
            <p>
              Me considero un profesional con un enfoque pragmático, centrado en
              el usuario y con capacidad para trabajar en equipo de manera
              efectiva.
            </p>
            <p>
              Soy autodidacta y considero que me adapto fácilmente a entornos
              cambiantes, he pasado la mayor parte de mi trayectoria profesional
              en startups.
            </p>
            <p>
              Combino mi enfoque lógico y creativo para contribuir al éxito del
              proyecto.
            </p>
            <p>
              Creo que mi experiencia en desarrollo frontend tiene mucho que
              aportar, al hablar el mismo lenguaje que quien tiene que tomar tu
              diseño para darle vida.
            </p>
          </div>

          <div class="features">
            <div v-for="(feature, index) in filteredDevelopFeatures" :key="index"
              :class="['feature', feature.expanded ? 'active' : '']"
              @click="TOGGLE_DESCRIPTION(index, filteredDevelopFeatures)">
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.attributes.title }}</h4>
                <div class="expander-button">
                  <button>
                    <span class="material-symbols-outlined" :class="{ 'rotate-180': feature.expanded }">
                      {{
                        feature.expanded ? 'do_not_disturb_on' : 'add_circle'
                      }}
                    </span>
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
    ...mapGetters('features', ['filteredDesignFeatures', 'filteredDevelopFeatures']),
  },
  methods: {
    ...mapActions('features', ['fetchFeatures']),
    ...mapMutations('features', ['TOGGLE_DESCRIPTION']),
    onClick(eventValue){
      this.$gtm.trackEvent({
        event: 'interaction',
        category: 'Features',
        action: 'click',
        label: 'CLick en feature',
        value: eventValue,
        noninteraction: false, // Optional
      });
    }
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

    @media (width >=1200px) {
      gap: 64px;
    }

    .features {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: min-content;
      gap: 8px;
    }

    @media (width >=768px) {
      .features {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }

    @media (width >=1024px) {
      gap: 24px;

      .features {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (width >=1200px) {
      grid-template-columns: minmax(auto, 304px) 1fr;
    }

    .section-sidebar {
      display: flex;
      flex-direction: column;
    }

  }

  &--product {
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

      button {
        span {
          color: $tertiary;
        }
      }
    }

    .feature-title,
    .feature-description {
      color: $tertiary;
    }
  }

  &--develop {
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

      button {
        span {
          color: $contentOnTertiary;
        }
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

      span {
        font-size: 32px;
        font-variation-settings: 'OPSZ' 32;
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out;
      }
    }

    .feature-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
    }

    .rotate-180 {
      transform: rotate(180deg);
    }

    .feature-description {
      height: 0;
      will-change: height, opacity;
      padding: 0 16px 16px 16px;
      transition: 0.2s ease-in-out;
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
        height: min-content;
        opacity: 1;
      }
    }
  }
}
</style>
