import About from './components/about';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Photo from './Images/Photo.jpg';
function App() {
  return (
    <BrowserRouter>
    <div id="home" className='text-center'>
      <div id="Background" >
        <img src={Photo} className = "bg-no-repeat bg-cover bg-center bg-fixed" >
      <nav id='Nav-bar' className='transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center'>
        <ul className='hidden flex grid-rows-1 col-4'>
          <li>
            <Link to="/Home"> Home</Link>
          </li>
          <li>Gallery</li>
          <li>Download</li>
          
        </ul>
      </nav>
      </img>
   
      </div>
      </div>
      
      
    
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>} />
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