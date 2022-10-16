import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
function SignupForm( {onLogin,setShowLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        // setErrors([]);
        // setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          
          }),
        }).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }




  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign up</h3>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control mt-1"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            value={username}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password confirmation</label>
          <input
            type="password"
            className="form-control mt-1"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Button color="secondary" onClick={() => setShowLogin(false)}>sign in </Button>
        </div>
        {/* <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p> */}
      </div>
    </form>
  </div>
  )
}

export default SignupForm