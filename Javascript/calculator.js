function calculator(param){
    document.getElementById("calc").innerText += param;
}
function showResult() {
   let calc = document.getElementById("calc").innerText
    let result = eval(calc);
    document.getElementById("result").innerText = result;
}
function clearOne(){
    let text = document.getElementById("calc").innerText;
    let newText = text.slice(0, -1);
     document.getElementById("calc").innerText = newText;
}
function clearAll(){
    document.getElementById("calc").innerText = "";
     document.getElementById("result").innerText = "";
}
