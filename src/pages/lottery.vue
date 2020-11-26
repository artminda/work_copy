<template>
  <section class="loto">
    <pageTitle :info="loto" :dark="2" :pt="true" />

    <div class="container">
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

      <section class="lottery-container">
        <div class="hist_box">
          <div class="hist_inline-flex text-y t-head">
            <div class="hist_td">期数</div>
            <div class="hist_td">时间</div>
            <div class="hist_td">{{ openSetTitle }}</div>
            <div class="hist_td" v-if="vhId"></div>
          </div>

          <loading v-if="loadingStatus" class="wloading"></loading>

          <template v-if="tableData.length !== 0">
            <div
              class="hist_inline-flex"
              :class="{ hist_light: id % 2 === 0 }"
              v-for="(item, id) in displayedPosts"
              :key="id"
            >
              <!-- two display way -->
              <template v-if="checkValue(item.win_code)">
                <div class="hist_td">{{ item.official_issue_code }}期</div>
                <div class="hist_td">{{ item.official_time }}</div>

                <div class="hist_td hist_td_3">
                  <span
                    v-for="(itm, idx) in item.win_code.split(',')"
                    :key="idx"
                    >{{ itm }}</span
                  >
                </div>
              </template>
              <template v-else>
                <div class="hist_td">{{ item.official_issue_code }}期</div>
                <div class="hist_td">{{ item.official_time }}</div>
                <div class="hist_td">
                  <span
                    v-for="(itm, idx) in item.win_code[0].resultList[0].split(
                      ','
                    )"
                    :key="idx"
                    >{{ itm }}</span
                  >
                </div>
                <div class="hist_td" v-if="vhId">
                  <button @click="btnClick(item)" :disabled="loadingStatus">
                    详情
                  </button>
                </div>
              </template>
              <!-- two display way -->
            </div>
          </template>
          <template v-else-if="tableData.length == 0 && loadingStatus == false">
            <div style="position: relative; left: 100%; top: 60px">
              暂无数据
            </div>
          </template>
        </div>

        <vue-ads-pagination
          class="pagination"
          :totalItems="tableData.length"
          :items-per-page="10"
          :max-visible-pages="3"
          :page="page - 1"
          :loading="loadingStatus"
          @page-change="pageChange"
          @range-change="rangeChange"
        >
          <template slot-scope="props">
            <div class="vue-ads-pr-2 vue-ads-leading-loose">
              Items {{ props.start }} - {{ props.end }} : Total
              {{ props.total }}
            </div>
          </template>
          <template slot="buttons" slot-scope="props">
            <vue-ads-page-button
              v-for="(button, key) in props.buttons"
              :key="key"
              v-bind="button"
              class="page-item"
              :class="{ buttonAct: button.active }"
              @page-change="page = button.page + 1"
            />
          </template>
        </vue-ads-pagination>
      </section>

      <div class="into_footer">奖源稳定 准确无误</div>

      <div class="pop" v-if="showPop" @touchmove.prevent>
        <listpop
          class="listpop"
          @closeBtn="closeBtn"
          :lotteryList="popDataList"
          :vhId="vhId"
        ></listpop>
      </div>
    </div>
  </section>
</template>

<script>
import { loto } from '../libs/metas'
import pageTitle from '../components/page-title'
import listpop from '../components/listpop'
import loading from '../components/loading'
import { NumPost, NavPost, getNowFormatDate } from '../api/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'

