// We import useState and useEffect in our component
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import contactUs from './components/contactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';



function App() {
  return (
    <div>
      <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <contactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>

    </div>
  );
}

export default App;
