import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Title from "../components/Title";
import profile from "../assets/profile.png";

class Header extends Component{
  state = { displayBio: false };

    toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio });
    };

    render() {
      return (
        <div className="App">
          <img src={profile} alt="profile" className="profile" />
          <h1 className="App-title">Hello!</h1>
          <p className="App-paragraph">My name is Yakubu.</p>
          <Title />
          <p className="App-paragraph">I am React native and ReactJS engineer.</p>
          {this.state.displayBio ? (
            <div>
              <p className="App-paragraph">
                I live California, and I code everyday
              </p>
              <p className="App-paragraph">
                My favorite languate is Javascript, and it is awesome.
              </p>
              <p className="App-paragraph">
                Besides coding, I also love to work out and live a healthy
                lifstyle.
              </p>
              <Button
                variant="outline-dark"
                onClick={this.toggleDisplayBio}
                className="Show"
              >
                Show less
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="outline-dark"
                onClick={this.toggleDisplayBio}
                className="Show"
              >
                Read more
              </Button>
            </div>
          )}
        </div>
      );
    }
  }


export default Header;
