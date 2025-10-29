function fizzbuzz(){
    for (let i = 1; i <= 50; i++){
        if (i % 3 == 0 && i % 5 == 0){
           document.getElementById("display").innerHTML += `<h1>${i} - fizzbuzz </h1>`;
        }
      else if (i % 5 == 0){
           document.getElementById("display").innerHTML += `<h1>${i} - buzz</h1>`;
        }
         else if (i % 3 == 0){
           document.getElementById("display").innerHTML += `<h1>${i} - fizz </h1>`;
        }
        else {
             document.getElementById("display").innerHTML += `<h1>${i} -  </h1>`;
        }
    }
}
 function lyrics(){
    for( let i = 99; i >=1; i--){
        if (i==1){
            document.getElementById("display").innerHTML += `<h1> ${i} bottles of beer on the wall, ${i} bottle of beer. 
             Take one down and pass it around, no more bottles of beer on the wall.</h1>
             <h1> No more bottles of beer on the wall,no more bottles of beer.
             Go to the store and buy some more, 99 bottles of beer in the store.</h1> `;
        }
        else {
            document.getElementById("display").innerHTML += `<h1> ${i} bottles of beer on the wall, ${i} bottles of beer.
            Take one down and pass it around, ${
                i - 1
            } bottles of beer on the wall.</h1>`
        }
    }
 }