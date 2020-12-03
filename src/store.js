import Vue from 'vue'
import Vuex from 'vuex'
import {official_classify,foreign_t,foreign_children} from '@/libs/lotoMap'
import { NumPost, NavPost, getNowFormatDate } from './api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    tableData(state) {
      return state.tableData
    },
    loadingStatus(state) {
      return state.loadingStatus
    },
    lottery(state) {
      return state.lottery
    },
    lotteryList(state) {
      return state.lotteryList
    },
    lotteryArr(state) {
      return state.lotteryArr
    },
    lotteryItem(state) {
      return state.lotteryItem
    }
  },

  state: {
    lottery: '时时彩', //二级默认数据
    lotteryItem: [], //二级
    country: '中国', //一级默认数据
    lotteryList: '', //三级默认数据
    lotteryArr: [], //三级
    loadingStatus: false,
    tableData: [],
    countryName: ['中国', '外国'],//一级
  },

  mutations: {
    setNumPost(state, res) {
      let arr = []
          res.forEach((item) => {
            if (item.win_code.length > 100) {
              item.win_code = eval(item.win_code)
              arr.push(item)
            } else {
              arr.push(item)
            }
          })
          state.tableData = arr.filter((item) => item.win_code != '[]')
    },
    setLotteryList(state, res) {
      let lotteryArr = []
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
        lotteryArr = filterData
        state.lotteryArr = lotteryArr
        state.lotteryList = lotteryArr[0].name
    },
    setNewValue(state, value){
       state[value[0]] = value[1]
    }
  },

  actions: {
    init_country({ state,dispatch,commit }){
      if (state.country === '中国') {
        //国内彩系列表
        commit('setNewValue', ['lottery',official_classify[0].name])
        commit('setNewValue', ['lotteryItem',official_classify])
        dispatch('getNavList',official_classify[0].id)
      } else {
        //外国彩系列表
        commit('setNewValue', ['lottery',foreign_t[0].name])
        commit('setNewValue', ['lotteryItem',foreign_t])
      }
    },

    //国内彩种列表
    getNavList({ commit }, id ) {
      commit('setNewValue', ['loadingStatus',true])
      NavPost(id).then((res) => {
        // console.log('getNavList',res);
        commit('setLotteryList', res)
        commit('setNewValue', ['loadingStatus',false])
      })
    },

      //越南彩泰国彩彩种
      foreign_childrens_vh({ commit },id) {
        commit('setNewValue', ['lotteryArr',[]])
        NavPost(id).then((res) => {
          let arr = []
          res.forEach((item) => {
            arr.push({ name: item.lottoCnname, id: item.lottoId })
          },
          // console.log('NavPost',arr)
          ),
          commit('setNewValue', ['lotteryArr', arr ])
          commit('setNewValue', ['lotteryList', arr[0].name ])
        })
      },

      //其他外国彩种列表
      foreign_childrens({ commit},id) {
        const lottery = foreign_children[id]
        const arr = []
        arr.push(lottery)
        commit('setNewValue', ['lotteryArr', arr ])
        commit('setNewValue', ['lotteryList', arr[0].name ])
      },
   
    //表格数据
    gitNumPost({ commit }, id) {
      commit('setNewValue', ['loadingStatus',true])
      NumPost(id).then((res) => {
        // console.log('NumPost',res);
        commit('setNumPost', res)
        commit('setNewValue', ['loadingStatus',false])
      })
    },

    actionInput({ commit }, { inputValue }) {
      commit('input', inputValue)
    }
  },

})
