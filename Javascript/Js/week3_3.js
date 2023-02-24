//For-Each
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, indexx) {
    console.log(`${indexx}. ${fruit}`)
}
fruits.forEach(appendIndex);

//filter
console.log(fruits.filter(function(fr){
    if(fr.charAt(0)=='k')
    return fr;
}));

//map
const nums = [10,20,30]
console.log(nums.map(function(num){
    return num/10
}))

//working with obj
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
console.log(drone)
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)


