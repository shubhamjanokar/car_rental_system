import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";
import "../components/table.css";
import { Virtuoso } from "react-virtuoso";

const Showroom=()=>{
   const [Cardetails,setCardetails]=useState([]);
   const [message, setmessage] = useState("");
   const [userlogged,setuserlogged]=useState(false);
   const [isChecked, setIsChecked] = useState(false);
   const [isdriverselected, setIsdriverselected] = useState(false);
   const[driverselected,setdriverselected]=useState([]);
   const[drivers,setDrivers]=useState([]);
   const[user,setuser]=useState({});
   const [iscarselected, setIscarselected] = useState(false);
   const[carselected,setcarselected]=useState([]);
   const[pickup,setpickup]=useState({});
   
   useEffect(()=>{
    document.title="Showroom"
    setuserlogged(sessionStorage.getItem('userlogged'));
    getCarDetails();
    getDriverDetails();
   setuser(JSON.parse(sessionStorage.getItem("users")));
    setpickup(JSON.parse(sessionStorage.getItem("pickup")));
},[]);
function getimages(model){
    if(model===150){
        return "carImages/"+model+".gif";
    }
  return "carImages/"+model+".jpeg";
}
if(userlogged){
   
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("91").style.display='block';
    document.getElementById("92").style.display='block';
    document.getElementById("btn").style.display='block';
    
}
   const handleOnChange = () => {
     setIsChecked(!isChecked);
     
     if(isChecked){
        hidelist();
     }
     else{
        showdriverlist();
     }
   };
 
   function showdriverlist(){
    document.getElementsByClassName('container-fluid 1')[0].style.display="block";
   }
   function hidelist(){
    document.getElementsByClassName('container-fluid 1')[0].style.display="none";
   }
   const handleChange1 = (args) => {
    
    setIsdriverselected(!isdriverselected);
    setdriverselected(JSON.parse(args.target.value));

}
const handleChange2 = (args) => {
    setmessage("");
    setIscarselected(!iscarselected);
    
    setcarselected(JSON.parse(args.target.value));

}
    

  
function getCarDetails(){
    axios.get("/test/car",{headers : authHeader()}).then((response)=>{
        setCardetails(response.data)
    },(error)=>{
        const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        setmessage(_content);
           
          });
}
function getDriverDetails(){
    axios.get("/test/driver",{headers : authHeader()}).then((response)=>{
        setDrivers(response.data)
    },(error)=>{
        const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        setmessage(_content);
           });
}
function sendCardetails(){
    if(iscarselected && pickup!==null){
    axios.post("/test/user/orderdetails/update",{username:user.username,password:user.password,o_id:pickup.o_id,car_model:carselected.car_model,license_no:driverselected.license_no},{headers: authHeader()})
    .then((response) => {
        if (response.data) {
            sessionStorage.setItem("ordercreated", JSON.stringify(response.data));
            window.alert("Order Created")
            window.location.href="/payment"
        }
    }, (error) => {
        const resMessage =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        setmessage(resMessage);
    }
    )
}
else if(pickup===null){
    setmessage("Choose your Location")
    window.location.href="/home"
}
else{
    setmessage("Select your Car")
}
}

return (
    <div className="container-fluid text-light" style={{backdropFilter:`blur(12px)`,overflow:"hidden"}}>
          <h3 className="text-center" style={{color:"lightsalmon"}}>List Of Available Cars</h3>
         <Virtuoso className="container-fluid" style={{ height: '600px',width:"90%",overflowX:"hidden",margin:"20px 20px 10px 50px" }} totalCount={8} itemContent={index => <div>

            {Cardetails.map((car)=>(
        <div key={car.car_model} className="d-flex" style={{margin:"10px 10px 10px 10px",border:"2px solid white",borderRadius:"15px"}} > 
        <div className="" style={{height:"100%",width:"40%"}}>
          
        <img className="rounded float-start" style={{height:"80%",width:"85%"}} src={getimages(car.car_model)} alt="Not Found"/></div>  
        
        
        
        <div className="justify-content-center"><h3>Car Name : {car.car_company}</h3>
        <div><ion-icon name="person-outline"></ion-icon> {car.car_capacity}</div><ion-icon name="car-sport-outline"></ion-icon> {car.car_type}<div><i className="bi bi-fuel-pump"></i>{car.car_fuel}</div><div><i className="bi bi-graph-up-arrow"></i>{car.car_average}</div><div>Rent Per Day : <i className="bi bi-currency-rupee"></i> {car.car_rent_per_day}</div>
        </div>      
               
         <div className=""style={{borderRadius:"15px",margin:"3% -15% 10% 10%"}}>
         <input type="radio" className="btn-check" id={car.car_model} autoComplete="off" name="car" value={JSON.stringify(car)} onChange={handleChange2}/>
                 <label className="btn btn-outline-success" htmlFor={car.car_model}>Selected</label>
            </div>  
         
             </div>
        ))}
            
         </div>} />

      
        {/* <div className="container-fluid text-light" style={{border:"2px solid white",width:"90%",overflowY:"scroll",scrollBehavior:"auto", maxHeight: "600px"}}>
       
        {Cardetails.map((car)=>(
        <div key={car.car_model} className="d-flex" style={{margin:"10px 10px 10px 10px",border:"2px solid white",borderRadius:"15px"}} > 
        <div className="" style={{height:"100%",width:"40%"}}>
          
        <img className="rounded float-start" style={{height:"80%",width:"85%"}} src={getimages(car.car_model)} alt="Not Found"/></div>  
        
        
        
        <div className="justify-content-center"><h3>Car Name : {car.car_company}</h3>
        <div><ion-icon name="person-outline"></ion-icon> {car.car_capacity}</div><ion-icon name="car-sport-outline"></ion-icon> {car.car_type}<div><i className="bi bi-fuel-pump"></i>{car.car_fuel}</div><div><i className="bi bi-graph-up-arrow"></i>{car.car_average}</div><div>Rent Per Day : <i className="bi bi-currency-rupee"></i> {car.car_rent_per_day}</div>
        </div>      
               
         <div className=""style={{borderRadius:"15px",margin:"3% -15% 10% 10%"}}>
         <input type="radio" className="btn-check" id={car.car_model} autoComplete="off" name="car" value={JSON.stringify(car)} onChange={handleChange2}/>
                 <label className="btn btn-outline-success" htmlFor={car.car_model}>Selected</label>
            </div>  
         
             </div>
        ))}
        </div> */}

        <div className="container-sm text-light " >
        <div style={{fontSize:"20px",color:"lightgreen",lineHeight:"35px"}}>
        <input
          type="checkbox"
          id="driver"
          name="driver"
          value="driver"
          checked={isChecked}
          onChange={handleOnChange}
        /> If You need Driver,Select the Checkbox</div>
        <div className="container-fluid 1" id="driver" style={{display:'none'}}>
            
        <table className="table-sm table-bordered text-center" > 
       
            <thead style={{color:"lavender"}}>
            <tr><td colSpan={5}>List Of Drivers</td></tr>
            </thead>
            <tbody>
                <tr><td>License No</td><td>Name</td><td>Mobile No</td><td>Email</td><td></td></tr>
                {drivers.map((driver)=>(
                <tr key={driver.license_no}><td >{driver.license_no}</td><td>{driver.adhar_name}</td><td>{driver.mob_no}</td>
                <td>{driver.email}</td><td>
                 <input type="radio" className="btn-check" id={driver.license_no} autoComplete="off" name="driver" value={JSON.stringify(driver)} onChange={handleChange1}/>
                 <label className="btn btn-outline-success" htmlFor={driver.license_no}>Selected</label>
                                </td>
                
                               
                </tr>
                        
))}
            
                </tbody>
                
        </table>
                    
        </div>
        <button id="btn"  onClick={()=>sendCardetails()} className="btn btn-outline-light" style={{display:"none"}}>Confirm Order</button>
        </div>
                    <div style={{color:"orangered"}}>{message}</div>
    </div>
)

}

export default Showroom;