<template>
  <transition name="fade">
    <div v-show="shouldShowLoader" id="page-loader">
      <div class="loader"></div>
      <div class="logo">
        <svg width="56" height="56" fill="none">
          <rect width="56" height="56" fill="#292929" rx="8" />
          <g filter="url(#a)">
            <path
              fill="#AF232B"
              d="M34.147 44.4a8.379 8.379 0 0 1-4.439-1.237 9.453 9.453 0 0 1-3.224-3.29c-.796-1.384-1.193-2.901-1.193-4.55v-2.076c0-.162.073-.243.22-.243h5.08c.118 0 .177.081.177.243v2.076c0 .986.331 1.84.994 2.562.663.707 1.457 1.06 2.385 1.06.942 0 1.745-.36 2.407-1.082.663-.736.994-1.583.994-2.54 0-1.104-.721-2.069-2.164-2.893a17.177 17.177 0 0 0-.928-.53c-.368-.221-.81-.471-1.325-.751l-1.502-.817a78.18 78.18 0 0 0-1.413-.795c-1.65-.972-2.879-2.187-3.688-3.644-.795-1.473-1.193-3.122-1.193-4.948 0-1.678.412-3.195 1.237-4.55.824-1.339 1.9-2.4 3.224-3.18a8.376 8.376 0 0 1 4.351-1.192c1.605 0 3.077.398 4.417 1.193a9.2 9.2 0 0 1 3.203 3.224c.81 1.34 1.214 2.842 1.214 4.505v3.71c0 .119-.059.177-.176.177h-5.08c-.118 0-.177-.058-.177-.176l-.044-3.71c0-1.06-.331-1.922-.994-2.585-.662-.662-1.45-.993-2.363-.993-.928 0-1.722.353-2.385 1.06a3.556 3.556 0 0 0-.994 2.517c0 .987.206 1.811.619 2.474.426.663 1.2 1.296 2.318 1.9.118.058.39.206.818.441.427.236.898.5 1.413.795.53.28 1.009.538 1.436.773.427.221.684.354.773.398 1.501.839 2.687 1.87 3.555 3.092.884 1.222 1.325 2.723 1.325 4.505 0 1.723-.397 3.269-1.192 4.638a9.086 9.086 0 0 1-3.225 3.247c-1.34.795-2.827 1.192-4.46 1.192Z"
            />
            <path
              fill="#F9E9CB"
              d="m21.3 43.075-8.105.044c-.147 0-.22-.073-.22-.22l.088-31.075c0-.117.059-.176.177-.176l8.458-.044c1.679-.045 3.195.338 4.55 1.148a9.096 9.096 0 0 1 3.269 3.29c.824 1.37 1.236 2.886 1.236 4.55v12.986c0 1.738-.42 3.328-1.259 4.77a9.833 9.833 0 0 1-3.4 3.424c-1.414.84-3.012 1.274-4.793 1.303Zm.398-26.06-3.158.044-.044 20.495h2.805c1.119 0 2.061-.39 2.827-1.17.765-.781 1.148-1.716 1.148-2.806v-13.03c0-.957-.353-1.789-1.06-2.495-.707-.722-1.546-1.068-2.518-1.039Z"
            />
          </g>
          <path
            fill="#AF232B"
            fill-rule="evenodd"
            d="m34.308 31.811.148.089c.383.206.692.383.928.53 1.443.824 2.164 1.789 2.164 2.893 0 .957-.33 1.804-.993 2.54-.663.721-1.465 1.082-2.408 1.082-.927 0-1.722-.353-2.385-1.06a3.661 3.661 0 0 1-.994-2.562v-2.076c0-.162-.059-.243-.177-.243h-5.08c-.146 0-.22.081-.22.243v2.076c0 1.65.398 3.166 1.193 4.55a9.453 9.453 0 0 0 3.224 3.29 8.379 8.379 0 0 0 4.44 1.237c1.634 0 3.12-.397 4.46-1.192a9.086 9.086 0 0 0 3.225-3.247c.795-1.37 1.193-2.915 1.193-4.638 0-1.325-.245-2.496-.734-3.512h-7.984Z"
            clip-rule="evenodd"
          />
          <defs>
            <filter
              id="a"
              width="38.051"
              height="40.8"
              x="8.975"
              y="11.6"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_385_1448"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_385_1448"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PageLoader',
  data() {},
  computed: {
    ...mapState('app', ['loaded', 'fontsLoaded']),
    shouldShowLoader() {
      return !(this.loaded && this.fontsLoaded);
    },
  },
  watch: {
    loaded(newVal) {
      document.body.classList.toggle('app-loading', !newVal);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.app-loading {
  overflow: hidden;
}

#page-loader {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

span {
  font-family: Arial, Helvetica, sans-serif;
}

.logo {
  width: 56px;
  height: 56px;
  position: absolute;
  animation: bounce 1s infinite ease-in-out;
}

.loader {
  display: inline-block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  box-shadow: 4px -40px 60px 5px $primary inset;
  background: linear-gradient(to right, rgba($primary, 0.5), transparent 50%);
  animation: spin 1s infinite linear;
  &:before {
    display: block;
    content: '';
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: $background;
    border-radius: 50%;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
}
</style>
