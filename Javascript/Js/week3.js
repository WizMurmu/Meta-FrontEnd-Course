// var currency1 = 100
// var currency2 = 0
// var conv_rate=1.5
// function currencyconv(cur1,rate)
// {
//     return cur1*rate
// }
// currency2 = currencyconv(currency1,conv_rate)
// console.log(currency2)

// console.log('Hello');

//Self-designed console log function that specifies the return type instead of undefined
// function consoleLog(val) {
//     console.log(val)
//     return val
// }
// consoleLog('Hello')

function DoubleIt(a)
{
    return 2*a
}
function returnObj(a)
{
    return {
        prop : a
    }
}
console.log(DoubleIt(20).toString())
console.log(returnObj(DoubleIt(10)))
