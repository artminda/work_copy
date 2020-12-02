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
        background: url(data:image/png;base64,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) no-repeat;
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