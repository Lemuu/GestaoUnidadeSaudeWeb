import { Speciality } from './../speciality.model';
import { People } from '../people.model';

export class Doctor {

  constructor(
    private id: number,
    private people: People,
    private speciality: Speciality
  ) { }

  get getId(): number {
    return this.id;
  }

  get getSpeciality(): Speciality {
    return this.speciality;
  }

}
