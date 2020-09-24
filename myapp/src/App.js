import React, { useState } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  const componentClicked = (data) => {
      console.warn(data);
  }
function App() {
    const [detail,setDetail]=useState({
        fname:"",
        lname:"",
        email:"",
        pass:""
    });
    const inputEvent = (event) =>{

       const{value,name} = event.target;
       setDetail((preValue) =>{
           return{
               ...preValue,
               [name]:value, 
           }
       }) 
    }
    const onSumits = (event) =>{
        event.preventDefault();
        console.log(detail);
    }
  return (
    <>
    <div className="grid-container">
    <div>
            <p>SIGN UP</p>
        <h3>Create your account</h3>
        <div className="item1">
      
      //google login button
       <div className="i1">
        <GoogleLogin
            clientId="241247934703-jvbacr7tv8b4pcoc9t7o0nrl271cpi4u.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'} />
        </div>
      
      //facebook login button
        <div className="i2">
        <FacebookLogin
            appId="973915419685508"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        </div>
            
        </div>
        <div class="or-seperator"><b>or</b></div>
        <div className="divf">
      
      //form started
        <form onSubmit={onSumits}>
        <div className="divin">
            <input type="text" value={detail.fname} name="fname" onChange={inputEvent} placeholder="First Name" />
        </div>
        <div>
            <input type="text" value={detail.lname} name="lname" onChange={inputEvent} placeholder="Last Name" />
        </div>
        <div>
            <input type="email" value={detail.email} name="email" onChange={inputEvent} placeholder="Email Address" />
        </div>
        <div className="">
            <input type="password" value={detail.pass} name="pass" onChange={inputEvent} placeholder="password" />
        </div> 
       
            <p className="">By clicking up signup......</p>
     
        <div className="but">
            <button type="submit">Signup</button>
        </div>
        </form>
      
      // form ended
        </div> 
    </div>
    </div>
    </>
  );
}

export default App;
