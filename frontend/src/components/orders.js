import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";

const Orders = ()=>{
    const [userlogged,setuserlogged]=useState(false);
    const [message, setmessage] = useState("");
   
    const[allorders,setallorders]=useState([]);
    useEffect(()=>{
        setuserlogged(sessionStorage.getItem('userlogged'));
        
        
        getordersdetails(JSON.parse(sessionStorage.getItem("users")).adhar_no);
      },[])
      if(userlogged){
        document.getElementById("88").style.display='none';
        document.getElementById("89").style.display='none';
        document.getElementById("99").style.display='block';
        document.getElementById("91").style.display='block';
        document.getElementById("92").style.display='block';
    }
    function getordersdetails(adhar_no){
        axios.get(`/test/ordersdetails/${adhar_no}`,{headers:authHeader()}).then((response)=>{
                        setallorders(response.data)
                        sessionStorage.setItem("allorders",JSON.stringify(response.data));
        },(error)=>{
            const _content =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            setmessage(_content);
               });
    }
    function showpayment(data){
       if(data.cash===true){
        return "CASH"
        }
    else if(data.cards!==null)
    {
        return "CARD"
    }
    else if(data.upi!==null){
        return "UPI"
    }
        else{
            return "NONE"
        }
    }
    function updatefeedback(args){
       sessionStorage.setItem("feedback",JSON.stringify(args.target.value));
       window.location.href="/updatefeedback";
    }
return(
    <div className="container-fluid text-light text-center" style={{backdropFilter:`blur(15px)`}}>
            <h2 style={{color:"lightgreen",letterSpacing:"3px"}}>All Order Details</h2> 
        <div className="">
        <table className=" table table-bordered text-center ">
            
        <thead style={{color:"lightseagreen",fontSize:"22px"}}>
            <tr><td>Order Id</td><td>Pickup Date</td><td>Pickup Time</td><td>Return Date</td><td>Return Time</td>        
            <td>Car Details</td><td>Total Amount</td><td>Payment Type</td><td>Update</td>
            </tr>
        </thead>
        <tbody style={{color:"forestgreen",fontWeight:"600",fontSize:"18px"}}>
            {allorders.map(order=>(
        <tr key={order.o_id}>
            
            <td>{order.o_id}</td><td>{order.cust.p_date}</td><td>{order.cust.p_time}</td>
            <td>{order.cust.r_date}</td><td>{order.cust.r_time}</td><td>{order.car1.car_company}</td><td>{order.p1.total_amount} <i className="bi bi-currency-rupee"></i></td><td>{showpayment(order.p1)}</td>
            <td><button value={order.o_id} className="btn btn-outline-success" style={{width:"100%"}} onClick={(args)=>(updatefeedback(args))}>Give Feedback</button></td>
        </tr>

)) }
        </tbody>
        </table>
        </div>
                <div>{message}</div>
    </div>
)


}

export default Orders;