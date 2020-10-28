<template>
  <div class="star_wrapper">
    <div class="image_mockup">
      <div class="one_img wow zoomIn">
        <div class="layer layer2">
          <img src="../../../assets/images/circle1.png"
               alt="">
        </div>
      </div>
      <div class="one_img">
        <img class="faa-spin animated"
             src="../../../assets/images/circle-2.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_02.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_03.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_04.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_05.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_06.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_07.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/shape_08.png"
             alt="">
      </div>
      <div class="one_img">
        <img src="../../../assets/images/dot.png"
             alt="">
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/tablet_04.png"
               alt="">
        </div>
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/mackbook.png"
               alt="">
        </div>
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/iphonex1.png"
               alt="">
        </div>
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/tablet_01.png"
               alt="">
        </div>
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/tablet_03.png"
               alt="">
        </div>
      </div>
      <div class="one_img wow slideInnew">
        <div class="layer layer2">
          <img src="../../../assets/images/tablet_02.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
  setup() {}
};
</script>
<style lang="stylus" scoped>
.star_wrapper
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  z-index -1
  overflow hidden
  background #f5f7fb
  .image_mockup
    .slideInnew
      animation-name slideInnew
    .zoomIn
      animation-name zoomIn
    .one_img
      position absolute
      z-index -1
      opacity 1
      transition all 0.4s linear
      .layer
        position relative !important
      &:nth-child(1)
        right 90px
        bottom 190px
        z-index -2
      &:nth-child(2)
        top 100px
        left -150px
        z-index -2
      &:nth-child(3)
        top 50%
        left 56%
        z-index -2
        animation rotateTriangle 6s linear infinite alternate
      &:nth-child(4)
        top 210px
        left 30%
        z-index -2
        animation slip 10s linear infinite alternate
      &:nth-child(5)
        bottom 80px
        left 200px
        z-index -2
        animation float 3s linear infinite alternate
      &:nth-child(6)
        top 42%
        left 160px
        z-index -2
      &:nth-child(7)
        top 220px
        top 80px
        right 30%
        z-index -2
        animation up 3s linear infinite alternate
      &:nth-child(8)
        right 40%
        z-index -2
        animation zoomIn 3s linear infinite alternate
      &:nth-child(9)
        bottom 180px
        left 600px
        z-index -2
        animation rotateTwoTriangle 3s linear infinite alternate
      &:nth-child(10)
        top 460px
        right 414px
        z-index -2
        animation down 3s linear infinite alternate
      &:nth-child(11)
        top 130px
        right -120px
        // animation slideInnew 0.3s linear infinite alternate
        // animation-delay 0.4s
      &:nth-child(12)
        top 370px
        right 120px
      &:nth-child(13)
        right 500px
        bottom 40px
      &:nth-child(14)
        // right 665px
        // bottom -433px
        right 630px
        bottom -440px
      &:nth-child(15)
        right -220px
        bottom 50px
      &:nth-child(16)
        right 30px
        bottom -323px
    @media (max-width: 800px)
      .one_img:nth-child(1)
        display none
      .one_img:nth-child(11),
      .one_img:nth-child(12),
      .one_img:nth-child(13),
      .one_img:nth-child(14),
      .one_img:nth-child(15),
      .one_img:nth-child(16)
        opacity 0.3
.faa-spin,
.faa-spin.animated,
.faa-spin.animated-hover:hover
  animation spin 1.5s linear infinite
@keyframes slideInnew
  0%
    opacity 0
    transform translate(10px, 50px)
  100%
    transform translate(0, 0)
@keyframes spin
  0%
    transform rotate(0)
    transform rotate(0)
  100%
    transform rotate(359deg)
    transform rotate(359deg)
@keyframes zoomIn
  from
    opacity 0
    transform scale3d(0.3, 0.3, 0.3)
    -webkit-transform scale3d(0.3, 0.3, 0.3)
  50%
    opacity 1
@keyframes slip
  from
    transform translate3d(0px, 0px, 0px) rotateZ(54.674deg)
  to
    transform translate3d(250px, 160px, 0px) rotateZ(500deg)
@keyframes float
  from
    transform translate3d(0px, 0px, 0px) rotateZ(0deg)
  to
    transform translate3d(20px, -100px, 0px) rotateZ(0deg)
@keyframes down
  from
    transform translate3d(0px, 0px, 0px) rotateZ(0deg)
  to
    transform translate3d(-10px, 80px, 0px) rotateZ(0deg)
@keyframes rotateTriangle
  from
    transform translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
  to
    transform translate3d(-180px, 80px, 0px) rotateX(0deg) rotateY(2000deg) rotateZ(0deg)
@keyframes rotateTwoTriangle
  from
    transform translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
  to
    transform translate3d(-180px, 80px, 0px) rotateX(0deg) rotateY(2000deg) rotateZ(0deg)
@keyframes up
  from
    transform translate3d(0px, 0px, 0px) rotateZ(0deg)
  to
    transform translate3d(0px, 100px, 0px) rotateZ(0deg)
</style>