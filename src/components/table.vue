<template>
    <div class="lottery" style="margin-top: 0px;background-color: white;">
        <div class="row">
            <div class="col-md-12 col-xs-12 col-sm-12">
                <div class="hist_table twenty">
                    <div class="hist_thead bingoinssu">
                        <div class="hist_td">{{flag?'特别奖':'开奖号码'}}</div>
                        <div class="hist_td">期数</div>
                        <div class="hist_td">时间</div>
                        <div class="hist_td"></div>
                    </div>
                        <div class="hist_tr" v-for="(item,id) in lotteryNumber" :key="id" >
                            <div class="hist_td">
                                <span v-for="(itm,idx) in item.win_code.split(',')" :key="idx">{{itm}}</span>
                            </div>
                            <div class="hist_td">{{item.official_issue_code}}</div>
                            <div class="hist_td">{{item.official_time}}</div>
                            <div class="hist_td" v-if="flag"><button @click="$emit('btnClick')">详情</button></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            lotteryNumber:{
                type:Array
            },
            lottery:{
                type:String
            }
        },
        data(){
            return {
                flag:false
            }
        },
        watch:{
            lottery(a,b){
                this.queryLottery(a)
            }
        },
        methods:{
            queryLottery(param){
                let name=["越南-中南部-国家彩","越南-北部-国家彩"]
                if (name.indexOf(param)== -1){
                    this.flag=false
                }else {
                    this.flag=true
                }
            }
        },
    }
</script>
<style lang="scss" scoped>

    .row {
        margin-left: -15px;
        margin-right: -15px;
    }

    .col-xs-12, .col-sm-12, .col-md-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .hist_table {
        display: table;
        width: 100%;
        margin-top: 20px;

    }

    .hist_thead {
        display: table-row;
        background: #d3954c;
        border-collapse:collapse;
        .hist_td {
            height: 40px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            border: none;
        }
    }
    .hist_tr {
        display: table-row;
        background: #fff;
        .hist_td{
            &:first-child {
                border-left: 1px solid #ecf2fd;
                width: 46%;
            }
        }
    }
    .hist_td {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        border-bottom: 1px solid #ecf2fd;
        border-right: 1px solid #ecf2fd;
        span {
            display: inline-block;
            background: url(../assets/img/freeze/his_ball.png);
            width: 42px;
            height: 42px;
            line-height: 42px;
            color: #d3954c;
            margin: 5px;
        }
        button{
            border: none;
            margin: 0 auto;
            color: #fff;
            background: #b47f41;
            outline: none;
            width: 36px;
            font-size: 12px;
            margin: 0 5px;
            padding: 5px;
            border-radius: 2px;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 640px){
        .hist_td {
            &:last-child {
                width: auto;
            }
            &:first-child {
                width: 40%;
            }
            span {
                width: 25px;
                height: 25px;
                background: url(../assets/img/freeze/his_ball_s.png);
                line-height: 25px;
                margin: 2px 1px;

            }
        }

    }

</style>