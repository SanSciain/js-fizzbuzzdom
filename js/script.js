let value;
let valueClass;

for (let i=1; i<=100; i++){

    if ( ( i%3 === 0) && ( i%5 === 0 ) ) {
        value = "FizzBuzz";
        valueClass = "fizzbuzz";
    } else if ( i%3 === 0) {
        value = "Fizz";
        valueClass = "fizz"
    } else if ( i%5 === 0) {
        value = "Buzz"
        valueClass = "buzz"
    } else {
        value = i;
        valueClass = "default";
    }

    console.log(value);

    let htmlContainer = document.getElementById("container");
    htmlContainer.innerHTML += `<div class="box ${valueClass}">${value}</div>`;
}