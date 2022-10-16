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
        <LoginForm onLogin={onLogin} s setShowLogin={setShowLogin}/>
      
        </>
    )
    :(
<>
        <SignupForm onLogin={onLogin} setShowLogin={setShowLogin}/>
    
        </>
    )
}
</>
  )
  
}

export default Login