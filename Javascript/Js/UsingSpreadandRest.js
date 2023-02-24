const fruits = ['as','afda','avsh']
const vegetables = ['asasa','saaef']
const merge = [...fruits,...vegetables]//using rest operator to concatenate two arrays
console.log(merge)

//concatenating obj using rest oprerators
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//string to array using spread operators
const name = "Wiz"
const Ar_name = [...name]
console.log(Ar_name)

// Copy either an object or an array into a separate one

const car1 = {    speed: 200,    color: 'yellow'}
const car2 = {...car1} 
car1.speed = 201 
console.log(car1.speed, car2.speed)

meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);