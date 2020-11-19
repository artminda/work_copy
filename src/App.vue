<template>
    <div id="app">
        <v-header></v-header>
        <router-view />
        <v-footer class="footer"></v-footer>
    </div>
</template>

<script>
    import vHeader from './components/header.vue'
    import vFooter from './components/footer.vue'
    export default {
        name: 'App',
        components: {
            vHeader,
            vFooter,
        }
    }
</script>
<style lang="scss">
    @import "assets/css/res.scss";
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 14px;
    }

    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }

</style>
