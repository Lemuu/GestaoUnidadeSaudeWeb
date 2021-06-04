import { Id } from './id.model';

export interface User extends Id {
  login: string;
  password: string;
}
