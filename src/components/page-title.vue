<template>
    <div
        class="section-heading active animated "
        v-animated="{ className: 'fadeInDown' }"
      >
        <h1 class="liner-text" :class="{'dark':dark===2, 'title-pt':pt}">{{ info.title }}</h1>
        <p class="">{{ info.des }}</p>
        <img v-for="(item, i) in 3" :key="i" src="../assets/img/freeze/footer-icon-white.png" class="logo-dot">
        <p v-if="info.desInfo" class="desInfo">{{info.desInfo}}</p>
    </div>
</template>

<script>
export default {
  name: 'page-title',
  props: ['info','dark','pt'],
}
</script>

<style lang="scss" scoped>
  .section-heading {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 68px;
    h1 {
      width: 100%;
      text-align: center;
      display: inline-block;
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 0;
    }
    p {
      width: 100%;
      text-align: center;
      letter-spacing: 3px;
      margin-left: 5px;
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      line-height: 26px;
      margin-top: 10px;
    }
    .desInfo {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 27px;
    }
    .logo-dot {
      width: 4px;
      height: 5px;
      margin: 10px 3.5px;
    }
  }

  @media (max-width: 768px) {
     .section-heading {
        padding-top: 0px;
        .desInfo {
          font-size: 12px;
          line-height: 20px;
          padding: 0 10px;
        }
     }
  }
</style>