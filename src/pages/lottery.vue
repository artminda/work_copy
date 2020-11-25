<template>
    <section class="loto">
        <pageTitle :info="loto" :dark="2" :pt="true" />

        <div class="container">
            <select class="btn btn-default btn-xs " v-model="country">
                <option v-for="v in countryName" :key="v">{{v}}</option>
            </select>
            <span>> </span>
            <select class="btn btn-default btn-xs " v-model="lottery">
                <option v-for="v in lotteryItem" :key="v.id">{{v.name}}</option>
            </select>
            <span> > </span>
            <select v-if="lotteryList" class="btn btn-default btn-xs " v-model="lotteryList">
                <option v-for="v in lotteryArr" :key="v.id">{{v.name}}</option>
            </select>
            <section class="lottery" style="margin-top: 0px;background-color: white;">
                <div class="container">
                    <div class="hist_table twenty">
                        <div class="hist_thead bingoinssu">
                            <div class="hist_td">期数</div>
                            <div class="hist_td">时间</div>
                            <div class="hist_td">{{openSetTitle}}</div>
                            <div class="hist_td" v-if="vhId"></div>
                        </div>
                        <loading v-if="loading" class="wloading"></loading>
                        <template v-if="tableData.length!=0">
                            <div class="hist_tr" v-for="(item,id) in tableData" :key="id"> 
                                <template v-if="checkValue(item.win_code)">

                                    <div class="hist_td">{{item.official_issue_code}}期</div>
                                    <div class="hist_td">{{item.official_time}}</div>
                                    <div class="hist_td">
                                        <span v-for="(itm,idx) in item.win_code.split(',')" :key="idx">{{itm}}</span>
                                    </div>
                                   
                                </template>
                                <template v-else>
                                    <div class="hist_td">
                                        <span v-for="(itm,idx) in item.win_code[0].resultList[0].split(',')" :key="idx">{{itm}}</span>
                                    </div>
                                    <div class="hist_td">{{item.official_issue_code}}期</div>
                                    <div class="hist_td">{{item.official_time}}</div>
                                    <div class="hist_td" v-if="vhId"><button @click="btnClick(item)" :disabled="loading">详情</button></div>
                                </template>
                            </div>
                        </template>
                        <template v-else-if="tableData.length==0&&loading==false">
                            <div style="position: relative;left: 100%;top: 60px">暂无数据</div>
                        </template>

                    </div>
                </div>
            </section>
            <div class="pop" v-if="showPop" @touchmove.prevent>
                <listpop class="listpop" @closeBtn="closeBtn" :lotteryList="popDataList" :vhId="vhId"></listpop>
            </div>
        </div>
    </section>
</template>

