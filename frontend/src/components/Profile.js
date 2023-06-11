import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [userlogged,setuserlogged]=useState(false);
  const [message, setmessage] = useState("");
  const[users,setusers]=useState({});
  useEffect(()=>{
    document.title="Profile"
    setuserlogged(sessionStorage.getItem('userlogged'));
    getuserdetails();
  },[])

  
  if(userlogged){
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("91").style.display='block';
    document.getElementById("92").style.display='block';
}

const getuserdetails =()=>{
  
  const user = JSON.parse(sessionStorage.getItem("users"));
    axios.post("/test/login",{username:user.username,password:user.password},{headers : authHeader()}).then((response)=>{
      setusers(response.data);
      sessionStorage.removeItem("users");
      sessionStorage.setItem("users",JSON.stringify(response.data));
  },(error)=>{
      const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
            setmessage(_content);
         
        })

}
function showgender(gen){
 
  if(gen===false){
    return "Female"
  }
  else{
    return "Male"
  }
}


  return (
    <div className="container-fluid text-light" style={{height:"420px",fontSize:"22px"}}>
      <header >
        {/* <h3>
          <h1>Profile Page</h1>
          <strong>{currentUser.username}</strong> Profile
        </h3> */}
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <div>Name : {users.adhar_name}</div>
    <div>Mobile No : {users.mob_no}</div>
    <div>Email : {users.email}</div>
    <div>Username : {users.username}</div>
    <div>  Gender : {showgender(users.gender)}  </div>
    <div>  DOB : {users.dob}  </div>
    <div><h3>{message}</h3></div>
    </div>
  );
};

export default Profile;
