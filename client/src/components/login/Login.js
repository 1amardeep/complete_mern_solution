import React , {useState} from 'react'
import './Login.css';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [state, setstate] = useState({email : "", password:""})

    const setStateValue = (e)=>{
        let name= e.target.name;
        let value = e.target.value;
        setstate({...state,[name]:value})
    }
    
    const login = async ()=>{
       const res = await fetch('/login',{
           method:'POST', headers : {
              "Content-Type" : "application/json"
           },
           body: JSON.stringify(state)
       })

       const data = await res.json();

       if(data.status === 400){
           window.alert("Invalid user");
       }else{
           window.alert("successfully login");
           history.push("/");
       }
    }

    return (
        <>
           <div className="container_signup">
               <div className="container_signup_inner">
                   <h3>Login</h3>
                   <form action="" method="post">
                       <label htmlFor="email">Email</label>
                       <input type="email" className="form_control" onChange={(e)=>setStateValue(e)} value={state.email} name="email" id="email" />
                       <label htmlFor="password">Password</label>
                       <input type="password" className="form_control" onChange={(e)=>setStateValue(e)} value={state.password} name="password" id="password" />
                       <input type="button" className="btn" value="Login" onClick={login} />
                   </form>
               </div>
            </div> 
        </>
    )
}

export default Login
