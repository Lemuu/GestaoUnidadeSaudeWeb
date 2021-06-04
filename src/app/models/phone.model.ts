import { Id } from './id.model';

export interface Phone extends Id {
  codeCountry: string;
  DDD: string;
  number: string;
}
