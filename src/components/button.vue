<template>
    <div class="case-block" @click="fn" ref="buttom">
        {{text}}
<!--        <transition name="fadeInLeft" enter-active-class="animated fadeInLeft"-->
<!--                    leave-active-class="animated fadeInLeft">-->
<!--            <p v-if="show"></p>-->
<!--        </transition>-->
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
                // if (this.text=='点击查看详情'){
                //     this.text='收起'
                // }else {
                //     this.text='点击查看详情'
                // }
                // this.$emit('chack',this.text)
            },
        },
    }
</script>
<style lang="scss" scoped>
    /*@import "../assets/css/animation.css";*/
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