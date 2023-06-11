import { useState } from "react";
import "../index2.css";
function Signup() {
    const [user, setUser] = useState({
        UserName: "", Password: "", Role: "USER", gender: "", Date: "",
        fullname: "", email: "", mobile: "", adhar: "", licno: "", b_no: "", street: "", city: "", state: "", pincode: ""
    });
    const [message, setmessage] = useState("");
    const address = { b_no: user.b_no, street: user.street, city: user.city, state: user.state, pincode: user.pincode };
    const handleChange = (args) => {

        var copyOfCurrentUserInState = { ...user };
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setUser(copyOfCurrentUserInState);
        setmessage("");

    }
  

    function sendRegisterRequest() {
        const reqBody = {
            username: user.UserName,
            password: user.Password,
            role: user.Role,
            adhar_name: user.fullname,
            address: address,
            dob: user.Date,
            gender: user.gender,
            email: user.email,
            mob_no: user.mobile,
            license_no: user.licno,
            adhar_no: user.adhar,
        };
        console.log("Sending Request");

        fetch('/test/register', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        }).then(() => {

            window.location.href = "/signin";
        })
            .catch((msg) => {

                setmessage(msg)
            })


    }
    return (<>
        <section>
            <div className="form-box1" style={{height:"875px"}}>
                <div className="form-value">


                    <h2>Registration Form</h2>
                    <div className="input-box1" >
                        <ion-icon name="person-outline"></ion-icon>

                        <input type="text" id="username" name="UserName" value={user.UserName} required onChange={handleChange} ></input>
                        <label htmlFor="">Username</label>
                    </div>

                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" name="Password" value={user.Password} required onChange={handleChange}></input>
                        <label htmlFor="">Password</label>
                    </div>

                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="text" id="name" name="fullname" value={user.fullname} required onChange={handleChange}></input>
                        <label htmlFor="">Full Name</label>
                    </div>
                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="date" id="date" name="Date" value={user.Date} required onChange={handleChange} style={{ color: "gray" }}></input>
                        <label htmlFor="" >Date of Birth</label>
                    </div>
                    <div className="input-box1" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="email" id="email" name="email" value={user.email} required onChange={handleChange}></input>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="number" id="mobile" name="mobile" value={user.mobile} required onChange={handleChange}></input>
                        <label htmlFor="">Mobile Number</label>
                    </div>
                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="number" id="adhar" name="adhar" value={user.adhar} required onChange={handleChange}></input>
                        <label htmlFor="">Adhar No</label>
                    </div>
                    <div className="input-box1">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="text" id="licno" name="licno" value={user.licno} onChange={handleChange}></input>
                        <label htmlFor="">License No</label>
                    </div>
                    <div className="input-box1">
                        <select name="gender" value={user.gender} onChange={handleChange} required="required" >
                            <option>Select Gender</option>
                            <option value="true">Male</option>
                            <option value="false">FeMale</option>
                        </select>
                    </div>
                    <div className="input-box1" >
                        <input type="text" id="bno" name="b_no" value={user.b_no} required onChange={handleChange}></input>
                        <label htmlFor="">Block/Room No</label>

                    </div>
                    <div className="input-box1" >
                        <input type="text" id="street" name="street" value={user.street} required onChange={handleChange}></input>
                        <label htmlFor="">Street</label>

                    </div>
                    <div className="input-box1" >
                        <input type="text" id="city" name="city" value={user.city} required onChange={handleChange}></input>
                        <label htmlFor="">City</label>

                    </div>
                    <div className="input-box1"  >
                        <input type="text" id="state" name="state" value={user.state} required onChange={handleChange}></input>
                        <label htmlFor="">State</label>

                    </div>
                    <div className="input-box1"  >
                        <input type="number" id="pincode" name="pincode" value={user.pincode} required onChange={handleChange}></input>
                        <label htmlFor="">Pincode</label>

                    </div>


                    <button style={{ marginLeft: "250px" }} type="submit" onClick={() => sendRegisterRequest()} >Register</button>


                    <h6 style={{ color: "orangered" }}>{message}</h6>

                </div>
            </div>
        </section>
    </>)

}
export default Signup;