import { useEffect, useState } from "react";

function TAC(){
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

    return(
        <div style={{width:"900px",margin:"auto"}}>
            <h3 style={{textAlign:"center",color:"aqua"}}>Terms and conditions</h3>
        
        <br/><br/>

          <p style={{color:"aqua"}}>
                            Thank you for choosing our car rental system. Before you proceed to use our service, please read and understand the following terms and conditions:

                    Age and Driver’s License Requirements:

            <br/> <br/>1. Age and Driver’s License Requirements: The driver must be 21 years old or older and hold a valid driver's license for a minimum of two years.
            <br/><br/>2. Reservation and Payment: Reservations must be made in advance and a valid credit card is required to hold the booking. Full payment must be made at the time of pick-up.
                     Payment can be made via credit card or cash. 
            <br/><br/>3. Insurance: All vehicles come with basic insurance coverage. Additional insurance coverage may be purchased at an extra cost.
            <br/><br/>4. Vehicle Pick-up and Return: The rental vehicle will be available for pick-up at the designated location at the agreed time. Late returns will incur additional charges. Vehicles must be returned in the same condition as when they were rented, with a full tank of gas.
            <br/><br/>5. Cancellation Policy: Reservations can be cancelled without charge up to 24 hours before the scheduled pick-up time. Cancellations made within 24 hours of the scheduled pick-up time will be charged a cancellation fee.
            <br/><br/>6. Prohibited Use: The rental vehicle must not be used for any illegal activities or in violation of any traffic laws. The rental vehicle must not be used for off-road driving, racing, towing or transporting hazardous materials.
            <br/><br/>7. Liability: The renter is fully responsible for any damage or loss to the rental vehicle, including theft, while it is in their possession. The renter is also responsible for any fines or penalties incurred during the rental period.
            <br/><br/>8. Additional Charges: Additional charges may apply for optional extras, such as GPS navigation, child seats, and additional drivers.
            <br/><br/>9. Maintenance and Repairs: The renter must immediately notify us of any damage or maintenance issues with the rental vehicle. We reserve the right to perform repairs on the vehicle without prior notice to the renter.
            <br/><br/>10. Disputes: Any disputes arising from the rental agreement will be resolved in accordance with local laws and regulations.
            <br/><br/>By proceeding to use our car rental system, you agree to abide by the above terms and conditions.
          </p> 

        </div>
        
    )

}
export default TAC