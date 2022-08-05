import Axios from 'axios';
import { IFruitItem } from '@/types/market'
import { IResponse } from '@/types/resopnse'

export const getFruitList = async () => {
  const { data } = await Axios.get<IResponse<IFruitItem[]>>('/justTest/getFruitList');
  if (data.code === 0) {
    return data.data;
  }
  return [];
};