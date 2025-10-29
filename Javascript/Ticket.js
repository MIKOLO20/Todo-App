let tickets = [];
let m;
document.getElementById("change").style.display = "none";

let localTickets = JSON.parse(localStorage.getItem("tickets"));

if (localTickets) {
  tickets = localTickets;
}

function showseat() {
  let show = "";
  for (let i = 1; i <= 50; i++) {
    let bookedseat = tickets.filter((user) => {
      return user.seat == i;
    });
    console.log(bookedseat);
    if (bookedseat.length > 0) {
         show += `<div class= "num bg-warning"> ${i} </div>`;
      continue;
    }
    show += `<div class= "num "> ${i} </div>`;
  }
  document.getElementById("tickets").innerHTML = show;
  displayTicket();
}
showseat();

function BookTicket() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let date = document.getElementById("date").value;
  let seat = document.getElementById("seat").value;

  let taken = tickets.find((user) => {
    return user.seat == seat;
  });

  if (firstname == "" || lastname == "" || date == "" || seat == "") {
    alert("All fields are required");
  } else if (seat < 0 || seat > 50) {
    alert("seat must be between 1-50");
  } else if (taken) {
    alert("seat already taken");
  } else {
    let userObj = { firstname, lastname, date, seat };
    tickets.push(userObj);
    showseat();
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }
  displayTicket();
}
function displayTicket() {
  let show = "";
  tickets.map((user, i) => {
    show += `
        <tr>
        <td>  ${i + 1}  </td>
         <td>  ${user.firstname}    </td>
          <td>  ${user.lastname}   </td>
           <td>  ${user.date}  </td>
            <td>  ${user.seat}  </td>
             <td><button class = "btn btn-success text-white" onclick ="editTicket(${i})">Edit</button></td>
            <td><button class = "btn btn-danger text-white" onclick = "cancelTicket(${i})">Cancel</button></td>`;
  });
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("date").value = "";
  document.getElementById("seat").value = "";

  document.getElementById("display").innerHTML = show;
}
function editTicket(i){
    document.getElementById("book").style.display = "none"
     document.getElementById("change").style.display = "block"

     let oldfirstname = tickets[i].firstname;
     let oldlastname = tickets[i].lastname;
     let olddate = tickets[i].date;
     let oldseat = tickets[i].seat;

  document.getElementById("firstname").value = oldfirstname;
  document.getElementById("lastname").value = oldlastname;
  document.getElementById("date").value = olddate;
  document.getElementById("seat").value = oldseat;

  m = i;
  
}
function changeTicket(){


     let newFirstname = document.getElementById("firstname").value;
     let newLastname = document.getElementById("lastname").value;
     let newDate = document.getElementById("date").value;
     let newSeat = document.getElementById("seat").value;

    tickets[m].firstname = newFirstname;
    tickets[m].lastname = newLastname;
    tickets[m].date = newDate;
    tickets[m].seat = newSeat;

     document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("date").value = "";
  document.getElementById("seat").value = "";

     document.getElementById("book").style.display = "block"
      document.getElementById("change").style.display = "none"

  displayTicket();
    
}

function cancelTicket(i) {
  tickets.splice(i, 1);
   localStorage.setItem("tickets", JSON.stringify(tickets));
  displayTicket();
}
