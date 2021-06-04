import { People } from './../people.model';

export class Patient {

  constructor(
    private id: number,
    private people: People
  ) { }

  get getId(): number {
    return this.id;
  }

  get getPeople(): People {
    return this.people;
  }

}
