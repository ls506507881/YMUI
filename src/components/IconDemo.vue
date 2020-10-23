<template>
  <div class="container">
    <span class="label_icon"
          v-for="(item,index) of iconList">
      <icon :type="item.type"
            :class="item.class"
            :style="'font-size:20px; font-weight: 400;'" />
      <i class="label_text">{{item.type}}</i>
    </span>
  </div>
</template>
<script lang="ts">
import Icon from "../lib/Icon.vue";
import { ref } from "vue";
export default {
  components: { Icon },
  data() {
    return {
      iconList: [
        {
          type: "cellphone",
          class: "222"
        },
        {
          type: "close",
          class: ""
        },
        {
          type: "car",
          class: ""
        },
        {
          type: "check",
          class: ""
        },
        {
          type: "disable",
          class: ""
        },
        {
          type: "down",
          class: ""
        },
        {
          type: "delete",
          class: ""
        },
        {
          type: "activity",
          class: ""
        },
        {
          type: "discount",
          class: ""
        },
        {
          type: "edit",
          class: ""
        },
        {
          type: "failure",
          class: ""
        },
        {
          type: "gift",
          class: ""
        },
        {
          type: "food",
          class: ""
        },
        {
          type: "help",
          class: ""
        },
        {
          type: "left",
          class: ""
        },
        {
          type: "list",
          class: ""
        },
        {
          type: "index",
          class: ""
        },
        {
          type: "indoor_map",
          class: ""
        },
        {
          type: "mall",
          class: ""
        },
        {
          type: "exchange",
          class: ""
        },
        {
          type: "location",
          class: ""
        },
        {
          type: "map",
          class: ""
        },
        {
          type: "member_card",
          class: ""
        },
        {
          type: "message",
          class: ""
        },
        {
          type: "member",
          class: ""
        },
        {
          type: "notice",
          class: ""
        },
        {
          type: "password",
          class: ""
        },
        {
          type: "plus",
          class: ""
        },
        {
          type: "my",
          class: ""
        },
        {
          type: "order",
          class: ""
        },
        {
          type: "phone",
          class: ""
        },
        {
          type: "reduce",
          class: ""
        },
        {
          type: "right",
          class: ""
        },
        {
          type: "queue_up",
          class: ""
        },
        {
          type: "scan",
          class: ""
        },
        {
          type: "qrcode",
          class: ""
        },
        {
          type: "register",
          class: ""
        },
        {
          type: "search",
          class: ""
        },
        {
          type: "service",
          class: ""
        },
        {
          type: "shop",
          class: ""
        },
        {
          type: "star_fill",
          class: ""
        },
        {
          type: "star",
          class: ""
        },
        {
          type: "setting",
          class: ""
        },
        {
          type: "share",
          class: ""
        },
        {
          type: "time",
          class: ""
        },
        {
          type: "success",
          class: ""
        },
        {
          type: "up",
          class: ""
        },
        {
          type: "thumbs_up_fill",
          class: ""
        },
        {
          type: "verification_code",
          class: ""
        },
        {
          type: "thumbs_up",
          class: ""
        },
        {
          type: "menu",
          class: ""
        },
        {
          type: "loading_fill",
          class: ""
        },
        {
          type: "picture",
          class: ""
        },
        {
          type: "coupon_fill",
          class: ""
        },
        {
          type: "member_card_fill",
          class: ""
        },
        {
          type: "list_fill",
          class: ""
        },
        {
          type: "point_fill",
          class: ""
        },
        {
          type: "money_fill",
          class: ""
        },
        {
          type: "score_fill",
          class: ""
        },
        {
          type: "score",
          class: ""
        },
        {
          type: "sign_in_fill",
          class: ""
        },
        {
          type: "sign_in",
          class: ""
        },
        {
          type: "table_fill",
          class: ""
        },
        {
          type: "coupon",
          class: ""
        },
        {
          type: "user_scan",
          class: ""
        },
        {
          type: "user_saoma",
          class: ""
        },
        {
          type: "card_holder_fill",
          class: ""
        },
        {
          type: "message_fill",
          class: ""
        },
        {
          type: "address_book_fill",
          class: ""
        },
        {
          type: "radar_fill",
          class: ""
        },
        {
          type: "work_fill",
          class: ""
        },
        {
          type: "address",
          class: ""
        },
        {
          type: "share1",
          class: ""
        },
        {
          type: "email",
          class: ""
        },
        {
          type: "edit1",
          class: ""
        },
        {
          type: "telephone",
          class: ""
        },
        {
          type: "add",
          class: ""
        },
        {
          type: "card_fill",
          class: ""
        },
        {
          type: "card",
          class: ""
        },
        {
          type: "certification_fill",
          class: ""
        },
        {
          type: "comment",
          class: ""
        },
        {
          type: "label_fill",
          class: ""
        },
        {
          type: "like_",
          class: ""
        },
        {
          type: "like_1",
          class: ""
        },
        {
          type: "like_2",
          class: ""
        },
        {
          type: "more_fill",
          class: ""
        },
        {
          type: "my_fill",
          class: ""
        },
        {
          type: "my_photo",
          class: ""
        },
        {
          type: "my_introduction",
          class: ""
        },
        {
          type: "new_label",
          class: ""
        },
        {
          type: "Popularity_more",
          class: ""
        },
        {
          type: "me",
          class: ""
        },
        {
          type: "my_QR_code",
          class: ""
        },
        {
          type: "prompt_fill",
          class: ""
        },
        {
          type: "news",
          class: ""
        },
        {
          type: "news_fill",
          class: ""
        },
        {
          type: "search1",
          class: ""
        },
        {
          type: "product_fill",
          class: ""
        },
        {
          type: "website",
          class: ""
        },
        {
          type: "product",
          class: ""
        },
        {
          type: "website_fill",
          class: ""
        },
        {
          type: "daily_fill",
          class: ""
        },
        {
          type: "Message",
          class: ""
        },
        {
          type: "save_fill",
          class: ""
        },
        {
          type: "up_fill",
          class: ""
        },
        {
          type: "email_fill",
          class: ""
        },
        {
          type: "card_fill1",
          class: ""
        },
        {
          type: "phone_fill",
          class: ""
        },
        {
          type: "product_fill",
          class: ""
        },
        {
          type: "cross_fill",
          class: ""
        },
        {
          type: "waring_fill",
          class: ""
        },
        {
          type: "waring",
          class: ""
        },
        {
          type: "boss_fill",
          class: ""
        },
        {
          type: "colleague_fill",
          class: ""
        },
        {
          type: "gift_fill",
          class: ""
        },
        {
          type: "manage_fill",
          class: ""
        },
        {
          type: "new_apply_fill",
          class: ""
        },
        {
          type: "other_fill",
          class: ""
        },
        {
          type: "contact",
          class: ""
        },
        {
          type: "organization_fill",
          class: ""
        },
        {
          type: "product_fill2",
          class: ""
        },
        {
          type: "Renewals_fill",
          class: ""
        },
        {
          type: "news_fill1",
          class: ""
        },
        {
          type: "write_off_fill",
          class: ""
        },
        {
          type: "playbill_fill",
          class: ""
        },
        {
          type: "setting_fill",
          class: ""
        },
        {
          type: "wechat",
          class: ""
        },
        {
          type: "login_phone",
          class: ""
        },
        {
          type: "login_message",
          class: ""
        },
        {
          type: "erweima",
          class: ""
        }
      ]
    };
  }
  // setup() {
  //   const bool = ref(true);
  //   return { bool };
  // }
};
</script>
<style lang="scss" scoped>
.container {
  // padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > .label_icon {
    margin-left: -1px;
    margin-top: -1px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    & > .label_text {
      font-style: normal;
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>