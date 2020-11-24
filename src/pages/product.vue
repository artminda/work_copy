<template>
  <div class="product">
    <div v-for="(items,i) in  metas.products_info" :key="i">  
      <commonInfo :datas="items" />
    </div>
    <homeContant :datas="metas.products_contant"/>
  </div>
</template>
<script>
import * as metas from '../libs/metas'
import commonInfo from '../components/common-info'
import homeContant from '../components/home-contant'
export default {
  name: 'product',

  data() {
    return {
      metas,
    }
  },
  methods: {},
  components: {
    commonInfo,
    homeContant
  },
}
</script>
<style lang="scss" scoped>
.product {
    padding-top: 75px;
}

@media (max-width: 767px) {
  .product {
    padding-top: 62px; 
  }
}
@media screen and (max-width: 640px) {
}
</style>