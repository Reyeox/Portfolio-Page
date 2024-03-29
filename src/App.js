import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
            <span class="sr-only">Toggle navigation</span>
          </button>
          <a class="navbar-brand" href="#">Portfolio Reyeox</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse-01">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#fakelink">Projects</a></li>
            <li><a href="#fakelink">Certified</a></li>
            <li><a href="#fakelink">Contact</a></li>
            <li><a href="#fakelink">Upload Project</a></li>
           </ul>
          <form class="navbar-form navbar-right" action="#" role="search">
            <div class="form-group">
              <div class="input-group">
                <input class="form-control" id="navbarInput-01" type="search" placeholder="Search"/>
                <span class="input-group-btn">
                  <button type="submit" class="btn"><span class="fui-search"></span></button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default App;
