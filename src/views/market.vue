<template>
  <div>
    <h3>FruitList</h3>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fruitList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import '@/styles/market/index.scss';
import { useMarket } from '@/store/market';
import { ref } from 'vue';
import { IFruitItem } from '@/types/market';

const marketStore = useMarket();
const fruitList = ref<IFruitItem[]>([]);
await marketStore.getList();

fruitList.value = marketStore.fruitList;
</script>
