import React, { Component } from 'react';
import moment from 'moment/moment';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import AddBlog from "./pages/add.blog"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
       
        <Router>
          <div>
            <NavigationContainer/>
            <Switch>
             
              <Route exact path= '/' component ={Home}></Route>
              <Route path= '/about' component ={About}></Route>
              <Route path= '/contact' component ={Contact}></Route>
              <Route path= '/blog' component ={Blog}></Route>
              <Route path= '/add-Blog' component ={AddBlog}></Route>
              
            </Switch>
          </div>
        </Router>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer/>
      </div>
    );
  }
}
