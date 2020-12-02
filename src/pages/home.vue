<template>
  <div class="wrapper">
    <header>
      <section id="tp_banner" class="tp-banner-container">
        <div class="tp-banner">
          <div
            class="tp-caption active animated "
            v-animated="{ className: 'fadeInDown' }"
          >
            <div class="logoBox">
              <img src="../assets/img/freeze/logo_rainbow.png" class="logo"/>
              <div class="text">
                <h3>十年老牌胜券在握</h3>
                <p>
                    行业顶尖的性能、安全解决专家，致力于为全球博弈企业提供专业、稳定、高效的技术解决方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    <home-his :datas="metas.history"></home-his>
    <homeProducts :datas="metas.products"></homeProducts>
    <commonInfo :datas="metas.about"></commonInfo>
    <homeContant :datas="metas.contant"></homeContant>
  </div>
</template>
<script>
import * as metas from '../libs/metas'
import commonInfo from '../components/common-info'
import homeHis from '../components/home-his'
import homeContant from '../components/home-contant'
import homeProducts from '../components/home-products'

export default {
  name: 'Home',
  data() {
    return {
      metas,
      // isShow: false,
    }
  },
  components: {
    homeHis,
    commonInfo,
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
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 700px;
        justify-content: center;
        align-items: center;
        .logo {
          width: 1000px;
        }
        .text {
            position: relative;
            bottom: 20%;
            h3 {
                width: 100%;      
                color: #fff;
            }
            p {
                width: 360px;
                font-size: 14px;
                font-weight: 500;
                line-height: 20.27px;
                margin: 20px auto;
            }
        }
      }
    }
     &::after {
        content: '';
        position: absolute;
        width: 1440px;
        height: 700px;
        background: url(../assets/img/freeze/line.png) no-repeat;
        background-position-y: 100%;
  }
 }
}
@media screen and (max-width: 768px) {
    .tp-banner-container {
      height: 100vh;
      padding-top: 100px;
      .tp-banner {
          .tp-caption {
            .logoBox {
              height: 80vh;  
              overflow: hidden;
              .logo {
                width: 650px ;
                top: 0;
              }
              .text {
                  bottom: 15%;
              p {
                 width: 100vw; 
                 padding: 0 15px;
              }
            }
          }
        }
        &::after {
            height: calc(100vh - 100px);
       }
    }
  }
}
</style>