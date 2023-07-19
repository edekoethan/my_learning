function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}

const innerFunc = outerFunction()
//console.log(innerFunc())
//console.log(innerFunc())



///Create a closure which has three inner functions
/*
function outerFunction() {
    let count = 0;
  
    function increment() {
      count++;
      console.log('Incremented count:', count);
    }
  
    function decrement() {
      count--;
      console.log('Decremented count:', count);
    }
  
    function reset() {
      count = 0;
      console.log('Reset count:', count);
    }
  
    return {
      increment,
      decrement,
      reset
    };
  }
  
  const myClosure = outerFunction();
  
  myClosure.increment(); // Incremented count: 1
  myClosure.increment(); // Incremented count: 2
  myClosure.decrement(); // Decremented count: 1
  myClosure.reset();     // Reset count: 0
  
*/