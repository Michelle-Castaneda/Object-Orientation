const person = {
    firstName: "Michelle",
    lastName: "Castaneda",
    favoriteColor: "yellow"
}

// console.log(person.firstName)
// console.log(person['lastName'])
// const color = 'favoriteColor'
// console.log(person[color])


const meal = {
    appetizer: "spinach and artichoke dip",
    entree: "tea leaf salad with chicken",
    dessert: "boba tea",
    drink: "thai iced tea"
}

const {dessert} = meal //destructuring 
console.log(dessert);

// const snack = "appetizer"
// console.log(meal[snack])

//deconstructing multiple items

//const {appetizer, entree} = meal //which objetc are we pulling goes after the =
//console.log(appetizer);
//console.log(entree);

//const{drink: myFavoriteTea} = meal//name in it something different
//meal.drink => my FavoriteTea is another way to change the name 
//console.log(myFavoriteTea);


/*console.log ('Value of meal before reassigning tea variable')
myFavoriteTea = 'yerba mate'
console.log ('Value of meal after reassigning tea variable')
console.log(meal)
console.log(myFavoriteTea)*/



//practice adding another property with boolean values/ syntax for adding keys
//person.hasPets = true
//to see what is in there
//console.log(person['hasPets'])

//deconstructing multiple values and renaming them
const{firstName: nickName, lastName: surname, favoriteColor: bestColor} = person


// console.log(nickName)
// console.log(surname)
// console.log(bestColor)

/*for (plate in meal){ // to get all the keys
    console.log(plate)
}*/

/*for (plate in meal){ // to get all the keys in the for loop dot notation wont work
    console.log(`The key is ${plate} and the value is ${meal[plate]}`)
}*/

//subscripting

//deleting something from meal
// console.log('Before Deletion')
// console.log(meal)
// delete meal.entree
// console.log('After Deletion')
// console.log(meal)


//CLASSES

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hello, I'm ${this.name} the ${this.breed} and I'm ${this.age}`)
    }
}

let catsnack = new Dog('Catsnack', 'Pitbull', 2)
let red = new Dog('Professor Redlington', "doodle", 4)
console.log(catsnack.name)

// catsnack.greeting()
// red.greeting()

for(attr in henri) {
    console.log(henri[attr])
}






//extend class

class puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    piddle(){
        console.log(`${this.name} has peed on the floor`)
    }
    levelUp(num) {
        this.trainingLevel += num
    }
}

let fido = new puppy('Fido', 'beagle', 1, 12)
console.log(fido)
fido.greeting()
fido.piddle()
fido.levelUp(5) // it adds up to the current value 
console.log(fido.trainingLevel)



// and instance outside the class

let catsnack = new Dog("Catsnack", "Pitbull", 2)
let red = new Dog('Professor Redlington', 'some king of doodle', 4)
//let henry = new Cat('Henry King of the Cosmos, "DSH', 16) referring other class

/*console.log(catsnack.name) // only to print out the name in the class Dog 
console.log(catsnack)
console.log(red)
console.log(henry)

catsnack.greeting()
red.greeting()*/

for (attr in red) {
    console.log(red[attr])
}