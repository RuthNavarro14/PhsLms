import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [Username, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [policyChecked, setPolicyChecked] = useState(false);
  const [role, setRole] = useState('teacher');

  const backgroundStyle = {
    backgroundImage: `url(${require('./B463CBD9E3F4833F666CB89B833C2ADA.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (role === 'student') {
      if (Username === 'Cindy@gmail.com' && Password === 'Cindy123') {
        window.location.href = '/student';
      } else {
        alert('Invalid student credentials');
      }
    } else if (role === 'teacher') {
      if (Username === 'Ruth@gmail.com' && Password === 'Ruting09') {
        window.location.href = '/teacher';
      } else {
        alert('Invalid teacher credentials');
      }
    };

  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Username);
  const isValidPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(Password);

  if (!policyChecked) {
    alert('Please agree to the Terms & Conditions');
  } else if (!isValidEmail) {
    alert('Please enter a valid email address');
  } else if (!isValidPassword) {
    alert('Password must contain at least 8 characters including 1 uppercase letter and 1 number');
  } else {

    console.log ('Form submitted successfully');
    
    setEmail('');
    setPassword('');
    setPolicyChecked(false);
   }
 };
 
 

  useEffect(() => {
    const showPopupBtn = document.querySelector(".btn");
    const formPopup = document.querySelector(".form-popup");
    const hidePopupBtn = formPopup.querySelector(".close-btn");
    const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

    const handlePopupToggle = () => {
      document.body.classList.toggle("show-popup");
      setShowPopup(!showPopup);
    };

    showPopupBtn.addEventListener("click", handlePopupToggle);

    const handleHidePopup = () => {
      showPopupBtn.click();
    };

    hidePopupBtn.addEventListener("click", handleHidePopup);

    signupLoginLink.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
        setShowSignup(link.id === 'signup-link');
      });
    });
    
    
    return () => {
      
      showPopupBtn.removeEventListener("click", handlePopupToggle);
      hidePopupBtn.removeEventListener("click", handleHidePopup);
      signupLoginLink.forEach(link => {
        link.removeEventListener("click", () => {});
      
       
      });
    };
  }, [showPopup]);

  return (
    <div className="Home"style={backgroundStyle}>
    <div className="Navbar"> 
    <div className="container">
      <img class="logo" src={require('./Photos/logo.png')}></img>
      <a class="text1" href="#"
      >PHS<span class="highlighted_text">Learn </span> <br />
    </a>
    <p class="text2">The official LMS of Pilar High School</p>
    

    </div>
    <div className={`Login ${showPopup ? 'show-popup' : ''}`}>
      <div className="blur-bg-overlay"></div>
      <div className="form-popup">
       <NavLink className ="close-btn" onClick={() => setShowPopup(false)} to = "/">
          <i className="fa-regular fa-circle-xmark"></i>
          </NavLink>
          
        <div className={`form-box login ${showSignup ? 'show-signup' : ''}`}>
        <div class="form-details">
          <h2><br /><br />Welcome Back!</h2>
          <br />
          <br />
          <p>
            Please log in using your personal information to stay connected with
            us.
          </p>
        </div>
        <div class="form-content " onSubmit={handleSubmit}>
          <label class="loginAs" for="userType">Log in As:</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <form onSubmit={handleLogin}>
            <div class="input-field">
            <input
            type="text"
            required
            value={Username}
            onChange={(e) => setEmail(e.target.value)}
          />
              <label>Email</label>
            </div>
            <div class="input-field">
            <input
            type="password"
            required
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
              <label>Password</label>
            </div>
            <div class="policy-text">
            <input
                  type="checkbox"
                  required
                  id="policy"
                  checked={policyChecked}
                  onChange={(e) => setPolicyChecked(e.target.checked)}
                />
              <label for="policy">
                I agree the
                <a href="#" class="option">Terms & Conditions</a>
              </label>
            </div>
            <a href="#" class="forgot-pass-link">Forgot password? </a>

            <button type="submit">Log in</button> 
            
          </form>
          <div class="bottom-link">
            Don't have an account?
            <a href="#" id="signup-link">Signup</a>
          </div>
        </div>
        </div>
        <div className={`form-box signup ${showSignup ? 'show-signup' : ''}`}>
        <div class="form-details">
          <h2><br /><br />Create Account</h2>
          <br />
          <br />
          <p>
            To become a part of our community, please sign up using your
            personal information.
          </p>
        </div>
        <div class="form-content">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div class="input-field">
            <input
                type="text"
                required
                value={Username}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Enter your email</label>
            </div>
            <div class="input-field">
            <input
                type="password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}/>
              <label>Create password</label>
            </div>
            <div class="input-field">
            <input
                type="Confirm password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}/>
              <label>Confirm password</label>
            </div>
            <div class="policy-text">
            <input
                  type="checkbox"
                  required
                  id="policy"
                  checked={policyChecked}
                  onChange={(e) => setPolicyChecked(e.target.checked)}
                />
              <label for="policy">
                I agree the
                <a href="#" class="option">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div class="bottom-link">
            Already have an account?
            <a href="#" id="login-link">Login</a>
          </div>
        </div>
      
        </div>
      </div>
      <button className="btn" onClick={() => setShowPopup(!showPopup)}>LOG IN</button>

     
    </div>
    </div>
    </div>
    
  );
};

export default Login;
