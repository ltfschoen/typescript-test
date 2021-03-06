// Declaration file. References:
// - https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
// - https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
// - https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

declare namespace GreeterTypes {
  class StudentLib {
    constructor(
      firstName: string,
      lastName?: string
    )
  }

  namespace StudentLib {
    let studentId: string|number;
    let fullName: string;
  }

  interface Person {
    readonly id: string|number;
    firstName: string;
    lastName?: string;
  }

  function greeter(person: Person): string;
}
