import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './content.css';
import './Books.css'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Login,
  Footer,
  MainFooter,
  Teacher,
  Student,
  Profile,
  Tprofile,
  Forms,
  Schedule,
  EnrollmentRF,
  Books,
  Sinfo,
  Quiz,
  FaQs,
  Tinfo,
  Classes,
  Modules,
} from './components';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithFooter />} />
        <Route path="/login" element={<LoginWithFooter />} />
        <Route path="/teacher" element={<TeacherWithFooter />}/>
        
        <Route path="/student" element={<STudentWithFooter />} />
        <Route path="/profile" element={<ProfileWithFooter />}>
          <Route path="sinfo" element={<SinfoWithFooter />} />
          <Route path="classes" element={<ClassesWithFooter />} />
        </Route>
        <Route path="/quiz" element={<QuizWithFooter />} />
        <Route path="/forms" element={<FormsWithFooter />} />
        <Route path="/tprofile" element={<TprofileWithFooter />}>
          <Route path="tinfo" element={<TinfoWithFooter />} />
          <Route path="schedule" element={<ScheduleWithFooter />} />
        </Route>
        <Route path="/enrollmentRF" element={<EnrollmentRF />} />
        <Route path="/books" element={<BooksWithFooter />} />
        <Route path="/faqs" element={<FaQsWithFooter />} />
        <Route path="/schedule" element={<ScheduleWithFooter />} />
        <Route path="/classes" element={<ClassesWithFooter />} />
        <Route path="/Modules" element={<ModulessWithFooter />} />




        


      </Routes>
    </Router>
  );
};

const HomeWithFooter = () => {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
};

const LoginWithFooter = () => {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
};

const TeacherWithFooter = () => {
  return (
    <>
      <Teacher />
      <MainFooter />
    </>
  );
};
const STudentWithFooter = () => {
  return (
    <>
      <Student />
      <MainFooter />
    </>
  );
};

const ProfileWithFooter = () => {
  return (
    <>
      <Profile />
      <MainFooter />
    </>
  );
};

const TprofileWithFooter = () => {
  return (
    <>
      <Tprofile />
      <MainFooter />
    </>
  );
};

const SinfoWithFooter = () => {
  return (
    <>
      <Sinfo />
      <MainFooter />
    </>
  );
};

const ScheduleWithFooter = () => {
  return (
    <>
      <Schedule />
      <MainFooter />
    </>
  );
};

const BooksWithFooter = () => {
  return (
    <>
      <Books />
      <MainFooter />
    </>
  );
};

const FormsWithFooter = () => {
  return (
    <>
      <Forms />
      <MainFooter />
    </>
  );
};

const QuizWithFooter = () => {
  return (
    <>
      <Quiz />
      <MainFooter />
    </>
  );
};

const FaQsWithFooter = () => {
  return (
    <>
      <FaQs/>
      <MainFooter />
    </>
  );
};
const TinfoWithFooter = () => {
  return (
    <>
      <Tinfo/>
      <MainFooter />
    </>
  );
};

const ClassesWithFooter = () => {
  return (
    <>
      <Classes/>
      <MainFooter />
    </>
  );
};

const ModulessWithFooter = () => {
  return (
    <>
      <Modules/>
      <MainFooter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
