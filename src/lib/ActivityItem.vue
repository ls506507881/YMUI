<template>
  <router-link class="activity_link"
               :class="`activity_${align}`"
               :to="`/activityDetail?id=${activity.sourceId}&type=${activity.type && activity.type.id || 0}`">
    <div class="activity_image">
      <div class="activity_image_detail"
           :style="`background-image:url(${activity.image});`" />
    </div>
    <div class="activity_info">
      <div class="activity_info_tag">
        <getOnePx borderWidth="1"
                  borderRadius="4"
                  v-if="activity.type && activity.type.name"
                  class="activity_info_tag_item activity_info_tag_primary"
                  :class="activity.type && activity.type.id?'activity_type_primary'+activity.type.id:''">
          {{activity.type && activity.type.name}}
        </getOnePx>
        <getOnePx borderWidth="1"
                  borderRadius="4"
                  v-if="activity.isMore"
                  class="activity_info_tag_item activity_item_primary7">{{isLottery? '多场' : '多场可选'}}</getOnePx>
      </div>
      <div class="activity_info_title">{{activity.name}}</div>
      <div class="activity_info_list"
           v-if="!!duration">{{'时间：'+duration}}</div>
      <div class="activity_info_list"
           v-if="!!activity.address">{{'地点：'+activity.address}}</div>
      <div class="activity_info_price"
           v-if="!!price">{{"价格："+price}}</div>
    </div>
  </router-link>
</template>
<script>
import getOnePx from './GetOnePx'
export default {
  name: '',
  components: {
    getOnePx
  },
  props: {
    activity: {
      type: Object,
      default: {}
    },
    align: {
      type: String,
      default: "right"
    }
  },
  data () {
    return {
      duration: "",
      price: "",
      isLottery: false
    }
  },
  mounted () {
    const {
      activityDuration,
      type: { id: type = 0 } = {},
      pointCheck
    } = this.activity;
    const { start = "", end = "" } = activityDuration || {};
    if (!!start && !!end) {
      let [startDate, startTime] = start.split(" "),
        [endDate, endTime] = end.split(" "),
        duration;

      if (startDate === endDate) {
        duration = startDate + " " + startTime + " ~ " + endTime;
      } else {
        duration = startDate + " ~ " + endDate;
      }
      this.duration = duration
    }
    if (!!pointCheck && !!pointCheck.length) {
      const defaultPoint = pointCheck.find(
        item => item.id === getApp().globalData.defaultPartnerId
      );
      const firstPoint = pointCheck[0];
      const count = defaultPoint ? defaultPoint.price : firstPoint.price;
      const unit = defaultPoint ? "分" : firstPoint.name;

      this.price = count + unit
    }
    if ([1, 2, 3, 4, 5, 6].indexOf(type) !== -1) {
      this.isLottery = true
    }
  }
}
</script>
<style lang="scss">
.activity_link {
  display: flex !important;
  margin: 0 -15px;
  padding: 20px 0;
}
.activity_left {
  flex-direction: row-reverse;
}
.activity_left .activity_info {
  padding: 0 0 0 15px;
}
.activity_image {
  position: relative;
  width: 120px;
  min-width: 120px;
  height: 80px;
  padding: 0 20px;
}
.activity_image:before {
  position: absolute;
  left: 25px;
  right: 25px;
  top: 10px;
  bottom: 0;
  z-index: 0;
  border-radius: 5px;
  box-shadow: 0 5px 10px $--shadow-base;
  content: "";
}
.activity_image_detail {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: 50% 50% no-repeat $--bg-secondary;
  background-size: cover;
}
.activity_info {
  flex: 1;
  padding-right: 15px;
  overflow: hidden;
}
.activity_info_tag {
  line-height: 15px;
  margin-bottom: 7px;
}
.activity_info_tag_item {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 9px;
  height: 15px;
  line-height: 12px;
  margin-right: 4px;
  border-radius: 4px;
  padding: 0 3px;
  /* border: 1px solid $--brand-primary); */
  color: $--brand-primary;
}
.activity_item_primary7 {
  border: 1px solid $--mark-seven;
  color: $--mark-seven;
}
.activity_info_tag_primary {
  background: $--brand-primary;
  color: $--color-text-base-inverse;
}
.activity_type_primary11 {
  background: $--mark-one;
}
.activity_type_primary7 {
  background: $--mark-seven;
}
.activity_type_primary2 {
  background: $--mark-four;
}
.activity_type_primary5 {
  background: $--mark-two;
}
.activity_type_primary4 {
  background: $--mark-five;
}
.activity_type_primary6 {
  background: $--mark-six;
}
.activity_type_primary3 {
  background: $--mark-three;
}
.activity_info_title {
  font-weight: 500;
  margin-bottom: 5px;
}
.activity_info_list,
.activity_info_price {
  line-height: 15px;
  font-size: 11px;
  color: $--color-text-caption;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.activity_info_price {
  margin-top: 6px;
}

.activity_status {
  margin-top: 6px;
}
.activity_status_active {
  color: $--brand-primary;
}
.activity_status_current {
  color: $--brand-primary;
}
</style>