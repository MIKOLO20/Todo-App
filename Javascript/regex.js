const submitForm = () =>{
    let name = document.getElementById("name").value
     let email = document.getElementById("email").value
      let phone = document.getElementById("phone").value
       let password = document.getElementById("password").value
        let conPassword = document.getElementById("con").value


    let nameRegex = /^[A-Za-z]{3}$/
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,}$/

    console.log(nameRegex.test(name))
    console.log(emailRegex.test(email))
    
    let nameTest = nameRegex.test(name)
    let emailTest = emailRegex.test(email)
    let passwordTest =  passwordRegex.test(password)
  if(!nameTest){
    // alert("char must be betwwen 3")
    document.getElementById("name").style.border = "2px solid red !important";
     document.getElementById("name").style.borderColor = "red";
     document.getElementById("nameW").innerHTML = `<p class="text-danger">Name must be atleast 3 char long</p>`
  } else if(!nameTest){
    document.getElementById("name").style.border = "";
     document.getElementById("name").style.borderColor = "";
     document.getElementById("nameW").innerHTML = ``;
  } 
  else if (!emailTest){
    document.getElementById("email").style.border = "2px solid red !important";
     document.getElementById("email").style.borderColor = "red";
     document.getElementById("emailW").innerHTML = `<p class="text-danger">Email must be valid</p>`
  } if(!phoneTest){
    alert("wrong number")
  }

}

const phoneCheck = ()=>{
    let phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/
     let phone = document.getElementById("phone").value
     phoneTest = phoneRegex.test(phone)
     if(!phoneTest){
         document.getElementById("phone").style.border = "2px solid red !important";
     document.getElementById("phone").style.borderColor = "red";
     document.getElementById("phoneW").innerHTML = `<p class="text-danger">not allowed</p>`
     }
} 

const fetchComment = async ()=>{
    let query = "se";

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/post/1/comments");
        let comm = await res.json();
        console.log(comm)

        let res2 = await fetch ("https://jsonplaceholder.typicode.com/users");
        let users = await res2.json();
        console.log(users)

      let commEmail = comm.filter((comment)=>{
        return comment.email.includes(query);
      });

    let usersEmail = users.filter((user)=>{
        return user.email.includes(query);
    });

      console.log(commEmail)
       console.log(usersEmail)
        let commy = commEmail.concat(usersEmail)
       console.log(commy)


    } catch (error) {
        alert("something need to be fixed")
    }
}