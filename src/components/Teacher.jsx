import React, { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <nav className="navi">
        <span className="hamburger-btn material-symbols-rounded" onClick={toggleMenu}>
          menu
        </span>
        <a href="#" className="logo2">
          <img className="logo2" src={require('./Photos/logo.png')} alt="logo"></img> &nbsp;
          <h2>PHSLearn</h2>
        </a>
        <ul className={`links ${showMenu ? 'show-menu' : ''}`}>
          <span className="close-btn material-symbols-rounded" onClick={hideMenu}>
            close
          </span>
          <li>
            <a href="#">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa-regular fa-bell"></i>
            </a>
          </li>
          <li>
            <Link to="/faqs">
              <i className="fa-regular fa-circle-question"></i>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <img
              className="profilepic"
              src={require('./Photos/Ruth.jpg')}
              alt="logo"
              onClick={hideMenu}
              width="40px"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};





const Sidebar = () => {

    const [isActive, setIsActive] = useState(true);

    const toggleSidebar = () => {
      setIsActive(!isActive);
    };

  return (
  
    <div className="side-main">
      <div class={`sidebar ${isActive ? 'active' : ''}`}>
            <div class="top">
              <div class="symbol">
                <i class="bx bxl-firebase"></i>
                <span> PHS Learn</span>
              </div>
              <i class="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
              <div class="user">
                <img src={require('./Photos/Ruth.jpg')} alt="Profile" class="user-img" />
              </div>
              <div class="bold">
                <p>RUTH NAVARRO<br />Admin</p>
              </div>
            </div>
            <ul>
          
              <li>
              <Link to="/Tprofile">
                <a href="#">
                  <i class="fa-regular fa-user"></i>
                  <span class="nav-item">Profile</span>
                </a>
                <span class="tooltip">Profile</span>
                </Link>
                <Outlet/>

                
              </li>
     
              <li>
                <Link to="/schedule">
                <a href="#">
                  <i class="bx bx-calendar"></i>
                  <span class="nav-item">Schedule</span>
                </a>
                <span class="tooltip">Schedule</span>
                </Link>
              </li>      
              <li>
                <strong> FORMS</strong>
              </li>
              <li>      
                <Link to ="/forms" >
                <a href="#">
                  <i class="fa-solid fa-table"></i>
                  <span class="nav-item">Forms</span> 
                </a>              
                </Link>
              <span class="tooltip">Forms</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-cog"></i>
                  <span class="nav-item">Settings</span>
                </a>
                <span class="tooltip">Settings</span>
              </li>
              <li>
              <Link to="/">
              <a href="#" >
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span class="nav-item">Log out</span>
                </a>
                <span class="tooltip">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
          
    </div>
    
  );
};

const Feed= () => {

 
  return (
   
    
    <div className="col-12">
      <section id="Feedback">
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
        <div className="Carousel1">
          <div className="comments">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="single-item">
          <div className="row">
            <div className="col-md-6">
              <div className="content2">
                <h5> 📚 ENGAGE,LEARN,GROW 📚</h5>
                <p>
                Join us for an insightful webinar on December 14, 2023. Explore 
                Absolutely! Here's a complete theme for a webinar: " Improving Technology Skills Using Microsoft Teams".
                </p>
                <button>
                  <a
                    style={{ color: 'white', textDecoration: 'none' }}
                    href="https://www.youtube.com/live/VkTHJjwN6Gw?si=zlvaTItdNI_2Q5iJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Webinar
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile">
                <div className="image-area">
                  <img src={require(`./Photos/webinar1.jpg`)} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className="single-item">
        <div className="row">
          <div className="col-md-6">
            <div className="content2">
              <h4 style={{ marginTop: '30px' }}>
                <strong>  Where Learning Flourishes</strong>
              </h4>
              <p>
              

                Discover a place where education meets inspiration! At Pilar High School, we're dedicated to fostering academic excellence, nurturing creativity, and shaping future leaders.
               
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile">
              <div className="image-area">
                <img
                  src={require(`./Photos/teacherProf.png`)}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="single-item">
        <div className="row">
          <div className="col-md-6">
            <div className="content2" style={{ marginTop: '30px' }}>
              <h4> <strong> Missing student from your Class</strong>?</h4>
              <p>
                If you wish to add a student to your classlist,
                <br />fill out this form and we'll help you sort it out.
              </p>
              <Link to="/EnrollmentRF">
              <a href="Form.html" target="_blank" rel="noopener noreferrer">
                <button>Enrollment Request Form</button>
              </a>
              </Link>
              <Outlet/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile">
              <div className="image-area">
                <img src={require(`./Photos/TrequestForm.jpg`)} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="single-item">
        <div className="row">
          <div className="col-md-6">
            <div className="content2" style={{ marginTop: '30px' }}>
              <p>
                Hi Teachers! <br />Exciting news: Pilar High School now features a collection of free online books for you to dive into. Explore various genres and topics right from your LMS dashboard. Happy reading!
              </p>
              <Link to="/Books">
              <a href="Books.html" target="_blank" rel="noopener noreferrer">
                <button>👉Read here</button>
              </a>
              </Link>
              <Outlet/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile">
              <div className="image-area">
                <img src={require(`./Photos/onlineBook.avif`)} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
       
       
   
      </section>
      <div className="row">

      <div className="col">
        <div className="UpcomingE">
          <p className="upcomingEvents">Upcoming Events</p>
          <hr />
          <div className="school-events">
            {/* First Event */}
            <div className="row">
              <div className="col col-md-4">
                <div className="myevents" style={{ width: '15rem' }}>
                  <img src={require('./Photos/firstfriday.jpg')} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      Date: December 1, 2023 (Friday)<br />
                      <a href="#">An integral part of Catholic devotion, the First Friday Mass is a...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Event */}
            <div className="row">
              <div className="col col-md-4">
                <div className="myevents" style={{ width: '15rem' }}>
                  <img src={require(`./Photos/christmas concert.png`)} className="card-img-top" alt="..." />
                  <div className="card-body" style={{ textDecoration: 'none' }}>
                    <p className="card-text">
                      Date: December 8, 2023 (Friday)<br />
                      <a href="#">An evening event featuring musical performances by the school choir, and ...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Event */}
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="myevents" style={{ width: '15rem' }}>
                  <img src={require(`./Photos/sports day.jpg`)}className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      Date: February 9, 2024 (Friday)<br />
                      <a href="#">A day dedicated to various sports competitions...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
   
    
  );

};

