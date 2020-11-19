<template>
  <div class="wrapper">
    <header>
      <div class="tp-banner-container">
        <div class="tp-banner">
          <div
            class="tp-caption active animated"
            v-animated="{ className: 'fadeInDown' }"
          >
            十年老牌胜券在握
            <p>
              行业顶尖的性能、安全解决专家，致力于为全球博弈企业提供专业、稳定、高效的技术解决方案。
            </p>
          </div>
          <div class="tp-bannertimer"></div>
        </div>
      </div>
    </header>
    <home-se :datas="metas.history"></home-se>
    <section class="about">
      <div class="container">
         
      </div>
    </section>
    <!-- <home-se ></home-se> -->
  </div>
</template>
<script>
import * as metas from '../libs/metas'
import homeSe from '../components/home-se'

export default {
  name: 'Home',
  data() {
    return {
      metas,
      isShow: false,
    }
  },
  components: {
    homeSe,
  },
}
</script>
<style lang="scss" scoped>
// input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
//     -webkit-appearance: none !important;
// }

// input[type="number"] {
//     -moz-appearance: textfield;
// }

.tp-banner-container {
  max-height: none;
  overflow: visible;
  height: 841px;
  padding-top: 141px;
  .tp-down {
    position: absolute;
    left: 50%;
    margin: -40px;
    z-index: -1;
    img {
      width: 60%;
      height: 60%;
    }
  }
}
.tp-banner {
  height: 100%;
  max-height: none;
  background: url(../assets/img/transparent.jpg) no-repeat center;
  background-size: cover;
  overflow: hidden;
  .tp-caption {
    text-align: center;
    margin: auto;
    margin-top: 388px;
    font-size: 24px;
    font-weight: 700;
    line-height: 34.75px;
    color: #fff;
    p {
      position: relative;
      width: 360px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20.27px;
      margin: 20px auto;
    }
  }
}
.slotholder {
  display: none;
}
.about {
  overflow: hidden;
  background: url(../assets/img/freeze/bg-pros.jpg) no-repeat;
  background-size: cover;
  height: 900px;
  .section-heading {
    h1 {
      color: #fff;
    }
    margin-bottom: 20px;
    text-align: center;
  }
  .about-item {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    width: 510px;
    height: 200px;
    background: rgba(180, 127, 65, 0.4);
    margin-top: 30px;
    h5 {
      color: #fff;
    }
    .fa {
      margin-top: 25px;
      -webkit-transition: all 0.25s ease-in-out;
      -moz-transition: all 0.25s ease-in-out;
      -ms-transition: all 0.25s ease-in-out;
      -o-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;
    }
    span {
      font-size: 16px;
      width: 100%;
      line-height: 24px;
      color: #ffffff;
      display: block;
      margin: 15px auto;
      letter-spacing: 2px;
    }
  }
  .section-heading {
    margin-top: 135px;
    letter-spacing: 10px;
  }
  .row {
    width: 1080px;
    margin: 0 auto;
  }
}
.col-xs-12 {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .tp-down,
  .visible-xs {
    display: none;
  }
  .col-sm-6 {
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
  }
  .section-heading {
    text-align: left;
    margin-top: 100px;
    h1 {
      display: inline-block;
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 0;
    }
    p {
      letter-spacing: 3px;
      margin-left: 5px;
      font-size: 18px;
      color: #717171;
      font-weight: 300;
      margin-top: 10px;
    }
  }
  .row p {
    color: #333333;
    font-size: 20px;
    line-height: 48px;
    width: 530px;
    text-align: justify;
  }
}
@media (max-width: 767px) {
  .block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-flow: column-reverse nowrap;
    margin: 20px auto;
    font-size: 18px;
    color: #333;
    line-height: 36px;
    padding: 10px;
  }
  .section-heading {
    img {
      width: 80%;
      height: 80%;
      margin: 0 auto;
    }
    text-align: center;
    p {
      display: none;
    }
    h1 {
      display: block;
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 0;
    }
  }
  .about {
    height: auto;
    background-position: center;
    padding-bottom: 90px;
    /*padding-right:20px;*/
    .about-item {
      margin: 20px auto;
      width: 100%;
      /*padding-right: 20px;*/
      h5 {
        color: #fff;
      }
    }
    .section-heading {
      margin-top: 50px;
      letter-spacing: 10px;
    }
    .row {
      width: 100%;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 640px) {
  .tp-banner-container {
    height: 100vh;
    padding-top: 100px;
    .tp-caption {
      margin-top: 230px;
      p {
        width: 100%;
        padding: 0 15px;
      }
    }
  }
  .section-heading h1 {
    display: block;
    font-size: 28px;
    font-weight: 500;
    margin: 20px 0;
    color: #333;
  }

  .about {
    .visible-xs {
      margin: 0 auto;
    }
    .col-xs-12 {
      padding: 0;
    }
    .row {
      width: 100%;
    }
    .about-item {
      background: #fff;
      border-radius: 100px;
      height: 60px;
      overflow: hidden;
      margin-top: 40px;
      margin-left: 0;

      .visible-xs {
        width: 100%;
      }
      h5 {
        color: #333;
        text-align: left;
        font-size: 12px;
        margin-top: 5px;
      }
      span {
        color: #333;
        text-align: left;
        font-size: 12px;
        padding: 0;
        margin-top: 0;
        line-height: 14px;
        /*width: 100%;*/
      }
      img {
        background: linear-gradient(-45deg, #b47f41 0%, #e4b87b 100%);
        border-radius: 50px;
        float: left;
        padding: 10px;
        margin: 10px !important;
        display: block;
        height: 70%;
      }
    }
  }
}
</style>