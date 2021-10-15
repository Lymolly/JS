'use strict'
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice');

//Start
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

////ECMA script 5 realization
///
//
// const Animal = function(options){
//     this.name = options.name
//     this.color = options.color

//     // this.voice = function(){
//     //     console.log(this.name + " voice")
//     // }
// }
// Animal.prototype.voice = function(){
//     console.log(this.name + " voice")
// }

// const dog = new Animal({name:"Bekki",color:"#fff"})

// const Cat = function(options){
//     Animal.apply(this,arguments)
//     this.hasTail = options.hasTail
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat


// Cat.prototype.voice = function(){
//     console.log(this.name + " says Miay")
// } 

// const cat = new Cat({name:"Murzik",color:"#000",hasTail:true})
// console.log(cat)
// cat.voice()
// dog.voice();


////ECMA script 6 realization

// class Person{
//     constructor(options){
//         this.name = options.name
//         this.surname = options.surname
//         this.age = options.age
//     }
//     fullInfo(){
//         console.log(`${this.name} ${this.surname} is ${this.age} y.o`)
//     }
// }
// const employee = new Person({name:'Denis',surname:'Kozyriev',age:20})
// employee.fullInfo()

// class Boss extends Person{
//     constructor(options){
//         super(options)
//         this.isBoss = options.isBoss
//     }
//     fullInfo(){
//         console.log("I`m boss!Thats all you needs to know")
//     }
// }
// const boss = new Boss({name:'Boss!',surname:'Bossovich',age:30,isBoss:true})
// boss.fullInfo()
// console.log(`Is ${boss.name} boss : ${boss.isBoss}`)
