import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";


const Formupdate=()=>{
    const [userlogged,setuserlogged]=useState(false);
    const [message, setmessage] = useState("");
    const[feed,setfeed]=useState({});
    const[feedback,setfeedback]=useState({});
useEffect(()=>{
getfeedback(JSON.parse(sessionStorage.getItem("form")))

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
    axios.get(`/test/returnform/${o_id}`,{headers:authHeader()}).then((response)=>{
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
    axios.put("/test/user/returnform/add",{o_id:feed.o_id,comments:feedback.comments,condition_after_return:feedback.condition_after_return},{headers:authHeader()}).then((response)=>{
        window.alert("Form Updated");
        window.location.href="/admin/returnForm"
        
},(error)=>{
const _content =
  (error.response && error.response.data) ||
  error.message ||
  error.toString();
setmessage(_content);
});
}
return(<div className="container-fluid text-light" style={{lineHeight:"30px",margin:"20px 20px 20px 20px ",height:"376px"}}>

    <div>Order ID : {feed.o_id}</div>
<div>
    <table className="table-fluid " style={{marginTop:"20px"}}>
    <thead></thead>
    <tbody>

   
        <tr style={{marginTop:"20px"}}>  <td>Condition </td><td> <input type="text"  id="name" name="condition_after_return" style={{marginTop:"20px"}} value={feedback.condition_after_return} required onChange={handleChange}></input></td>      </tr>
        <tr style={{marginTop:"20px"}}>  <td>Comments :</td><td><input style={{marginTop:"20px"}} type="text" id="name" name="comments" value={feedback.comments} required onChange={handleChange}></input></td>      </tr>
    </tbody>

    </table>
     </div>
   
    <div style={{marginTop:"20px"}}><button className="btn btn-outline-success" onClick={()=>(submitfeed())}>Submit</button></div>
    <div>{message}</div>
</div>)



}





export default Formupdate;