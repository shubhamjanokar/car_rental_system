import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";


const Feedbackform=()=>{
    const [userlogged,setuserlogged]=useState(false);
    const [message, setmessage] = useState("");
    const[feed,setfeed]=useState({});
    const[feedback,setfeedback]=useState({});
useEffect(()=>{
getfeedback(JSON.parse(sessionStorage.getItem("feedback")))

setuserlogged(sessionStorage.getItem('userlogged'));
},[])

if(userlogged){
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("91").style.display='block';
    document.getElementById("92").style.display='block';
}
function getfeedback(o_id){
    axios.get(`/test/feedback/${o_id}`,{headers:authHeader()}).then((response)=>{
        setfeed(response.data)
        
},(error)=>{
const _content =
  (error.response && error.response.data) ||
  error.message ||
  error.toString();
setmessage(_content);
});
}
const handleChange = (args) => {

    var copyOfCurrentUserInState = { ...feedback };
    copyOfCurrentUserInState[args.target.name] = args.target.value;
    setfeedback(copyOfCurrentUserInState);
    setmessage("");

}
function submitfeed(){
    axios.put("/test/user/feedback/add",{o_id:feed.o_id,comments:feedback.comments,cleaning_points:feedback.cleaning_points,service_points:feedback.service_points},{headers:authHeader()}).then((response)=>{
        window.alert("Feedback Updated");
        window.location.href="/orders"
        
},(error)=>{
const _content =
  (error.response && error.response.data) ||
  error.message ||
  error.toString();
setmessage(_content);
});
}
return(<div className="container-fluid text-light" style={{lineHeight:"30px",margin:"20px 20px 20px 20px "}}>

    <div>Order ID : {feed.o_id}</div>
<div>
    <table className="table-fluid " style={{marginTop:"20px",height:"265px"}}>
    <thead></thead>
    <tbody>

        <tr style={{marginTop:"20px"}}>   <td >Cleaning Points :</td>  <td>  <input type="number" minLength={1} maxLength={2} id="name" name="cleaning_points" style={{marginTop:"20px"}} value={feedback.cleaning_points} required       onChange={handleChange}></input></td></tr>
        <tr style={{marginTop:"20px"}}>  <td>Service Points </td><td> <input type="number" minLength={1} maxLength={2} id="name" name="service_points" style={{marginTop:"20px"}} value={feedback.service_points} required onChange={handleChange}></input></td>      </tr>
        <tr style={{marginTop:"20px"}}>  <td>Comments :</td><td><input style={{marginTop:"20px"}} type="text" id="name" name="comments" value={feedback.comments} required onChange={handleChange}></input></td>      </tr>
    </tbody>

    </table>
     </div>
   
    <div style={{marginTop:"20px"}}><button className="btn btn-outline-success" onClick={()=>(submitfeed())}>Submit</button></div>
    <div>{message}</div>
</div>)



}





export default Feedbackform;