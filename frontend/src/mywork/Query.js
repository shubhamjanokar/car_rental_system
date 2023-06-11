import axios from "axios";
import { useEffect, useState } from "react"
import authHeader from "../services/auth-header";


const Query = () =>{
     const[queries,setQueries]=useState([]);
     const [userlogged,setuserlogged]=useState(false);

        useEffect(()=>{
            setuserlogged(sessionStorage.getItem('userlogged'));
            getQueries();
        },[]);
        if(userlogged){
            document.getElementById("88").style.display='none';
            document.getElementById("89").style.display='none';
            document.getElementById("99").style.display='block';
            document.getElementById("home").style.display='none';
            document.getElementById("showroom").style.display='none';
            document.getElementById("admin").style.display='block';
            document.getElementById("about").style.display='none';
        }

        function getQueries(){

        axios.get("/test/admin/query",{headers : authHeader()}).then((response)=>{
            setQueries(response.data)
        },(error)=>{
            const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();

                setQueries(_content);
            });

        }

        function deleteQuery(id){

            axios.delete(`http://localhost:8080/test/admin/query/delete/${id}`,{headers : authHeader()})
            .then((response)=>{
                console.warn(response)
                getQueries();
            },(err)=>{})
        }
        

        return (
                <div>
                    <h2>Query List</h2>


                    <table className="table table-success  text-center table-hover " style={{color:"darkblue"}}>
                        <thead>
                            <tr className="">
                                <th scope="col">Query Id</th>
                                <th scope="col">Status</th>   
                           
                                <th scope="col">Comment</th>     <th scope="col"></th>  
                            </tr>
                        </thead>
                        
                        <tbody >
                            {queries.map(que => (
                                <tr >         
                                    <td>{que.q_id}</td>
                                    <td>{que.staus}</td>
                                    <td>{que.query_comments}</td>
                                                                      <td>
                                        <button style={{width:"auto"}} onClick={()=>deleteQuery(que.q_id)}
                                            className="btn btn-danger" >Delete</button>
                                    </td>
                                
                                </tr>))}
                        </tbody>
                    </table>
                </div>
        );
}
export default Query;

