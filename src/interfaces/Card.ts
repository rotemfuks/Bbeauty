export interface Card {
  name: string;
  image: string;
  alt?: string;
  description: string;
  longDescription: string;
  phone: string;
  address: string;
  email: string;
  state: string;
  zipCode: string;
  id?: number;
  userId?: number;
}
