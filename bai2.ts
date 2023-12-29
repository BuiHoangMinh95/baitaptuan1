// Define the interface
interface Person {
  name: string;
  age: number;
  email: string;
}

// Function that takes an object of type Person and prints the information
function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Email: ${person.email}`);
}

// Example of using the function
const person: Person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

printPersonInfo(person);