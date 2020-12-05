import React,{useState,useEffect} from "react";

export default function SignUp() {
        const [inforUser,setInforUser]=useState({})
        const _onChange = (e)=>{
            setInforUser({
                ...inforUser,
                [e.target.name]:e.target.value
            })
        }
        const _onSubmit = (e)=>{
            e.preventDefault()
            fetch(`http://localhost:3000/users`,{
                
            })
        }
        return (
            <form onSubmit={_onSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input onChange={_onChange} name="first_name" type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input onChange={_onChange} name="last_name" type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={_onChange} name="email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={_onChange} name="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
}