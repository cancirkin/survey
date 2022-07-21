import axios from 'axios'

export const state = () => ({
  answer: null,
  question: null,
  survey: {},
  isLastQuestion: false,
  token: ''
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
  }
}

export const actions = {
  async fetchSurvey({ commit }) {
    const { data } = await axios
      .get(
        'https://api.niso.dev/survey/getsurvey?c=981fb068-7aaf-4f37-9a88-a4debe1509c9&a=fb3a5e195f0727c99dc8db83f04c0a92b5081c1716fd8e9945bbec48bc8b71e1765bee28e2f22e0a46452e164c24175f'
      )

    commit('SET_SURVEY', data)
  },
  async startSurvey({ commit, dispatch }) {
    const { data } = await axios
      .post('https://api.niso.dev/survey/startsurvey', {
        c: '981fb068-7aaf-4f37-9a88-a4debe1509c9',
        a: 'fb3a5e195f0727c99dc8db83f04c0a92b5081c1716fd8e9945bbec48bc8b71e1765bee28e2f22e0a46452e164c24175f',
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
