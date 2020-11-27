<template>
  <div class="contro">
    <!-- <select class="btn btn-default btn-xs" v-model="country">
      <option v-for="v in countryName" :key="v" class="handle">{{ v }}</option>
    </select> -->

    <div class="switch-button">
      <div
        class="active"
        :class="{ left: switch_way === 'l', right: switch_way === 'r' }"
      ></div>
      <button @click="switch_way = 'l'" class="switch-button-case left">
        <div
          class="text"
          :class="{ white: switch_way === 'l', black: switch_way === 'r' }"
          >{{countryName[0]}}</div
        >
      </button>
      <button @click="switch_way = 'r'" class="switch-button-case right">
        <div
          class="text"
          :class="{ black: switch_way === 'l', white: switch_way === 'r' }"
          >{{countryName[1]}}</div
        >
      </button>
    </div>

    <span> > </span>

    <v-select
    v-model="lottery"
    label="name"
    :options="lotteryItem" 
    :reduce="item => item.name"
    :components="{OpenIndicator}"
    />

     <!-- <div class="btn">
      <select v-model="lottery" class="select_style">
        <option v-for="v in lotteryItem" :key="v.id">{{ v.name }}</option>
      </select>
      </div> -->

    <span> > </span>

      <!-- <div class="btn">
        <select
          v-if="lotteryList"
          v-model="lotteryList"
          class="select_style"
        >
          <option v-for="v in lotteryArr" :key="v.id">{{ v.name }}</option>
        </select>
      </div> -->

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'contro',
  data() {
    return {
      switch_way: 'l',
      OpenIndicator: {
        render: createElement => createElement('span', {class: {'drop-background':true}}),
      },
    }
  },
  watch: {
    switch_way(val){
       if (val === 'r'){
         this.$store.commit('setNewValue', ['country', this.countryName[1]])
       } else {
         this.$store.commit('setNewValue', ['country', this.countryName[0]])
       }
    }
  },
  computed: {
    ...mapState(['countryName','country']),

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
    lottery: {
      get() {
        return this.$store.getters.lottery
      },
      set(val) {
        this.$store.commit('setNewValue', ['lottery', val])
      },
    },
    lotteryItem: {
      get() {
        return this.$store.state.lotteryItem
      },
      set(val) {
        this.$store.commit('setNewValue', ['lotteryItem', val])
      },
    },
  },
  components:{

  }
}
</script>

<style lang="scss" scope>
.select-selected {
  background-color: DodgerBlue;
}
.contro{
  display: flex;
  span {
    display: flex;
    align-items: center;
    margin: 5px 15px;
  }
  .v-select {
    div { 
      padding: 0;
      cursor: pointer;
    }
    .vs__dropdown-toggle {
      padding: 0;
      .vs__selected-options{
        min-width: 73px;
      }
      .vs__clear,.vs__search{
        display: none;
      }
       .drop-background {
          width: 16px;
          height: 14px;
          margin: 0 4px;
          background: url("../assets/img/freeze/down.png") no-repeat center;
        }
    }
  }

  // .btn {
  //   position: relative;
  //   &::before {
  //       position: absolute;
  //       z-index: -1;
  //       top: 0;
  //       right: 0;
  //       // transform: translateY(-25%);
  //       width: 100%;
  //       height: 100%;
  //       /* 使用伪元素需加上content，否则无效 */
  //       content: '';
  //       background: url("../assets/img/freeze/down.png") no-repeat 97% center;
  //       background-size: 8% 30%;
  //       // transform: rotate(180deg);
  //     &:focus {
  //       transform: rotate(30deg);
  //     }
  //   }
  //   .select_style {
  //   text-align: center; 
  //   color: #fff;
  //   border-radius: 5px;
  //   background: #0f0f0f;
  //   & option {
  //      color: #828282;
  //   }
  // }
  //   select {
  //       width: 200px;
  //       padding: 5px;
  //       /* 清楚select原始样式 */
  //       -webkit-appearance: none;
  //       -moz-appearance: none;
  //       -ms-appearance: none;
  //       appearance: none;
  //   }
  //   /* --ie清除--*/
  //   select::-ms-expand{ display: none; }
  // }


.switch-button {
  width: 183px;
  height: 27px;
  text-align: center;
  position: relative;
  // left: 0;
  // top: 50%;
  // transform: translate3D(-50%, -50%, 0);
  will-change: transform;
  z-index: 2;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease all;
  border: 3px solid #0f0f0f;
  background: #0f0f0f;
  &-case {
    display: inline-block;
    background: #0f0f0f;
    width: 49%;
    height: 100%;
    color: #151515;
    position: relative;
    border: none;
    transition: 0.3s ease all;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-bottom: 1px;
    .text {
      font-size: 10px;
      position: relative;
      z-index: 99;
      &.black {
        color: #828282;
      }
      &.white {
        color: #fff;
      }
    }
  }
  .active {
    background-color: #CE9C50;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    transition: 0.3s ease-out all;
    &.left {
      left: 0%;
      color: red;
    }
    &.right {
      left: 50%;
      color: red;
    }
  }
}
}
@media (max-width: 767px) {
  .switch-button {
  width: 366px;
  height: 38px;
  left: 50%;
  top: 50%;
  &-case {
    .text {
      font-size: 14px;
      &.black {
      
      }
      &.white {
        
      }
    }
  }
  .active {
 
    &.left {
    
    }
    &.right {
    
    }
  }
}

}

</style>
