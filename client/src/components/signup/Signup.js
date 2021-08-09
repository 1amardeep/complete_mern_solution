import React, { useState } from 'react';
import './Signup.css';
import signup from '../../images/signup.png';
import {useHistory} from 'react-router-dom';


const Signup = () => {
    const history = useHistory();
    const [signupstate, setsignupstate] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        confirmpassword: ""
    });

    const setState = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setsignupstate({ ...signupstate, [name]: value })
    }

    const registerClick = async (e)=>{
       e.preventDefault();

      const res = await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(signupstate)
        });

        const data = await res.json();
        if(data.status === 422 || !data){
            console.log("Invalid registration");
        }else{
            console.log("successful registration");
            window.alert("successful registration");
            history.push("/login");
        }
    }

    return (
        <>
            <div className="container">
                <div className="sub_container">
                    <div className="container_left">
                        <h3 className="padding_8">Fill the Sign up details</h3>
                        <form className="form_container" method="POST">
                            <input className="form_control" value={signupstate.name} onChange={setState} type="text" name="name" id="name" placeholder="Name" />
                            <input className="form_control" value={signupstate.email} onChange={setState} type="email" name="email" id="email" placeholder="Email" />
                            <input className="form_control" value={signupstate.phone} onChange={setState} type="number" name="phone" id="phone" placeholder="Phone" />
                            <input className="form_control" value={signupstate.work} onChange={setState} type="text" name="work" id="work" placeholder="Work" />
                            <input className="form_control" value={signupstate.password} onChange={setState} type="password" name="password" id="password" placeholder="Password" />
                            <input className="form_control" value={signupstate.confirmpassword} onChange={setState} type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm password" />
                            <input type="submit" className="btn  sign_up_btn" value="Sign Up" onClick={registerClick}/>
                        </form>
                    </div>
                    <div className="container_right">
                        <img src={signup} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup
