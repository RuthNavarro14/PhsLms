import React, {useState}from 'react';

const MainFooter = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Close the popup after form submission
      setShowPopup(false);
    };
  return (

    <div className="container5">
    {showPopup && (
        <div className="popup1">
          <div className="popup1-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      
    
    <footer style={styles.footer}>
      
      <div>&copy; {new Date().getFullYear()} All rights reserved</div>
      
    <span className="message" onClick={togglePopup}>Contact Us</span>

    </footer>
    </div>
  );
};

const styles = {
  footer: {
    background: 'rgb(40, 138, 177)',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default MainFooter;
