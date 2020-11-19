<template>
  <div class="btn btn-one">
      <span>了解更多</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  color: white;
  width: 91px;
  height: 27px;
  line-height: 27px;
  transition: all 0.3s;
  span {
    font-size: 10px;  
    transition: all 0.3s;
    transform: scale(1, 1);
  }
}

.btn::before, .btn::after {
  content: '';
  position: absolute;
  transition: all 0.3s;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.btn-one::before {
  left: 4px;
  z-index: 1;
  opacity: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  transform: scale(0.1, 1);
}

.btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

.btn-one::after {
  transition: all 0.3s;
  border: 1px solid #fff;
  border-radius: 5px;
}

.btn-one:hover::after {
  transform: scale(1, .1);
  opacity: 0;
}

</style>