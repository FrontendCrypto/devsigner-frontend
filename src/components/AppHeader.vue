<template>
  <div class="container">
    <nav class="br-8">
      <router-link to="/" class="header-title">
        <img src="@/assets/images/devsigner.svg" alt="Devsigner logo" />
      </router-link>
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

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  // background-color: $surface1;
  margin-bottom: 24px;
  padding: 16px 24px;
  width: 100%;
  gap: 24px;
}
.nav-link {
  text-decoration: none;
  color: $contentOnSurface;
  text-decoration: none;
}
.header-title {
  font-family: 'Koulen';
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
</styles>
