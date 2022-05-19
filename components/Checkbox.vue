<template>
  <div>
    <li v-for="item in dummyData" :key="item">
      <label
        :class="isActive(item) ? 'active' : ''"
        class="step_1 position-relative bg-white shadow animate__animated animate__fadeInRight animate_200ms"
        >{{ item }}
        <input
          v-model="selected"
          @input="$store.dispatch('setAnswer', selected)"
          type="checkbox"
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
      dummyData: ['ABC', 'DEF', 'GHR', 'KTY'],
      selected: [],
    }
  },
  computed: {
    ...mapGetters({
      question: 'getQuestion',
      answer: 'getAnswer',
    }),
  },
  watch: {
    selected(val) {
      this.$store.dispatch('setAnswer', this.selected)
    },
  },
  methods: {
    isActive(item) {
      return this.selected.includes(item)
    },
  },
}
</script>

<style></style>
