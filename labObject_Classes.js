//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name,
   and another key of age with the value being your age.
*/

//Code here
const me = { //Create an object called me.
  name: "Michelle", //Give it a key of name with the value being your name
  age: 32 //key of age with the value being your age.
};


//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
const dog = { //Create an object saved to the variable dog.
  name: "Shadow",
  color: "Black",
  age: 7,
  goodBoy: true
} ;


//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
console.log(dog.name);


//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 
using bracket-notation. */

//Code here
console.log(dog['color']);


//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys:
   band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your
   favorite thing in that category.
*/

//Code here
const favoriteThings = {
  band: "Imagine Dragons",
  food: "Sushi",
  person: "Vincent",
  book: "A pillar of iron - Taylor Caldwell",
  movie: "Anastasia",
  holiday: "Christmas"
};


/*
  After you've made your object, use bracket or dot notation to add 
  another key named 'car' with the value being your favorite car and 
  then another key named 'show' with the value being your favorite show.
*/

//Code here
favoriteThings.car = '4Runner';
favoriteThings['show'] = 'The Office';

/*
  Now use bracket or dot notation to change the value of the food key in 
  your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to 
  be 'Harry Potter'. (If they were either of those things already, change 
    them to something else.)
*/

//Code here

//Before Change
//console.log(favoriteThings);

favoriteThings['food'] = 'Chicken nuggets';
favoriteThings.book = 'Harry Potter';

//after changes
console.log(favoriteThings);
//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
};
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the 
  object carDetails into new variables. 
*/

//Code Here
const {color, make, model, year} = carDetails;
console.log(color);
console.log(make);
console.log(model);
console.log(year);


//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) { 
  //Code Here
  let {firstName, lastName, title} = obj; // Destructure the values from the obj parameter
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!'; // Concatenate the values and return the greeting message
  // Do not edit the code above.
}



//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
function totalPopulation(states) {//function called totalPopulation that will take in an object.
   let {utah, california, texas, arizona} = states; //Deconstructing the states object to individual properties
   return utah + california + texas + arizona; // calculating total population summing up each state
}

const states = { //Creation of object that holds a number for each state
  utah: 4,
  california: 6,
  texas: 5,
  arizona: 5
}
console.log(totalPopulation(states)); // Calling function with object to display result

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
function ingredients(properties) { // Write a function called ingredients that will take in an object.
const {crab, fat, protein} = properties; //Use object destructuring to save the property values to new variables. 
return [crab,fat,protein] //Push these new variables to an array and return the array.
}


//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
user.name = 'Bryan G. Smith'
user.email = 'bryan.smith@devmounta.in'

console.log(user);

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here
delete user.age;
console.log(user)

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require
   these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever 
  values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
class Cat { //Create a class called 'Cat'.
  constructor(name, age,color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  catValues(){
    console.log(`My cats name is ${this.name}`);
  }
}

let kitty = new Cat('Mochi','7','brown');
console.log(kitty.name);

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require 
  these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should 
  print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in 
  whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
class Wizard { //Create a class called 'Wizard'
  constructor(name,age,favoriteSpell) { //call  constructor, and require 3 parameters: name, age, favoriteSpell.
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  }
  castSpell() { //// Method to log the casting of a spell by the wizard
    console.log(`${this.name} has cast ${this.favoriteSpell}`); //This function should print "{name} has cast {favoriteSpell}"
  }
}

let newWizard = new Wizard("Ron", "11", "Expecto Patronum" ) //create an instance of your Wizard
newWizard.castSpell(); //Call the castSpell function on the instance of your wizard.


//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, 
    and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and 
    prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
class Phone { // Write a class called Phone.
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false; //sold, which should always be set to false
  }

sell() { // Create a method called 'sell'.
  this.sold = true; //changes the value of sold to true
  console.log(`${this.brand} ${this.model} has been sold`); //prints the string: '{brand} {model} has been sold.'
}

changePrice(newPrice) { //Create another method called 'changePrice'
  this.price = newPrice; //change the price in case a phone isn't selling, reassign the value of the object's price to be newPrice.
}
}
/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
let phone1 = new Phone("apple","16v", 256, "white", 1000);
let phone2 = new Phone("samsung", "14v", 300, "black", 800);
let phone3 = new Phone("motorola", "10v", 256, "green", 900);

console.log(phone1);
console.log(phone2);
console.log(phone3);

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 

phone1.changePrice(750);
console.log(phone1);

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 
phone2.sell()
console.log(phone2)

//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. 
  Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

//Code Here 
const newColors = {...colors}
console.log(newColors)


/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here
const helensInfo = {...contactInfo, ...shippingInfo}


//Print helensInfo to see what it looks like, there should be no repeating properties.
console.log(helensInfo)

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 
class Vehicle { //Create a class called Vehicle
  constructor(capacity, color, mileage) { //Make sure to call your constructor, and require these 3 parameters: capacity (how many passengers), color, and mileage.
    this.capacity = capacity
    this.color = color
    this.mileage = mileage
  }
  move(miles) { //Write a method inside your class called 'move'. The move function should take in one parameter, miles.
    this.mileage += miles
  }  
}

const newVehicle = new Vehicle(5,'blue',1000);
newVehicle.move(500)
console.log(newVehicle)

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here
const myFirstVehicle = new Vehicle(2,'red', 8)

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here
class Motorcycle extends Vehicle { //Write a class called Motorcycle that *extends* the Vehicle class
  constructor (capacity, color, mileage, make, isCool) { //In the constructor, make sure you require all of the parameters from the Vehicle class as well as 2 new ones: make and isCool.
  super(capacity, color, mileage)
  this.make = make
  this.isCool = isCool
  }
} 
/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 
const myFirstMotorcycle = new Motorcycle(5,'white',20000, 'Ford', true)
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(2000);
console.log(myFirstMotorcycle)
/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
class Boat extends Vehicle {
  constructor(capacity, color, mileage, boatName, boatType, isSeaWorthy) {
    super(capacity, color, mileage)
    this.boatName = boatName
    this.boatType = boatType
    this.isSeaWorthy = isSeaWorthy
  }
  checkSeaWorthiness() {
    if(this.isSeaWorthy === true) {
      console.log(`The ${this.color}, ${this.boatType}, ${this.boatName} is seaworthy!`)
    } else {
      console.log(`You need to get your ${this.boatType} in shape!`)
    }
  }
  performMaintenance(){
  this.isSeaWorthy = true
  }
}
/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
const newBoat = new Boat(10,'green',9000,'Moonchaser', 'large', false)
console.log(newBoat);
/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
newBoat.checkSeaWorthiness();
/*
  Now run the performMaintenance method on your boat
*/

//Code Here 
newBoat.performMaintenance();

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
newBoat.checkSeaWorthiness();
console.log(newBoat);