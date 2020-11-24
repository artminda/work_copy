<template>
  <div>
    <!-- swiper1 -->
    <div class="thumb">
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <swiper-slide v-for="(imgItem, i) in datas" :key="i" class="">
        <img :src="imgItem" :alt="`${imgItem}+${i}`" />
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide v-for="(imgItem, i) in datas" :key="`Thumbs_${i}`" class="">
        <img :src="imgItem" :alt="`${imgItem}+${i}`" />
      </swiper-slide>
    </swiper>
    </div>
    <div class="control">
    <div
      class="swiper-button-next swiper-button-thumb"
      slot="button-next"
    ></div>
    <div
      class="swiper-button-prev swiper-button-thumb"
      slot="button-prev"
    ></div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'gallery',
  props: ['datas'],
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 18,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
<style lang="scss" scoped>
.thumb {
  width: 457px;
  padding: 0 35px;
  background-color: transparent;
  img {
      box-shadow: 3px 2px 6px 1px rgb(114, 114, 114);
  }
}
 .control {
    width: 457px;
    top: -40px;
    position: relative;
    .swiper-button-next.swiper-button-thumb {
      background-image: url(../assets/img/freeze/gallery/right.png);
      right: 0px;
      &:focus {
          outline: transparent;
      } 
    }
     .swiper-button-prev.swiper-button-thumb {
      background-image: url(../assets/img/freeze/gallery/left.png);
      left: 0px;
      &:focus {
          outline: transparent;
      } 
    }
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 30%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}


  @media (max-width: 768px) {
    .thumb {
       width: 100vw;
       .swiper.gallery-thumbs .swiper-slide {
          width: 42%; 
       }
    }  
    .control {
        width: 100vw;
     }
  }
</style>