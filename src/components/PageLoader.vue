<template>
  <transition name="fade">
    <div v-show="!loaded && !fontsLoaded" id="page-loader">
      <div class="fulfilling-square-spinner">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none">
          <rect width="72" height="72" fill="#292929" rx="8" />
          <g filter="url(#a)">
            <path fill="#AF232B"
              d="M44.583 58.898c-2.241 0-4.307-.575-6.198-1.727a13.198 13.198 0 0 1-4.502-4.594c-1.11-1.932-1.666-4.05-1.666-6.352v-2.899c0-.226.103-.34.309-.34h7.092c.164 0 .247.114.247.34v2.899c0 1.377.462 2.57 1.387 3.577.925.986 2.035 1.48 3.33 1.48 1.316 0 2.437-.504 3.362-1.511.925-1.028 1.387-2.21 1.387-3.546 0-1.542-1.007-2.889-3.022-4.04-.328-.206-.76-.452-1.295-.74a50.446 50.446 0 0 0-1.85-1.048l-2.097-1.141c-.678-.39-1.336-.761-1.973-1.11-2.303-1.357-4.02-3.053-5.15-5.088-1.11-2.056-1.665-4.359-1.665-6.908 0-2.343.576-4.46 1.727-6.352 1.151-1.87 2.652-3.35 4.502-4.44a11.695 11.695 0 0 1 6.075-1.666c2.24 0 4.296.556 6.167 1.666a12.845 12.845 0 0 1 4.471 4.502c1.13 1.87 1.696 3.967 1.696 6.29v5.18c0 .165-.082.247-.247.247h-7.092c-.164 0-.247-.082-.247-.246l-.061-5.18c0-1.48-.463-2.683-1.388-3.609-.925-.925-2.025-1.387-3.3-1.387-1.294 0-2.405.493-3.33 1.48-.925.987-1.387 2.159-1.387 3.515 0 1.378.288 2.529.863 3.454.596.925 1.676 1.809 3.238 2.652.164.082.545.288 1.14.617.597.329 1.255.699 1.974 1.11.74.39 1.409.75 2.005 1.079.596.308.956.493 1.079.555 2.097 1.172 3.752 2.61 4.965 4.317 1.233 1.706 1.85 3.803 1.85 6.29 0 2.406-.555 4.564-1.665 6.476-1.131 1.912-2.632 3.423-4.502 4.533-1.871 1.11-3.947 1.665-6.23 1.665Z" />
            <path fill="#F9E9CB"
              d="m26.646 57.048-11.317.062c-.205 0-.308-.103-.308-.308l.123-43.387c0-.164.083-.246.247-.246l11.81-.062c2.344-.062 4.461.473 6.353 1.603a12.7 12.7 0 0 1 4.563 4.595c1.152 1.912 1.727 4.03 1.727 6.352V43.79c0 2.426-.586 4.646-1.758 6.66a13.729 13.729 0 0 1-4.748 4.78c-1.974 1.172-4.204 1.778-6.692 1.82Zm.555-36.386-4.41.061-.06 28.616h3.915c1.563 0 2.878-.544 3.947-1.634 1.07-1.09 1.604-2.395 1.604-3.916V25.595c0-1.336-.494-2.497-1.48-3.484-.987-1.007-2.159-1.49-3.516-1.45Z" />
          </g>
          <path fill="#AF232B" fill-rule="evenodd"
            d="m44.807 41.322.207.123c.535.288.966.535 1.295.74 2.015 1.151 3.022 2.498 3.022 4.04 0 1.336-.462 2.518-1.387 3.546-.925 1.007-2.046 1.51-3.361 1.51-1.295 0-2.406-.492-3.33-1.48-.926-1.007-1.388-2.199-1.388-3.576v-2.899c0-.226-.083-.34-.247-.34h-7.092c-.206 0-.309.114-.309.34v2.899c0 2.302.555 4.42 1.665 6.352a13.2 13.2 0 0 0 4.503 4.595c1.89 1.15 3.957 1.726 6.198 1.726 2.282 0 4.358-.555 6.229-1.665 1.87-1.11 3.371-2.62 4.502-4.533 1.11-1.912 1.665-4.07 1.665-6.475 0-1.85-.341-3.485-1.024-4.903H44.807Z"
            clip-rule="evenodd" />
          <defs>
            <filter id="a" width="49.958" height="53.796" x="11.021" y="13.102" color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_385_1448" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_385_1448" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <span>Cargando</span>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PageLoader',
  computed: {
    ...mapState('app', ['loaded', 'fontsLoaded']),
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

.fulfilling-square-spinner {
  animation: fulfilling-square-spinner-animation 1s infinite ease;
}

// .fulfilling-square-spinner .spinner-inner {
//   vertical-align: top;
//   display: inline-block;
//   background-color: $primary;
//   width: 100%;
//   opacity: 1;
//   animation: fulfilling-square-spinner-inner-animation 4s infinite ease-in;
// }

@keyframes fulfilling-square-spinner-animation {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>