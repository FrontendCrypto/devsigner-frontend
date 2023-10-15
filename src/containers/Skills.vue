<template>
  <section
    class="section section-skills"
    role="region"
    aria-labelledby="skills-section-heading"
  >
    <div class="custom-container">
      <div class="skills-column">
        <h3 id="design-skills-heading">Design</h3>
        <div
          class="skills-column__content"
          aria-labelledby="design-skills-heading"
        >
          <div
            class="skill-card"
            v-for="skill in filteredSkills('design')"
            :key="skill.id"
          >
            <div class="skill-card__content">
              <b>{{ skill.attributes.title }}</b>
              <p>{{ skill.attributes.description }}</p>
            </div>
            <img
              loading="lazy"
              class="skill-card__image"
              :src="
                getImageUrl(skill.attributes.skill_logo.data.attributes.url)
              "
              :alt="skill.attributes.skill_logo.data.attributes.alternativeText"
              width="56"
              height="56"
            />
          </div>
        </div>
      </div>
      <div class="skills-column">
        <div class="skills-title--icon">
          <unicon name="repeat"></unicon>
        </div>
        <div
          class="skills-column__content"
          aria-labelledby="bridge-skills-heading"
        >
          <div
            class="skill-card"
            v-for="skill in filteredSkills('bridge')"
            :key="skill.id"
          >
            <div class="skill-card__content">
              <b>{{ skill.attributes.title }}</b>
              <p>{{ skill.attributes.description }}</p>
            </div>
            <img
              loading="lazy"
              class="skill-card__image"
              :src="
                getImageUrl(skill.attributes.skill_logo.data.attributes.url)
              "
              :alt="skill.attributes.skill_logo.data.attributes.alternativeText"
            />
          </div>
        </div>
      </div>
      <div class="skills-column">
        <h3 id="develop-skills-heading">Develop</h3>
        <div
          class="skills-column__content"
          aria-labelledby="develop-skills-heading"
        >
          <div
            class="skill-card"
            v-for="skill in filteredSkills('develop')"
            :key="skill.id"
          >
            <div class="skill-card__content">
              <b>{{ skill.attributes.title }}</b>
              <p>{{ skill.attributes.description }}</p>
            </div>
            <img
              loading="lazy"
              class="skill-card__image"
              :src="
                getImageUrl(skill.attributes.skill_logo.data.attributes.url)
              "
              :alt="skill.attributes.skill_logo.data.attributes.alternativeText"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Skills',
  computed: {
    ...mapState('skills', ['skills', 'loading']),
    ...mapGetters('skills', ['filteredSkills', 'getImageUrl']),
    getImageUrl() {
      return this.$store.getters.getImageUrl;
    },
  },
  methods: {
    ...mapActions('skills', ['fetchSkills']),
  },
  mounted() {
    this.fetchSkills();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.section-skills {
  .skills-title--icon {
    fill: $surface3;
  }

  .custom-container {
    max-width: 1448px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    overflow: hidden;
    margin: 0 auto;

    @media (width >=1024px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    }
  }

  .skills-column {
    padding: 24px 0;
    height: 100%;
    border: 1px solid $surface2;
    border-top: 0;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &__content {
      width: 100%;
      height: 400px;
      padding-right: 12px;
      overflow-y: scroll;
      scrollbar-width: 6px;
      scrollbar-color: $surface3 $surface1;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: min-content;
      gap: 16px;

      @media (width >=768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (width >=1200px) {
        grid-template-columns: 1fr;
        padding: 72px 40px;
      }

      /* Firefox */
      &::-webkit-scrollbar-thumb {
        background-color: $surface3;
        /* Webkit */
        border-radius: 3px;
      }

      &::-webkit-scrollbar-track {
        background-color: $surface1;
        /* Webkit */
        border-radius: 3px;
      }

      &::-webkit-scrollbar {
        width: 6px;
      }
    }
  }

  .skill-card {
    display: grid;
    grid-template-columns: 1fr 56px;
    grid-template-rows: 1fr;
    border-radius: 8px;
    gap: 16px;
    padding: 16px;
    background-color: $surface1;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    &__image {
      width: 56px;
      height: 56px;
    }
  }
}
</style>
