import About from './components/about';
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Photo from './Images/Photo.jpg';
import contact from './components/contact';
import Gallery from './components/gallery';
function App() {
  return (
    <BrowserRouter>
    <div id="home" className='text-center'>
      <div>
        {/* Hover: */}
      {/* transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center */}
      <nav className=' w-full flex justify-center space-x-5 text-center'> 
        <ul class>
          <li>
            <Link to="/contact" className='transform transition duration-500 hover:scale-125 flex justify-center items-center'> Contact </Link>
          </li>
          <li> 
            <Link to="/About" className='transform transition duration-500 hover:scale-125 flex justify-center items-center'> About </Link>
          </li>
          <li>
            <Link to='/gallery' className='transform transition duration-500 hover:scale-125 flex justify-center items-center'> Gallery </Link>
          </li>
          <li>
            <Link to ='/download' className='transform transition duration-500 hover:scale-125 flex justify-center items-center'> Download </Link>
          </li>
          
        </ul>
      </nav>
    
        <img src={Photo} className = "relative w-full bg-no-repeat bg-cover bg-center bg-fixed " >
          
        </img>
   
      </div>
      </div>
      
      
    
        <Routes>
          <Route path="/contact" element={<contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </BrowserRouter>

  );
}
export default App;
// // // All route props (match, location and history) are available to User
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }

// ReactDOM.render(
//   <Router>
//     <Route path="/user/:username" component={User} />
//   </Router>,
//   node
// );