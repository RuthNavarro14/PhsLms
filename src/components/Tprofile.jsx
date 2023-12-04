import React, {Link, Outlet} from 'react-router-dom';

const styles = {

  fontFamily: 'Poppins',
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#f4f4f4',
  },
  profile: {
    width: '90%',
    height: '100%',
    maxWidth: '1000px',
    margin: '50px 50px 10px 50px',
    padding: '17px',
    backgroundImage: 'linear-gradient(to bottom, rgb(40, 138, 177) 65%, white 35%)',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'start',
  },
  profileImage: {
    position: 'absolute',
    top: '104px',
    left: '20px',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    position: 'relative',
    border: '5px solid #fff',
  },
  cindy: {
    display: 'inline-block',
    margin: '0 0 50px 50px',
    fontSize: '25px',
    color: 'white',
  },
  strand: {
    margin: '0 0 30px 200px',
  },
  container: {
    width: '90%',
    height: '100%',
    maxWidth: '1000px',
    margin: '10px 50px 10px 50px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'start',
  },
  container1: {
    width: '90%',
    height: '100%',
    maxWidth: '1000px',
    margin: '0 50px 50px 50px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'start',
    overflow: 'scroll',
  },
  choices: {
    display: 'flex',
    gap: '0',
  },
  choice: {
    padding: '8px 16px',
    margin: '0',
    cursor: 'pointer',
    backgroundColor: '#ffd6a4',
    transition: 'background-color 0.3s ease',
  },
  choiceHover: {
    backgroundColor: '#fde9df',
  },
};

const Profile = () => {
  const goBack = () => {
    window.history.back(); 
  
  };
  return (
    
    <div style={styles.body}>
      <div style={styles.profile}>
        <img
          src={require('./Photos/Ruth.jpg')}
          alt="Profile"
          
          style={styles.profileImage}
        />
        <div style={styles.cindy}>Ruth Navarro</div>
        <div style={styles.strand}>Senior High School Teacher</div>
      </div>
      <div style={styles.container}>

      <div style={styles.choices}>
          <Link to = "/Tprofile/schedule"><div style={styles.choice}>Schedule</div></Link>
          <Link to = "/Tprofile/tinfo"><div style={styles.choice}>Info</div></Link>
          <div style={styles.choice}>Completed</div>
          <div style={styles.choice}>Others</div>
        </div>
      </div>

      <div style={styles.container1}>
        
        <Outlet/>
        <button
        className="back-button"
        onClick={goBack}
        style={{
          marginTop: '20px',
          padding: '8px 15px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease', 
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = 'rgb(40, 138, 177)')} 
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Back to Previous Page
      </button>
      </div>
    </div>
  );
};

export default Profile;

