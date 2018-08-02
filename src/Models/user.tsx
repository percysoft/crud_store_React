import { Utils } from '../Utils/index';

export class User {
  id:number;
  name: string;
  age: number;

  constructor(User:any) {
    this.id = User.id || Utils.uuID();
    this.name = User.name;
    this.age = User.age;
  }

  setName(name:string){
    this.name = name;
  }
  setAge(age:number){
    this.age = age;
  }
}

