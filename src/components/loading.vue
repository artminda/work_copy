<template>
    <div class="spinner">
        <div class="loading">
        </div>
        <span>数据加载中 ...</span>
    </div>
</template>
<script>
    export default {
        name:'Loading'
    }
</script>
<style lang="scss" scoped>
    .spinner{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 106px;
        justify-content: center;
        align-items: center;
        top: 500px;
        margin: 0 auto;
        color: #fff;
    }
    .loading{
        width: 100%;
        height: 50px;
        position: relative;
        text-align: center;
        span{
            margin-top: 200px;
        }
        &::after,&::before{
            content: '';
            position: absolute;
            width: 0px;
            height: 0px;
            background: #f5d978;
            border-radius: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            animation: s 1.5s linear infinite;
        }
        &::after{
            animation-delay: 0.65s;
        }
    }
    @keyframes s {
        0%{
            width: 0px;
            height: 0px;
            opacity: 1;
        }
        100%{
            width: 50px;
            height: 50px;
            opacity: 0;
        }
    }
     @media screen and (max-width: 767px) {
          .spinner{
              width: 100vw;
              top: 62vh;
          }
     }
</style>