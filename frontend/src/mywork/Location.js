import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";


const Location = () =>{
    const [userlogged,setuserlogged]=useState(false);
const[Locations,setLocations]=useState([]);


useEffect(()=>{
    setuserlogged(sessionStorage.getItem('userlogged'));
    getLocations();
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


function getLocations(){
    // fetch('/test/admin/location')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     setLocations(data);
// })
axios.get("/test/location",{headers : authHeader()}).then((response)=>{
    setLocations(response.data)
},(error)=>{
    const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setLocations(_content);
      });

}

function deleteLocation(id){
    // alert(id)
    //  fetch(`http://localhost:8080/test/admin/location/delete/${id}`,{
    //      method:'DELETE'
    //  }).then((result)=>{
    //      result.json().then((resp)=>{
    //          console.warn(resp);
    //      })
    //      getLocations();
    //  }) 
    axios.delete(`http://localhost:8080/test/admin/location/delete/${id}`,{headers : authHeader()})
    .then((response)=>{
        console.warn(response)
        getLocations();
    },(err)=>{})
 }
 
 function addLocation(){
   
        window.location.href='/admin/addlocation';  
 }

return (
<div>
    <h2>Location List</h2>

   <button style={{width:"100px", float:"right"}} onClick={()=>addLocation()}
                    className="btn btn-primary" >Add</button>
    <table className="table table-success  text-center table-hover " style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">BUILDING NUMBER</th>
                <th scope="col">STREET</th>   
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">PINCODE</th>      <th scope="col"></th>          
            </tr>
        </thead>
        
        <tbody >
            {Locations.map(loc => (
                <tr >         
                    <td>{loc.b_no}</td>
                    <td>{loc.street}</td>
                    <td>{loc.city}</td>
                    <td>{loc.state}</td>
                    <td>{loc.pincode}</td>

                    <td>
                        <button style={{width:"auto"}} onClick={()=>deleteLocation(loc.pincode)}
                            className="btn btn-danger" >Delete</button>
                    </td>
                   
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default Location;

