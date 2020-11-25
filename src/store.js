import Vue from 'vue'
import Vuex from 'vuex'
import { NumPost, NavPost, getNowFormatDate } from './api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingStatus: false,
    tableData: [],
    country: '中国',//一级默认数据
    countryName: ['中国', '外国'],//一级
    official_classify: [
      { name: '时时彩', id: 1 },
      { name: '11选5', id: 2 },
      { name: 'PK10', id: 3 },
      { name: '快3', id: 4 },
      { name: '快乐8', id: 5 },
      { name: '幸运28', id: 6 },
      { name: '六合彩', id: 7 },
      { name: '福彩3D', id: 8 },
      { name: 'CQ-快10', id: 9 },
      { name: 'GX-快10', id: 10 }
    ],
    foreign_t: [
      { name: '伦敦', id: 0 },
      { name: '河内', id: 1 },
      { name: '东京', id: 2 },
      { name: '仰光', id: 3 },
      { name: '澳洲', id: 4 },
      { name: '加拿大', id: 5 },
      { name: '斯洛伐克', id: 6 },
      { name: '越南-北部-国家彩', id: 105 },
      { name: '越南-中南部-国家彩', id: 104 },
      { name: '泰国彩', id: 106 }
    ],
    foreign_children: [
      { name: '伦敦1分彩', id: 1000001 },
      { name: '河内1分彩', id: 1000005 },
      { name: '东京1分彩', id: 1000009 },
      { name: '仰光1分彩', id: 1000013 },
      { name: '澳洲3分彩', id: 1000017 },
      { name: '加拿大3分彩', id: 1000018 },
      { name: '斯洛伐克5分彩', id: 1000019 },
      { name: '泰国彩', id: 2000036 }
    ],
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
    setNewValue(state, value){
       state[value[0]] = value[1]
       console.log('[MU]-loadingStatus:',state[value[0]]);
    }
  },
  actions: {
    actionClick({ commit }) {
      commit('input', 'input!!')
    },

    gitNumPost({ commit }, id) {
      commit('setNewValue', ['loadingStatus',true])
      NumPost(id).then((res) => {
        console.log('res', res),
        commit('setNumPost', res)
        commit('setNewValue', ['loadingStatus',false])
      })
    },

    actionInput({ commit }, { inputValue }) {
      commit('input', inputValue)
    }
  },
  getters: {
    tableData(state) {
      return state.tableData
    },
    loadingStatus(state) {
      return state.loadingStatus
    }
  }
})
