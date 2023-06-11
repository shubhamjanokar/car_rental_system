import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";


const ReturnForm = () =>{
    const [userlogged,setuserlogged]=useState(false);
const[returnform,setReturnform]=useState([]);

useEffect(()=>{
    setuserlogged(sessionStorage.getItem('userlogged'));
    getReturnform();
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

function getReturnform(){

axios.get("/test/user/returnform",{headers : authHeader()}).then((response)=>{
    setReturnform(response.data)
},(error)=>{
    const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setReturnform(_content);
      });

}
function updateform(args){
    sessionStorage.setItem("form",JSON.stringify(args.target.value));
    window.location.href="/admin/updateform";
 }


return (
<div>
    <h2>ReturnForm List</h2>


    <table className="table table-success text-center table-hover " style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">Order Id</th>
                <th scope="col">Condition_after_return points</th>   
                <th scope="col">Comment</th> 
                <th scope="col">Update</th>
            </tr>
        </thead>
        
        <tbody >
            {returnform.map(from => (
                <tr >         
                    <td>{from.o_id}</td>
                    <td>{from.condition_after_return}</td>
                    <td>{from.comments}</td>
                    <td><button value={from.o_id} className="btn btn-outline-success" style={{width:"80%"}} onClick={(args)=>(updateform(args))}>Update</button></td>
                    <br/>
                    <br/>
                    
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default ReturnForm;

