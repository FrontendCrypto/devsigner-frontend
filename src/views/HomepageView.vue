<template>
  <header class="header">
    <div class="header__content">
      <img alt="Vue logo" src="@/assets/header-logo.svg" />
      <div v-if="loading">Loading@.</div>
      <div v-else>
        <p class="text-body">{{ homepage.hero.title }}</p>
      </div>
    </div>
    <div>
      <img alt="Vue logo" src="@/assets/left.png" />
    </div>
    <div>
      <img alt="Vue logo" src="@/assets/right.png" />
    </div>
  </header>
  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">Cuaderno de</div>
          <div class="section-subtitle">bitacora*</div>
          <p>*Esta tipografía no incorpora tildes : (</p>
        </div>

        <Articles />
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
        <a href="https://github.com/FrontendCrypto" target="_blank" class="button button--primary button--medium">
          Llévame allí
        </a>
      </div>
      <img class="banner__image position-absolute" src="@/assets/cat.png" alt="" />
    </div>
  </section>

  <Skills />
  <Gallery />

  <section class="section section-articles">
    <div class="container">
      <div class="content">
        <div class="section-header">
          <div class="section-title">Webs</div>
          <div class="section-subtitle">amigas</div>
        </div>

        <div class="websites cards-wrapper-3">
          <div class="website card">
            <h3>Bit2me</h3>
            <p>Bit2Me es una plataforma líder en criptomonedas que ofrece una amplia gama de servicios, desde comprar y
              vender más de 230 criptomonedas hasta generar ingresos pasivos y soluciones avanzadas para inversores y
              empresas, todo respaldado por altos estándares de seguridad y cumplimiento regulatorio.</p>
            <p>Gana 5€ registrándote a través de este enlace:</p>
            <a class="card-link" href="https://bit2me.com/es/join?ref=QWH-SLO-DIE&mkt_kind=referral&prm=5DH100"
              target="_blank">https://bit2me.com</a>
          </div>
          <div class="website card">
            <h3>Ledger</h3>
            <p>Ledger es una reconocida marca de billeteras de hardware para criptomonedas. Estas billeteras almacenan las
              claves privadas de los usuarios de forma segura en un dispositivo físico, lo que las hace altamente seguras
              contra ataques cibernéticos.</p>
            <p>Ledger es la elección confiable para mantener tus criptomonedas seguras y protegidas contra posibles
              amenazas en línea.</p>
            <a class="card-link" href="https://shop.ledger.com/?r=2ca5d5f17b87" target="_blank">https://ledger.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Articles from '@/containers/Articles.vue';
import Skills from '@/containers/Skills.vue';
import Gallery from '@/containers/Gallery.vue';
import Features from '@/containers/Features.vue';

export default {
  name: 'HomeView',
  components: {
    Articles,
    Skills,
    Gallery,
    Features,
  },
  data() {
    return {
      homepage: null,
      loading: true,
      apiUrl: `${import.meta.env.VITE_APP_STRAPI_API_URL}/api/homepage?populate=*`,
    };
  },

  mounted() {
    axios
      .get(this.apiUrl)
      .then((response) => {
        this.homepage = response.data.data.attributes;
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      });
  },
};
</script>

<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.website {
  &:hover {
    background-color: darken($surface2, 1%);
  }
}

.section-subtitle {
  color: $contentPrimary;
}
</styles>
