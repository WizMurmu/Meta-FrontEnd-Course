function addTwoNums(a,b)
{
    try{
    // console.log(a+b)
    if(typeof(a)!='number')
        throw new ReferenceError('The first argument is not a number')
    else if(typeof(b)!='number')
        throw new ReferenceError('The second input is not a number')
    else
        console.log(a+b)
    }
    catch(err)
    {
        console.log('ERROR!!',err)
    
    }
}
addTwoNums(5,"5")
console.log("It still works")
