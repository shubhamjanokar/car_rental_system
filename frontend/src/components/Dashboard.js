import Header from "./header";
import Signin from "./Signin";
import NotFound from "./notfound";
import { Link, Route ,Switch} from "react-router-dom";
import Signup from "./Signup";
import About from "./about";
import Test from "./Test";
import AuthService from "../services/auth.service";
import Profile from "./Profile";
import TAC from "./TAC";
import Help from "./Help";
import Footer from "./footer";
import AddLocation from "../mywork/AddLocation";
import Pickup from "./Pickup";
import all1 from "../hd_wallpaper_9948.jpg"
import Showroom from "./Showroom";
import Payment from "./payment";
import Orders from "./orders";
import "../services/navbar.css"
import Location from "../mywork/Location";
import Driver from "../mywork/Driver";
import Cars from "../mywork/Cars";
import Users from "../mywork/Users";
import AddDriver from "../mywork/AddDriver";
import AddCar from "../mywork/AddCar";
import Query from "../mywork/Query";
import Feedback from "../mywork/Feedback";
import ReturnForm from "../mywork/ReturnForm";
import AdminProfile from "./AdminProfile";
import Queryform from "./Queryform";
import Feedbackform from "./Feedbackform";
import Formupdate from "../mywork/Formupdate";
function Dashboard(){
    
 
      const logOut = () => {
        AuthService.logout();
        window.location.href="/signin"
      };
    return <div className='container-fluid' style={{background:`url(${all1})`,zoom:"88%"}} >
    <Header />
   

  <div style={{marginLeft:"30px"}} className="d-flex justify-content-evenly">     
 
   <Link to={"/home"}  id="home" className="btn btn-outline-success" style={{width:"12%"}}> Home </Link>   
    
        <Link id="showroom" className="btn btn-outline-info" to={"/showroom"} style={{width:"12%"}} > Showroom </Link> 
        <Link id="91" className="btn btn-outline-info" to={"/orders"} style={{width:"12%",display:"none"}}> Orders </Link> 
        <Link id="92" className="btn btn-outline-info" to={"/profile"} style={{width:"12%",display:"none"}}> Profile </Link> 
        <Link id="about" className="btn btn-outline-info" to={"/about"} style={{width:"12%"}}> About </Link> 
        <Link id="query" className="btn btn-outline-info" to={"/query"} style={{width:"12%"}}> Query</Link>
        <button id="99" className="btn btn-outline-danger"style={{width:"10%",display:"none"}} onClick={()=>logOut()}>LogOut</button>
        </div>
     <hr></hr>
     <div id="admin" style={{display:"none"}}>  <nav>
                <ul>
                    <li></li>
                    <li> <Link to={"/admin/location"}> Locations </Link></li>
                    <li><Link to={"/admin/driver"}>Drivers</Link> </li>
                    <li><Link to={"/admin/car"}>Cars</Link> </li>
                    <li> <Link to={"/admin/users"}>Users</Link></li>
                    <li> <Link to={"/admin/queries"}>Queries</Link></li>
                    <li> <Link to={"/admin/feedbacks"}>Feedbacks</Link></li>
                    <li> <Link to={"/admin/returnForm"}>ReturnForm</Link></li>
                    
                    <li> </li>
                </ul>
             </nav></div>
      <div>
        <Switch>
            {/* <ProtectedRoute path="/home" component={Show} 
                            afterLogin={updateLoginStatus}/>
            <ProtectedRoute path="/create" component={Create} 
                            afterLogin={updateLoginStatus}/>
            <Route path="/about" exact component={About} />
            <ProtectedRoute path="/"  exact component={Show} 
                            afterLogin={updateLoginStatus}/> */}
                <Route path="/admin/location" component={Location}/>
                <Route path="/admin/driver" component={Driver}/>
                <Route path="/admin/car" component={Cars}/>
                <Route path="/admin/users" component={Users}/>
                <Route path="/admin/addlocation" component={AddLocation}/>
                <Route path="/admin/adddriver" component={AddDriver}/>
                <Route path="/admin/addcar" component={AddCar}/>
                <Route path="/admin/queries" component={Query}/>
                <Route path="/admin/feedbacks" component={Feedback}/>
                <Route path="/admin/returnForm" component={ReturnForm}/>
                <Route path="/admin/profile" component={AdminProfile} />
                <Route path="/admin/updateform" component={Formupdate} />
            <Route path="/TAC" component={TAC}/>
            <Route path="/query" component={Queryform}/>
            <Route path="/updatefeedback" component={Feedbackform}/>
            <Route path="/showroom" component={Showroom}/>
            <Route path="/payment" component={Payment}/>
            <Route path="/addlocation" component={AddLocation}/>
            <Route path="/home" component={Pickup}/>
            <Route path="/signin" component={Signin} />
            <Route path="/orders" component={Orders} />
            <Route path="/about.js" component={About} />  
            <Route path="/help" component={Help} />    
            <Route path="/test" component={Test} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About}/>
            <Route path="/user/signup" component={Signup} />
            <Route path="/" component={Pickup} />
            <Route path="*" component={NotFound} />
        </Switch>
        <hr></hr>
        </div>

    <Footer />
</div>
}
export default Dashboard;