export default {
  name: 'lottery',
  data() {
    return {
      loto,
      page: 1,
      perPage: 10,
      pages: [],
      showPop: false,
      vhId: '',
      popDataList: null,
      country: '中国', //一级默认数据
      openSetTitle: '开奖号码',
      lottery: '时时彩', //二级默认数据
      lotteryItem: [], //二级
      lotteryArr: [], //三级
      lotteryList: '', //三级默认数据
    }
  },
  watch: {
    tableData(v1, v2) {
      if (v1) {
        this.setPages()
      }
    },
    country() {
      this.init_country()
    },
    lottery: function (value) {
      let a = this.official_classify.some((index) => {
        return index.name == value
      })
      let that = this
      let ab = function () {
        if (a) {
          return that.official_classify
        } else {
          return that.foreign_t
        }
      }
      let getId = ab().find((item) => {
        return item.name == value
      })
      if (ab() == this.official_classify) {
        this.vhId = getId.id
        this.getNavList(getId.id)
      } else {
        this.vhId = getId.id
        let id = [104, 105, 106]
        if (id.includes(getId.id)) {
          this.foreign_childrens_vh(getId.id)
        } else {
          this.foreign_childrens(getId.id)
        }
      }
    },
    lotteryList: function (value) {
      let lottery = this.lotteryArr.find((item) => {
        return item.name == value
      })
      this.getWinNum(lottery.id)
    },
    vhId: function (value) {
      switch (value) {
        case 104:
          this.openSetTitle = '特别奖'
          break
        case 105:
          this.openSetTitle = '特别奖'
          break
        case 106:
          this.openSetTitle = '一奖'
          break
        default:
          this.openSetTitle = '开奖号码'
      }
    },
  },
  methods: {
    ...mapActions(['gitNumPost']),
    setPages() {
      let numberOfPages = Math.ceil(this.tableData.length / this.perPage)
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i)
      }
    },
    paginate(tableData) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      console.log('from_to', from, to)
      return tableData.slice(from, to)
    },
    pageChange(page) {
      this.page = page
      console.log('pageChange==>', page)
    },

    pageChange_2(buttonPage) {
      this.page = buttonPage + 1
      console.log('buttonPage ==>', buttonPage)
    },

    rangeChange(start, end) {
      console.log('[ rangeChange ]', start, end)
    },
    checkValue(value) {
      if (value instanceof Object) {
        return false
      } else {
        return true
      }
    },
    btnClick(i) {
      this.showPop = true
      let data = {
        title: this.lotteryList,
        official_issue_code: i.official_issue_code,
        win_code: i.win_code,
      }
      this.popDataList = data
    },
    closeBtn() {
      this.showPop = false
    },
    init_country() {
      if (this.country === '中国') {
        this.chinese(this.official_classify)
      } else {
        this.foreigns(this.foreign_t)
      }
    },

    //国内彩种列表
    getNavList(n) {
      this.loading = true
      NavPost(n).then((res) => {
        this.loading = false
        this.lotteryArr = []
        let name = [
          '伦敦1分彩',
          '伦敦2分彩',
          '伦敦3分彩',
          '伦敦5分彩',
          '河内1分彩',
          '河内2分彩',
        ]
        let filterData = []
        res.forEach((item) => {
          if (name.includes(item.lottoCnname)) {
            return
          } else {
            if (item.id === '50') {
              item.lottoCnname = '广西快乐十分'
            }
            filterData.push({ name: item.lottoCnname, id: item.lottoId })
          }
        })
        this.lotteryArr = filterData
        this.lotteryList = this.lotteryArr[0].name
      })
    },
    //表格数据
    getWinNum(id) {
      this.gitNumPost(id)
      //   NumPost(id).then((res) => {
      //     this.loading = false
      //     let arr = []
      //     res.forEach((item) => {
      //       if (item.win_code.length > 100) {
      //         item.win_code = eval(item.win_code)
      //         arr.push(item)
      //       } else {
      //         arr.push(item)
      //       }
      //     })
      //     this.tableData = arr.filter((item) => item.win_code != '[]')
      //   })
    },
    //国内彩系列表
    chinese(official_classify) {
      this.lottery = official_classify[0].name
      this.lotteryItem = official_classify
      this.getNavList(official_classify[0].id)
    },
    //外国彩系列表
    foreigns(foreign_t) {
      this.lottery = foreign_t[0].name
      this.lotteryItem = foreign_t
    },
    //越南彩泰国彩彩种
    foreign_childrens_vh(id) {
      this.lotteryArr = []
      NavPost(id).then((res) => {
        let arr = []
        res.forEach((item) => {
          arr.push({ name: item.lottoCnname, id: item.lottoId })
        })
        this.lotteryArr = arr
        this.lotteryList = this.lotteryArr[0].name
      })
    },
    //其他外国彩种列表
    foreign_childrens(id) {
      let lottery = this.foreign_children[id]
      let arr = []
      arr.push(lottery)
      this.lotteryArr = arr
      this.lotteryList = this.lotteryArr[0].name
    },
  },
  computed: {
    ...mapState([
      'countryName',
      'official_classify',
      'foreign_t',
      'foreign_children',
    ]),
    ...mapGetters(['loadingStatus', 'tableData']),
    displayedPosts() {
      return this.paginate(this.tableData)
    },
    mobile() {
      let fullWidth = 0
      fullWidth = window.innerWidth
      window.onresize = () => {
        fullWidth = window.innerWidth
      }
      if (fullWidth <= 767) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.init_country()
  },
  components: {
    listpop,
    loading,
    pageTitle,
    VueAdsPagination,
    VueAdsPageButton,
  },
}
</script>
<style lang="scss" scoped>
.loto {
  padding: 37px 0;
  background: url(../assets/img/freeze/bg-loto.jpg) no-repeat;
  background-size: cover;
  font-size: 12px;

  .container {
    max-width: 990px;
    padding: 0;
    min-height: 500px;
    .lottery-container {
      background: #0f0f0f;
      height: 607px;
      width: 100%;
      position: relative;
      .hist_box {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 24px 0;
        color: #fff;
        background: #0f0f0f;
        .text-y {
          color: #f5d978;
        }
        .hist_inline-flex {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          height: 52px;
          background: #0f0f0f;
          .hist_td {
            flex: 0 0 27%;
            text-align: center;
            line-height: 43px;
            span {
              display: inline-block;
              font-weight: 500;
              font-size: 18px;
              letter-spacing: 0px;
              border: 1px solid #f5d978;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              line-height: 30px;
              color: #f5d978;
              margin: 11px 5px;
            }
            button {
              border: none;
              margin: 0 auto;
              color: #fff;
              background: #ce9c50;
              outline: none;
              width: 48px;
              height: 26px;
              font-size: 12px;
              margin: 0 5px;
              padding: 5px;
              border-radius: 5px;
              cursor: pointer;
            }
          }
          :nth-child(3) {
            flex: 0 0 46%;
          }
        }
        .hist_light {
          background: #1c1c1c;
        }
      }
      .pagination {
        position: absolute;
        width: 100%;
        margin: 0 auto;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        height: 44px;
        background: #0f0f0f;
        .page-item {
          padding: 14px;
          color: #fff;
          background: transparent;
          border: transparent;
          cursor: pointer;
        }
        .buttonAct {
          color: #f5d978;
          text-decoration: underline;
        }
        .vue-ads-leading-loose {
          display: none;
        }
      }
    }
    .into_footer {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 14px;
      margin-top: 34px;
    }
  }
}

