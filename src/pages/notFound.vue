<template>
  <div class="notFound">
    <div class="text">
      <img src="../assets/img/freeze/404.png" alt="404" class="img-404" />
      <h1>找不到当前页面</h1>
      <p>本页正在施工或请重新输入正确网址</p>
      <btn :buttonText="'返回首页'" class="btn" />
      <span class="copyright">
        ©2020 by
        <img src="../assets/img/freeze/logo.png" class="logo" alt="logo" />
        All Rights Reserved.
      </span>
    </div>
  </div>
</template>

<script>
import btn from '../components/button'
export default {
  name: 'notFound',
  components: { btn },
}
</script>

<style lang="scss" scope>
.notFound {
    position: absolute;
    z-index: 99;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 0 138px 138px;
    background: url("../assets/img/freeze/mobil404_bg.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    .text{
        font-size: 18px;
        line-height: 26px;
        color: #fff;
        text-align: left;
        width: 500px;
        h1 {
            color: #fff;
            font-weight: normal;
            font-size: 48px;
            line-height: 70px;
            margin: 15px 0;
        }
        span {
            font-size: 12px;
            line-height: 14px;
        }
        .btn {
            margin: 50px 0;
            background: #CE9C50;
            font-size: 14px;
        }
        .copyright {
           display: flex;
           align-items: center; 
            .logo {
                margin: 0 10px;
                width: 82px;
            }
       } 
    }
}
@media (max-width: 767px) {
    .notFound {
        padding: 0;
        background-position: 8% 0;
        justify-content: center;
        align-items: center;
        .text {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            font-size: 14px;
            padding-top: 30vh;
            .img-404 {
              width: 164px;
              height: 71px;  
            }
            h1 {
              line-height: 37px;  
              font-size: 36px;
            }
            .btn {
              margin: 20px 0 120px 0;
            }
           p {
              margin-bottom: 3px !important; 
           }
        }
    }    
}
</style>