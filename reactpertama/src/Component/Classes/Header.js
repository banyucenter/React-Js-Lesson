import React from 'react';
import logo from '../../logo.svg';

class Header extends React.Component {
    render(){
        return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World Class
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Belajar React.Js Asyiik
        </a>
      </header>;
    }
}

export default Header;