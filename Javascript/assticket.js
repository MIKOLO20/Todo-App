let ticket = []
let visible;


function Ticket(){
    let name = document.getElementById("name").value
    let last = document.getElementById("last").value
    let date = document.getElementById("date").value
    let seat = document.getElementById("seat").value

    let ticketObj = {name, last, date, seat};
    let taken = ticket.find((user) =>{
        return user.seat === seat;
    });


    if(name == "", last == "", date == "", seat == ""){
        alert("All fields are required")
    }
   else  if(seat <=0 || seat > 50){
    alert("Number must be between 1-50")
   }
  else if (taken){
    alert("This number has been taken")
  }
 else{
    ticket.push(ticketObj);
 }

  document.getElementById("name").value = "";
 document.getElementById("last").value = ""; 
 document.getElementById("date").value = "";
 document.getElementById("seat").value = "";

  displayTicket()

 }

 function displayTicket(){
    visible = "";
    for (let i in ticket){
        visible += `<tr>
        <td> ${Number(i)}   </td>
        <td>${ticket[i].name}</td>
        <td>${ticket[i].last}</td>
        <td>${ticket[i].date}</td>
        <td>${ticket[i].seat}</td> </tr>` 
    }
    document.getElementById("display").innerHTML = visible;
 }