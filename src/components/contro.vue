<template>
  <div>
    <select class="btn btn-default btn-xs" v-model="country">
      <option v-for="v in countryName" :key="v">{{ v }}</option>
    </select>
    <span>> </span>
    <select class="btn btn-default btn-xs" v-model="lottery">
      <option v-for="v in lotteryItem" :key="v.id">{{ v.name }}</option>
    </select>
    <span> > </span>
    <select
      v-if="lotteryList"
      class="btn btn-default btn-xs"
      v-model="lotteryList"
    >
      <option v-for="v in lotteryArr" :key="v.id">{{ v.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'contro',
  data() {
    return {}
  },
  computed: {
    ...mapState(['countryName']),

    country: {
      get() {
        return this.$store.state.country
      },
      set(val) {
        this.$store.commit('setNewValue', ['country', val])
      },
    },
    lotteryList: {
      get() {
        return this.$store.getters.lotteryList
      },
      set(val) {
        this.$store.commit('setNewValue', ['lotteryList', val])
      },
    },
    lotteryArr: {
      get() {
        return this.$store.getters.lotteryArr
      },
      set(val) {
        this.$store.commit('setNewValue', ['lotteryArr', val])
      },
    },
    lottery: {
      get() {
        return this.$store.getters.lottery
      },
      set(val) {
        this.$store.commit('setNewValue', ['lottery', val])
      },
    },
    lotteryItem: {
      get() {
        return this.$store.state.lotteryItem
      },
      set(val) {
        this.$store.commit('setNewValue', ['lotteryItem', val])
      },
    },
  },
}
</script>

<style>
</style>