import { useEffect, useState } from "react";

function Help(){
  const [userlogged,setuserlogged]=useState(false);
  useEffect(()=>{
    document.title="Terms and Conditions"
    setuserlogged(sessionStorage.getItem('userlogged'));
    
  },[])
  if(userlogged){
    document.getElementById("88").style.display='none';
    document.getElementById("89").style.display='none';
    document.getElementById("99").style.display='block';
    document.getElementById("91").style.display='block';
    document.getElementById("92").style.display='block';
}

    return( <div style={{width:"900px",margin:"auto",color:"aqua"}}>

    <h1 >Help Center</h1><br/><br/>
    
    <p style={{width:"900px",margin:"auto"}}>Welcome to our car rental project! We are a team of experienced professionals dedicated to providing you with the best car rental experience. Our mission is to make car rental easy and accessible for everyone, whether you are a local resident or a traveler visiting from out of town.

            Our fleet consists of a wide range of vehicles to suit your every need. From compact cars to luxury SUVs, we have the perfect car for your trip. All of our vehicles are well-maintained and regularly serviced to ensure your safety and comfort.

            At our car rental, we pride ourselves on our exceptional customer service. Our knowledgeable and friendly staff are always here to assist you with any questions or concerns you may have. We strive to make your rental experience as seamless and hassle-free as possible.</p>

              <br/> <p style={{width:"900px",margin:"auto"}}>Whether you need a car for a day or a week, we have flexible rental options to suit your schedule and budget. We offer competitive rates and discounts for long-term rentals.

           Thank you for choosing our car rental for your transportation needs. We look forward to serving you and making your trip a memorable one!</p>
                 
      </div>
       
        )

}
export default Help