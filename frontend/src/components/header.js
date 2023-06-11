// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from "../logo.jpg";
import head1 from "../gradient/pattern2.jpg";
import "../components/header.css"

function Header(props)
{
 
    return (
                   <div className="d-flex flex-column flex-md-row align-items-center  mb-4 border-bottom  align-items-center justify-content-between " style={{marginLeft:"30px"}} >
                <img className="rounded float-start" src={logo} alt="Not Found" style={{width:"180px",height:"80px",marginTop:"0px"}} />
               <div style={{fontSize:"50px",color:"red",letterSpacing:"12px",fontWeight:"800"}} className="titlename" >Rent Car Go Far</div>
               



<div >
 <a href="/user/signup"  className="btn btn-outline-primary" id="88"style={{marginRight:"10px"}} >Register </a> 
 <a href="/signin"  className="btn btn-outline-info" id="89" style={{marginRight:"10px"}}>Login </a>
 </div>

 </div>


         
    )
               
}

export default Header;