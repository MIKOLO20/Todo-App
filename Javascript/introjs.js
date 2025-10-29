// alert("I am happy")


let college = "SQI College of ICT"
// console.log(college)

console.log(document.getElementById("mikky").innerHTML);
// console.log(document.getElementById("mikky").innerText);
console.log(document.getElementById("avatar").src);

// document.getElementById("mikky").innerHTML += "<h3 style='color:green'> This is Magic </h3> <h1> This is Awesome </h1> <P style= 'color:red'>micky mouse</p>";

function doMagic(){
    document.getElementById("mikky").innerHTML += "<h3 style='color:green'> This is Magic </h3> <h1> This is Awesome </h1> <P style= 'color:red'>MICKY MOUSE</p>";
}

function changeImage(){
    document.getElementById("avatar").src = "asset22/AAAABXCt4gbM8mwLgX6gn-n_H4q3aA_Am4fkkaumIN-y3zrNElfYRCJ-PgxFja-m0w-TSlTep5cs3SESDzkebI5b4dDB-B1oyOMTPsEo9SmMy1sImQ2p0E20llA159t76OI1WCZa.webp";
}
function Reverse(){
    document.getElementById("avatar").src = "./asset22/AAAABeHe_OVl4W4DQgkehewW4FGi9I-nuXzGKPPY5XEWYrRcsavKtEh5kvz_zvLWO8mxDqsQJaSeDV-GFCzFwLIhjv2UFXoBz_13LSY.webp";
}