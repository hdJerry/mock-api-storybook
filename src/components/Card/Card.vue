<template>
  <div v-if="!loading" class="card">
    <div class="dp">
      <img :src="data.avatarUrl" alt="dp" />
    </div>
    <div class="user">{{ data.name }} 😎</div>
    <div class="bio">{{ data.bio }}</div>
    <div>Followers: {{ data.followers.totalCount }}</div>
  </div>
  <div v-else class="card loading">Loading...</div>
</template>

<script lang="ts">
import { USER_QUERY } from "@/graphql/user.query";
import { useQuery } from "@vue/apollo-composable";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "UserCard",
});
</script>

<script lang="ts" setup>
const { result, loading } = useQuery(USER_QUERY, {
  username: "hdjerry",
});
const data = computed(() => result.value?.user ?? []);
</script>

<style scoped>
.card {
  width: 20rem;
  padding: 1rem;
  box-shadow: 0 0 20px 2px #ccc;
  border-radius: 6px;
  color: #333;
  min-height: 30rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.dp {
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 0 1rem;
}

.dp > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user {
  font-size: 1.2rem;
  font-weight: medium;
  color: #2c3e50;
}
.bio {
  border-left: 4px solid rgb(154, 28, 179);
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  margin: 1rem 0;
  background-color: #eee;
}
</style>
