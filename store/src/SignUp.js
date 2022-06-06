import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import styles from "./SignUp.module.css";
import { validate } from './Validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

const [data,setData]=useState({
name:"",
email:"",
password:"",
confirmPassword:"",
isAccepted:false
});

const[errors,setErrors]=useState({})
const[touched,setTouched]=useState({})

useEffect(()=>{
  setErrors(validate(data,"signup"))
},[data,touched])

const changeHandler=(event)=>{
     if(event.target.name === "isAccepted"){
       setData({ ...data,[event.target.name] :event.target.checked})
     }
     else{
     setData({ ...data,[event.target.name] :event.target.value})
     }
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
        name:true,
        email:true,
        password:true,
        confirmPassword:true,
        isAccepted:true
        });
}}

const notify = (type) =>{
  if(type === "success")
  toast.success("you signed up!")
  else
  toast.error("invalid data!")
};


    return (
        <div>
             <div className={styles.wrapper}>
          <form  className={styles.form} onSubmit={submitHandler}>     
                <h2>sign up</h2>
              
            <div className={styles.group}>
                <input type="text" name="name"  value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                 <label >Name</label> 
                 {errors.name && touched.name && <span className={styles.error} >{errors.name}</span>}
                 </div>
                 <br></br>
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

                  <div className={styles.group}>
                  <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                  <label >Confirm Password</label> 
                 {errors.confirmPassword&& touched.confirmPassword && <span className={styles.error} >{errors.confirmPassword}</span>}
                  </div>
                 <br></br>
                
                  <div >
                  <label > I accept terms of privacy policy  </label>  
                  <input type="checkbox" name="isAccepted" value={data.isAccepted}  onChange={changeHandler} onFocus={focusHandler}/>    
                 {errors.isAccepted&& touched.isAccepted && <span className={styles.error} > {errors.isAccepted}</span>}
                  </div>

                  
            <div className={styles.formButton}>
            <Link to='/Login'>Login</Link>         
          <button type='submit'>Sign up</button>
            </div>
            </form>    
                <ToastContainer />
      </div>        
        </div>
    );
};

export default SignUp;