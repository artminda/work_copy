<template>
    <footer>
        <div class="container">
            <div class="rights">
                <img src="../assets/img/freeze/footer-icon.png" alt="">
                <p>KK彩票欢迎您的加入！</p>
            </div>
        </div>
    </footer>
</template>
<style lang="css" scoped>

 footer{
     text-align: center;
     background: #0f0906;
     height: 60px;
     padding: 0;
     color: #fff;
     display: flex;
     display: flex;
     align-items: center;
 }
 .rights {
     display: flex;
     align-items: center;
     text-align: center;
     justify-content: center;
     /*line-height: 60px;*/
 }
 .rights p{
     margin-left: 20px;
 }
 .visible-xs{
     display: none;
 }
 @media (max-width: 640px){
     footer{
         background: #fff;
         color: #b47f41;
     }
 }

</style>