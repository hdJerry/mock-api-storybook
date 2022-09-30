<template>
  <div class="home">
    <Card />
    <div class="divider" />
    <Posts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card";
import Posts from "@/components/Posts";

export default defineComponent({
  name: "HomeView",
  components: {
    Card,
    Posts,
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.divider {
  width: 1px;
  height: 100vh;
  background-color: #ccc;
  margin: 0 1rem;
}
</style>
