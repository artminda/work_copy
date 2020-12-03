<template>
  <section :class="datas.class" >
    <div class="container"> 

    <pageTitle :info="datas" :dark="datas.i===1?2:1" :pt="true" class="hidden-xs "/>

    <div class="Box row active animated " :class="{'row-reverse ':datas.direction === 'reverse'}"
            v-animated="{ className: 'fadeInRight' }">
  
        <!-- 圖片 -->
        <div class="col-6 col-xs-12 about-pic">
          <gallery v-if="datas.i===1" :datas="datas.imgs"/>
          <img v-else :src="datas.img1" alt="info">
        </div>

        <pageTitle :info="datas" :dark="datas.i===1?2:1" class="visible-xs pt"/>

        <!-- 內文 -->
        <div class="col-6 col-xs-12" :class="{'shrink':datas.i === 1}">    
        <template v-if="datas.class === 'about'"> 
          <div class="col-12 text">
            <h1 class="liner-text">{{datas.titleTips1}}</h1>
            <p>{{datas.content1}}</p>
          </div>
          <div class="col-12 text">
            <h1 class="liner-text">{{datas.titleTips2}}</h1>
            <p>{{datas.content2}}</p>
          </div>
        </template>
        <template v-else>
          <div class="desBox">
            <div v-if="datas.i === 1">
               <p>{{datas.content}}</p>
                <div class="col-12 btn">
                  <btn :buttonText="'产品试玩'"/>
                </div>
            </div>
            <div v-else class="col-12">
              <!-- <p class="des visible-xs">{{datas.desInfo}}</p>       -->
              <p v-for="(items, i) in datas.content" :key="`${items}-${i}`">
                <img src="../assets/img/freeze/footer-icon-white.png" class="logo-dot">{{items}}
              </p>
            </div>
          </div>  
        </template>  
        </div>
  
    </div>
    </div>
  </section>
</template>

<script>
import pageTitle from '../components/page-title'
import btn from '../components/button'
import gallery from '../components/gallery'

export default {
  name: 'about',
  props: ['datas'],
  data() {
    return {
    }
  },
  methods: {
   
  },
  computed: {
   
  },
  components: {
    pageTitle,
    gallery,
    btn
  },
}
</script>

<style lang="scss" scoped>
.about {
   background: url(../assets/img/freeze/bg-about.jpg) no-repeat;
}
.pro-a {
  background: url(../assets/img/freeze/bg_pro_a.jpg) no-repeat;
}
.pro-b {
  background: url(../assets/img/freeze/bg_pro_b.jpg) no-repeat;
   &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 766px;
        background: url(../assets/img/freeze/line.png) no-repeat top center;
        background-size: contain;
  }
}
.pro-c {
  background: url(../assets/img/freeze/bg_pro_c.jpg) no-repeat;
}
.about,.pro-a,.pro-b,.pro-c {
   overflow: hidden;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 700px;
  .container {
    max-width: 882px;
    color: #fff;
    margin-bottom: 72px;
  .Box {
    padding-top: 10px;
    .shrink {
      flex: 0 0 43%;
    }
  }  
  .des {
    margin: 20px auto;
  }  
  .about-pic {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    // height: 245px;
  }
    .desBox {
      padding-bottom: 61px;
      .btn {
        padding-top: 38px;
      }
      .des {
        margin: 20px auto;
      }
      p {
          display: flex;
          align-items: center;
          margin: 6px auto;
          .logo-dot {
            width: 12px;
            height: 15px;
            margin-right: 11px;
          }
        }
    }
  }
}
 @media screen and (max-width: 1020px) and (min-width: 768px) {
  .about,.pro-a,.pro-b,.pro-c {
    min-height: 0px;
    .shrink {
      flex: 0 0 43%;
      }
  }
 }

@media (max-width: 767px) {
    img {
    max-width: 269px;
    max-height: 175px;
  }
  .about,.pro-a,.pro-b,.pro-c {
    .container {
    min-height: 0px;
    margin-bottom: 0;
    padding-bottom: 0px;
    .Box {
      padding-top: 33px !important;
      .shrink {
      flex: 0 0 100%;
    }
      .pt {
        padding-top: 38px;
      }
    }
      .desBox p {
        font-size: 12px;
      }
    }
   }
 }

</style>