// for loops
// While loops
// Do While loops
// break
// continue


// for (initail value; condition for break; increment/decrement){
//     your block of code
// }
// for( let i = 0; i < 5; i++){
//     console.log(2 * i)
// }
// for (loop start from 1, as long as i is still less than (continue); increase by 1 by 1)
// for (let i = 5; i > 1; 1--){
//     console.log(i)
// }
for (let i = 1; i <= 100; i++ ){
    if(i % 2 == 0){
        console.log(i)
        document.getElementById("display").innerHTML += `<h1> ${i} Even   </h1>`
    }
    else {
         document.getElementById("display").innerHTML += `<h1> ${i} Odd </h1>`
    }
}
