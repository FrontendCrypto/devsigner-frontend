import { createStore } from 'vuex';
import homepageModule from './modules/homepage';
import articlesModule from './modules/articles';
import skillsModule from './modules/skills';
import featuresModule from './modules/features';
import galleryModule from './modules/gallery';
import affiliatesModule from './modules/affiliates';
import portfolioModule from './modules/portfolio'
import appModule from './modules/app'
import * as getters from './getters';

export default createStore({
  getters,
  modules: {
    app: appModule,
    homepage: homepageModule,
    articles: articlesModule,
    skills: skillsModule,
    features: featuresModule,
    gallery: galleryModule,
    affiliates: affiliatesModule,
    portfolio: portfolioModule,
  },
});
