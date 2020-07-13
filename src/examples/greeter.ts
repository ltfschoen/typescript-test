// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
/// <reference path="./greeter/index.d.ts" />

class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

function greeter(person: GreeterTypes.Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "User");

document.body.textContent = greeter(user);
