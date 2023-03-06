import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import {Routes,Route, Link} from 'react-router-dom';
import LogicalAndExample from './LogicalAndExample';

function App() {
  return (
    <>
    <nav>
    {/* <a href='#' className='nav-item'>Homepage</a>
    <a href='#' className='nav-item'>About Me</a> */}
    <Link to = "/" className='nav-item'>Homepage</Link> 
    <Link to = "/aboutMe" className='nav-item'>About Me</Link> 

    </nav>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/aboutMe" element={<AboutMe/>}/>
    </Routes>
    <LogicalAndExample/>
    </>
  );
}

export default App;
