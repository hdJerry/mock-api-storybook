<template>
  <div v-if="!loading" class="posts">
    <div v-for="{ id, title, body } in data" :key="id" class="card">
      <h4 class="title">{{ title }}</h4>
      <div class="body">{{ body }}</div>
    </div>
  </div>
  <div v-else class="card loading">Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "UserPosts",
});
</script>

<script lang="ts" setup>
const loading = ref(true);
const data = ref(null);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((res) => {
    data.value = res.slice(0, 4);
    loading.value = false;
  });
</script>

<style>
.posts {
  width: 100%;
  padding: 0.5rem;
}
.card {
  flex: 1;
  min-height: 5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.card > .body {
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.2;
  color: rgb(117, 114, 114);
  word-wrap: break-word;
}
.card > .title {
  text-transform: capitalize;
  color: #2c3e50;
}
.card:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
</style>
