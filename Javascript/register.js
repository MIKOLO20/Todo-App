let userArr = [];
let visible;
let show;

let localuser = JSON.parse(localStorage.getItem("userArr"));

if (localuser){
    userArr = localuser;
    displayUser();
}
const registerUser = () =>{
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;


    let taken = userArr.find((user) =>{
        return user.email == email;
    });

    if (firstname == "" || lastname == "" || email == "" || address == ""){
        alert("All fields are required");
    }
    else if (taken){
        alert("email has been taken");
    }
    else{
        let userObj = {firstname, lastname, email, address}
        userArr.push(userObj);
    }
       document.getElementById("firstname").value =  "";
       document.getElementById("lastname").value =  "";
       document.getElementById("email").value = "";
       document.getElementById("address").value = "";
       
     localStorage.setItem("userArr", JSON.stringify(userArr))
   displayUser();
}
function displayUser(){
    visible = "";
    userArr.map((user, i) =>{
        visible += `
        <h1>${i+1}</h1>
        <h1> Firstname:${user.firstname} </h1>
        <h1> Lastname:${user.lastname}</h1>
        <h1> Email:${user.email}</h1>
        <h1>Address: ${user.address}</h1>
        </hr>`;
    })
    document.getElementById("display").innerHTML = visible;
}

 const searchUser = () =>{
    let show = "";
    let query = document.getElementById("query").value;

    let foundUser = userArr.filter((user) =>{
        return(
            user.firstname.toLowerCase().includes(query.toLowerCase()) ||
             user.lastname.toLowerCase().includes(query.toLowerCase()) ||
              user.email.toLowerCase().includes(query.toLowerCase()) ||
               user.address.toLowerCase().includes(query.toLowerCase()) 
        );
    });

   if(foundUser.length == 0){
    alert("invalid search")
   }
    else{
        foundUser.map((foundUser, i) =>{
            show += `
            <h1> ${i+1} </h1>
            <h1> ${foundUser.firstname}  </h1>
            <h1>  ${foundUser.lastname}  </h1>
            <h1>  ${foundUser.email}  </h1>
            <h1>  ${foundUser.address}  </h1>`;
            
        })
    }
    document.getElementById("body").innerHTML = show;
 }