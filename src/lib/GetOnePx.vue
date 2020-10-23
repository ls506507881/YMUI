<template>
  <div>
    <div class="getOnePx"
         :style="style"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    borderWidth: {
      type: String,
      value: ""
    },
    borderRadius: {
      type: String,
      value: ""
    },
    backgroundColor: {
      type: String,
      value: ""
    }
  },
  data () {
    return {
      pixelRatio: 1,
      style: "width: 100%; height: 100%;"
    };
  },
  mounted () {
    const getValues = (value) => { value.split(/\s+/).filter(item => !!item).map(item => parseInt(item)) }

    const borderWidthWithPx = this.borderWidth ? getValues(this.borderWidth).map(item => item + "px").join(" ") : "";
    const borderRadiusWithPx = this.borderRadius ? getValues(this.borderRadius).map(item => item + "px").join(" ") : "";
    this.style = (borderWidthWithPx ? "border-width:" + borderWidthWithPx + ";" : "") + (borderRadiusWithPx ? "border-radius:" + borderRadiusWithPx + ";" : "") + "width: 100%; height: 100%; -webkit-transform: scale(1); transform: scale(1); ";

    let pixelRatio = window.devicePixelRatio;
    pixelRatio = Math.ceil(pixelRatio);

    const borderWidthWithPx = this.borderWidth ? getValues(this.borderWidth).map(item => item + "px").join(" ") : "";

    const borderRadiusWithPx = this.borderRadius ? getValues(this.borderRadius).map(item => item * pixelRatio + "px").join(" ") : "";

    const backgroundColor = this.backgroundColor ? this.backgroundColor : "";

    this.pixelRatio = pixelRatio;
    this.style = (borderWidthWithPx ? "border-width:" + borderWidthWithPx + "; " : "") + (borderRadiusWithPx ? "border-radius:" + borderRadiusWithPx + "; " : "") + (backgroundColor ? "background-color:" + backgroundColor + "; " : "") + "width:" + pixelRatio + "00%; height:" + pixelRatio + "00%; -webkit-transform: scale(" + 1 / pixelRatio + "); transform: scale(" + 1 / pixelRatio + ");";
  }
};
</script>
<style lang="scss" scoped>
.getOnePx {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  border: inherit;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  pointer-events: none;
}
</style>