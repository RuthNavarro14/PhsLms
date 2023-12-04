import React from 'react';
import Iframe from 'react-iframe';
import { NavLink } from 'react-router-dom';

const Forms = () => {
  const googleSheetsURL = 'https://docs.google.com/spreadsheets/d/1AZmCVjAXeIx2qcuuoR1wSu6Kxn4rkNQpxXeG5ENdiCQ/edit#gid=369726950';

  return (
    <div>
      <h4>School Forms</h4>
      <NavLink to ="/teacher"><h3> Back </h3></NavLink>
      <Iframe url={googleSheetsURL} width="100%" height="600px" />
    </div>
  );
};

export default Forms;
