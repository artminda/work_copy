<template>
  <div class="contro">

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

    <div class="space-between">

    <div class="arrow hidden-xs">
      <img src="../assets/img/freeze/right_s.png" alt="right_s">
    </div>
    
    <v-select
    v-model="lottery"
    label="name"
    :options="lotteryItem" 
    :reduce="item => item.name"
    :components="{OpenIndicator}"
    />

    <div class="arrow hidden-xs">
      <img src="../assets/img/freeze/right_s.png" alt="right_s">
    </div>

    <v-select
    v-model="lotteryList" 
    v-if="lotteryList"
    label="name"
    :options="lotteryArr" 
    :reduce="item => item.name"
    :components="{OpenIndicator}"
    />
  
    </div>
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

    lottery: {
      get() {
        return this.$store.getters.lottery
      },
      set(val) {
        this.$store.commit('setNewValue', ['lottery', val])
      },
    },
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
  flex-wrap: wrap;
  .arrow {
    display: flex;
    align-items: center;
    margin: 5px 15px;
  }
 .space-between {
   display: flex;
  .v-select {
    div,input { 
      cursor: pointer;
      padding: 0;
    }
    .vs__dropdown-toggle,.vs__dropdown-menu {
      background: #0f0f0f;
      padding: 0;
      .vs__selected-options{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        min-width: 73px;
        height: 27px;
        .vs__selected {
          position: relative;
          padding: 0 10px;
          color: #fff;
          height: 27px;
          margin: 0;
        }
      }
      .vs__clear{
        display: none;
      }
       .drop-background {
          width: 16px;
          height: 14px;
          margin: 0 4px;
          background: url("../assets/img/freeze/down.png") no-repeat center;
        }
    }
    .vs__dropdown-option{
        color: #a1a1a1;
      &:hover,&--highlight{
        color: #fff;
        background-color: #CE9C50;
      }
    }
  }
 }

.switch-button {
  width: 183px;
  height: 30px;
  text-align: center;
  position: relative;
  will-change: transform;
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
        color: #a1a1a1;
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
  .contro {
    width: 94%;
    margin: 0 auto; 
  .space-between {
   justify-content: space-between;
   width: 100%;
  .v-select {
    height: 38px;
    flex: 0 0 48%;
    margin: 20px 0;
    .vs__dropdown-option{
        line-height: 38px;
    }
    .vs__dropdown-toggle {
      .vs__selected-options {
        height: 38px;
        .vs__selected {
            height: 38px;
        }
      }
    }
  }
  }
  .switch-button {
  width: 100%;
  height: 38px;

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
}

</style>
