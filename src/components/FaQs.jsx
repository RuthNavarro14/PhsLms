import React from 'react';

const FaQs = () => {

  const goBack = () => {
    window.history.back(); 

  };
  
  return (
    <div className="container my-5">
          <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
     
      <div className="row justify-content-center mt-5">
        <div className="col">
          <h3 className="text-center">About us</h3>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3>Vision</h3>
            <p className="Vision">
            To create a nurturing educational environment that fosters academic excellence, character development, and lifelong learning, empowering students to become compassionate global citizens and leaders of tomorrow.
            </p>
          </div>
          <div className="col-12 col-lg-6">
          <h3>Mission</h3>
          <p className="Mission">
          Our mission is to provide a dynamic learning community where every student is valued, respected, and encouraged to achieve their full potential. Through innovative teaching practices, a rigorous curriculum, and a supportive atmosphere, we strive to inspire a passion for learning, critical thinking, and creativity. We aim to instill ethical values, integrity, and a sense of responsibility, preparing students to thrive in a diverse and ever-changing world
          </p>
        </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why Pilar High School?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  <b>Holistic Education:</b> Pilar High School focus on providing a holistic education that encompasses not only academics but also spiritual, moral, and ethical development. We aim to educate the whole person, nurturing character, values, and virtues alongside academic knowledge.
<br/>
<b>Values-Based Education:</b> Pilar High School typically integrate religious teachings, moral values, and ethics into their curriculum. They often prioritize virtues like compassion, service, empathy, and social justice, aiming to instill a strong sense of ethics and values in students.
<br/>
<b>Strong Academic Standards:</b> Many Catholic schools, including our school, Pilar High School, are known for their rigorous academic programs. They often have high academic standards and can provide a challenging and supportive learning environment.
<br/>
<b>Community and Support:</b> Pilar High School foster a strong sense of community among students, parents, teachers, and staff. Smaller class sizes and a close-knit environment can lead to better relationships and more personalized attention from educators.
<br/>
<b>Character Development:</b> Pilar High School focus on character development and personal growth. They encourage students to develop a sense of responsibility, leadership skills, and a commitment to serving others.
<br/>
<b>Faith-Based Environment:</b> For individuals seeking a faith-based education, Pilar High School provides an environment where religious teachings and values are integrated into daily life. This can create a supportive atmosphere for students to explore and deepen their faith.
<br/>
<b>Extracurricular Activities:</b> Pilar High School offer various extracurricular activities, including clubs, sports teams, community service programs, and more. These activities can contribute to a well-rounded education and personal development.
<br/>
<b>Network and Alumni Relations:</b> Pilar High School have strong networks and active alumni associations. This can provide valuable connections and support even after graduation, including access to career resources and mentorship opportunities.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Core Values
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  <b>Excellence:</b> We are committed to providing an excellent education that challenges and inspires students to reach their highest potential academically, creatively, and personally.<br/>
                  <b>Integrity:</b> We uphold honesty, ethics, and respect in all our interactions, fostering a culture of trust, fairness, and responsibility.<br/>
                  <b>Diversity and Inclusivity:</b> We celebrate diversity and create an inclusive environment where everyone feels welcomed, valued, and supported regardless of background, culture, or abilities.<br/>
                  <b>Compassion and Service:</b> We cultivate empathy, kindness, and a spirit of service, encouraging students to contribute positively to their communities and the world.<br/>
                  <b>Collaboration and Innovation:</b> We promote collaboration, critical thinking, and innovation, preparing students to adapt to challenges and contribute meaningfully in a rapidly changing society.<br/>
                  <b>Lifelong Learning:</b> We foster a love for learning, curiosity, and adaptability, empowering students to become lifelong learners equipped to face new opportunities and challenges.<br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    
      
  );
};

export default FaQs;
