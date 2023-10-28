//  WE start by declaring a function
/*function goToCoffeeShop() {                 // what is within the curly braces is a code block 
alert ('your coffee is on the way');
}
goToCoffeeShop(); *///to activate the programming inside a function you call the function

/*function alertRandom() {
    const randomNumber = Math.floor( Math.random() * 6) + 1; // I want to generate a random number every time i call this function
 alert(randomNumber);
}
alertRandom();*/
/*function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6) + 1; 
 return randomNumber; //returns the value stored in random number
}
alertRandom();*/       //return exits a function and sends a value back to the spot in the program where the function was called

/*function getYear() {
    const year = new Date().getFullYear();
    return year;
  }
  getYear();
  const yearToday = getYear();
  function isFieldEmpty() {
    const field = document.querySelector("#info");
      //now testing the value of the Field using a conditional statement//
      
      if (field.value === '') {  // if the field is empty the function will return true//
        return true;        
      } else {
        return false;}
      /* now the function has two return statements but remember that a conditional statement only follows one path so the function will 
      run one of the return statements */
    
    
    /*function isFieldEmpty() {
        const field = document.querySelector("#info");
          //now testing the value of the Field using a conditional statement//
          
          if (field.value === '') {  // if the field is empty the function will return true//
            return true;
          } else {
            return false;}
          /* now the function has two return statements but remember that a conditional statement only follows one path so the function will 
          run one of the return statements */
        
        
        /*const fieldTest = isFieldEmpty();
        if (fieldTest === true) {
          alert("Please provide your Information");
        }
           /* we can simplify  the if (!field.value === '')
          by using a logical not operator*/

          //Functions often need specific information to perform a task. In addition to getting information from a function, you can send information to a function to change how that function works.
         /* function getDrink(drink) {
            alert('your ${drink} is on the way');
          }
          getDrink('Espresso');

          function example(parameter) {      //A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.


            console.log(parameter); // Output = foo
          }
          
          const argument = "foo";
          
          example(argument);
          function sum(a,b) {
            return a+b;
        }
            
        undefined
        sum(5,7)
        12*/
        
       
          
          
      
  


