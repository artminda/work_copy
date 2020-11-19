<template>
    <div class="product">
        <tp-banner :url="url" class="tp-banner-container hidden-xs">
            <img src="../assets/img/freeze/text-product-tp-banner.png" alt="">
        </tp-banner>
        <div class="wrapper" >
            <section class="program">
                <div class="container">
                    <div class="section-heading  animated " v-animated="{className : 'fadeInDown'}">
                        <h1>外接式彩票系统</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <div class=" program-item  animated " v-animated="{className : 'fadeInLeft'}">
                                <p>
                                    KK彩票历时多年，通过多国政府、第三方机构、领域专家的精诚合作，共同实现了数字彩票系统全球化战略。在行业内引起了极大的反响和一致的肯定</p>
                                <br class="hidden-xs">
                                <p> KK彩票提供多语言、多币种国际化支持、及百种彩票、千种玩法全球游戏覆盖，向20多个国家和地区的用户提供了最专业的服务。</p>
                                <p>公平、公正、公开</p>
                            </div>
                        </div>
                        <div class="col-md-5 hidden-xs">
                            <img src="../assets/img/freeze/girl.png"
                                 class="active animated " v-animated="{className : 'fadeInRight'}">
                        </div>
                    </div>
                </div>
            </section>
            <section class="report" >
                <div class="container">
                    <div class="section-heading active animated " v-animated="{className : 'fadeInDown'}">
                        <h1>系统分析</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-4 col-xs-11">
                            <div class=" access-item animated " v-animated="{className : 'fadeInLeft'}">
                                <h3>• 报表系统</h3>
                                <p>提供完善的各项统计指标，各类数据可分时间段进行环比，辅助企业用户进行
                                    平台整体数据分析、用户流量分析，以真实数据为依据、分析结果为导向，对
                                    平台运营层面、产品层面决策时均可带来重大指导意义；</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-4 col-xs-11">
                            <div class="wow access-item mgtop animated " v-animated="{className : 'fadeInRight'}">
                                <h3>• 监控系统</h3>
                                <p>接入KK开奖程序后，我们将免费提供7*24的全方位实时监控系统。该系统对各台服务器监控项目覆盖全面，能做到对各类异常情况做出准确预警，可最大程度做到防患于未然。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="plan">
                <div class="container">
                    <div v-animated="{className : 'fadeInDown'}" class=" section-heading animated ">
                        <h1>投注页截图</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="plan-item  animated " v-animated="{className : 'fadeInDown'}">
                                <p>全系玩法,应有尽有.多种皮肤想换就换.</p>
                                <img src="../assets/img/freeze/skin_color.jpg" class="animated " v-animated="{className : 'fadeInUp'}">
                                <p></p>
                                <img src="../assets/img/freeze/lottery_img.jpg" class="animated " v-animated="{className : 'fadeInUp'}">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import tpBanner from '../components/top-banner'
    export default {
        name:'lottery',
        data(){
            return{
                url:require('../assets/img/freeze/bg-product-banner.jpg'),
            }
        },
        methods:{

        },
        components:{
            tpBanner
        }
    }
