import React, { Component } from "react";
import Box from "./Component/box";
import "./App.css";
import img2 from "./pics/img2.jpg";
import img3 from "./pics/img3.jpg";
import img4 from "./pics/img4.jpg";
class App extends Component {
  state = {
    name: "Donia",
    role: "web",
    image: img4
  };
  onClickChangeState1 = () => {
    this.setState({
      name: "Donia",
      role: "Dima tadhhak hhhh ",
      image: img4
    });
  };
  onClickChangeState2 = () => {
    this.setState({
      name: "Rayen",
      role: "Gamer: dima yalaab fil les jeux ",
      image: img2
    });
  };
  onClickChangeState3 = () => {
    this.setState({
      name: "Siwar",
      role: "Web",
      image: img3
    });
  };
  render() {
    return (
      <div>
        <center>
          {" "}
          <button
            onClick={() => {
              this.onClickChangeState1();
            }}
          >
            {" "}
            Donia
          </button>
          <button
            onClick={() => {
              this.onClickChangeState2();
            }}
          >
            Rayen
          </button>
          <button
            onClick={() => {
              this.onClickChangeState3();
            }}
          >
            {" "}
            Siwar
          </button>
        </center>
        <Box
          name={this.state.name}
          des={this.state.role}
          source={this.state.image}
        />
      </div>
    );
  }
}

export default App;
