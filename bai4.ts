// Define an enum named Color with values RED, GREEN, and BLUE
enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

/**
 * Function that takes a value from the Color enum and prints its name.
 * @param color - The color value from the Color enum.
 */
function printColorName(color: Color): void {
  switch (color) {
    case Color.RED:
      console.log("Color: Red");
      break;
    case Color.GREEN:
      console.log("Color: Green");
      break;
    case Color.BLUE:
      console.log("Color: Blue");
      break;
    default:
      console.log("Unknown Color");
  }
}

// Example usage of the function with a color from the Color enum
const selectedColor: Color = Color.GREEN;
printColorName(selectedColor);
