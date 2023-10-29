function add3Numbers(first,second,third) {
    const sum = first + second + third;
    console.log(sum)
    return sum
}
add3Numbers(3,4,5)
const add6Numbers = add3Numbers(2,4,5) + add6Numbers(3,5,7);
console.log(`the sum is ${add6Numbers}`)

//The code you provided is a JavaScript event listener that responds to a "click" event on an HTML element with the id or reference "display." When the "display" element is clicked, the code generates a random number using Math.random() and sets this random number as the text content of the "display" element
display.addEventListener('click', () => {//arrow function that defines the behavior that occurs when the "click" event is triggered. In this case, the arrow function generates a random number using Math.random() and assigns it as the text content of the display element.


    display.textContent = Math.random()
  })