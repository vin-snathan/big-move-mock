import React, { Component } from 'react';
import truck from './truck.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
          <div className='container App-main'>
            <div className='row'>
              <div className='col-md-2'>
                <Aside />
              </div>
              <div className='col-md-10'>
                <Main />
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="#"><img id='nav-truck' className='img-responsive' src={truck} /><span id='wordBig'>BIG</span><span id='wordMove'>MOVE</span></a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"> Home </a></li>
              <li><a href="#"> About Us </a></li>
              <li><a href="#"> Services </a></li>
              <li><a href="#"> News </a></li>
              <li><a href="#"> Contact </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotron-container">
        <div className="jumbotron text-center">
          <h1>Services</h1>
        </div>
      </div>
    );
  }
}

class Aside extends Component {
  render() {
    return (
      <aside className='Aside-div'>
        <ul className='Aside-list'>
          <li>SERVICES</li>
          <li>AIR DELIVERY</li>
          <li>GROUND SHIPPING</li>
          <li>SEA DELIVERY</li>
        </ul>
      </aside>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className='Main-content'>
        <h3> WHAT WE DO </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non enim at enim dictum ultricies sed id eros. Quisque eget scelerisque eros. Aenean fermentum ligula et facilisis placerat. Duis ac urna lectus. Donec ligula metus, vulputate nec nunc eget, mollis condimentum turpis. Etiam ac dignissim justo. Aenean ut pharetra enim.
        </p>

        <div className='row'>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <img src='https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=1400' />
              <div className='caption'>
                <p className='caption-title'>Air Delivery</p>
                <p className='caption-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='thumbnail'>
              <img src='https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Semi-truck-956566.jpg' />
              <div className='caption'>
                <p className='caption-title'>Ground Shipping</p>
                <p className='caption-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='thumbnail'>
              <img src='https://cdn.images.express.co.uk/img/dynamic/135/590x/cargoship-548152.jpg' />
              <div className='caption'>
                <p className='caption-title'>Sea Delivery</p>
                <p className='caption-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>

    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className='Footer-div'>
        <footer>
          <div className='container'>
            <div className='row'>

              <div className='col-md-4'>
                <ul className='Footer-list'>
                  <li>HOME</li>
                  <li>ABOUT US</li>
                  <li>SERVICES</li>
                  <li>NEWS</li>
                  <li>CONTACT</li>
                </ul>
              </div>

              <div className='col-md-4'>
                <p> CONTACT US <br/> Lorem ipsum dolor sit amet, consectetur. </p>
                
                <p> <b>Email:</b> hello@company.com</p>
                <p> <b>Phone:</b> 1-888-CON-TACT</p>
                <p> <b>Mail:</b> 20 Lorem ipsum dolor sit amet <br/> 6046 Larsinac, Country</p>
              </div>

              <div className='col-md-4'>
                <p> NEWSLETTER <br/> Lorem ipsum dolor sit amet, consectetur. </p>

                <form>
                  <div className="form-group">
                    <label className='sr-only' for="email">Email address:</label>
                    <input type="email" className="form-control Footer-input" id="email" maxlength='50' />
                  </div>
                  <button type="submit" className="btn btn-sm btn-primary">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </footer>

        <div className='Footer-copyright text-center'>
          <p> Copyright &copy; All rights reserved </p>
        </div>
      </div>
    );
  }
}

export default App;
