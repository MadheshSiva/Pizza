import React, { useEffect } from 'react';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import SectionOne from './main/section1/sectionOne';
import SectionTwo from './main/section2/sectionTwo';
import PersonBar from './main/person/person';
import Map from './main/map/map';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
   useEffect(() => {
AOS.init();

   },[])


  return (
    <div className="App relative overflow-hidden">
     <Header/>
      <div>
        <SectionOne/>
      </div>
      <SectionTwo/>
      <div>
         <Map/>
      </div>
      <div className='my-10'>
        <PersonBar/>
      </div>
     <div className=''>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
