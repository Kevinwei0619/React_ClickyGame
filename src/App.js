import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumnotron from "./components/Jumbotron";
import ClickyCard from "./components/ClickyCard";
import friends from "./friends.json";
import { Row, Col, Grid } from "react-bootstrap";
// import { uptime } from "os";

// from this https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends Component {
  state = {
    friends,
    navCenter: "",
    // navCenter can be  "You guessed incorrectly!!" or "You guessed correctly!!"
    currentScore: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ friends: shuffle(this.state.friends)});
    // console.log("first shuffle array : ", this.state.friends);
  }

  // handleClickevent = id => {
  //   console.log("what is this ID for:" , id);
  //   this.state.friends.map((item) => {
  //     if(item.id === id){
  //       if(!(item.clicked === false)){
  //           item.clicked = true;


  //       }else{
        
  //       }
  //     }

  //     return item;
  //   }
  //   );
  // };

  render() {
    return (
      <div>
        <Nav
          navCenter={this.state.navCenter}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumnotron />

        <Grid>
          <Row className="show-grid">
            {this.state.friends.map((friend) => (
              <Col xs={6} md={3}>
                <ClickyCard
                  name={friend.name}
                  image={friend.image}
                  key={friend.id}
                  id={friend.id}
                  handleClickevent={this.handleClickevent}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