const Calendar =()=> {
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);

  const addNoteToNotepad = () => {
    const colors = ['note-red', 'note-green', 'note-blue']; // List of different colors
    const newNote = prompt('Enter a new note:');
    if (newNote !== null && newNote.trim() !== '') {
      const colorClass = colors[noteCounter % colors.length]; // Get color class based on counter

      const note = {
        id: noteCounter,
        text: newNote,
        color: colorClass,
      };

      setNotes([...notes, note]);
      setNoteCounter(noteCounter + 1);
    }
  };

  const editNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        const updatedText = prompt('Edit note:', note.text);
        return {
          ...note,
          text: updatedText !== null && updatedText.trim() !== '' ? updatedText : note.text,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

return (
  <div className="col-12">
    
  <div className ='row'>
    <div className='col-12'>
  <iframe
    className="calendar"
    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FManila&showTitle=0&showTabs=0&showPrint=0&showCalendars=0&showTz=0&src=cnV0aG5hdmFycm83MTRAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTEwMzA1MDE1MzY4NTMxOTY5MjM0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA0MTk0NTAyMjAxMDE5NTY0MjkxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4Njg1OTIzMjY4NTcwOTMwMzY2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%237986CB&color=%23b80672&color=%23263238&color=%23055524&color=%237986CB"
    style={{ border: 'solid 1px #777' }}
    width="100%"
    height="300"
    frameBorder="0"
    scrolling="no"
    title="Google Calendar"
  ></iframe>
  </div>
  </div>
    <div className="row">
  
  <div className="col">
    {/* Notepad */}
    <div className="card1">
      <div className="card-header">
        <h2>Notepad</h2>
        <i id="addNoteBtn" className="fa-solid fa-plus" onClick={addNoteToNotepad} ></i>
      </div>
      <div className="card-body">
        <ul id="noteList">
        {notes.map((note) => (
    <li key={note.id}>
      <span className={note.color}>• {note.text}</span>
      <div className="note-actions">
        <button className={`edit-btn ${note.color}`} onClick={() => editNote(note.id)}>
          Edit
        </button>
        <button className={`delete-btn ${note.color}`} onClick={() => deleteNote(note.id)}>
          Delete
        </button>
      </div>
    </li>
    
  ))}
  </ul>
      </div>
    </div>
  </div>
</div>
<div className="row">
        <div className="col">
          {/* Announcement */}
          <div className="card2" style={{ width: '100%' }}>
            <ul className="list-group list-group-flush">
              <li className="announcement">Announcement!</li>
              <li className="list-group-item">
                <i className="fa-solid fa-bullhorn"> &nbsp; </i>
                <a href="#"> Please be informed...</a>
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-bullhorn"></i>&nbsp;
                <a href="#"> Please be informed...</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
   </div>
);
};




const Teacher = () => {
  return (
    <div className="container-fluid">
      
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-lg-2 px-0">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-md-8">
              <Feed />
            </div>
            <div className="col-md-4">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
