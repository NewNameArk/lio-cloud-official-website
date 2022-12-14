import { getFruitList } from '@/api/market';
import { IMarketState } from '@/types/market'
import { defineStore } from 'pinia';

export const useMarket = defineStore('market', {
  state(): IMarketState {
    return {
      fruitList: []
    };
  },
  actions: {
    async getList() {
      try {
        const data = await getFruitList();
        this.fruitList = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
