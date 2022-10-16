import React,{useState} from 'react'
import LoginForm from '../pages/LoginForm';
import SignupForm from '../pages/SignupForm';
import Button from 'react-bootstrap/Button';
function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  return (
<>
{
    showLogin ? (
    <>
        <LoginForm onLogin={onLogin}/>
      <p>Dont have an account sign Up</p>
      <br></br>
      <button onClick={()=>setShowLogin(false)}>sing up</button>
        </>
    )
    :(
<>
        <SignupForm onLogin={onLogin} />
        <p>Already have an account sign in</p>
      <br></br>
      <button onClick={()=>setShowLogin(true)}>sing in</button>
    
        </>
    )
}
</>
  )
  
}

export default Login