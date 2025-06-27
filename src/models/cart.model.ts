export interface Cart {
  id: number;
  book_id: number;
  title: string;
  summary: string;
  quantity: number;
  price: number;
}

export interface CartRequestBody {
  selected: number[];
}
