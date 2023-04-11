import about from './about.css';
import Arch from '../Images/logo.png';
import Hash from '../Images/Hash.png';
import Luis from '../Images/LuisLogo.png';



function About() {
    return (
      <div class="bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl text-black border-red-200 p-50" id="aComp">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">About</div>
  </div>
  <div class="px-6 pt-4 pb-2">
    <p>Jumpin-It is an addictive game developed by ARJEE GAMES, with the support of Luis Ahumada and Hash Studios. 
      You play as Army Alex, a blonde-haired gunman being chased by a giant pickle jar down a busy street.
       Dodge obstacles, kill aliens, and try to beat your friends' high scores in this fast-paced game with simple yet engaging graphics. 
       The game progressively becomes more challenging over time, with more obstacles to dodge and enemies to defeat. 
       Jumpin-It is a fun and competitive game that offers hours of entertainment for gamers of all ages. 
       Whether you have a few minutes or a few hours to spare, Jumpin-It is definitely worth a try!</p>
    <div className="flex">
      <img src={Hash} className="object-contain h-48 w-50 ml-40 m-auto"/>
      <img src={Arch} className="object-contain h-48 w-50 ml-20 m-auto"/> 
      <img src={Luis} className="object-contain h-48 w-50 ml-20 m-auto"/>

    </div>
    </div>
        </div>
    );
  }
  
  export default About;
  