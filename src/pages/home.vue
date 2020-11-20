<template>
  <div class="wrapper">
    <header>
      <div class="tp-banner-container">
        <div class="tp-banner">
          <div
            class="tp-caption active animated "
            v-animated="{ className: 'fadeInDown' }"
          >
            <div class="logoBox">
              <img src="../assets/img/freeze/rainbow.png" class="back" />
              <img src="../assets/img/freeze/logo.png" class="front"/>
            </div>  
            <h3>十年老牌胜券在握</h3>
            <p>
              行业顶尖的性能、安全解决专家，致力于为全球博弈企业提供专业、稳定、高效的技术解决方案。
            </p>
          </div>
        </div>
      </div>
    </header>
    <home-his :datas="metas.history"></home-his>
    <homeProducts :datas="metas.products"></homeProducts>
    <homeAbout :datas="metas.about"></homeAbout>
    <homeContant :datas="metas.contant"></homeContant>
  </div>
</template>
<script>
import * as metas from '../libs/metas'
import homeHis from '../components/home-his'
import homeAbout from '../components/home-about'
import homeContant from '../components/home-contant'
import homeProducts from '../components/home-products'
import Product from './product.vue'
import HomeAbout from '../components/home-about.vue'
import Contact from './contact.vue'

export default {
  name: 'Home',
  data() {
    return {
      metas,
      isShow: false,
    }
  },
  components: {
    homeHis,
    homeAbout,
    homeContant,
    homeProducts,
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

  .tp-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: none;
    background: url(../assets/img/transparent.jpg) no-repeat center;
    background-size: cover;
    overflow: hidden;
    .tp-caption {
      text-align: center;
      margin: auto;
      // margin-top: 388px;
      font-size: 24px;
      font-weight: 700;
      line-height: 34.75px;
      color: #fff;
      .logoBox {
        display: flex;
        white-space: nowrap;
        width: 837px;
        height: 321px;
        justify-content: center;
        align-items: center;
        .front {
          position: absolute;
          display: inline-block;
          z-index: 4;
        }
        .back {
          position: absolute;
          display: inline-block;
          z-index: 3;
          left: -180px;
          width: 160%;
        }
      }
      p {
        position: relative;
        width: 360px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20.27px;
        margin: 20px auto;
      }
      h3 {
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .tp-banner-container {
    height: 100vh;
    padding-top: 100px;
    .tp-caption {
      p {
        width: 100%;
        padding: 0 15px;
      }
      img {
        width: 312px;
      }
    }
  }
}
</style>