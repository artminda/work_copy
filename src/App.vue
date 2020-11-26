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
</style>
