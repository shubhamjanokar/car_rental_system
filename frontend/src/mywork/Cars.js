import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";


const Cars = () =>{
const[cars,setCars]=useState([]);
const [userlogged,setuserlogged]=useState(false);

useEffect(()=>{
    getCars();
    setuserlogged(sessionStorage.getItem('userlogged'));
},[]);

function getCars(){
    
axios.get("/test/car",{headers : authHeader()}).then((response)=>{
    setCars(response.data)
},(error)=>{
    const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setCars(_content);
      });

}
if(userlogged){
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("home").style.display='none';
    document.getElementById("showroom").style.display='none';
    document.getElementById("admin").style.display='block';
    document.getElementById("about").style.display='none';
}

function deleteCar(id){
   //alert("hi")
    axios.delete(`http://localhost:8080/test/admin/car/delete/${id}`,{headers : authHeader()})
    .then((response)=>{
        console.warn(response)
        getCars();
    },(err)=>{})
 }
 
 function addCar(){
      //  alert("hi");
        window.location.href='/admin/addcar'; 
        
 }

return (
<div>
    <h2 style={{color:"red"}}>Car List</h2>

   <button style={{width:"100px", float:"right"}} onClick={()=>addCar()}
                    className="btn btn-primary" >Add</button>
    <table className="table table-success  text-center table-hover "style={{color:"darkblue"}}>
        <thead>
            <tr className="">
                <th scope="col">Model</th>
                <th scope="col">Insurance Number</th>   
                <th scope="col">Type</th>
                <th scope="col">Company</th>
                <th scope="col">Gear Type</th>
                <th scope="col">Capacity</th>
                <th scope="col">Fual</th>  
                <th scope="col">Rent per Day</th> 
                <th scope="col">Maunfacture year</th> 
                <th scope="col">Average</th>    <th scope="col"> </th>           
            </tr>
        </thead>
        
        <tbody >
            {cars.map(car => (
                <tr >         
                    <td>{car.car_model}</td>
                    <td>{car.insurance_no}</td>
                    <td>{car.car_type}</td>
                    <td>{car.car_company}</td>
                    <td>{car.car_gear_type}</td>
                    <td>{car.car_capacity}</td>
                    <td>{car.car_fuel}</td>
                    <td>{car.car_rent_per_day}</td>
                    <td>{car.car_manufact_year}</td>
                    <td>{car.car_average}</td>

                    <td>
                        <button style={{width:"auto"}} onClick={()=>deleteCar(car.car_model)}
                            className="btn btn-danger" >Delete</button>
                    </td>
                   
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default Cars;

