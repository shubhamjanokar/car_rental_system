function Footer(){
    return(
      
             <div >
            
          <div className="d-flex bd-highlight " style={{marginLeft:"30px"}}>
           <div className="p-2 bd-highlight justify-content-around">
           <a href="/help"  className="btn btn-outline-info " >Help Centre</a>
           </div>
           <div className="p-2 bd-highlight justify-content-around">
               <a href="/about" style={{marginLeft:"30px",width:"auto"}} className="btn btn-outline-info">About Us</a>
           </div>
           <div className="p-2 bd-highlight justify-content-around">
               <a href="/TAC" style={{marginLeft:"30px",width:"auto"}} className="btn btn-outline-info"> Terms and conditions</a>
              </div>
           
                  
         <div className="ms-auto  bd-highlight">
         <h5 style={{color:"darkgray"}}> Contact Us : </h5>
             <a href="https://www.google.com" style={{ padding: 10 ,fontSize:"25px"}}  ><ion-icon  name="logo-google"></ion-icon></a>
            <a href="https://www.facebook.com"  style={{ padding: 10,fontSize:"25px" }}><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="https://linkedin.com"  style={{ padding: 10 ,fontSize:"25px"}}><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://twitter.com"  style={{ padding: 10 ,fontSize:"25px"}}><ion-icon name="logo-twitter"></ion-icon></a>
            
            </div>
            
            </div>
            <div className='text-center p-1 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-darkblue' href='https://mdbootstrap.com/'>
          SudhaCars.com
        </a>
      </div>
        </div>
       
           
    )

}
export default Footer