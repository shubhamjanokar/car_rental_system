import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";


const Feedback = () =>{
const[feedbacks,setFeedbacks]=useState([]);
const [userlogged,setuserlogged]=useState(false);
useEffect(()=>{
    setuserlogged(sessionStorage.getItem('userlogged'));
    getFeedback();
},[]);
if(userlogged){
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("home").style.display='none';
    document.getElementById("showroom").style.display='none';
    document.getElementById("admin").style.display='block';
    document.getElementById("about").style.display='none';
}

function getFeedback(){

axios.get("/test/user/feedback",{headers : authHeader()}).then((response)=>{
    setFeedbacks(response.data)
},(error)=>{
    const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setFeedbacks(_content);
      });

}


return (
<div>
    <h2>Feedback List</h2>


    <table className="table table-success  text-center table-hover "  style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">Order Id</th>
                <th scope="col">Cleaning points</th>   
                <th scope="col">Service points</th>
                <th scope="col">Comment</th>             
            </tr>
        </thead>
        
        <tbody >
            {feedbacks.map(fed => (
                <tr >         
                    <td>{fed.o_id}</td>
                    <td>{fed.cleaning_points}</td>
                    <td>{fed.service_points}</td>
                    <td>{fed.comments}</td>
                    <br/>
                    <br/>
                    

                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default Feedback;

