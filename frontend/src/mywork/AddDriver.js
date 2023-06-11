import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";

function AddDriver() {
    const [userlogged,setuserlogged]=useState(false);
    const [driver, setDriver] = useState({
        DriverName: "", gender: "", Date: "", fullname: "",
        email: "", mobile: "", adhar: "", licno: "", b_no: "", street: "", city: "", state: "", pincode: ""
    });
    useEffect(()=>{
        document.title="Add Car"
        setuserlogged(sessionStorage.getItem('userlogged'));
        
      },[])
      if(userlogged){
        document.getElementById("88").style.display='none';
        document.getElementById("89").style.display='none';
        document.getElementById("99").style.display='block';
        document.getElementById("home").style.display='none';
        document.getElementById("showroom").style.display='none';
        document.getElementById("admin").style.display='block';
        document.getElementById("about").style.display='none';
    }

    //(b_no, city, pincode, state, street,
    // adhar_name, adhar_no, dob, email, gender, mob_no, license_no)
    const [message, setmessage] = useState("");
    const address = { b_no: driver.b_no, street: driver.street, city: driver.city, state: driver.state, pincode: driver.pincode };
    const handleChange = (args) => {

        var copyOfCurrentDriverInState = { ...driver };
        copyOfCurrentDriverInState[args.target.name] = args.target.value;
        setDriver(copyOfCurrentDriverInState);
        setmessage("");

    }
  

    function addDriverDetails() {
        const reqBody = {
            username: driver.DriverName,
            address: address,
            dob: driver.Date,
            gender: driver.gender,
            email: driver.email,
            mob_no: driver.mobile,
            license_no: driver.licno,
            adhar_no: driver.adhar,
            adhar_name: driver.fullname
        };
        console.log("Sending Request");

        // fetch(`http://localhost:8080/test/admin/driver/add`, {
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

        axios.post(`http://localhost:8080/test/admin/driver/add`,reqBody,{headers : authHeader()})
        .then((res)=>{window.location.href = "/admin/addcar";},(err)=>{
            
        })
    }
    return (<>
        <section>
            <div className="form-box1">
                <div className="form-value">

                    <h2>Driver Details</h2>
                    <div className="input-box1" >
                        <ion-icon name="person-outline"></ion-icon>

                        <input type="text" id="username" name="UserName" value={driver.UserName} required onChange={handleChange} ></input>
                        <label htmlFor="">Username</label>
                    </div>

                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="text" id="name" name="fullname" value={driver.fullname} required onChange={handleChange}></input>
                        <label htmlFor="">Full Name</label>
                    </div>
                   
                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="date" id="date" name="Date" value={driver.Date} required onChange={handleChange} style={{ color: "gray" }}></input>
                        <label htmlFor="" >Date of Birth</label>
                    </div>
                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="email" id="email" name="email" value={driver.email} required onChange={handleChange}></input>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="number" id="mobile" name="mobile" value={driver.mobile} required onChange={handleChange}></input>
                        <label htmlFor="">Mobile Number</label>
                    </div>
                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="number" id="adhar" name="adhar" value={driver.adhar} required onChange={handleChange}></input>
                        <label htmlFor="">Adhar No</label>
                    </div>
                   
                    <div className="input-box1">
                        <select name="gender" value={driver.gender} onChange={handleChange} required="required" >
                            <option>Select Gender</option>
                            <option value="true">Male</option>
                            <option value="false">FeMale</option>
                        </select>
                    </div>

                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="text" id="licno" name="licno" value={driver.licno} onChange={handleChange}></input>
                        <label htmlFor="">License No</label>
                    </div>
                    <div className="input-box1" >
                        <input type="text" id="bno" name="b_no" value={driver.b_no} required onChange={handleChange}></input>
                        <label htmlFor="">Block/Room No</label>

                    </div>
                    <div className="input-box1" >
                        <input type="text" id="street" name="street" value={driver.street} required onChange={handleChange}></input>
                        <label htmlFor="">Street</label>

                    </div>
                    <div className="input-box1" >
                        <input type="text" id="city" name="city" value={driver.city} required onChange={handleChange}></input>
                        <label htmlFor="">City</label>

                    </div>
                    <div className="input-box1"  >
                        <input type="text" id="state" name="state" value={driver.state} required onChange={handleChange}></input>
                        <label htmlFor="">State</label>

                    </div>
                    <div className="input-box1"  >
                        <input type="number" id="pincode" name="pincode" value={driver.pincode} required onChange={handleChange}></input>
                        <label htmlFor="">Pincode</label>

                    </div>

                    <button style={{ marginLeft: "250px" }} type="submit" onClick={() => addDriverDetails()} >Add Driver</button>


                    <h6 style={{ color: "orangered" }}>{message}</h6>

                </div>
            </div>
        </section>
    </>)

}
export default AddDriver;