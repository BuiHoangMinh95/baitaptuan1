// A generic function that takes an array and returns its first element
function getFirstElement<T>(arr: T[]): T | undefined {
  // Check if the array is not empty, then return the first element; otherwise, return undefined
  return arr.length > 0 ? arr[0] : undefined;
}

// Using the function with an array of integers
const integers: number[] = [1, 2, 3, 4, 5];
const firstInteger: number | undefined = getFirstElement(integers);
console.log(`First Integer: ${firstInteger}`);

// Using the function with an array of strings
const strings: string[] = ["apple", "banana", "cherry"];
const firstString: string | undefined = getFirstElement(strings);
console.log(`First String: ${firstString}`);