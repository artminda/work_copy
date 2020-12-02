<template>
    <div class="case-block" @click="fn" ref="buttom">
        {{text}}
    </div>
</template>
<script>
    export default {
        props:['buttonText'],
        data(){
            return{
                text: this.buttonText
            }
        },
        methods:{
            fn(){
                if (this.text=='返回首页'){
                    this.$router.push('/')
                }else {
                    // this.text='点击查看详情'
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    .case-block{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 214px;
        height: 38.08px;
        margin: 0 auto;
        color: #fff;
        background: #FF0020;
        border-radius: 5px;
        cursor: pointer;
        user-select:none;
    }
</style>