import { Sex } from './sex.model';
import { User } from './user.model';
import { Address } from './address.model';
import { Phone } from './phone.model';
import { CPF } from './cpf.model';
import { Id } from './id.model';

export interface People extends Id {
  name: string;
  nameMother: string;
  CPF: CPF;
  sex: Sex;
  dateBorn: Date;
  phone: Phone;
  address: Address;
  user?: User;
}
