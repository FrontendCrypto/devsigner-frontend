<template>
  <div>
    <div class="container">
      <div
        v-if="hasgalleryData"
        id="banner"
        :data-src="gallery.attributes.image_thumbail.data.attributes.url"
      >
        <img
          :src="gallery.attributes.image_thumbail.data.attributes.url"
        />
        <h1>{{ gallery.attributes.title }}</h1>
      </div>

      <div v-if="hasgalleryData">
        <div>
          <div v-if="gallery.attributes.description && gallery.attributes.description != null" id="editor">
            {{ gallery.attributes.description }}
          </div>
          <p v-if="gallery.attributes.publishedAt">
            {{ gallery.attributes.publishedAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GalleryView',
  data() {
    return {
      loading: true,
      gallery: {},
      baseUrl: import.meta.env.VITE_APP_STRAPI_API_URL,
    };
  },
  computed: {
    hasgalleryData() {
      return (
        this.gallery && this.gallery.attributes && this.gallery.attributes.title
      );
    },
  },
  mounted() {
    const galleryId = this.$route.params.id;
    const apiUrl = `${this.baseUrl}/api/galleries/${galleryId}?populate=*`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.gallery = response.data.data;
      })
      .catch((error) => {
        console.error('Error fetching gallery data:', error);
      });
  },
};
</script>
