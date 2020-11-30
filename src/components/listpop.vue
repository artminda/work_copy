<template>
    <div class="cone">
        <div class="row t-head">
            <div class="flex2 img_lott">
                    <div class="contt">
                        <h3 class="dark">{{lotteryList.title}}</h3>
                        <h5 class="dark">
                            <span style="margin-right:6px ">期号:</span>{{lotteryList.official_issue_code}}<span>期</span>
                        </h5>
                    </div>
            </div>
            <div class="for_cont" @click="$emit('closeBtn')">
                <img src="../assets/img/freeze/button_close.png" alt="button_close">
            </div>
        </div>
        <div class="num tgc">
<!--                //越南-中南部-国家彩-->
            <template v-if="vhId==104">
                    <div v-for="item in lotteryList.win_code" :key="item.official_issue_code">
                        <template v-if="item.level===0||item.level===1||item.level===2">
                            <span class="tables">{{item.name}}</span>
                            <div class="row">
                                <div class="flex1" v-for="(item,index) in item.resultList" :key="item+index">
                                    <span v-for="(k,index) in item.split(',')" :key="item+index">{{k}}</span>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <template v-if="item.level===3">
                                <span class="tables">{{item.name}}</span>
                                <div class="row">
                                    <div class="flex1" v-for="(item,index) in item.resultList" :key="item+index">
                                        <span v-for="(k,index) in item.split(',')" :key="item+index">{{k}}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="item.level===4">
                                <span class="tables">{{item.name}}</span>
                                <div class="row">
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[0]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[1]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[2]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[3]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[4]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[5]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em v-for="(v,index) in item.resultList[6]" :key="item+index">{{v.split(',').join('')}}</em>
                                    </div>
                                    <div class="flex1">
                                        <em></em>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </div>
                    <div>
                        <div class="row">
                            <div class="flex1">
                                <div>
                                    <span class="tables">五等奖</span>
                                    <div class="row">
                                        <div class="flex1" v-for="(i,index) in lotteryList.win_code[5].resultList" :key="i+index">
                                            <em>{{i.split(',').join('')}}</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex1">
                                <div>
                                    <span class="tables">六等奖</span>
                                    <div class="row">
                                        <div class="flex1" v-for="(i,index) in lotteryList.win_code[6].resultList" :key="i+index">
                                            <em>{{i.split(',').join('')}}</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="flex1">
                                <div>
                                    <span class="tables">七等奖</span>
                                    <div class="row">
                                        <div class="flex1" v-for="(i,index) in lotteryList.win_code[7].resultList" :key="i+index">
                                            <em>{{i.split(',').join('')}}</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex1">
                                <div>
                                    <span class="tables">八等奖</span>
                                    <div class="row">
                                        <div class="flex1" v-for="(i,index) in lotteryList.win_code[8].resultList" :key="i+index">
                                            <em>{{i.split(',').join('')}}</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
<!--                //越南-北部-国家彩-->
            <template v-if="vhId==105">
                    <div v-for="item in lotteryList.win_code" :key="item.official_issue_code">
                        <template v-if="item.level===0||item.level===1||item.level===2">
                            <span class="tables">{{item.name}}</span>
                            <div class="row">
                                <div class="flex1" v-for="(item,index) in item.resultList" :key="item+index">
                                    <span v-for="(k,index) in item.split(',')" :key="item+index">{{k}}</span>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div>
                        <span class="tables">{{lotteryList.win_code[3].name}}</span>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[0]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[1]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[2]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[3]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[4]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[3].resultList[5]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="tables">{{lotteryList.win_code[4].name}}</span>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[4].resultList[0]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[4].resultList[1]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[4].resultList[2]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[4].resultList[3]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="tables">{{lotteryList.win_code[5].name}}</span>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[0]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[1]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[2]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[3]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[4]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[5].resultList[5]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="tables">{{lotteryList.win_code[6].name}}</span>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[6].resultList[0]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[6].resultList[1]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[6].resultList[2]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="tables">{{lotteryList.win_code[7].name}}</span>
                        <div class="row">
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[7].resultList[0]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[7].resultList[1]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[7].resultList[2]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                            <div class="flex1">
                                <em v-for="(v,index) in lotteryList.win_code[7].resultList[3]" :key="v+index">{{v.split(',').join('')}}</em>
                            </div>
                        </div>
                    </div>
                </template>
<!--            泰国彩-->
            <template class="cone" v-if="vhId===106">
                <div v-for="item in lotteryList.win_code" :key="item.official_issue_code">
                    <span class="tables">{{item.name}}</span>
                    <div class="row">
                        <div class="flex1" v-for="(v,index) in item.resultList" :key="v+index">
                            <span v-for="(k,index) in v.split(',')" :key="v+index">{{k}}</span>
                        </div>
                    </div>
                </div>
            </template>
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
        background: #0F0F0F;
        color: #fff;
        width: 350px;
        padding: 0 0 20px;
        h3,h5,h5 span{
            color: #2c3e50;
            font-weight: 300;
        }
        .tables{
            color: #fff;
            font-size: 16px;
        }
        margin: 0 auto;
        border: 1px solid #CE9C50;
        border-radius: 5px;
        // box-shadow: 0 0 5px #dcdcdc;
        color: #333;
        .num{
            text-align: center;
            margin-top: 10px;
            >div{
                margin: 5px 0;
                .row{
                    padding: 5px 0;
                }
            }
        }
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
                        margin-left: 20px;
                        font-size: 14px;
                        // line-height: 20px;
                    }
                    h5{
                        font-weight: 700;
                        margin-left: 10px;
                        // line-height: 17px;
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
            .flex1{
                flex: 1;
                span{
                    font-size: 14px;
                }
            }
            .flex1 >span{
                margin: 0 1px;
                display: inline-block;
                line-height: 25px;
                padding: 0 8px;
                font-size: 12px;
                color: #f8a34c;
                border-radius: 50%;
                border: 1px solid red;
            }
        }
    }
</style>
