import React from "react";

const Schedule= () => {


return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");\n      * {\n        font-family: "Poppins";\n      }\n      table {\n        border-collapse: collapse;\n        width: 60%;\n        background: white;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      }\n      tr {\n        padding: 0 15px 0 -1px;\n      }\n      td {\n        border: 1px solid #00bcd4;\n        text-align: left;\n        padding: 8px;\n        text-align: center;\n      }\n      th {\n        border: 1px solid #00bcd4;\n        color: white;\n        background: rgb(40, 138, 177);\n        padding: 10px;\n      }\n      .editBtn,\n      .deleteBtn {\n        padding: 5px 10px;\n        cursor: pointer;\n      }\n      .addbutton {\n        margin-left: 48%;\n        padding: 8px 15px;\n        font-weight: bold;\n        font-size: 20px;\n        border: none;\n        cursor: pointer;\n        border-radius: 5px;\n        background-color: #008cba;\n        color: white;\n      }\n      .editBtn {\n        color: #00bcd4;\n        border: #00bcd4;\n      }\n      .deleteBtn {\n        color: tomato;\n        border: tomato;\n      }\n    '
        }}
      />
      <div className="Schedule">
      <h3>
        Class Schedule
      </h3>
      <table id="myTable">
        <thead>
          <tr>
            <th>Grade &amp; Section</th>
            <th>Subject</th>
            <th>Time &amp; Day</th>
            <th>Enrolled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td contentEditable="true">HUMSS-11 St.Agustine</td>
            <td contentEditable="true">Reading &amp; Writing</td>
            <td contentEditable="true">7:30am-8:30am (Monday-thursday)</td>
            <td contentEditable="true">48</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">ABM-11 St.Agnes</td>
            <td contentEditable="true">Reading &amp; Writing</td>
            <td contentEditable="true">8:30am-9:30am (Monday-thursday)</td>
            <td contentEditable="true">35</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">RECESS</td>
            <td contentEditable="true">RECESS</td>
            <td contentEditable="true">9:30am-10:00am (Monday-Friday)</td>
            <td contentEditable="true">RECESS</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">VACANT</td>
            <td contentEditable="true">VACANT</td>
            <td contentEditable="true">10:00 am-11:00 am (Monday-thursday)</td>
            <td contentEditable="true">VACANT</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">HUMSS-12 Our Lady of Lords</td>
            <td contentEditable="true">Media &amp; Information Literacy</td>
            <td contentEditable="true">11:00am-12:00nn (Monday-thursday)</td>
            <td contentEditable="true">40</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">Lunch Break</td>
            <td contentEditable="true">Lunch Break</td>
            <td contentEditable="true">12nn-1:00pm (Monday-Friday)</td>
            <td contentEditable="true">Lunch Break</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">GAS-11 St.Rafael</td>
            <td contentEditable="true">Reading &amp; Writing</td>
            <td contentEditable="true">1:00pm-2:00pm (Monday-thursday)</td>
            <td contentEditable="true">40</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
          <tr>
            <td contentEditable="true">GAS-12 Our Lady of Lourdes</td>
            <td contentEditable="true">Media &amp; Information Literacy</td>
            <td contentEditable="true">2:00pm-3:00pm (Monday-thursday)</td>
            <td contentEditable="true">40</td>
            <td>
              <button className="editBtn" onclick="editRow(this)">
                <i className="fa-regular fa-pen-to-square" />
                &nbsp;Edit
              </button>
              <br />
              <br />
              <button className="deleteBtn" onclick="deleteRow(this)">
                <i className="fa-solid fa-trash" /> &nbsp;Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );

};
export default Schedule;