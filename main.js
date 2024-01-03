//ex 1
//concatanate the following two variables and store it in a fullStack variable
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "Mongo DB"];
const fullStack = frontEnd + "," + backEnd;

console.log(fullStack);

//ex 2
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add 'Meat' in the begining of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
//add 'Sugar' at the end of your shopping cart
shoppingCart.push("Sugar");
//remove 'Honey' if you're allergic to honey
shoppingCart.splice(4, 1);
//modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";

console.log(shoppingCart);

//ex 3
//Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
var input = "MAY";
var season = undefined;
input = input.toLocaleLowerCase();

if (input === "january" || input === "february" || input === "december") {
  season = "Winter";
} else if (input === "march" || input === "april" || input === "may") {
  season = "Spring";
} else if (input === "june" || input === "july" || input === "august") {
  season = "Summer";
} else if (
  input === "september" ||
  input === "october" ||
  input === "november"
) {
  season = "Autumn";
} else {
  season = "Wrong input";
}

console.log(season);

//ex 4
//Given an object how many more pages each ink color can print, output the maximum number of pages the printer can print before aby if the colors run out
//A single printed page requires each color once, so printing is not possible if any of the slots lack ink
var inkLevels = {
  cyan: 66,
  magenta: 55,
  yellow: 44,
};

var numberOfPages = Math.min(
  inkLevels.cyan,
  inkLevels.magenta,
  inkLevels.yellow
);

console.log(numberOfPages);
