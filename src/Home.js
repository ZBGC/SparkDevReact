import About from './components/about';
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Photo from './Images/Photo.jpg';
import contact from './components/contact';
import Gallery from './components/gallery';
function App() {
  return (
    <BrowserRouter>
    <div id="home">
      <div>
  
      <nav> 
        <ul class = "navbar" >
          <li class = "nav">
            <Link to="/contact" >Contact </Link>
          </li>
          <li class = "nav"> 
            <Link to="/About"> About </Link>
          </li>
          <li class = "nav">
            <Link to='/gallery' > Gallery </Link>
          </li>
          <li class = "nav">
            <Link to ='/download' > Download </Link>
          </li>
          
        </ul>
      </nav>
    
   
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