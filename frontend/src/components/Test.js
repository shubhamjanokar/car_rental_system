import { useEffect, useState } from "react"


const Test = () =>{
const[users,setUsers]=useState([]);


useEffect(()=>{
fetch('/test/')
.then(response=>response.json())
.then(data=>{
    setUsers(data);
})},[]);

return (
<div>


<h2>User List</h2>
{users.map(user =>
    <div key={user.adhar_no}>
        {user.adhar_name}
        </div>
    )}
</div>
);
}
export default Test;