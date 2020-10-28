<demo>
spinner
</demo>

<template>
  <card>
    <card-item v-for="spinner in spinners"
               :key="spinner">
      <spinner :type="spinner"
               :size="8" />
      <template #tip>
        <p>{{ spinner }}</p>
      </template>
    </card-item>
  </card>
</template>

<script lang="ts">
import Card from "./card.vue";
import CardItem from "./card-item.vue";
import Spinner from "../lib/Spinner.vue";
import { ref } from "vue";
export default {
  components: {
    Spinner,
    Card,
    CardItem
  },
  data() {
    return {
      dc: null,
      spinners: ["bubbles", "circles", "lines", "spiral", "ios"]
    };
  },
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>
