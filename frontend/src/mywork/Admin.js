import { Link, Route, Switch } from "react-router-dom";

import Location from "../mywork/Location";
import Driver from "./Driver";
import "../services/navbar.css"
import AddLocation from "./AddLocation";
import AddDriver from "./AddDriver";
import Users from "./Users";
import Cars from "./Cars";
import AddCar from "./AddCar";
import Query from "./Query";
import Feedback from "./Feedback"
import ReturnForm from "./ReturnForm";


function Admin(){
    return(<>
             <div>
             <nav>
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
             </nav>
             <Switch>
           
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


             </Switch>
            </div> 
        
          </>);
}
export default Admin;