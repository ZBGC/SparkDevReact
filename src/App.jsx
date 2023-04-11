import ReactDOM from "react-dom";
import Photo from './Images/Photo.jpg';
import scrollElement from "react-scroll/modules/mixins/scroll-element";
import Background from './Images/Back.png'
import Gallery from './components/gallery'
import About from './components/about';
import Download from "./components/Download";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Section from "./superteer";



export default function App() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className="App">
      <img src={Background}></img>
      <About/>
      <Gallery/>
      <Download/>
      <Section/>



      
    
    </div>
  );
}