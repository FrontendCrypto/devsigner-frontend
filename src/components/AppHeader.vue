<template>
  <div class="container">
    <nav class="br-8">
      <router-link to="/" class="header-title">
        <img src="@/assets/devsigner.svg" />
      </router-link>
      <div class="nav-content">
        <!-- <span>Portfolio (WIP)</span> -->
        <router-link
          to="/blog"
          tag="button"
          class="button button--primary button--medium"
          >Cuaderno de bitácora</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<styles scoped lang="scss">
@import '@/assets/styles/variables.scss';

.nav-link {
  text-decoration: none;
  color: $contentOnSurface;
  text-decoration: none;
}
.header-title {
  font-family: 'Koulen', sans-serif;
  line-height: 1;
  font-size: 30px;
  color: $contentOnSurface;
  opacity: 1;
  transition: 0.2s ease;
  text-decoration: none;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  &:hover {
    opacity: 0.75;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
  }
}
.app-header {
  background-color: $surface1;
  padding: 24px;
  border-radius: 16px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.navigation {
  display: flex;
  gap: 16px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: $surface1;
  margin-bottom: 24px;
  padding: 16px 24px;
  width: 100%;
  gap: 24px;
  .nav-content {
    flex-direction: row;
    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media (width > 576px) {
    flex-direction: row;
    .nav-content {
      flex-direction: row;
      align-items: center;
    }
  }
}
</styles>