.btn.btn-default:hover {
  color: #fff;
}
.btn {
  border-radius: 5px;
  box-shadow: none;
  padding: 7px 10px;
  cursor: pointer;
}
.btn.btn-default {
  border: none;
  background: #0f0f0f;
  color: #fff;
}
.pop {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  .listpop {
    margin: auto;
  }
}

@media screen and (max-width: 767px) {
  .loto .container {
    .lottery-container {
      height: auto;
      .hist_box {
        .hist_inline-flex {
          flex-wrap: wrap;
          height: auto ;
          .hist_td {
            flex: 0 0 50% ;
            padding: 0 9px;
            span {
              width: 48px;
              height: 48px;
              line-height: 48px;
              font-size: 27px;
              text-align: center;
              margin: 20px 4px;
            }
            button {
            }
          }
          :nth-child(1) {
            text-align: left;
          }
          :nth-child(2) {
            text-align: right;
          }
          :nth-child(3) {
            flex: 0 0 100%;
          }
        }
        .hist_light {
          background: #1c1c1c;
        }
        .t-head {
          display: none ;
        }
      }
      .pagination {
         position: relative;
         bottom: 0;
         height: auto;
         font-size: 18px;
         .page-item {
          padding: 14px 10px;
        }
      } 
    }
  }

}
</style>
