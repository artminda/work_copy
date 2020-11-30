<template>
    <div class="cone">
        <div class="num tgc">
<!-- //越南-中南部-国家彩 & 越南-北部-国家彩 & 泰国彩-->
    
            <div v-for="item in lotteryList.win_code" :key="item.official_issue_code">
                <div class="row">
                    <span class="t-title"><span>{{item.name}}</span></span>

                    <div class="numberBox-b" :class="{'numberBox-a':item.resultList.length < 3}">            
                        <div class="flex1" v-for="(item,index) in item.resultList" :key="item+index">
                            <span> {{item.replace(/,/g, '')}} </span>
                        </div>
                    </div>    
                </div>   
            </div>       
       
        </div>
    </div>
</template>
<script>
    export default {
        name: 'listpop',
        props:['lotteryList','vhId'],
    }
</script>
<style lang="scss" scoped>
    .cone{
        // position: relative;
        text-align: center;
        background: #0F0F0F;
        color: #fff;
        width: 406px;
        margin: 0 auto;
        border: 1px solid #CE9C50;
        .t-head {
            background: -webkit-linear-gradient(280.03deg, #B48744 22.08%, #D9C26D 74.94%);
            background: linear-gradient(280.03deg, #B48744 22.08%, #D9C26D 74.94%);
        }
        .row{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
            margin: auto;
            border-bottom: 1px solid #CE9C50;
            .t-title{
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 16%;
                color: #fff;
                font-size: 12px;
                border-right: 1px solid #333;
                span {
                  line-height: 30px;
                }
            }
           
            .numberBox-a {
                display: flex;
                flex: 0 0 84%;
                flex-direction: column;
                padding: 5px 0;
                 .flex1{
                    padding: 5px; 
                    span{
                        font-size: 14px;
                    }
                  }
            }
            .numberBox-b {
                display: flex;
                flex-wrap: wrap;
                flex: 0 0 84%;
                padding: 5px 0;
                 .flex1{
                    flex: 0 0 50%;
                    padding: 5px; 
                    justify-content: center;
                    span{
                        font-size: 14px;
                    }
                  }
            }
              
            
        
            .img_lott{
                text-align: left;
                img{
                    width: 70px;
                    height: 60px;
                    float: left;
                    padding: 10px;
                }
                .contt {
                    padding: 11px;
                    display: flex;
                    align-items: center;
                    h3 {
                        font-weight: 800;
                        cursor: pointer;
                        display: inline-block;            
                        font-size: 14px;
                    }
                    h5{
                        font-weight: 700;
                        margin-left: 10px;
                        span{
                           font-weight: 500;
                        }
                    }
                }
            }
            .flex2{
                flex: 2;
            }
            .for_cont{
                display: flex;
                padding: 7px;
                text-align: right;
                cursor: pointer;
                a{
                    cursor: pointer;
                    color: #007bff;
                }
                a,a:hover {
                    text-decoration: none;
                    transition: all .2s ease-in-out;
                }
                span{
                    display: inline-block;
                    padding: 3px 10px;
                    background-color: #00b7ee;
                    color: #fff;
                    border-radius: 2px;
                }
            }
       
        }
    }
</style>
