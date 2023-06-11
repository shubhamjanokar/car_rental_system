import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";

const Users = () =>{
const[users,setUsers]=useState([]);
const [userlogged,setuserlogged]=useState(false);

useEffect(()=>{
    setuserlogged(sessionStorage.getItem('userlogged'));
    getUsers();
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

function getUsers(){
    fetch('/test/')
    .then(response=>response.json())
    .then(data=>{
        setUsers(data);
    })
}

function deleteUser(uid){
    // fetch(`http://localhost:8080/test/admin/user/delete/${uid}`,{
    //     method:'DELETE'
    // }).then((result)=>{
    //     result.json().then((resp)=>{
    //         console.warn(resp);
    //     })
    //     getUsers();
    // }) 
    
    axios.delete(`http://localhost:8080/test/admin/user/delete/${uid}`,{headers : authHeader()})
    .then((response)=>{
        console.warn(response);
        getUsers();
    },(err)=>{})

}


return (
<div>
<h2>User List</h2>
    <table className="table table-success  text-center table-hover " style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">Adhar No</th>
                <th scope="col">User Name</th>
                <th scope="col">DATE OF BIRTH</th>
                <th scope="col">MOBILE NO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">PINCODE</th><th scope="col"> </th>  
                
            </tr>
        </thead>
        <tbody >
            {users.map(user => (
                <tr >
                    <th scope="row">{user.adhar_no}</th>
                    <td>{user.username}</td>
                    <td>{user.dob}</td>
                    <td>{user.mob_no}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.state}</td>
                    <td>{user.address.pincode}</td>
                    

                    <td>
                        <button style={{width:"70px"}} onClick={()=>deleteUser(user.adhar_no)}
                            className="btn btn-danger" >Delete</button>
                    </td>
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default Users;

