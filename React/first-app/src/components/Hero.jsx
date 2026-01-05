import React, { useState } from 'react'

    // useState, Interpolation, Iteration

const Hero = () => {

  const [myName, setmyName] = useState("David")
const [number, setnumber] = useState(10)
  const [user, setuser] = useState("")
   let typedName = ""
    //  let myName = "Michael"
  // let number = 20
    const myStyle ={
        color: "green",
        fontSize: "25px",
        fontFamily: "cursive",
        border: "2px solid purple",
        textAlign: "center"  
    }

    const ChangeName = () =>{
      console.log("Name has changed")
      setmyName("Moses")
      // console.log(myName)
    }
    const IncreaseNumber = () =>{
      console.log("increased number")
      setnumber(number+1)
      // number++
      // console.log(number)
    }
    const userInput = () =>{
      typedName = event.target.value
    }
    const displayUser = () =>{
      console.log(typedName)
      setuser(typedName)
    }
  return (
    <div> <h1 style={{color: "red", fontFamily: "cursive", fontSize: "45px"}}>Hello {myName} </h1>
     <h1 style={myStyle}>age is:{number}  </h1>
     <div className="mx-auto p-3 my-4 col-6 rounded-3 border shadow-lg mt-6">
      <input className='form-control' type="text" placeholder='Enter your name' onChange={(event) =>userInput(event)}/>
      <button onClick={displayUser} className='btn btn-outline-danger my-2 w-100'>Submit</button>
     </div>
      <button onClick={ChangeName}>Change Name</button>
       <button className= "ms-3" onClick={IncreaseNumber}>Increase Number</button>
     </div>
    
  );
}

export default Hero;