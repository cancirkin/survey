<template>
  <div class="wrapper position-relative overflow-hidden">
    <!-- Top content -->
    <div class="container">
      <div class="logo_area pt-5">
        <a>
          <img src="~/assets/v8/logo/logo.png" alt="image-not-found" />
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
      <div
        class="content_box shadow text-center bg-white d-flex py-5 position-relative"
      >
        <div class="question_title p-2">
          <h1>Computer Hard Disk was First introduces in 1956 by</h1>
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
      <!------------------------- Form button ----------------------------->
      <div class="row pt-5 float-lg-end flex-column">
        <button
          type="button"
          class="f_btn prev_btn bg-white border text-uppercase"
        >
          <span><i class="fas fa-arrow-left"></i></span> Last Question
        </button>
        <button
          type="button"
          class="f_btn next_btn text-white text-uppercase mt-2"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from '../components/Radio.vue'
import Checkbox from '../components/Checkbox.vue'
import Emoji from '../components/Emoji.vue'
export default {
  name: 'IndexPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { Radio, Checkbox, Emoji },
}
</script>
