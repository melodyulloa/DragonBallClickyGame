import React, { Component } from "react";
import DragonBall from "./components/DragonBall";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import balls from "./DragonBall.json";

  

class App extends Component {
  state = {
    balls,
    clickedDragonId: [],
    total: 0,
    goal: 6
  };

  shuffleDragon = id => {
  
    let clickedDragonId = this.state.clickedDragonId;

    if(clickedDragonId.includes(id)){
      this.setState({clickedDragonId: [], total: 0});
      return;

    } else {
      clickedDragonId.push(id)

      if(clickedDragonId.length === 8){
        this.setState({total: 8, clickedDragonId: []});
        console.log('You Win Warrior');
        return;
      }
    
    //set to equal new array..
    this.setState({ balls, clickedDragonId, total: clickedDragonId.length});


  for (let i = balls.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [balls[i], balls[j]] = [balls[j], balls[i]];
  }
  }
  }

  render() {
    return (
      <div className="App">

      <Wrapper>
        <Score total={this.state.total}
        goal={8} />
        
        {this.state.balls.map(dragon => (
          <DragonBall
            shuffleDragon={this.shuffleDragon}
            id={dragon.id}
            key={dragon.id}
            image={dragon.image}
         
          />
        ))}
      </Wrapper>


      
      </div>
    );
  }
}
export default App;
