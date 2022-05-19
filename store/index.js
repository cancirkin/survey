export const state = () => ({
  answer: null,
  question: {},
  survey: {},
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
}

export const actions = {
  async fetchSurvey({ commit }, id) {
    // const { data } = await this.$axios.get(`/api/survey/${id}`)
    // commit('SET_SURVEY', data)
  },
  async fetchQuestion({ commit }, id) {
    // const { data } = await this.$axios.get(`/api/question/${id}`)
    // commit('SET_QUESTION', data)
  },
  setAnswer({ commit }, answer) {
    commit('SET_ANSWER', answer)
  },
}
