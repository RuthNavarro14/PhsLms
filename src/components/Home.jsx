import React from 'react';
import { NavLink } from 'react-router-dom';


function Home(){

  const backgroundStyle = {
    backgroundImage: `url(${require('./B463CBD9E3F4833F666CB89B833C2ADA.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  };
  return (
    <div className="Home"style={backgroundStyle}>
    <div className="Navbar"> 
    <div className="container">
      <img class="logo" src={require('./Photos/logo.png')}></img>
      <a class="text1" href="#"
      >PHS<span class="highlighted_text">Learn </span> <br />
    </a>
    <p class="text2">The official LMS of Pilar High School</p>
    
    
    <NavLink className = "btn" to ="./Login">LOG IN</NavLink>
    
    </div>
</div>

    <div class="content">
    <h1>EDUCATE.LEARN.DEVELOP</h1>
    <p class="Power">E-learning, Powered by RN LMS</p>
  </div>
  </div>
  )
}

export default Home;