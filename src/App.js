import './App.css';
import React, { Component } from 'react'
import Navbar from './compenents/Navbar';
// import Newsitem from './compenents/Newsitem'
import News from './compenents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      // <div>
      // <Router>
      //   <Navbar/>
        
      //   < Routes/>
      //         <Route exact path="/"><News key="general" pageSize={7} country ="in" category="general"/></Route>
      //         <Route exact path="/business"><News key="business" pageSize={7} country ="in" category="business"/></Route>
      //         <Route exact path="/entertainment"><News  key="entertainment" pageSize={7} country ="in" category="entertainment"/></Route>
      //         <Route exact path="/general"><News  key="general" pageSize={7} country ="in" category="general"/></Route>
      //         <Route exact path="/health"><News  key="health" pageSize={7} country ="in" category="health"/></Route>
      //         <Route exact path="/science"><News  key="science" pageSize={7} country ="in" category="science"/></Route>
      //         <Route exact path="/sports"><News  key="sports" pageSize={7} country ="in" category="sports"/></Route>
      //         <Route exact path="/technology"><News  key="echnology" pageSize={7} country ="in" category="technology"/></Route>
       
      // </Router>
      // </div>
      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key='General' pageSize={12} country='us' category='General' />}></Route>
          <Route path='/Business' element={<News key='Business' pageSize={12} country='us' category='Business' />}></Route>
          <Route path='/Entertainment' element={<News key='Entertainment' pageSize={12} country='us' category='Entertainment' />}></Route>
          <Route path='/Health' element={<News key='Health' pageSize={12} country='us' category='Health' />}></Route>
          <Route path='/Science' element={<News key='Science' pageSize={12} country='us' category='Science' />}></Route>
          <Route path='/Sports' element={<News key='Sports' pageSize={12} country='us' category='Sports' />}></Route>
          <Route path='/Technology' element={<News key='Technology' pageSize={12} country='us' category='Technology' />}></Route>
        </Routes>
      </Router>
    </div>
    )
  }
}



