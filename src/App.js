import './App.css'

import { Suspense, lazy } from 'react';


import Menubar from './component/menubar/Menubar';
import Header from './component/Header/Header';
import Aboutme from './component/Aboutme/Aboutme';
import Skil from './component/Skils/Skil';
import Project from './component/Project/Project';   
import Contact from './component/Contect/Contact'; 
import Footer from './component/Footer/Footer';

import LazyNavbar from './lazyLoading/lazyNavbar/LazyNavbar'


function delayForDemo(promise){
  return new Promise(resolve =>{
    setTimeout(resolve,2000); 
  }).then(()=>promise)
}



const Navbar = lazy(() => delayForDemo(import('./component/navbar/Navbar')));

function App() {
  return (
    <>

      <Suspense fallback={<LazyNavbar/>}>
        <Navbar />
      </Suspense>

      <Menubar />
      <Header />
      <Aboutme />
      <Skil />
      <Project />  
      <Contact/> 
      
      <Footer/>
    </>
  );
} 

export default App;
