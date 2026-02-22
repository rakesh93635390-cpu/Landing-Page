import './App.css';
import Html from './Career Map/Html';
import Login from './Career Map/Login';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Moco from './Career Map/Moco';
import Home from './Career Map/Home';
import Ass from './LandingPage/Ass'
import About from './Career Map/About';
import Course from './Career Map/Course';
import ChateApp from './Websocket/ChateApp';
import WebPage from './Career Map/WebPage';
import AppPage from './Career Map/AppPage';
import AIml from './Career Map/AIml';
import Items from './Test/Items';
import Props from './Test/Props';
import Condition from './Test/Condition'
// import Sample from './Career Map/Sample';



function App() {
  return (
    <div>
     { /* <Props/>
      <Items/>
      <Condition/> 
      <Usereducer/>
      <Event/>*/}
       <Router>
        <Routes>
          <Route path="/" element={<Html/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/m" element={<Moco/>}> </Route>
          <Route path="/home" element={<Home/>}> </Route>
          <Route path="/Ass" element={<Ass/>}> </Route>
          <Route path="/About" element={<About/>}> </Route>
          <Route path="/course" element={<Course/>}> </Route>
          <Route path="/WebPage" element={<WebPage/>}> </Route>
          <Route path="/AppPage" element={<AppPage/>}> </Route>
          <Route path="/AIML" element={<AIml/>}> </Route>



        </Routes>
      </Router>
     {/* <ChateApp/> 
    <Sample/> */}
    </div>
  );
}

export default App;
