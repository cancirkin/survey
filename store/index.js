import axios from 'axios'

export const state = () => ({
  answer: null,
  question: null,
  survey: {},
  isLastQuestion: false,
  token: '',
  completed: false
})

export const getters = {
  getAnswer: (state) => {
    return state.answer
  },
  getQuestion: (state) => {
    return state.question
  },
  getSurvey: (state) => {
    return state.survey
  },
  getToken: (state) => {
    return state.token
  },
  getIsLastQuestion: (state) => {
    return state.isLastQuestion
  },
  getCompleted: (state) => {
    return state.completed
  }
}

export const mutations = {
  SET_ANSWER(state, answer) {
    state.answer = answer
  },
  SET_QUESTION(state, question) {
    state.question = question
  },
  SET_SURVEY(state, survey) {
    state.survey = survey
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_IS_LAST_QUESTION(state, isLastQuestion) {
    state.isLastQuestion = isLastQuestion
  },
  SET_COMPLETED(state, completed) {
    state.completed = completed
  }
}

export const actions = {
  async fetchSurvey({ commit }) {
    const query = this.$router.currentRoute.query
    if (!query.c) {
      commit('SET_SURVEY', { isEmpty: true })
    } else {
      const { data } = await axios
        .get(
          `https://api.niso.dev/survey/getsurvey?c=${query?.c}&a=${query?.a}`
        )

      commit('SET_SURVEY', data)
    }

  },
  async startSurvey({ commit, dispatch }) {
    const query = this.$router.currentRoute.query
    const { data } = await axios
      .post('https://api.niso.dev/survey/startsurvey', {
        c: query?.c,
        a: query?.a
      })
    commit('SET_TOKEN', data.token)
    dispatch('fetchQuestion', 1)
  },
  async fetchQuestion({ commit, state }, index) {
    const { data } = await axios
      .get(
        `https://api.niso.dev/survey/getquestion/${index}`, {
        headers: {
          'x-access-token': state.token
        }
      }
      )
    // data.question.question = JSON.stringify(data.question.question)

    commit('SET_QUESTION', data.question)
    commit('SET_IS_LAST_QUESTION', data.isLastQuestion)
  },
  async setAnswer({ commit, state }, value) {

    const headers = {
      'x-access-token': state.token
    };
    const answer = {
      answer: value
    };


    const { data } = await axios
      .post(
        `https://api.niso.dev/survey/answerquestion/${state.question.id}`, answer,
        {
          headers
        }
      )
    console.log(data);

  },
  async completeSurvey({ commit, state }, value) {

    const headers = {
      'x-access-token': state.token
    };
    const answer = {
      answer: value
    };


    const { data } = await axios
      .post(
        `https://api.niso.dev/survey/completesurvey`, answer,
        {
          headers
        }
      )
    console.log(data);

  },
}
