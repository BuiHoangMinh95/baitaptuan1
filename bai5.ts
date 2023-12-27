/**
 * Class representing a rectangle.
 */
class Rectangle {
  // Properties
  private length: number;
  private width: number;

  /**
   * Constructor to initialize the rectangle with given length and width.
   * @param length - The length of the rectangle.
   * @param width - The width of the rectangle.
   */
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  /**
   * Method to calculate the area of the rectangle.
   * @returns The area of the rectangle.
   */
  calculateArea(): number {
    return this.length * this.width;
  }
   // Method to get the length of the rectangle
  getLength(): number {
    return this.length;
  }

  // Method to get the width of the rectangle
  getWidth(): number {
    return this.width;
  }
}

// usage
const myRectangle = new Rectangle(5, 10);
const area = myRectangle.calculateArea();

console.log(`Length: ${myRectangle.getLength()}`);
console.log(`Width: ${myRectangle.getWidth()}`);
console.log(`Area: ${area}`);
