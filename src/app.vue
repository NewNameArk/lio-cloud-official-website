<template>
  <div class="logo">
    <!-- <img alt="Vue logo" src="./assets/img/logo.png" /> -->
    <h3>LIO Cloud Official Website</h3>
    <!-- <p>{{ time }}</p> -->
  </div>
  <nav>
    <router-link :to="{ name: 'index' }">主页</router-link>
    <router-link :to="{ name: 'user' }">个人中心页</router-link>
    <router-link :to="{ name: 'market' }">服务列表页</router-link>
  </nav>
  <hr />
  <div class="container">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const time = ref('')
onMounted(()=> {
  window.setInterval(() => {
    time.value = new Date().toLocaleString();
  }, 1000);
})
</script>
<style scoped>
.logo {
  text-align: center;
}

nav {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 4px;
}
</style>
