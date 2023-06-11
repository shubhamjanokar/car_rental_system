import { useEffect, useState } from "react";

function About()
{
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

               <h1 >About us!</h1><br/><br/>
               
               <p style={{width:"900px",margin:"auto"}}>Welcome to our car rental service! We understand 
                that having access to a reliable car is essential for many people, 
                whether it's for business, pleasure, or simply getting around town. 
                That's why we're committed to providing high-quality,
                affordable car rentals for all of our customers.

               Our fleet of vehicles is diverse and includes everything from compact cars to spacious SUVs, so no matter what your needs are, we're confident that we have the perfect vehicle for you.
               All of our cars are regularly serviced and maintained to ensure that they are safe, reliable, and comfortable.
               

               We know that renting a car can be a daunting process, which is why we strive to make it as simple and stress-free as possible. Our friendly and knowledgeable staff are always available to answer any questions you may have, and we offer flexible rental terms and payment options to suit your needs.</p>

              <br/> <p style={{width:"900px",margin:"auto"}}>We believe that transparency is key, which is why we never hide any fees or charges from our customers. Our pricing is straightforward, and we work hard to keep our rates competitive and affordable.

                    We also understand that accidents happen, which is why we offer comprehensive insurance coverage options to ensure that you're fully protected in the event of an accident or other incident.

                    Thank you for considering our car rental service for your transportation needs. We're committed to providing exceptional customer service and high-quality rentals, and we look forward to serving you!</p>
                 </div>);
}

export default About