<script>
    import {loto} from '../libs/metas'
    import pageTitle from '../components/page-title'
    import listpop from '../components/listpop'
    import loading from '../components/loading'
    import {NumPost,NavPost,getNowFormatDate} from '../api/index'
    export default {
        name: 'lottery',
        data() {
            return {
                loto,
                loading:false,
                showPop: false,
                vhId:'',
                country: '中国',//一级默认数据
                countryName: ['中国', '外国'],//一级
                lotteryArr: [],//三级
                lottery: '时时彩',//二级默认数据
                lotteryItem: [],//二级
                tableData: [],
                lotteryList: '',//三级默认数据
                official_classify: [
                    {name: '时时彩', id: 1},
                    {name: '11选5', id: 2},
                    {name: 'PK10', id: 3},
                    {name: '快3', id: 4},
                    {name: '快乐8', id: 5},
                    {name: '幸运28', id: 6},
                    {name: '六合彩', id: 7},
                    {name: '福彩3D', id: 8},
                    {name: 'CQ-快10', id: 9},
                    {name: 'GX-快10', id: 10}
                ],
                foreign_t: [
                    {name: '伦敦', id: 0},
                    {name: '河内', id: 1},
                    {name: '东京', id: 2},
                    {name: '仰光', id: 3},
                    {name: '澳洲', id: 4},
                    {name: '加拿大', id: 5},
                    {name: '斯洛伐克', id: 6},
                    {name: '越南-北部-国家彩', id: 105},
                    {name: '越南-中南部-国家彩', id: 104},
                    {name: '泰国彩', id: 106}
                ],
                foreign_children: [
                    {name: '伦敦1分彩', id: 1000001},
                    {name: '河内1分彩', id: 1000005},
                    {name: '东京1分彩', id: 1000009},
                    {name: '仰光1分彩', id: 1000013},
                    {name: '澳洲3分彩', id: 1000017},
                    {name: '加拿大3分彩', id: 1000018},
                    {name: '斯洛伐克5分彩', id: 1000019},
                    {name: '泰国彩', id: 2000036}
                ],
                popDataList:null,
                openSetTitle:'开奖号码'
            }
        },
        watch:{
            country:function () {
                this.init_country()
            },
            lottery:function (value) {
                let a=this.official_classify.some(index=>{
                    return index.name==value
                })
                let that=this
                let ab=function (){
                    if (a){
                        return that.official_classify
                    }else {
                        return that.foreign_t
                    }
                }
                let getId=ab().find(item=>{
                    return item.name==value
                })
                if (ab()==this.official_classify){
                    this.vhId=getId.id
                    this.getNavList(getId.id)
                }else {
                    this.vhId=getId.id
                    let id=[104,105,106]
                    if (id.includes(getId.id)){
                        this.foreign_childrens_vh(getId.id)
                    }else {
                        this.foreign_childrens(getId.id)
                    }
                }

            },
            lotteryList:function (value) {
                let lottery=this.lotteryArr.find(item=>{
                    return item.name==value
                })
                this.getWinNum(lottery.id)

            },
            vhId:function (value) {
                switch(value){
                    case 104:
                        this.openSetTitle='特别奖';
                        break;
                    case 105:
                        this.openSetTitle='特别奖';
                        break
                    case 106:
                        this.openSetTitle='一奖';
                        break;
                    default:
                        this.openSetTitle='开奖号码'
                }

            }
        },
        methods: {
            checkValue(value){
                if (value instanceof Object){
                    return false
                }else {
                    return true
                }
            },
            btnClick(i) {
                this.showPop=true
                let data={
                    title:this.lotteryList,
                    official_issue_code:i.official_issue_code,
                    win_code:i.win_code
                }
                this.popDataList=data
            },
            closeBtn() {
                this.showPop = false
            },
            init_country() {
                if (this.country === '中国') {
                    this.chinese(this.official_classify)
                } else {
                    this.foreigns(this.foreign_t)
                }
            },
            //国内彩种列表
            getNavList(n){
                this.loading=true
                NavPost(n).then(res=>{
                    this.loading=false
                    this.lotteryArr=[]
                    let name=['伦敦1分彩', '伦敦2分彩', '伦敦3分彩', '伦敦5分彩', '河内1分彩', '河内2分彩']
                    let filterData=[]
                    res.forEach(item => {
                        if (name.includes(item.lottoCnname)) {
                            return
                        } else {
                            if (item.id==='50'){
                                item.lottoCnname='广西快乐十分'
                            }
                            filterData.push({name: item.lottoCnname, id: item.lottoId})
                        }
                    })
                    this.lotteryArr=filterData
                    this.lotteryList=this.lotteryArr[0].name
                })
            },
            //表格数据
            getWinNum(id) {
                this.loading=true
                this.tableData=[]
                NumPost(id).then(res=>{
                    this.loading=false
                    let arr=[]
                    res.forEach(item=>{
                        if (item.win_code.length>100){
                            item.win_code=eval(item.win_code)
                            arr.push(item)
                        }else {
                            arr.push(item)
                        }
                    })
                    this.tableData=arr.filter(item => item.win_code !="[]")
                })
            },
            //国内彩系列表
            chinese(official_classify) {
                this.lottery = official_classify[0].name
                this.lotteryItem = official_classify
                this.getNavList(official_classify[0].id)
            },
            //外国彩系列表
            foreigns(foreign_t) {
                this.lottery = foreign_t[0].name
                this.lotteryItem = foreign_t
            },
            //越南彩泰国彩彩种
            foreign_childrens_vh(id){
                this.lotteryArr=[]
                NavPost(id).then(res=>{
                    let arr=[]
                    res.forEach(item=>{
                        arr.push({name:item.lottoCnname,id:item.lottoId})
                    })
                    this.lotteryArr =arr
                    this.lotteryList = this.lotteryArr[0].name
                })
            },
            //其他外国彩种列表
            foreign_childrens(id){
                let lottery = this.foreign_children[id]
                let arr=[]
                arr.push(lottery)
                this.lotteryArr = arr
                this.lotteryList = this.lotteryArr[0].name
            }

        },
        computed:{},
        mounted() {
            this.init_country();
        },
        components: {
            listpop,
            loading,
            pageTitle
        }
    }
</script>
<style lang="scss" scoped>
    section {
        position: relative;
        padding-bottom: 90px;
    }
    .loto {
        padding-top: 75px;
        background: url(../assets/img/freeze/bg-loto.jpg) no-repeat;
        background-size: cover;
        font-size: 12px;

        span {
            margin: 0 5px;
        }

        .container {
            padding: 0;
            min-height: 500px;
            .lottery {

            }
        }
    }
    .btn.btn-default:hover {
        color: #336799;
    }
    .btn {
        border-radius: 3em;
        box-shadow: none;
        padding: 5px 14px;
        cursor: pointer;
    }
    .btn.btn-default {
        border: none;
        background: #ffffff;
        background: linear-gradient(180deg, #ffffff 0%, #cccccc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff, endColorstr=#cccccc, GradientType=1);
        color: #336799;
    }
    .pop {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 80px;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        display: flex;
        .listpop{
            margin: auto;
        }

    }
    .btn-xs, .btn-group-xs > .btn {
        font-size: 12px;
        line-height: 1.5;
    }
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
        position: relative;
        .wloading{
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            margin-top: 50px;
        }

    }
    .hist_thead {
        display: table-row;
        color: #F5D978;
        background: #0F0F0F;
        border-collapse:collapse;
        .hist_td {
            height: 40px;
            text-align: center;
            line-height: 43px;
            border: none;
        }
    }
    .hist_tr {
        display: table-row;
        background: #0F0F0F;
        .hist_td{
            &:first-child {
                // border-left: 1px solid #ecf2fd;
                width: 46%;
            } 
        }
    }
    .hist_td {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        // border-bottom: 1px solid #ecf2fd;
        // border-right: 1px solid #ecf2fd;
        span {
            display: inline-block;
            // background: url(../assets/img/freeze/his_ball.png);
            border: 1px solid #F5D978;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            line-height: 42px;
            color: #F5D978;
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
                background: url(../assets/img/freeze/his_ball_s.png) no-repeat center;
                background-size: 100% 100%;
                line-height: 25px;
                margin: 2px 1px;

            }
        }

    }


</style>
