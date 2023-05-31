class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance, it inherits the constructor from the parent class
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // super calls the constructor of the base class
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Tom");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: "t", describe: accounting.describe };

// accountingCopy.describe();
