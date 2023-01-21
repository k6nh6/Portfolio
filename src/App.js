import Home from './components /Home';
import Navbar from './components /Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './components /Skills';
import Project from './components /Project';
import Contact from './components /Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar/>
        <BrowserRouter>
        <Routes>
        <Route path={'/Home'} element={<Home/>} />
        <Route path={'/'} element={<Home/>} />
        <Route path={'/Skills'} element={<Skills/>}/>
        <Route path={'/Project'} element={<Project/>}/>
        <Route path={'/Contact'} element={<Contact/>}/>
        
        
        </Routes>
        
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
