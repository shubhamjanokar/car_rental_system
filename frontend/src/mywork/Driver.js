import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";

const Driver = () =>{
const [userlogged,setuserlogged]=useState(false);
const[drivers,setDriver]=useState([]);


useEffect(()=>{
    setuserlogged(sessionStorage.getItem('userlogged'));
    getDrivers();
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

function getDrivers(){
    // fetch('/test/admin/driver')
    //   .then(response=>response.json())
    //   .then(data=>{
    //    setDriver(data);
//})
axios.get("/test/driver",{headers : authHeader()}).then((response)=>{
    setDriver(response.data)
    },(error)=>{
    const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setDriver(_content);
      });
}

function deleteDriver(id){
    // alert(id)
    // fetch(`http://localhost:8080/test/admin/driver/delete/${id}`,{
    //     method:'DELETE'
    // }).then((result)=>{
    //     result.json().then((resp)=>{
    //         console.warn(resp);
    //     })
    //     getDrivers();
    // }) 

    axios.delete(`http://localhost:8080/test/admin/driver/delete/${id}`,{headers : authHeader()})
    .then((response)=>{
        console.warn(response);
        getDrivers();
    },(err)=>{})
}

function addDriver(){
    //alert("hh");
   window.location.href="/admin/adddriver";
  
}

return (
<div>
<h2>Driver List</h2>

    <td>
        <button  style={{width:"100px", float:"right"}} onClick={()=>addDriver()}
            className="btn btn-primary" >Add</button>
    </td>
    <table className="table table-success  text-center table-hover " style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">Adhar No</th>
                <th scope="col">DRIVER NAME</th>
                <th scope="col">DATE OF BIRTH</th>
                <th scope="col">MOBILE NO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">PINCODE</th>
                <th scope="col">LICENSE NO</th>  <th scope="col"></th>  
            </tr>
        </thead>
        <tbody >
            {drivers.map(driver => (
                <tr >
                    <th scope="row">{driver.adhar_no}</th>
                    <td>{driver.adhar_name}</td>
                    <td>{driver.dob}</td>
                    <td>{driver.mob_no}</td>
                    <td>{driver.email}</td>
                    <td>{driver.address.city}</td>
                    <td>{driver.address.state}</td>
                    <td>{driver.address.pincode}</td>
                    <td>{driver.license_no}</td>
                    <td>
                        <button style={{width:"70px"}} onClick={()=>deleteDriver(driver.license_no)}
                            className="btn btn-danger" >Delete</button>
                    </td>

                   
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default Driver;

