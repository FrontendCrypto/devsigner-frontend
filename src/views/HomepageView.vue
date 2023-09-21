<template>
  <header class="header">
    <div class="header__content">
      <img alt="Vue logo" src="@/assets/header-logo.svg" />
      <div v-if="loading">Loading@.</div>
      <div v-else>
        <p class="text-body">{{ homepage.attributes.hero.title }}</p>
      </div>
    </div>
    <!-- @todo store getImageUrl -->
    <!-- <div>
      <img
        alt="Vue logo"
        :src="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
      />
    </div>
    <div>
      <img
        alt="Vue logo"
        :src="getImageUrl(homepage.attributes.imageleft.data.attributes.url)"
      />
    </div> -->
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
        <a
          href="https://github.com/FrontendCrypto"
          target="_blank"
          class="button button--primary button--medium"
        >
          Llévame allí
        </a>
      </div>
      <img
        class="banner__image position-absolute"
        src="@/assets/cat.png"
        alt=""
      />
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
          <p>
            Sí, estos son enlaces de afiliado, hay que rascar de donde se pueda.
          </p>
        </div>

        <div class="websites cards-wrapper-3">
          <div class="website card">
            <h3>Bit2me</h3>
            <div>
              <p>
                Plataforma líder en criptomonedas que ofrece una amplia gama de
                servicios, como comprar y vender más de 230 criptomonedas,
                respaldado por altos estándares de seguridad y cumplimiento
                regulatorio.
              </p>
              <p>Gana 5€ registrándote a través de este enlace:</p>
              <a
                class="button button--primary button--medium"
                href="https://bit2me.com/es/join?ref=QWH-SLO-DIE&mkt_kind=referral&prm=5DH100"
                target="_blank"
                >Visita Bit2Me</a
              >
            </div>
          </div>
          <div class="website card">
            <h3>Ledger</h3>
            <div>
              <p>
                Reconocida marca de billeteras de hardware para criptomonedas.
                Estas billeteras almacenan las claves privadas de los usuarios
                de forma segura en un dispositivo físico, lo que las hace
                altamente seguras contra ataques cibernéticos.
              </p>
              <p>
                Es la elección confiable para mantener tus criptomonedas seguras
                y protegidas.
              </p>
              <a
                class="button button--primary button--medium"
                href="https://shop.ledger.com/?r=2ca5d5f17b87"
                target="_blank"
                >Visita Ledger</a
              >
            </div>
          </div>
          <div class="website card">
            <h3>Railway</h3>
            <div>
              <p>
                Plataforma en la nube diseñada para simplificar el proceso de
                entrega de software. Ofrece funciones como compilaciones
                automáticas, múltiples entornos y gestión de secretos para
                agilizar el desarrollo y despliegue de aplicaciones.
              </p>
              <p>
                Railway es conocido por su facilidad de uso y es apreciado por
                desarrolladores de todo el mundo.
              </p>
              <a
                class="button button--primary button--medium"
                href="https://railway.app?referralCode=EbPhlb"
                target="_blank"
                >Visita Railway</a
              >
            </div>
          </div>
          <div class="website card">
            <h3>Railway</h3>
            <div>
              <p>
                Plataforma en la nube para simplificar la gestión y optimización
                de recursos multimedia. Ofrece características como
                almacenamiento de imágenes, procesamiento automático, entrega
                optimizada y escalabilidad para mejorar la experiencia de
                usuario en sitios web y aplicaciones.
              </p>
              <p>
                Es conocido por su facilidad de integración y su capacidad para
                acelerar la carga de medios en línea
              </p>
              <a
                class="button button--primary button--medium"
                href="https://console.cloudinary.com/invites/lpov9zyyucivvxsnalc5/qp8menzafkyppllcbsao?t=default"
                target="_blank"
                >Visita Cloudinary</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
  computed: {
    ...mapState('homepage', ['homepage', 'loading']),
    ...mapGetters('homepage', ['getImageUrl']),
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

.section-subtitle {
  color: $contentPrimary;
}
</styles>
