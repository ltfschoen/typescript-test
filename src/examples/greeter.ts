// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
/// <reference path="./greeter/index.d.ts" />

class Student {
  studentId: string|number;
  fullName: string;
  constructor(public id: string|number, public firstName: string, public lastName: string) {
    this.studentId = String(id);
    this.fullName = firstName + " " + lastName;
  }
}

function greeter(person: GreeterTypes.Person): string {
  return "Hello, " + String(person.id) + person.firstName + " " + person.lastName;
}

let user = new Student(1, "Jane", "User");

document.body.textContent = greeter(user);
