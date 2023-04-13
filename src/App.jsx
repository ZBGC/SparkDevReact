import ReactDOM from "react-dom";
import Logo from './Images/logo.png';
import Gallery from "./components/gallery";
import About from "./components/about";
import Download from "./components/Download";
import bgVideo from "./Images/Videobackground.mp4";
import Socials from "./components/Socials";

export default function App() {
  const handleAbout = () => {
    const element = document.getElementById('hAbout');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleGallery = () => {
    const element = document.getElementById('hGallery');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDownload = () => {
    const element = document.getElementById('hDownload');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoc = () => {
    const element = document.getElementById('hSoc');
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


  return (
    <>
    <div className="top-0 sticky" id="navBar">    
    <nav className="border-gray-200 bg-[#081e3f] dark:border-gray-800 dark:border-gray-700" id="navBar">
<div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="#" class="flex items-center ">
        <img src={Logo} class="h-10 mr-3 " />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white ">JUMPIN-IT</span>
    </a>
    <div className="container flex hidden w-full md:block md:w-auto " id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
          <li className="">
            <button 
              className=" ml-5 block py-2 pl-5 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent " aria-current="page"
              onClick={handleAbout}
            >
              About
            </button>
          </li>
          <li className="mr-2 sticky">
          <button 
              className=" block py-2 pl-5 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent sticky" aria-current="page"
              onClick={handleGallery}
            >
              Gallery
            </button>
          </li>
          <li className="flex-1 mr-2 sticky">
          <button 
              className=" block py-2 pl-5 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent sticky" aria-current="page"
              onClick={handleDownload}
            >
              Download
            </button>

            
          </li>
          <li class="flex-1 mr-2 sticky">
          <button 
              class=" block py-2 pl-5 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent sticky" aria-current="page"
              onClick={handleSoc}
            >
              Follow Us
            </button>
            
          </li>
        </ul>
        </div>
      </div>
      </nav> </div>

      <div className="App">

       <div class = "video">
      
       <video autoPlay loop muted id = 'video'>
          <source src ={bgVideo} type='video/mp4'/>
          
       </video>
       <a className= "trailer" href="https://youtu.be/GixiOe2Lea0" target="_blank">Watch The Trailer</a>
       </div>

        <div id="hAbout"></div>
        <h1 className="text-center" id="headings">About</h1>
        <About />
        <div id="hGallery"></div>
        <h1 className="text-center mt-4" id="headings">Gallery</h1>
        <Gallery />
        <div id="hDownload"></div>
        <h1 className="text-center" id="headings">Download</h1>
        <Download />
        <div id="hSoc"></div>
        <h1 className="text-center" id="headings">Follow us!</h1>
        <Socials/>
      </div>


    </>
  );
}
