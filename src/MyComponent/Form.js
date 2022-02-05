import React, { useState } from "react";
function Form(props) {
    const [ email , setEmail] = useState('')
    const [ password , setPassword] = useState('')
    console.log(props.fetch);
    const saveData = (e) => {
        e.preventDefault();
        props.fetch({email, password})
         setEmail('');
        setPassword('');
        
    }
     
    return ( 
        <div className="container">
        
              <form onSubmit={saveData}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
            type="email" 
            className="form-control"
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            
            <button type="submit" 
            className="btn btn-primary"
            >Submit</button>
        </form>  
        </div>
       
    
     );
}

export default Form;