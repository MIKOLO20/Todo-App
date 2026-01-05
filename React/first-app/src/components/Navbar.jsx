  import React from 'react'
 import Style from "./Navbar.module.css"

const Navbar = () =>{
    return(
        <div className='d-flex justify-content-center align-items-center gap-3'>
           <div>
             <h1 className={`${Style.text} fs-4 text-success`}>Navbar</h1>
           </div>
            <button>Sign In</button>
            <ul className={`${Style.list} fs-6 gap-5 d-flex`}>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div>
                <button className="btn btn-success"></button>
            </div>
        </div>
    );
};
export default Navbar;