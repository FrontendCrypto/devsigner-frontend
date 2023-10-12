<template>
  <div class="blog-entry">
    <div class="container article-container">
      <div v-if="hasArticleData" class="content">
        <article class="article">
          <div id="editor" class="editor" v-html="parsedContent"></div>
          <hr class="separator" />
          <p class="published-at">
            Publicado el {{ article.attributes.publishedAt }} por Pablo
            Carballeda
          </p>
        </article>
        <Articles list-type="list" :limit="5" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Articles from '@/containers/Articles.vue';
import MarkdownIt from 'markdown-it';
import WebFontLoader from 'webfontloader';

export default {
  name: 'ArticleView',
  components: {
    Articles,
  },
  data() {
    return {
      loading: true,
      article: {},
      baseUrl: import.meta.env.VITE_APP_STRAPI_API_URL,
      md: new MarkdownIt(),
      parsedContent: '',
    };
  },
  computed: {
    hasArticleData() {
      return (
        this.article && this.article.attributes && this.article.attributes.title
      );
    },
  },
  mounted() {
    WebFontLoader.load({
      google: {
        families: ['Lora:400,600'],
      },
    });

    const articleId = this.$route.params.id;
    const apiUrl = `${this.baseUrl}/api/articles/${articleId}?populate=*`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.article = response.data.data;
        this.$gtm.trackView(
          `Artículo - ${this.article.attributes.title}`,
          'currentPath'
        );
        this.parsedContent = this.md.render(this.article.attributes.content);
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap');
</style>
