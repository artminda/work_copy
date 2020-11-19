<template>
    <div
        class="section-heading scrollpoint sp-effect3 active animated"
        v-animated="{ className: 'fadeInDown' }"
      >
        <!-- <img :src="datas.img" class="visible-xs"> -->
        <h1 class="liner-text">{{ info.title }}</h1>
        <p class="">{{ info.des }}</p>
        <img v-for="(item, i) in 3" :key="i" src="../assets/img/freeze/footer-icon-white.png">
    </div>
</template>

<script>
export default {
  name: 'page-title',
  props: ['info'],
}
</script>

<style lang="scss" scoped>
  .section-heading {
    text-align: center;
    padding-top: 145px;
    h1 {
      display: inline-block;
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 0;
    }
    p {
      letter-spacing: 3px;
      margin-left: 5px;
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      line-height: 26px;
      margin-top: 10px;
    }
  }
</style>