import React from "react";
import './Login.css';
import Navbar from "../Navbar/Navbar";
const Login =()=>{
    return (
        <>
        <div className="Login_container">
        <div className="wrapper">
            <h2>Login</h2>
        <form>
       <div className="input_box">
            <label id="user">Username or Email address: *</label> <br></br>
             <input type="text" id="user" required/><br></br>
             </div>
             <div className="input_box">
             <label id="pass">Password: * </label><br></br>
             <input type="password" id="pass" required/><br></br><br></br>
             </div>

           <div className="rem-for">
             <label><input type="checkbox" />Remember me</label>
             <a href="#">Lost Your Password?</a>
             </div>
            
       
             <input type="submit" id="submit" name="SUBMIT"/>

            
             </form>
             </div>
             <div className="wrapper">
                <h2>Register</h2>
                <form>
                <div className="input_boxes">
                <label>Username*</label><br></br>
                    <input type="text"/><br></br>
                </div>
                <div className="input_boxes">
                    <label>Email address*</label><br></br>
                    <input type="email"/><br></br>
                </div>
                <div className="input_boxes">
                    <label>Password*</label><br></br>
                    <input type="password"/><br></br>
                </div>
                <div class="content">
                    <h6>Strong</h6>
                    <p>Your personal data will be used to support your experience throughout<br></br>
                    this website, to manage access to your account, and for other <br></br>
                    purposes described in our privacy policy.</p>
                </div>
                <input type="submit" id="submit" name="SUBMIT" value="Register"/>
                </form>
                </div>
                </div>
              
        </>
             
           
        

    )
}



export default Login;
