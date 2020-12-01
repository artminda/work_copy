<template>
  <section class="loto">
    <pageTitle :info="loto" :dark="2" :pt="true" :class="{'blur':showPop}" />

    <div class="container">

      <contro :class="{'blur':showPop}" />

      <section class="lottery-container" :class="{'blur':showPop || loadingStatus}">
        <div class="hist_box" key="showInfo_m">
          <div class="hist_inline-flex text-y t-head">
            <div class="hist_td">期数</div>
            <div class="hist_td">时间</div>
            <div class="hist_td">{{ openSetTitle }}</div>
            <div class="hist_td" v-if="vhId"></div>
          </div>

          <template v-if="tableData.length !== 0">
            <div
              class="hist_inline-flex"
              :class="{ hist_light: id % 2 === 0, hist_light_m: id % 2 !== 0, accordion:!checkValue(item.win_code) }"
              v-for="(item, id) in displayedPosts"
              :key="id"
            >
              <!-- two display way -->
              <template v-if="checkValue(item.win_code)">
                <div class="hist_td td-l">{{ item.official_issue_code }}期</div>
                <div class="hist_td td-r">{{ item.official_time }}</div>

                <div class="hist_td td-b">
                  <span
                    v-for="(itm, idx) in item.win_code.split(',')"
                    :key="idx"
                    >{{ itm }}</span
                  >
                </div>
              </template>
              
              <template v-else>
                <!-- //越南-中南部-国家彩 & 越南-北部-国家彩 & 泰国彩-->
                  <template v-if="mobile">
                  <!-- mobile -->
                    <div class="hist_td td-r vn-l-m" @click="btnClick_mobile(item)" :class="{'vn-active':showInfo_m && item.issue_id === popDataList.issue_id}">
                      <!-- 以空格切分字串 -->
                      {{ item.official_time.split(/\s+/)[0] }}<br/>
                      {{ item.official_time.split(/\s+/)[1] }}
                      </div>
                    <div class="hist_td td-l vn-r-m" @click="btnClick_mobile(item)" :class="{'vn-active':showInfo_m && item.issue_id === popDataList.issue_id}">{{ item.official_issue_code }}期</div>
                    <div class="down" @click="btnClick_mobile(item)">
                      <img 
                      :class="{'up':showInfo_m && item.issue_id === popDataList.issue_id}"
                      src="../assets/img/freeze/down.png" alt="down">
                    </div>
                  </template>
                  <template v-else>
                    <!-- pc -->
                    <div class="hist_td td-l vn-m">{{ item.official_issue_code }}期</div>
                    <div class="hist_td td-r vn-m">{{ item.official_time }}</div>
                    <div class="hist_td td-b">
                      <span
                        v-for="(itm, idx) in item.win_code[0].resultList[0].split(
                          ','
                        )"
                        :key="idx"
                        >{{ itm }}
                        </span>
                        <button v-if="vhId" @click="btnClick(item)" :disabled="loadingStatus">
                        详情
                      </button>
                    </div>
                  </template> 
                  <transition name="listpopMobile">
                      <listpopMobile
                      v-if="showInfo_m && item.issue_id === popDataList.issue_id"
                      class="hist_td td-b"
                      :lotteryList="popDataList"
                      :vhId="vhId"/>
                  </transition>                
              </template>
              <!-- two display way -->
            </div>
          </template>
          <template v-else-if="tableData.length == 0 && loadingStatus == false">
            <div class="no-data">
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

      <loading v-if="loadingStatus" class="wloading"></loading>
    </div>
  </section>
</template>

<script>
import { loto } from '../libs/metas'
import contro from '../components/contro'
import pageTitle from '../components/page-title'
import listpop from '../components/listpop'
import listpopMobile from '../components/listpopMobile'
import loading from '../components/loading'
import { NumPost, NavPost, getNowFormatDate } from '../api/index'
import { mapState, mapActions, mapGetters } from 'vuex'
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'
import {official_classify,foreign_t,foreign_children} from '@/libs/lotoMap'

export default {
  name: 'lottery',
  data() {
    return {
      loto,
      page: 1,
      perPage: 10,
      pages: [],
      showPop: false,
      showInfo_m: false,
      vhId: '',
      popDataList: null,
      openSetTitle: '开奖号码',
      mobile: false
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
    lottery(v1, v2) {
      let a = official_classify.some((item) => {
        return item.name == v1
      })

      let ab = a?official_classify:foreign_t

      const getId = ab.find((item) => { 
         return item.name == v1 
         })
      this.vhId = getId.id

      if (ab == official_classify) {
        this.getNavList(getId.id)
      } else {
        const id = [104, 105, 106]
        if (id.includes(this.vhId)) {
          this.foreign_childrens_vh(this.vhId)
        } else {
          this.foreign_childrens(this.vhId)
        }
      }
    },
    lotteryList(value) {
      let lottery = this.lotteryArr.find((item) => {
        return item.name == value
      })
      this.gitNumPost(lottery.id)
    },
    vhId(value) {
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
    ...mapActions(['gitNumPost','getNavList', 'init_country','foreign_childrens_vh','foreign_childrens']),
  
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
      return tableData.slice(from, to)
    },
    pageChange(page) {
      this.page = page
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
    btnClick_mobile(i) {
      let mobile = document.documentElement.clientWidth;
       if (mobile >= 767) {
         return
       }
      //  open another
       if (this.popDataList && i.issue_id !== this.popDataList.issue_id){
         this.showInfo_m = true
       } else {
      // open same one   
         this.showInfo_m = !this.showInfo_m
       }
      let data = {
        title: this.lotteryList,
        issue_id: i.issue_id,
        official_issue_code: i.official_issue_code,
        win_code: i.win_code,
      }
      this.popDataList = data
    },
    closeBtn() {
      this.showPop = false
    },

  },
  computed: {
    ...mapState([
      'country',
      'countryName',
      'official_classify',
      'foreign_t',
      'foreign_children',
    ]),
    ...mapGetters(['loadingStatus', 'tableData', 'lotteryList', 'lotteryArr', 'lottery','lotteryItem']),
    
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
    
    displayedPosts() {
      return this.paginate(this.tableData)
    }
  },
  mounted() {
    this.init_country()
    this.mobile = document.documentElement.clientWidth <= 767 ;
  },
  components: {
    contro,
    listpop,
    listpopMobile,
    loading,
    pageTitle,
    VueAdsPagination,
    VueAdsPageButton,
  },
}
</script>
<style lang="scss" scoped>
  @import "@/assets/css/loto.scss";
</style>
