import axios from "axios";
import { useEffect, useState } from "react";

import authHeader from "../services/auth-header";

const Payment=()=>{
    const [message, setmessage] = useState("");
    const [userlogged,setuserlogged]=useState(false);
    const[user,setuser]=useState({});
    const[pickup,setpickup]=useState({});
    const [Cardetails,setCardetails]=useState({});
    const[payment,setPayment]=useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const[location,setLocation]=useState({});
    const[credit,setCredit]=useState({name:"",expiry:"",number:"",cvc:""});
    const[upi,setupi]=useState({name:"",upi:""});
    
    
    useEffect(()=>{
        document.title="Payment Page"
        setuserlogged(sessionStorage.getItem('userlogged'));
        setuser(JSON.parse(sessionStorage.getItem("users")));
        setpickup(JSON.parse(sessionStorage.getItem("pickup")));
       
        setLocation(JSON.parse(sessionStorage.getItem("pickup")).location);
        getCarDetails(JSON.parse(sessionStorage.getItem("ordercreated")).car_model);
        if(JSON.parse(sessionStorage.getItem("ordercreated")).license_no!=null){
        getDriverDetails(JSON.parse(sessionStorage.getItem("ordercreated")).license_no);
        }
        getpaymentDetails(JSON.parse(sessionStorage.getItem("ordercreated")).o_id);

    },[]);

  
    if(userlogged){
        document.getElementById("88").style.display='none';
        document.getElementById("89").style.display='none';
        document.getElementById("99").style.display='block';
        document.getElementById("91").style.display='block';
        document.getElementById("92").style.display='block';
     
    }
    const handleOnChange = (args) => {
                     setmessage('');
            if(!isChecked && args.target.value==="Card"){
                setIsChecked(!isChecked);
                if(isChecked1){
                    setIsChecked1(!isChecked1);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
                else if(isChecked2){
                    setIsChecked2(!isChecked2);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
            document.getElementById("credit").style.display="block";
            document.getElementById("payee").style.display="block";
            }
            else if(!isChecked1 && args.target.value==="Upi"){
                setIsChecked1(!isChecked1);
                
                if(isChecked){
                    setIsChecked(!isChecked);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
                else if(isChecked2){
                    setIsChecked2(!isChecked2);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
                document.getElementById("UPI").style.display="block";
                document.getElementById("payee").style.display="block";   
            }
            else if(!isChecked2 && args.target.value==="Cash"){
                setIsChecked2(!isChecked2);
                    if(isChecked){
                    setIsChecked(!isChecked);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
                else if(isChecked1){
                    setIsChecked1(!isChecked1);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                }
                document.getElementById("payee").style.display="block";
            }
            else if(isChecked){
            setIsChecked(!isChecked);
            document.getElementById("credit").style.display="none";
            document.getElementById("UPI").style.display="none";
            document.getElementById("payee").style.display="none";
            }
            else if(isChecked1){
                setIsChecked1(!isChecked1);
                document.getElementById("credit").style.display="none";
                document.getElementById("UPI").style.display="none";
                document.getElementById("payee").style.display="none";
                }
                else if(isChecked2){
                    setIsChecked2(!isChecked2);
                    document.getElementById("credit").style.display="none";
                    document.getElementById("UPI").style.display="none";
                    document.getElementById("payee").style.display="none";
                    }
               else{
                
                document.getElementById("credit").style.display="none";
                document.getElementById("UPI").style.display="none";
                document.getElementById("payee").style.display="none";
               }
      };
    
     
      function dopayment(){
        if(isChecked||isChecked2||isChecked1){
            if(isChecked){
                axios.put("/test/user/paymentdetails/add",{o_id:pickup.o_id,cards:{debit_credit:true,card_no:credit.number,card_name:credit.name,card_cvv:credit.cvc,card_expiry:(credit.expiry+"-01")}},{headers: authHeader()})
                .then((response) => {
                    if (response.data) {
                        window.location.href="/orders"
                        window.alert("Payment Successfull")
                       
                        
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
            else if(isChecked1){
                axios.put("/test/user/paymentdetails/add",{o_id:pickup.o_id,upi:{upi:true,upi_id:upi.upi,upi_name:upi.name}},{headers: authHeader()})
                .then((response) => {
                    if (response.data) {
                        window.location.href="/orders"
                        window.alert("Payment Successfull")
                       
                        
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
            else if(isChecked2){
                axios.put("/test/user/paymentdetails/add",{o_id:pickup.o_id,cash:true},{headers: authHeader()})
                .then((response) => {
                    if (response.data) {
                        window.location.href="/orders"
                        window.alert("Payment Successfull")
                       
                        
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
            
        }
        else{
            setmessage("Select the Payment Method")
        }
      }
    function getCarDetails(car_model){
        axios.get(`/test/user/car/${car_model}`,{headers : authHeader()}).then((response)=>{
            setCardetails(response.data)
        },(error)=>{
            const _content =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            setmessage(_content);
               
              });
    }
    function getDriverDetails(license_no){
        axios.get(`/test/user/driver/${license_no}`,{headers : authHeader()}).then((response)=>{
            
        },(error)=>{
            const _content =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            setmessage(_content);
               });
    }
    function getpaymentDetails(o_id){
        axios.get(`/test/user/payment/${o_id}`,{headers : authHeader()}).then((response)=>{
            setPayment(response.data)
        },(error)=>{
            const _content =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            setmessage(_content);
               });
    }
    const handlepayment=(args)=>{
        var copyOfCurrentUserInState = {...credit};
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setCredit(copyOfCurrentUserInState);
    }
    const handlepayment1=(args)=>{
        var copyOfCurrentUserInState = {...upi};
        copyOfCurrentUserInState[args.target.name] = args.target.value;
        setupi(copyOfCurrentUserInState);
    }
return(<div className="container-fluid text-light" style={{backdropFilter:`blur(20px)`}}>
<center>
<h3 className="">Payment Details</h3>
</center>
<div className="d-flex justify-content-around">
<div className="border" style={{lineHeight:"30px",fontSize:"18px",padding:"10px 10px",borderRadius:"10px",width:"20%"}}>
    <h4> User & Pickup Info</h4>
    <div>Name : {user.adhar_name}</div>
    <div>Mobile No : {user.mob_no}</div>
    <div>Email : {user.email}</div>
    <div>Pickup Location : {location.b_no},{location.street},{location.pincode}</div>
    <div>Pickup Date : {pickup.p_date}</div>
    <div>Pickup Time : {pickup.p_time}</div>
    <div>Return Date : {pickup.r_date}</div>
    <div>Return Time : {pickup.p_time}</div>
</div>
<div className="border" style={{lineHeight:"30px",fontSize:"18px",padding:"10px 10px",borderRadius:"10px",width:"30%"}}>
<h4>You Selected Car</h4>
<div>Company : {Cardetails.car_company}</div>
<div>Type : {Cardetails.car_type}</div>
<div> Gear Type : {Cardetails.car_gear_type}</div>
<div>Capacity : {Cardetails.car_capacity} Nos</div>
<div>Average :{Cardetails.car_average} KMPL</div>
<div>Rent Per Day : {Cardetails.car_rent_per_day} <i className="bi bi-currency-rupee"></i></div>
</div>
<div className="border" style={{lineHeight:"30px",fontSize:"18px",padding:"10px 10px",borderRadius:"10px",width:"40%"}}>
<h4>Payment Info</h4>
    <div style={{color:"lightgreen"}}>Total Amount : {payment.total_amount} <i className="bi bi-currency-rupee"></i> </div>
    Choose Your Payment Type:
    <div className="d-flex justify-content-around" >
    <input type="checkbox"  id="driver" name="driver" value="Card" checked={isChecked} onChange={handleOnChange} autoComplete="off"/>Card
    <input type="checkbox" autoComplete="off" id="payment" name="payment" value="Upi" checked={isChecked1} onChange={handleOnChange}/>UPI
    <input type="checkbox" autoComplete="off" id="Cash" name="driver" value="Cash"  checked={isChecked2} onChange={handleOnChange}/>Cash
    </div>
    <div>
    <div id="credit" style={{display:"none"}}>Credit Card Details
    <div className='form-group'>
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={handlepayment}
              />
            </div>  <div className='form-group'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={handlepayment}
               
              />
            </div>
    <div className='form-group'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='YYYY-MM'
                pattern='\d\d/\d\d'
                required
                onChange={handlepayment}
                
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={handlepayment}
                
              />
            </div>
    </div>
    <div id="UPI" style={{display:"none"}}>Upi Details Details
    <div className='form-group'>
              <small>UPI Name</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Upi Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={handlepayment1}
              />
            </div> 
            <div className='form-group'>
              <small>UPI ID</small>

              <input
                type='text'
                name='upi'
                className='form-control'
                placeholder='Upi Id'
                pattern='[a-z A-Z-]+'
                required
                onChange={handlepayment1}
              />
            </div> </div>
    </div>
    <div id="payee" style={{display:"none"}}>
    <button onClick={()=>(dopayment())} className="btn btn-outline-success" >Make Payment</button>
    </div>
    </div>
</div>
<div style={{color:"orangered",position:"absolute",right:"25%"}} >{message}</div>
</div>)



}

export default Payment;