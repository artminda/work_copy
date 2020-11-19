<template>
  <header class="header">
    <nav
      class="navbar navbar-default navbar-fixed-top"
      :class="{ scrolled: homeHeader, navloto: navloto }"
    >
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/img/freeze/logo.png" class="logo hidden-xs" />
            <img src="../assets/img/freeze/logo-m.png" class="logo visible-xs" />
          </router-link>
          <button type="button" class="navbar-toggle" @click="toggle">
            <span class="fa fa-bars fa-lg"></span>
          </button>
        </div>
        <div class="collapse">
          <ul class="nav" :class="{ 'navbar-nav': homeHeader }">
            <router-link to="/"><li>品牌介绍</li></router-link>
            <router-link to="/product"><li>产品介绍</li></router-link>
            <router-link to="/lottery"><li>开奖中心</li></router-link>
            <router-link to="/contact"><li>联系我们</li></router-link>
          </ul>
        </div>
        <div class="collapse navbar-collapse" v-show="flag">
          <ul class="nav" :class="{ 'navbar-nav': homeHeader }">
            <router-link to="/"><li>品牌介绍</li></router-link>
            <router-link to="/product"><li>产品介绍</li></router-link>
            <router-link to="/lottery"><li>开奖中心</li></router-link>
            <router-link to="/contact"><li>联系我们</li></router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="adv" :class="{adv_none:homeHeader}">
      <img src="../assets/img/freeze/logo02.png" class="logo" alt="云博會" />
      <span>2088 KK彩票行銷活動参展盛况</span>
      <sBtn class="hidden-xs" />
    </div>
  </header>
</template>

<script>
import sBtn from './simple-button'

export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      flag: false,
      homeHeader: false,
      navloto: false,
    }
  },
  components: {
    sBtn,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.isHomeHeader()
  },
  watch: {
    $route: 'getPath',
  },
  methods: {
    isHomeHeader() {
      if (
        this.$route.name === 'contact' ||
        this.$route.name === 'lottery' ||
        this.$route.name === 'product'
      ) {
        this.homeHeader = true
        this.navloto = true
      } else {
        this.homeHeader = false
      }
    },
    toggle() {
      this.flag = this.flag == false ? true : false
    },

    getPath() {
      this.flag = false
      this.isHomeHeader()
    },
    handleScroll() {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 50 &&
        this.$route.name === 'home'
      ) {
        this.homeHeader = true
      } else if (
        this.$route.name === 'contact' ||
        this.$route.name === 'lottery' ||
        this.$route.name === 'product'
      ) {
        this.homeHeader = true
        this.navloto = true
      } else {
        this.homeHeader = false
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.adv {
  display: flex;
  justify-content: center;
  align-items: center;     
  text-align: center;
  height: 52px;
  // line-height: 52px;
  background: #ce9c50;
  color: #fff;
    span {
      margin: 0 10px;
    }
    .logo {
      position: relative;
      top: 8px;
      margin: 0 10px;
    }
}
.adv_none {
  display: none;
}
.nav a {
  color: #fff;
  background: none;
  display: flex;
  li {
    position: relative;
    &:hover {
      transition: all 0.25s ease-in-out;
      &:after {
        content: '';
        width: 32px;
        background: none;
        height: 4px;
        position: absolute;
        bottom: 18px;
        z-index: 99999;
        left: 20px;
        border-radius: 5em;
        color: #333;
        transition: all 0.25s ease-in-out;
      }
    }
  }
}
.navbar-default.scrolled .navbar-header {
  button {
    display: none;
  }
  a {
    display: inline-block;
    padding: 15px 20px;
    img {
      width: auto;
      max-height: 40px;
    }
  }
}
.container {
  display: flex;
  justify-content: space-between;
}
.navbar.navbar-default {
  background: #0f0f0f;
  border: none;
  padding: 8px 0;
  // padding-bottom: 20px;
  transition: all 0.25s ease-in-out;
  color: #fff;
  .nav a {
    color: #ffffff;
    background: none;
    li {
      &:hover {
        &:after {
          background: #fff;
        }
      }
    }
  }
  .logo {
    max-width: 180px;
  }
  .navbar-toggle {
    display: none;
    cursor: pointer;
  }
}
.header .navbar-default.scrolled {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 0;
  border-bottom: 3px solid #b47f41;
  .nav a {
    color: #333;
    li {
      &:hover {
        &:after {
          background: #333;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .nav {
    height: 100%;
    text-align: center;
    display: flex;
    li {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 20px;
      line-height: 73px;
    }
  }
  .collapse {
    display: block;
  }
  .navbar-collapse {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navbar.navbar-default,
  .navbar-default.scrolled {
    .container {
      display: flex;
      flex-direction: column;
    }
    .collapse {
      display: none;
    }
    .navbar-collapse {
      display: block;
      border-top: 1px solid #e7e7e7;
      margin-right: -15px;
      margin-left: -15px;
      .nav {
        display: flex;
        flex-direction: column;
        li {
          padding: 2px;
          font-size: 16px;
          &:hover {
            &:after {
              content: '';
              width: 32px;
              background: none;
              height: 4px;
              position: absolute;
              bottom: -5px;
              z-index: 99999;
              left: 10px;
              border-radius: 5em;
              color: #333;
              transition: all 0.25s ease-in-out;
            }
          }
        }
        a {
          padding: 5px;
        }
      }
    }
    .navbar-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar-toggle {
        display: inline-block;
        height: 50%;
        padding: 10px;
        background-color: #ccc;
        border: 1px solid #fff;
        &:hover {
          background-color: #dddddd;
        }
        .fa-lg {
          color: #666;
        }
      }
    }
  }
  .navbar.navbar-default .navbar-collapse .nav li:hover:after {
    background: #fff;
  }
  .navbar-default.scrolled .navbar-collapse .navbar-nav li:hover:after {
    background: #333;
  }
  .nav a li {
    width: 100%;
  }
}
@media screen and (max-width: 640px) {
  .navbar-header { height: 60px; }
  .header .navbar-default.scrolled .nav a li:hover,
  .header .navbar-default .navbar-collapse .nav li:hover {
    color: #999;
    &:after {
      background: none;
    }
  }
  .navbar.navbar-default {
    .logo {
      width: auto;
      max-height: 40px;
    }
    .collapse {
      border: none;
      padding: 0 20px;
      ul {
        background: rgba(255, 255, 255, 0.8);
        margin-top: 10px;
      }
      .nav li {
        color: #333;
        margin: auto;
      }
    }
  }
  .adv {
    font-size: 11px;
   .logo {
      width: 143px;
      top: 6px;
    }
    span {
      margin: 0;
      padding-right: 12px;
    }
  }
  .header .navbar-default.scrolled {
    background: #fff;
  }
  .navbar-default.scrolled .collapse .nav.navbar-nav {
    background: none;
  }
  .navbar-toggle {
    border-radius: 50%;
    border: 2px solid #b47f41 !important;
    color: #b47f41;
    background: none !important;
    .fa-lg {
      color: #b47f41 !important;
    }
  }
  .navbar-collapse {
    text-align: center;
    a {
      border-top: 1px solid #e8d8c5;
    }
  }
  .header .navbar-default.scrolled .navloto {
    background-color: #fff;
  }
}
</style>
