<template>
  <section :class="datas.class">
    <div class="container"> 
    
    <pageTitle :info="datas" :pt="true"/> 

    <div class="row about-item scrollpoint sp-effect2 active animated "
            v-animated="{ className: 'fadeInRight' }">
      <div class="col-6 col-xs-12 about-pic">
        <img :src="datas.img1" alt="info">
      </div>
      <div class="col-6 col-xs-12">
        <div class="col-12 text">
           <h1 class="liner-text">{{datas.titleTips1}}</h1>
           <p>{{datas.content1}}</p>
        </div>
        <div class="col-12 text">
           <h1 class="liner-text">{{datas.titleTips2}}</h1>
           <p>{{datas.content2}}</p>
        </div>
      </div>
    </div>

    </div>
  </section>
</template>

<script>
import pageTitle from '../components/page-title'

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
    pageTitle
  },
}
</script>

<style lang="scss" scoped>
.about {
   overflow: hidden;
   background: url(../assets/img/freeze/bg-about.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 700px;
  padding-bottom: 66px;
  .about-pic {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 377px;
    height: 245px;
  }
}
@media (max-width: 767px) {
    img {
    max-width: 269px;
    max-height: 175px;
  }
}
</style>