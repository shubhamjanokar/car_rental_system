import { useState } from "react";

import "../components/index.css";
import AuthService from "../services/auth.service";


const Signin = () => {

const [user, setUser] = useState({UserName: "", Password: ""});

const [message, setmessage] = useState("");
const handleChange = (args)=>
{
   
    var copyOfCurrentUserInState = {...user};
    copyOfCurrentUserInState[args.target.name] = args.target.value;
    setUser(copyOfCurrentUserInState);
    setmessage("");
}


const sendLoginRequest=()=>{

    console.log(user.UserName);
    if(user.UserName!=null&&user.UserName!=="sam"){
    AuthService.login(user.UserName, user.Password).then(
        () => {
          sessionStorage.setItem("users",JSON.stringify({"username":user.UserName,"password":user.Password}));
          sessionStorage.setItem("userlogged",true);
          window.location.href="/profile";
         
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

         
          setmessage(resMessage);
        }
      );
    } else if (user.UserName!=null&&user.UserName==="sam"){
      AuthService.login(user.UserName, user.Password).then(
        () => {
          sessionStorage.setItem("users",JSON.stringify({"username":user.UserName,"password":user.Password}));
          sessionStorage.setItem("userlogged",true);
          window.location.href="/admin/profile";
         
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

         
          setmessage(resMessage);
        }
      );
    }
    // const reqBody = {
    //     username : user.UserName,
    //     password : user.Password,
    // };
    console.log("Sending Request");

    // fetch('/test/user/login/',{
    //     headers : {
    //         "Content-Type" : "application/json",
    //     },
    //     method: "post",
    //     body: JSON.stringify(reqBody),
    // }).then((response)=>{
    //     if(response.status===200)
    //     return Promise.all([response.json(),response.headers])
    //     else 
    //     return Promise.reject("Invalid Details")    
    // }).then(()=>{
    //     window.localStorage.setItem("User",user);
    //     window.location.href="/test";
    // })
    // .catch((msg)=>{
      
    //     setmessage(msg)
    // })
        
        
}

    return (<>
            <section>
            <div className="form-box">
                <div className="form-value">

                    
                        <h2>Login</h2>

                        <div className="input-box">
                            <ion-icon name="person-outline"></ion-icon>

                            <input type="text" id="username" name="UserName" value={user.UserName} required onChange={handleChange} ></input>
                            <label htmlFor="">Username</label>
                        </div>

                        <div className="input-box">
                            <ion-icon name="lock-closed-outline"></ion-icon>
    <input type="password" id="password" name="Password" value = {user.Password} required onChange={handleChange}></input>
                            <label htmlFor="">Password</label>
                        </div>

                        <button type="submit" onClick={()=>sendLoginRequest()} >Log In</button>

                        <div className="register">
                            <p>Don't have a account <a href="/user/signup">Register</a></p>
                        </div>
                        <h6 style={{color: "orangered"}}>{message}</h6>
                  
                </div>
            </div>
        </section>
    </>)

}

export default Signin;