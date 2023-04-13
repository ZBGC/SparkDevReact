import './about.css';
import Logo from '../Images/logo.png';
import {AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillTwitterSquare} from 'react-icons/ai';


function Socials(){

    return(
        <>

<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://www.instagram.com/init.fiu/"target="_blank"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/company/init-fiu/"target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/channel/UCLHkikPsWBYZHV49DnCzL9Q"target="_blank"><AiFillYoutube /></a>
            <a href="https://twitter.com/initfiu"target="_blank"><AiFillTwitterSquare /></a>
           
          </div>
  
  <div class="px-6 pt-4 pb-2">
    
    <div className="">


    </div>
        </div>

</>
    );
}

export default Socials
       