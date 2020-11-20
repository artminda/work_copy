<template>
  <section :class="datas.class">
    <div class="container"> 
    
    <pageTitle :info="datas" :dark="true" :pt="true"/> 

    <div class="animatedBox">   
      <!-- right   -->
        <div class="row-center index-r active animated "
        v-animated="{ className: 'fadeInRight' }">
            <img :src="datas.img2" class="m-r" alt="b2" >
        </div>

      <!-- conter -->
      <div class="row-center index-c">
        <img :src="datas.img3" class="m-c" alt="3" >
      </div>  
      
      <!-- left -->
          <div class="row-center index-l active animated "
        v-animated="{ className: 'fadeInLeft' }">
            <img :src="datas.img1" class="m-l" alt="b1" >
        </div>    
    </div>

     <btn :buttonText="'产品详情'" />

    </div>
  </section>
</template>

<script>
import pageTitle from '../components/page-title'
import btn from '../components/button'

export default {
  name: 'home-pro',
  props: ['datas'],
  data() {
    return {
    }
  },

  components: {
    pageTitle,
    btn
  },
}
</script>

<style lang="scss" scoped>
.products {
   overflow: hidden;
   background: url(../assets/img/freeze/bg-products.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 700px;
  padding-bottom: 66px;

  .animatedBox {
    display: flex;
    white-space: nowrap;
    width: 100%;
    height: 320px;
    justify-content: center;
    align-items: center;
    padding: 60px 0; 
    
    .index-c {
      position: relative;
      display: inline-block;
      z-index: 6;
    }
    .index-r {
      position: relative;
      display: inline-block;
      z-index: 3;
      left: 100px;
    }
    .index-l {
      position: relative;
      display: inline-block;
      z-index: 2;
      right: 100px;
    }
  }
}
@media screen and (max-width: 640px) {
.products {
  min-height: unset;
  .animatedBox {
    height: unset;
    padding: 30px 0;
      .m-c {
        max-width: 65vw; 
      }
      .m-r {
          max-width: 170px;
        }
      .m-l {
          max-width: 170px;
      }
      .index-r {
         left: 130px;
      }
      .index-l {
         right: 130px;
      }
    }
  }
}
</style>