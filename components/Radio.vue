<template>
  <div>
    <li v-for="item in dummyData" :key="item">
      <label
        :class="item === answer ? 'active' : ''"
        class="step_1 position-relative bg-white shadow animate__animated animate__fadeInRight animate_200ms"
        >{{ item }}
        <input
          v-model="selected"
          @input="$store.dispatch('setAnswer', item)"
          type="radio"
          name="stp_1_select_option"
          :value="item"
        />
      </label>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selected: null,
      dummyData: ['IBM', 'MAC', 'WIN', 'LINUX'],
    }
  },
  computed: {
    ...mapGetters({ question: 'getQuestion', answer: 'getAnswer' }),
  },
}
</script>

<style></style>
