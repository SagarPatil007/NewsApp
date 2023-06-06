import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;  
  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="General" pageSize={this.pageSize} country="in" category=""/> </Route>
          <Route exact path="/Business"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Business" pageSize={this.pageSize} country="in" category="Business"/> </Route>
          <Route exact path="/Entertainment"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/> </Route>
          <Route exact path="/Science"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Science" pageSize={this.pageSize} country="in" category="Science"/> </Route>
          <Route exact path="/Sports"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/> </Route>
          <Route exact path="/Technology"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/> </Route>
          {/* <Route exact path="/Technology"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} country="in" category={}/> </Route> */}
        </Switch>
        </Router>
      </div>
    )
  }
}

