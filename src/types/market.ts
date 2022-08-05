export interface IFruitItem {
  id: number;
  name: string;
  price: number;
}

export interface IMarketState {
  fruitList: IFruitItem[];
}