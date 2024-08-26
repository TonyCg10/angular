export interface basicCurrency {
  type: string;
  value: number;
  id: number;
}

export const CURRENCIES: basicCurrency[] = [
  { type: 'peso', value: 1, id: 1 },
  { type: 'euro', value: 2, id: 2 },
  { type: 'dolar', value: 3, id: 3 },
  { type: 'yuan', value: 4, id: 4 },
];
