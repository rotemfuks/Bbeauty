export default interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  phone?: any;
  address?: string;
  isBusiness: boolean;
}