</script>
<style lang="scss" scoped>
    section {
        position: relative;
        padding-bottom: 90px;
    }
    .program {
        background: url(../assets/img/freeze/bg-lottery.jpg) no-repeat center;
        background-size: cover;
        height: 800px;
        overflow: hidden;
    }
    .report {
        background: url(../assets/img/freeze/bg-report.jpg) no-repeat center;
        background-size: cover;
        height: 800px;
        overflow: hidden;
    }
    .section-heading {
        margin: 100px 0 40px;
        text-align: center;
        h1{
            display: inline-block;
            font-size: 48px;
            font-weight: 500;
            margin-bottom: 0;
        }
    }
    @media (min-width: 768px) {
        .program {
            .program-item {
                margin-top: 70px;
                margin-left: 20px;
                 p {
                    font-size: 18px;
                    line-height: 48px;
                    color: #333;
                }
            }
            .col-md-7 {
                width: 58.33333333%;
                float: left;
            }
            .col-md-5 {
                float: left;
                width: 41.66666667%;

            }
            .row {
                margin-left: -15px;
                margin-right: -15px;
                img {
                    float: right;
                    margin-top: 3px;
                }
            }

        }
        .report {
            h1 {
                color: #fff;
            }

            .access-item {
                margin-top: 100px;
                h3 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                p {
                    color: #fff;
                    line-height: 36px;
                    font-size: 16px;
                    margin-left: 20px;
                    text-align: justify;
                }
            }
            .mgtop {
                margin-top: 280px;
                margin-left: -20px;
            }
            .col-md-6 {
                width: 50%;
                float: left;
            }
        }
        .col-md-12 {
            width: 100%;
        }
        .plan-item {
            text-align: center;
            color: #333333;
            margin-top: 20px;
            p {
                font-size: 16px;
                margin-bottom: 80px;
            }
        }
    }
    @media (max-width: 991px){
        .program{
            .row{
                display: flex;
                flex-direction: column;
                align-items: center;
                .col-md-7{
                    width: 100%;
                }
                .hidden-xs{
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
    @media (max-width: 767px){
        .col-xs-11 {
            width: 91.66666667%;
            margin-bottom: 20px;
        }
        .col-md-12, .col-lg-12 {
            position: relative;
            min-height: 1px;
            padding-left: 15px;
            padding-right: 15px;
        }
        .plan-item {
            text-align: center;
            color: #333333;
            margin-top: 20px;
            img{
                width: 100%;
            }
            p {
                font-size: 16px;
                margin-bottom: 80px;
            }
        }

        .access-item {
            margin-top: 0;
            margin-left: 0;
            h3 {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            p {
                color: #fff;
                line-height: 36px;
                font-size: 16px;
                margin-left: 20px;
                text-align: justify;
            }
        }
      
        .program,.report{
            height: auto;
            background-position: center;
        }
        .program-item p {
            font-size: 18px;
            line-height: 48px;
            color: #333;
        }
    }
    @media screen and (max-width: 640px){

        section{
            background-size: 100% !important;
            background-color: #f8f8f8!important;
            padding-bottom: 40px;
        }
        .access-item {
            margin-top: 0;
            margin-left: 0;
            h3 {
                color: #618bf7;
                font-size: 20px;
            }
            p {
                color: #333;
                line-height: 36px;
                font-size: 16px;
                margin-left: 20px;
                text-align: justify;
            }
        }
        .program {
            background: url(../assets/img/freeze/program_bg.png) no-repeat top center;
            .section-heading {
                background: url(../assets/img/freeze/program_tit_bg.png) no-repeat center;
            }
        }
        .program .program-item, .report .row, .plan .plan-item {
            background: #fff;
            border-radius: 10px;
            padding: 40px 20px 20px 20px;
            margin-top: -28px;
        }
        .report {
            background: url(../assets/img/freeze/report_bg_m.jpg) no-repeat top center;
            .section-heading {
                background: url(../assets/img/freeze/report_tit_bg.png) no-repeat center;
            }
            .col-xs-11 {
                width: 91.66666667%;
                position: relative;
                min-height: 1px;
                padding-left: 15px;
                padding-right: 15px;
            }

        }
        .plan {
            overflow: hidden;
            background: url(../assets/img/freeze/plan_bg_m.jpg) no-repeat top center;
            .section-heading {
                background: url(../assets/img/freeze/plan_tit_bg.png) no-repeat center;
            }
        }
        .section-heading {
            background-size: 80% !important;
            padding: 10px;
            margin-top: 90%;
            margin-bottom: 0;
            position: relative;
            z-index: 2;
            h1 {
                color: #ffffff;
                font-size: 22px;
            }
        }
        .scrollpoint {
            p{
                font-size: 16px;
            }
        }
    }
</style>