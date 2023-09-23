<template>
  <div>
    <div class="container">
      <div v-if="hasArticleData" class="content">
        <article>
          <div id="editor" v-html="parsedContent"></div>
          <p>{{ article.attributes.publishedAt }}</p>
        </article>
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue';
import MarkdownIt from 'markdown-it';

export default {
  name: 'ArticleView',
  components: {
    Sidebar,
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
    
    const articleId = this.$route.params.id;
    const apiUrl = `${this.baseUrl}/api/articles/${articleId}?populate=*`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.article = response.data.data;
        this.$gtm.trackView(`Artículo - ${this.article.attributes.title}`, 'currentPath');
        this.parsedContent = this.md.render(this.article.attributes.content);
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  },
};
</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  height: min-content;
  padding: 0;
}

article {
  height: 100%;
}

h1 {
  margin-bottom: 32px;
}
</style>
