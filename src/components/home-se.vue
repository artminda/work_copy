<template>
  <section :class="datas.class">
    <div class="container">

      <pageTitle :info="datas" /> 

      <div class="row">
        <div class="col-md-12">
          <div
            class="about-item scrollpoint sp-effect2 active animated"
            v-animated="{ className: 'fadeInRight' }"
          >
            <div class="historyArea hidden-xs">
              <div
                v-for="(item, i) in datas.content"
                :key="i"
                class="historyAreaBox-up"
                :class="{ 'historyAreaBox-down': (i + 1) % 2 === 0 }"
              >
                <div class="item">
                  <h1 class="liner-text">{{ year[i] }}</h1>
                  {{ item }}
                </div>
              </div>
            </div>

            <div class="historyArea visible-xs">
              <div
                v-for="(item, i) in datas.content"
                :key="i"
                class=""
                :class="{ 'historyArea-r': (i + 1) % 2 === 0 }"
              >
                <div
                  class="historyAreaBox-up"
                  :class="{ 'historyAreaBox-down': (i + 1) % 2 === 0 }"
                >
                  <div class="item">
                    <h1 class="liner-text">{{ year[i] }}</h1>
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>

            <!-- <p class="hidden-xs" v-html="datas.content"></p> -->
            <!-- <div class="visible-xs">
              <div class="block">
                <vbutton :buttonText="buttonText" @chack="chacks"></vbutton>
                <div class="detail" :style="updateClass">
                    <div v-html="datas.content"></div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import vbutton from './button'
import pageTitle from './page-title'

export default {
  name: 'home-header',
  props: ['datas'],
  data() {
    return {
      year: ['2011', '2013', '2015', '2019', 'NOW'],
      buttonText: '点击查看详情',
      isShow: false,
    }
  },
  methods: {
    chacks(e) {
      this.buttonText = e
    },
  },
  computed: {
    updateClass() {
      let inherit = {
        maxHeight: 'inherit',
      }
      if (this.buttonText == '点击查看详情') {
        return false
      }
      return inherit
    },
  },
  components: {
    pageTitle
    // vbutton,
  },
}
</script>

<style lang="scss" scoped>
.historyArea {
  display: flex;
  height: 350px;
  padding: 20px 0;
  .historyAreaBox-up {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    width: 20%;
    .item {
      color: #fff;
      font-size: 12px;
      line-height: 17px;
      h1 {
        font-weight: 300;
        font-size: 32px;
        line-height: 46px;
      }
    }
  }
  .historyAreaBox-down {
    align-items: flex-end;
  }
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

  .history {
    overflow: hidden;
    background: url(../assets/img/freeze/bg-history.jpg) no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 700px;
  }

  .row p {
    color: #333333;
    font-size: 20px;
    line-height: 48px;
    width: 530px;
    text-align: justify;
  }
  .advantage {
    overflow: hidden;
    background: url(../assets/img/freeze/bg-Advantage.jpg) no-repeat;
    background-size: cover;
    background-position: center center;
    height: 900px;
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
  .block > .case-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    margin: 0 auto;
    color: #fff;
    background: #b47f41;
    cursor: pointer;
  }
  .block > .detail {
    max-height: 72px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .section-heading {
    img {
      width: 80%;
      height: 80%;
      margin: 0 auto;
    }
    text-align: center;
    h1 {
      display: block;
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 640px) {
  .historyArea {
    flex-direction: column;
    padding-bottom: 20px;
    height: auto;
    .historyAreaBox-up {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      width: 65%;
      .item {
        color: #fff;
        font-size: 10px;
        h1 {
          padding-top: 1px;
          font-size: 26px;
        }
      }
    }
    .historyAreaBox-down {
      text-align: end;
      justify-content: flex-end;

    }
    .historyArea-r {
      display: flex;
      justify-content: flex-end;
    }
  }
  .section-heading h1 {
    display: block;
    font-size: 28px;
    font-weight: 500;
    margin: 20px 0;
    color: #333;
  }

  .block {
    font-size: 18px;
  }
  .history {
    height: 790px;
    margin:0 0 20px 0;
    padding: 0 14px;
    h1 {
      padding-top: 51px;
      margin: 0;
    }
    p {
      line-height: 26px;
    }
    .visible-xs {
      color: #fff;
      margin: 0 auto;
    }
  }
}
</style>