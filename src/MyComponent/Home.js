import React from "react";
const Home=({datas,Deletefn})=> {
    return ( 
    
        <table className="table">
            
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit/Delete</th>
            </tr>
        </thead>
        <tbody>
            {/* {JSON.stringify(datas)} */}
            {datas.map((el,ind)=>{
                return(
                <tr kye={ind}>
                <th scope="row">{ind+1}</th>
                <td>{el.email}</td>
                <td>{el.password}</td>
                <td><button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger" onClick={()=>Deletefn(ind)}>Delete</button>
                </td>
            
                </tr>
                
                );
                }
             )}
            
            
            
        </tbody>
        </table>

     );
}

export default Home;