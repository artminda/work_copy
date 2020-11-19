<template>
    <div class="tp-banner" :style="style">
        <slot class="img"></slot>
    </div>
</template>
<script>
    export default {
        name:'top-banner',
        props:['url'],
        data(){
            return{
                style:{
                    background: 'url('+this.url+') no-repeat center',
            backgroundSize: 'cover'
        }
            }
        }
    }
</script>
<style lang="scss" scoped>
.tp-banner{
    height: 350px;
    text-align: center;
    img {
        margin-top: 200px;
    }
}
@media screen and (max-width: 640px){
    .tp-banner {
        height: 220px;
        img {
            margin-top: 130px;
            width: 40%;
        }
    }
}
</style>