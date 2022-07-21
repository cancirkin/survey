<template>
  <div
    class="
      content_box
      welcome-box
      shadow
      text-center
      bg-white
      py-5
      position-relative
    "
  >
    <!--Welcome Section-->
    <div v-if="survey.success === 10 && completed === false" class="leadership">
      <div class="name mb-3">
        <h1>{{ survey.surveyItems[0].surveyitemtitle }}</h1>
      </div>
      <div class="photo">
        <img :src="survey.surveyItems[0].surveyitemphoto" class="item-photo" />
      </div>
    </div>
    <!--In Progress Section-->
    <div v-if="survey.success === 50" class="leadership"></div>
    <div class="mt-3 w-100 p-2">
      <p class="text-center" v-html="survey.statusText"></p>
    </div>
    <div v-if="survey.success === 10" class="w-100 p-2">
      <p class="text-center">Welcome {{ survey.attendee.attendetitle }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      survey: 'getSurvey',
      completed: 'getCompleted',
    }),
  },
}
</script>

<style scoped>
.item-photo {
  max-height: 250px;
  object-fit: contain;
  border-radius: 50%;
}

.welcome-box {
  height: auto !important;
}
</style>