import { Id } from './id.model';

export interface Address extends Id {
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  CEP: string;
}
