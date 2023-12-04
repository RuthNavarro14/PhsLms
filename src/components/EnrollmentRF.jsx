const EnrollmentRF = () => {



  return (
  
  
    <div className="none">
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n      body {\n        font-family: Arial;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        background-color: #f4f4f4;\n      }\n      .Request {\n        background-color: #fff;\n        padding: 20px 50px 5px 50px;\n        border-radius: 15px;\n        margin: 30px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        max-width: 600px;\n        width: 100%;\n      }\n      .Request-title {\n        text-align: center;\n      }\n      .form-container {\n        background-color: #fff;\n        padding: 20px 50px 5px 50px;\n        margin: 30px;\n        border-radius: 15px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        max-width: 400px;\n        width: 100%;\n      }\n\n      .form-group {\n        margin-bottom: 20px;\n      }\n\n      label {\n        display: block;\n        font-weight: bold;\n        margin-bottom: 5px;\n      }\n\n      input[type="text"],\n      input[type="email"],\n      select,\n      input[type="tel"],\n      button {\n        width: 100%;\n        padding: 8px;\n        font-size: 16px;\n        border-radius: 5px;\n        border: 1px solid #ccc;\n      }\n\n      button {\n        background-color: rgb(40, 138, 177);\n        color: #fff;\n        cursor: pointer;\n      }\n\n      button:hover {\n        background-color: green;\n      }\n\n      .error-message {\n        color: red;\n        font-size: 14px;\n        margin-top: 5px;\n      }\n      .container {\n        width: 600px;\n        border: 1px solid #ccc;\n        padding: 20px;\n        margin: 0 auto;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .choices {\n        display: flex;\n        flex-wrap: nowrap;\n        gap: 0;\n      }\n\n      .choice {\n        padding: 8px 16px;\n        margin: 0;\n        cursor: pointer;\n        background-color: #f0f0f0;\n        transition: background-color 0.3s ease;\n      }\n\n      .choice:hover {\n        background-color: #ddd;\n      }\n    '
      }}
    />
    <div className="Request">
      <h2 className="Request-title">
        <img src={require(`./Photos/logo.png`)} width="60px;" /> <br />
        PHS Student Enrollment Request
      </h2>
      <p>
        Completing a request form from a teacher when seeking to add a new
        subject to a class or when a student wishes to join a specific class is
        vital for several reasons:
        <br />
        <br />
        1.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Organization and Documentation:
        </span>
        The request form serves as an official record of the request, providing
        clarity and documentation of the desired change in the class structure.
        <br />
        <br />
        2.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Administrative Tracking:{" "}
        </span>
        It helps school administrators and faculty keep track of changes in
        class rosters, ensuring accurate student enrollment records.
        <br />
        <br />
        3.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Resource Allocation:
        </span>
        By documenting the request, the school can assess if there's adequate
        space and resources available for the new subject or additional student.
        <br />
        <br />
        4.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Curriculum Planning:
        </span>
        Informing teachers about these requests via the form allows them to plan
        and adjust their teaching approach. They can integrate new students
        seamlessly into ongoing lessons or prepare to incorporate a new subject
        without disrupting the curriculum.
        <br />
        <br />
        5.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Transparency and Accountability:
        </span>
        The completion of the request form establishes a formal process,
        ensuring transparency in the enrollment procedure. <br />
        <br />
        6.
        <span style={{ backgroundColor: "rgb(126, 232, 126)" }}>
          Compliance with Regulations:
        </span>
        Many educational institutions have specific procedures for class
        enrollment. Submitting a request form ensures that all necessary
        protocols and regulations are followed, ensuring compliance with
        institutional policies.
        <br />
        <br />
        In essence, filling out a request form for such changes facilitates a
        smooth and organized process, benefiting both the students and the
        educational institution by ensuring proper planning, documentation, and
        adherence to regulations
      </p>
      <br />
    </div>
    <div className="form-container">
      <h2 style={{ textAlign: "center" }}>Request Form</h2>
      <form id="userForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="lrn">LRN (Learner Reference Number):</label>
          <input type="text" id="lrn" name="lrn" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required="">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="radio-group">
          <p>I am a...</p>
          <label htmlFor="teacher">
            <input
              type="radio"
              id="teacher"
              name="role"
              defaultValue="teacher"
              required=""
            />
            Teacher, requesting students to be enrolled in my class
          </label>
          <label htmlFor="student">
            <input
              type="radio"
              id="student"
              name="role"
              defaultValue="student"
              required=""
            />
            Student, requesting to be added to a specific class
          </label>
        </div>
        <br />
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
</div>
  
);
  
}; export default EnrollmentRF;