import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";




const Pickup = () => {
    const [Cardetails, setCardetails] = useState([]);
    const [Locations, setLocations] = useState([]);
    const [Ordercreate, setOrdercreate] = useState({ p_date: "", p_time: "", r_date: "", r_time: "" });
    const [SelectedLocation, setSelectedLocation] = useState({});
    const [userlogged, setuserlogged] = useState(false);
    const [message, setmessage] = useState("");
  

    function disabledates(){
        var dd,mm,yyyy;
        var today=new Date();
        dd=today.getDate()+1;
        mm=today.getMonth();
        yyyy=today.getYear();
        return yyyy+"-"+mm+"-"+dd;

    }

    useEffect(() => {
        document.title="Homepage"
        getLocations();
        getCarDetails();
        setuserlogged(sessionStorage.getItem('userlogged'));
       
    }, []);
    if(userlogged){
        document.getElementById("88").style.display='none';
        document.getElementById("89").style.display='none';
        document.getElementById("99").style.display='block';
        document.getElementById("91").style.display='block';
        document.getElementById("92").style.display='block';
        document.getElementById("query").style.display='block';
    }
    function getCarDetails() {
        axios.get("/test/car", { headers: authHeader() }).then((response) => {
            setCardetails(response.data)
        }, (error) => {
            const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();

            setLocations(_content);
        });
    }
    const handleChange = (args) => {

        var copyOfCurrentUserInState = { ...Ordercreate };
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setOrdercreate(copyOfCurrentUserInState);
        setmessage("");
    }
    const handleChange1 = (args) => {

        setSelectedLocation(JSON.parse(args.target.value));

    }
    function reset() {
        setOrdercreate({ p_date: "", p_time: "", r_date: "", r_time: "" });
    }

    function getLocations() {

        axios.get("/test/location", { headers: authHeader() }).then((response) => {
            setLocations(response.data)
        }, (error) => {
            const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();

            setLocations(_content);
        });

    }

    function sendPickup() {
        debugger;
        if(userlogged==null){
            window.alert("Please Log in First")
            window.location.href="/signin"
        }
        
        else if (Ordercreate.p_date > Ordercreate.r_date){
            setmessage("Check the Dates ")
        }
        else if (Ordercreate.p_date === "" || Ordercreate.r_date === "") {
            setmessage("Please Select Date")
        }
        else if (Ordercreate.p_time === "" || Ordercreate.r_time === "") {
            setmessage("Please Select Time")
        }
        else if (Ordercreate.p_date !== "" && Ordercreate.r_date !== "" && Ordercreate.p_time !== "" && Ordercreate.r_time !== "" && userlogged === "true") {
            axios.post("/test/user/pickup/add", { p_date: Ordercreate.p_date, p_time: (Ordercreate.p_time + ":00"), r_date: Ordercreate.r_date, r_time: (Ordercreate.r_time + ":00"), location: SelectedLocation }, { headers: authHeader() })
                .then((response) => {
                    if (response.data) {
                        sessionStorage.setItem("pickup", JSON.stringify(response.data));
                        window.alert("Pickup Created")
                        window.location.href="/showroom"
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
        
        
        else {
            window.location.reload();
        }
    }
    return (
        <div className="row row-cols-2 row-cols-md-3 mb-2" style={{ color: "darkgray" }}>

            <div className="col-sm-8 offset-md-1 py-2 text-left  d-grid gap-1" style={{ border: "2px solid purple", width: "30%", height: "20%", borderRadius: "20px" }}>

                <h3>Pickup Details</h3>
                <h5>Select Date : </h5>
                <input type={"date"} min={disabledates()} value={Ordercreate.p_date} required name="p_date" onChange={handleChange} ></input>
                <h5>Select Time : </h5>
                <input type={"time"}  min={Ordercreate.p_date}value={Ordercreate.p_time} required name="p_time" onChange={handleChange}></input>


                <select style={{ marginTop: "20px" }} id="input" className="form-control" required="required" onChange={handleChange1}>
                    <option value="0">Select Pickup Location</option>
                    {Locations.map(loc => (
                        <option value={JSON.stringify(loc)} key={loc.pincode} >{loc.b_no},{loc.street},{loc.city},{loc.state},{loc.pincode}</option>
                    ))}
                </select>

            </div>
            <div className="offset-md-1 py-2 d-grid gap-1" style={{ border: "2px solid purple", width: "20%", height: "40%", borderRadius: "20px", display: "flex" }}>
                <table>
                    <thead>
                        <tr>
                            <th style={{ fontSize: "20px" }}>List of Cars Available : </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cardetails.map(cars => (

                            <tr key={cars.car_model} >
                                <td >{cars.car_type} , {cars.car_company} : {cars.car_fuel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="col-sm-8 offset-md-1 py-2 text-left container d-grid gap-1" style={{ border: "2px solid purple", width: "30%", height: "40%", borderRadius: "20px", marginTop: "15px" }} >

                <h3>Return Details</h3>
                <h5>Select Date : </h5>
                <input type={"date"} value={Ordercreate.r_date} required name="r_date" onChange={handleChange}></input>
                <h5>Select Time : </h5>
                <input type={"time"} value={Ordercreate.r_time} required name="r_time" onChange={handleChange}></input>
                <div className="d-flex justify-content-between" style={{ marginTop: "7px" }}>

                    <button style={{ width: "30%" }} onClick={reset}>Reset</button>
                    <div className="d-flex justify-content-between" style={{ color: "darkorange", fontWeight: "800", fontSize: "20px", justifyContent: "center", marginTop: "7px", marginRight: "-90px" }}>Book A Ride</div>
                    <button className="btn btn-outline-none" style={{ fontSize: "60px", color: "darkorange", outline: "none", width: "20%", margin: "-20px 0px 10px 0px" }} onClick={() => sendPickup()}><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>

                </div>
            </div>
            <div className="container" style={{ position: "absolute", marginTop: "30%", marginLeft: "40%", fontWeight: "800", color: "orangered", fontSize: "25px" }}>{message}</div>


        </div>
    )

}

export default Pickup;