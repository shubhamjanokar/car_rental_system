import { useEffect, useState } from "react"

const App = () =>{
const[users,setUsers]=useState([]);


useEffect(()=>{
    getUsers();
},[]);

function getUsers(){
    fetch('/test/')
    .then(response=>response.json())
    .then(data=>{
        setUsers(data);
    })
}

function deleteUser(uid){
    fetch(`http://localhost:8080/test/admin/user/delete/${uid}`,{
        method:'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp);
        })
        getUsers();
    }) 

}


return (
<div>
<h2>User List</h2>
    <table className="table table-success table-striped text-center table-hover ">
        <thead>
            <tr className="table-dark">
                <th scope="col">Adhar No</th>
                <th scope="col">User Name</th>
                <th scope="col">DATE OF BIRTH</th>
                <th scope="col">MOBILE NO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CITY</th>
                <th scope="col">STATE</th>
                <th scope="col">PINCODE</th>
                
            </tr>
        </thead>
        <tbody >
            {users.map(user => (
                <tr >
                    <th scope="row">{user.adhar_no}</th>
                    <td>{user.username}</td>
                    <td>{user.dob}</td>
                    <td>{user.mob_no}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.state}</td>
                    <td>{user.address.pincode}</td>
                    

                    <td>
                        <button onClick={()=>deleteUser(user.adhar_no)}
                            className="btn btn-danger" >Delete</button>
                    </td>
                </tr>))}
        </tbody>
    </table>
</div>
);
}
export default App;

