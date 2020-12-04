import React, { Component } from "react";

class Contact extends Component{
  render(){
    return(
      <div className="Contact-header">
      <h2 className="Connect">Connect with me</h2>
      <span className="Contact-icons">
     <i class="fas fa-envelope"></i>
      </span>

      <span className="Contact-icons">
       <i class="fab fa-github"></i>
      </span>

      <span className="Contact-icons">
       <i class="fab fa-twitter-square"></i>
      </span>

      <span className="Contact-icons">
       <i class="fab fa-facebook"></i>
      </span>

      <span className="Contact-icons">
       <i class="fab fa-instagram"></i>
      </span>
      </div>
    )
  }
}

export default Contact;
