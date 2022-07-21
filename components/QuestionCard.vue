<template>
  <div v-if="question">
    <div
      class="
        content_box
        shadow
        text-center
        bg-white
        d-flex
        py-5
        position-relative
      "
    >
      <div class="question_title p-2">
        <h1>{{ question.question }}</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="left_side_img d-none d-md-block col-md-4">
        <img src="~/assets/v8/background/car.png" alt="image-not-found" />
      </div>
      <div class="col-md-4">
        <div class="form_items overflow-hidden">
          <ul class="list-unstyled text-center p-0">
            <Emoji></Emoji>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      question: 'getQuestion',
    }),
  },
}
</script>

<style>
</style>