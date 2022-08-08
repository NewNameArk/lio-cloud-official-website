<template>
  这是主页面哦
  <div class="index">
    <ElSwitch v-model="isActive">switch</ElSwitch>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);
</script>