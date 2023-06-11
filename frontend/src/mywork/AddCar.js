import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";
import "../index2.css";
function AddCar() {
	 //(car_average, car_capacity, car_company, car_fuel, car_gear_type, car_manufact_year, car_rent_per_day, car_type, insurance_no, insuranceperiod, car_model) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     const [userlogged,setuserlogged]=useState(false);
    const [car, setCar] = useState({
        model: "", ino: "", type: "", company: "", insuPeriod: "",
        gear: "", capacity: "", fuel: "",rent:"", manufYear: "", avg: ""
    });

    useEffect(()=>{
        document.title="Add Car"
        setuserlogged(sessionStorage.getItem('userlogged'));
        
      },[])
    const [message, setmessage] = useState("");
    const handleChange = (args) => {
        var copyOfCurrentCarInState = { ...car };
        copyOfCurrentCarInState[args.target.name] = args.target.value;
        setCar(copyOfCurrentCarInState);
        setmessage("");

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
  
  
    function addCar() {
        const reqBody = {
            car_model: car.model,
            insurance_no: car.ino,
            car_type: car.type,
            car_company: car.company,
            insuranceperiod: car.insuPeriod,
            car_gear_type: car.gear,
            car_capacity: car.capacity,
            car_fuel: car.fuel,
            car_rent_per_day: car.rent,
            car_manufact_year: car.manufYear,
            car_average: car.avg
        };
        console.log("Sending Request");

        // fetch(`http://localhost:8080/test/admin/car/add`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     method: "post",
        //     body: JSON.stringify(reqBody),
        // }).then(() => {

        //     window.location.href = "/test";
        // })
        //     .catch((msg) => {

        //         setmessage(msg)
        //     })

        axios.post(`http://localhost:8080/test/admin/car/add`,reqBody,{headers : authHeader()})
        .then((res)=>{window.location.href = "/admin/car";},(err)=>{
            
        })


    }
    return (<>
        <section>
            <div className="form-box1">
                <div className="form-value">

                    <h2>Add Car</h2>
                    <div className="input-box1" >
                        <input type="number" id="username" name="model" value={car.model} required onChange={handleChange} ></input>
                        <label htmlFor="">Model Number</label>
                    </div>

                    <div className="input-box1">
                        <input type="text" id="password" name="ino" value={car.ino} required onChange={handleChange}></input>
                        <label htmlFor="">Insurance Number</label>
                    </div>


                    <div className="input-box1">
                        <select name="type" value={car.type} onChange={handleChange} required="required" >
                            <option>Car Type</option>
                            <option value="HatchBack">HatchBack</option>
                            <option value="saloon">saloon</option>
                            <option value="SUV">SUV</option>
                            <option value="sedan">sedan</option>
                        </select>
                    </div>


                    <div className="input-box1" >
                        
                        <input type="date" id="insuPeriod" name="insuPeriod" value={car.insuPeriod} required onChange={handleChange} style={{ color: "gray" }}></input>
                        <label htmlFor="" >Insurance Period</label>
                    </div>
                    <div className="input-box1" >
                     
                        <input type="text" id="company" name="company" value={car.company} required onChange={handleChange}></input>
                        <label htmlFor="">company</label>
                    </div>

                    <div className="input-box1" >
                        <input type="number" id="rent" name="rent" value={car.rent} required onChange={handleChange}></input>
                        <label htmlFor="">rent</label>

                    </div>

                    <div className="input-box1">
                        <select name="gear" value={car.gear} onChange={handleChange} required="required" >
                            <option>Gear Type</option>
                            <option value="Manual">Manual</option>
                            <option value="Auto">Auto</option>
                            <option value="Semi-Auto">Semi-Auto</option>
                        </select>
                    </div>
                   
                    <div className="input-box1">
                        
                        <input type="number" id="capacity" name="capacity" value={car.capacity} required onChange={handleChange}></input>
                        <label htmlFor="">capacity </label>
                    </div>
    
                    <div className="input-box1">
                        <select name="gender" value={car.fuel} onChange={handleChange} required="required" >
                            <option>Fual Type</option>
                            <option value="Prtrol">Prtrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="CNG">CNG</option>
                            <option value="CNG">Electric</option>
                        </select>
                    </div>

                  

                   
                    <div className="input-box1" >
                        <input type="Date" id="manufYear" name="manufYear" value={car.manufYear} required onChange={handleChange}></input>
                        <label htmlFor="">car_manufact_year</label>

                    </div>
                    <div className="input-box1" >
                        <input type="number" id="avg" name="avg" value={car.avg} required onChange={handleChange}></input>
                        <label htmlFor="">Average</label>

                    </div>


                    <button style={{ marginLeft: "250px" }} type="submit" onClick={() => addCar()} >Add Car</button>


                    <h6 style={{ color: "orangered" }}>{message}</h6>

                </div>
            </div>
        </section>
    </>)

}
export default AddCar;