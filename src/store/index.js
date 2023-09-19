import { createStore } from 'vuex';
import skillsModule from './modules/skills';
import featuresModule from './modules/features';
import articlesModule from './modules/articles';
import galleryModule from './modules/gallery';

export default createStore({
  modules: {
    skills: skillsModule,
    features: featuresModule,
    articles: articlesModule,
    gallery: galleryModule,
  },
});
