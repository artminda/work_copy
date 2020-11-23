<template>
  <section :class="datas.class">
    <div class="container"> 
    
    <pageTitle :info="datas" :dark="2" /> 

    <div class="iconBox">
      <div class="icon">
        <div class="col-12">
          <img src="../assets/img/freeze/phone.png" alt="">
        </div>
        <span class="col-12">Phone/Telegram</span>
        <span class="g-t">+63 888 888 8888</span>
      </div>
      <div class="icon">
        <div class="col-12">
          <img src="../assets/img/freeze/skype.png" alt="">
        </div>
        <span class="col-12">Skype</span>
        <span class="g-t">love_n_peace</span>
      </div>
      <div class="icon">
        <div class="col-12">
          <img src="../assets/img/freeze/mail.png" alt="">
        </div>
        <span class="col-12">Email</span>
        <span class="g-t">love@KKgaming.com</span>
      </div>
    </div>

    </div>
  </section>
</template>

<script>
import pageTitle from '../components/page-title'

export default {
  name: 'contant',
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
.contant {
   overflow: hidden;
   background: url(../assets/img/freeze/bg-contant.jpg) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 410px;
  padding-bottom: 66px;
  
  .iconBox {
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    .icon {
      display: flex;
      flex-direction: column;
      margin: 10px 54px;
      text-align: center;
      img {
        width: 80px;
        padding-bottom: 5px;
      }
      span {
        width: 100%;
        padding: 2.5px 0;
      }
      .g-t {
        color: #846029;
        white-space: nowrap;
      }
    }
  }
}

 @media (max-width: 640px){
   .contant {
     .container {
       padding-top: 47px;
     .iconBox{
        flex-direction: column;
     }
   }
 }
}
</style>