import { createStore } from 'vuex';
import homepageModule from './modules/homepage';
import articlesModule from './modules/articles';
import skillsModule from './modules/skills';
import featuresModule from './modules/features';
import galleryModule from './modules/gallery';

export default createStore({
  modules: {
    homepage: homepageModule,
    articles: articlesModule,
    skills: skillsModule,
    features: featuresModule,
    gallery: galleryModule,
  },
});
