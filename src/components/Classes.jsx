import React from 'react';

const Classes = () => {
  return (
    <div className="schedule-container">
      <h2>Class Schedule</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Monday</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>8:00 AM - 9:30 AM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>General Mathematics</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Tuesday</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>10:00 AM - 11:30 AM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Earth & Life Science</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Wednesday</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>9:00 AM - 10:30 AM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Reading and Writing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Classes;
