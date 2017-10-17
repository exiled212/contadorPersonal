import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user: UserInterface = {
    name: 'Daniel Felipe Ruiz Avella',
    money: 1700000
  };

  constructor() {}

  get(): UserInterface {
    return this.user;
  }

}

export interface UserInterface {
  name: string;
  money: number;
}
