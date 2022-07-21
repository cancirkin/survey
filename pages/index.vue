<template>
  <div class="wrapper position-relative overflow-hidden">
    <!-- Top content -->
    <div class="container">
      <div v-if="survey.client" class="logo_area pt-5">
        <a>
          <img :src="survey.client.logo" alt="logo" class="client-logo" />
        </a>
      </div>
      <!-- <div class="step_progress">
        <div class="d-flex overflow-hidden">
          <div class="col-2">
            <div
              class="step d-inline-block position-relative rounded-pill active"
            >
              1
            </div>
          </div>
          <div class="col-2 me-auto">
            <div class="step d-inline-block position-relative rounded-pill">
              2
            </div>
          </div>
          <div class="col-2 text-end">
            <div class="step d-inline-block position-relative rounded-pill">
              3
            </div>
          </div>
          <div class="col-2 text-end">
            <div class="step d-inline-block position-relative rounded-pill">
              4
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <!-- Circles which indicates the steps of the form: -->
    <div class="container">
      <!------------------------- Step-1 ----------------------------->
      <empty-survey v-if="survey.isEmpty"></empty-survey>
      <welcome-card
        v-if="
          (survey.success === 10 ||
            survey.success === 400 ||
            survey.success === 100) &&
          !question
        "
      ></welcome-card>
      <question-card v-else></question-card>
      <div v-if="survey.success === 10 && !question" class="row mt-5">
        <button
          type="button"
          class="f_btn start-btn next_btn text-white text-uppercase mt-2"
          @click="startSurvey"
        >
          Start Survey
        </button>
      </div>
      <!------------------------- Form button ----------------------------->
      <div v-if="question" class="row pt-5 float-lg-end flex-column">
        <button
          type="button"
          class="f_btn prev_btn bg-white border text-uppercase"
          @click="lastQuestion"
        >
          <span><i class="fas fa-arrow-left"></i></span> Last Question
        </button>
        <button
          type="button"
          class="f_btn next_btn text-white text-uppercase mt-2"
          @click="nextQuestion"
        >
          {{ isLastQuestion ? 'Complete' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Radio from '../components/Radio.vue'
import Checkbox from '../components/Checkbox.vue'
import Emoji from '../components/Emoji.vue'
import WelcomeCard from '../components/WelcomeCard.vue'
import QuestionCard from '../components/QuestionCard.vue'
import EmptySurvey from '../components/EmptySurvey.vue'
export default {
  name: 'IndexPage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Radio,
    // eslint-disable-next-line vue/no-unused-components
    Checkbox,
    // eslint-disable-next-line vue/no-unused-components
    Emoji,
    WelcomeCard,
    QuestionCard,
    EmptySurvey,
  },
  async asyncData({ store }) {
    await store.dispatch('fetchSurvey')
  },
  computed: {
    ...mapGetters({
      survey: 'getSurvey',
      question: 'getQuestion',
      isLastQuestion: 'getIsLastQuestion',
    }),
  },
  mounted() {
    if (this.survey.success === 50) {
      this.$store.dispatch('startSurvey')
    }
  },
  methods: {
    startSurvey() {
      this.$store.dispatch('startSurvey')
    },
    nextQuestion() {
      if (this.isLastQuestion) {
        this.$store.dispatch('completeSurvey')
        this.$store.commit('SET_COMPLETED', true)
        this.$store.commit('SET_QUESTION', null)
        return
      }
      const i = this.question.questionorder + 1
      this.$store.dispatch('fetchQuestion', i)
    },
    lastQuestion() {
      if (this.question.questionorder === 1) {
        return
      }
      const i = this.question.questionorder - 1
      this.$store.dispatch('fetchQuestion', i)
    },
  },
}
</script>
<style scoped>
.client-logo {
  width: 200px;
  height: auto;
}
.start-btn {
  width: 40%;
}
</style>
