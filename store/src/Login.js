import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import styles from "./SignUp.module.css";
import { validate } from './Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const [data,setData]=useState({
email:"",
password:"",
});

const[errors,setErrors]=useState({})
const[touched,setTouched]=useState({})

useEffect(()=>{
  setErrors(validate(data,"login"))
},[data,touched])

const changeHandler=(event)=>{
   
     setData({ ...data,[event.target.name] :event.target.value})
    
     }


const focusHandler=(event)=>{
  setTouched({...touched,[event.target.name]:true})
}

const submitHandler =(event)=>{
event.preventDefault();
if(!Object.keys(errors).length){
  console.log(data)
notify("success");
}
else{
      notify("error");
      setTouched({
        email:true,
        password:true,
        });
}}

const notify = (type) =>{
  if(type === "success")
  toast.success("you Login!")
  else
  toast.error("invalid data!")
};


    return (
        <div>
             <div className={styles.wrapper}>
          <form  className={styles.form} onSubmit={submitHandler}>     
                <h2>Login</h2>
              
            
                 <div className={styles.group}>
                 <input type="Email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                 <label>Email</label>           
                 {errors.email&& touched.email && <span className={styles.error} >{errors.email}</span>}
                 </div>
                 <br></br>
                 <div className={styles.group}>
                  <input type="password" name="password"  value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                  <label >Password</label> 
                 {errors.password&& touched.password && <span className={styles.error} >{errors.password}</span>}
                 </div>
                 <br></br>
        
            <div className={styles.formButton}>
            <Link to='/SignUp'>Sign up</Link>         
          <button type='submit'>Login</button>
            </div>
            </form>
                <ToastContainer />
      </div>

        </div>

    );
};

export default Login;