class Cat {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    meow(){
        console.log(`Meow, I'm ${this.name}`);
    }
}






//.load classes.js
let ends = new Cat("Ends", "orange");
let odds = new Cat("Odds", "brown");

console.log(ends);
console.log(odds);

ends.meow()
odds.meow()