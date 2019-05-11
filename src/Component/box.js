import React, { Component } from "react";
import "../App.css";
class Box extends Component {
  render() {
    var image = {
      width: 200,
      height: 300,
      borderStyle: "solid",
      borderColor: " black",
      borderWidth: 3,
      marginTop: 10
    };
    var name = {
      textAlign: "center",
      fontFamily: "serif",
      color: "#7b505e"
    };
    var role = {
      textAlign: "center"
    };
    return (
      <div className="box">
        <div>
          <center>
            {" "}
            <img style={image} src={this.props.source} alt="logo" />
          </center>
        </div>
        <h1 style={name}> {this.props.name} </h1>
        <p style={role}>{this.props.des}</p>
      </div>
    );
  }
}

export default Box;
