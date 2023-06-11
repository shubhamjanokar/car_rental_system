import axios from "axios";
import { useEffect, useState } from "react";
import "../index2.css";
import authHeader from "../services/auth-header";
function AddLocation() {
    const [Location, setLocation] = useState({
      
        b_no: "", street: "", city: "", state: "", pincode: ""
    });
    const [userlogged,setuserlogged]=useState(false);
    const [message, setmessage] = useState("");
    const handleChange = (args) => {

        var copyOfCurrentLocationInState = { ...Location };
        copyOfCurrentLocationInState[args.target.name] = args.target.value;
        setLocation(copyOfCurrentLocationInState);
        setmessage("");

    }
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

    function addLocationDetails() {
        const reqBody = {
              b_no: Location.b_no,
              street: Location.street,
              city: Location.city, 
              state: Location.state,
              pincode: Location.pincode    
        };

        console.log("Sending Request");

        // fetch(`http://localhost:8080/test/admin/location/add`, {
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

        axios.post(`http://localhost:8080/test/admin/location/add`,reqBody,{headers : authHeader()})
        .then((res)=>{window.location.href = "/admin/location";},(err)=>{
            
        })

    }
    return (<>
        <section>
            <div className="form-box1">
                <div className="form-value">

                    <h2>Location Details</h2>

                    <div className="input-box1" >
                        <input type="text" id="bno" name="b_no" value={Location.b_no} required onChange={handleChange}></input>
                        <label htmlFor="">Block/Room No</label>

                    </div>

                    <div className="input-box1" >
                        <input type="text" id="street" name="street" value={Location.street} required onChange={handleChange}></input>
                        <label htmlFor="">Street</label>

                    </div>

                    <div className="input-box1" >
                        <input type="text" id="city" name="city" value={Location.city} required onChange={handleChange}></input>
                        <label htmlFor="">City</label>

                    </div>
                    <div className="input-box1"  >
                        <input type="text" id="state" name="state" value={Location.state} required onChange={handleChange}></input>
                        <label htmlFor="">State</label>

                    </div>

                    <div className="input-box1"  >
                        <input type="number" id="pincode" name="pincode"  value={Location.pincode} required onChange={handleChange}></input>
                        <label htmlFor="">Pincode</label>
                    </div>

                    <button style={{ marginLeft: "250px" }} type="submit" onClick={() => addLocationDetails()} >Add Location</button>

                    <h6 style={{ color: "orangered" }}>{message}</h6>

                </div>
            </div>
        </section>
    </>)

}
export default AddLocation;