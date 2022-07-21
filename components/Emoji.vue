<template>
  <div>
    <li>
      <label
        class="
          step_1
          position-relative
          bg-white
          shadow
          animate__animated animate__fadeInRight animate_200ms
        "
      >
        <div>
          <b-form-rating
            v-model="value"
            size="lg"
            icon-empty="emoji-frown"
            icon-half="heart-half"
            icon-full="emoji-smile"
            icon-clear="slash-circle"
            show-clear
            variant="success"
          ></b-form-rating>
        </div>
      </label>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      value: 0,
    }
  },
  watch: {
    value(val) {
      this.$store.dispatch('setAnswer', val)
    },
    // watch deep
    question: {
      handler(val) {
        if (this.question.attendeeAnswer) {
          this.value = Number(val.attendeeAnswer)
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      question: 'getQuestion',
    }),
  },
  mounted() {
    if (this.question.attendeeAnswer) {
      this.value = Number(this.question.attendeeAnswer)
    }
  },
}
</script>

<style>
.bi-emoji-frown {
  color: red !important;
}
</style>
