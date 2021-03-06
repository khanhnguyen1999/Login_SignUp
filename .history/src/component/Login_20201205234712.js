import React,{useState,useEffect} from "react";

export default function Login() {
        const [login,setLogin]=useState({})
        const [result,setResult]=useState(false)
        const [users,setUsers]=useState([])

        useEffect(()=>{
            fetch(`http://localhost:3000/users`)
            .then(response=>response.json())
            .then(json=>setUsers(json))
        },[])
        
        const _onChange = (e)=>{
            setLogin({
                [e.target.name]:e.target.value
            })
        }
        const _onSubmit = (e)=>{
            e.preventDefault()
            console.log("user ",users)
        }
        return (
            <form onSubmit={_onSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={_onChange} name="email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={_onChange} name="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
}