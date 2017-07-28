import React, { Component } from 'react';
import './App.css';
import {Player ,ButtonAll} from './containers'




class App extends Component {

  state = {
    scores :[0, 0],
    activePlayer: 0,
    player:[0,1],
    roundScore: 0,
    gamePlaying: true,
    showDice:false,
    dice1:0,
    dice2:0,
    winningScore:100,
    inputValue:''
  }


 
  onRollDice = () =>{
      if(this.state.gamePlaying){
            let d1 = Math.floor(Math.random() * 6)+1;
            let d2 = Math.floor(Math.random() * 6)+1;
            
           if (d1 !== 1 && d2 !== 1){
                //roundScore += d1 + d2;
                this.setState(prevState => {
                       return{ roundScore: prevState.roundScore + d1 + d2,
                        showDice:true,
                        dice1:d1,dice2:d2}
                });
               // this.setState({showDice:true, ,roundScore:roundScore})
            }else {
                this.nextPlayer(this.state.activePlayer)

            }
            
          
      }
   
  }


  
  onHold = () => {
      if(this.state.gamePlaying){
       

        this.setState(prevState =>{
            const { scores } = prevState
            const index = prevState.activePlayer
            
            const score = scores[index]+ prevState.roundScore 
           
                return{                
                    scores:[
                        ...scores.slice(0,index),
                        score ,
                        ...scores.slice(index+1)
                    ] 
                }
        }, () =>{
            this.checkWinner(this.state)
        })
         
        

      }

  }
    checkWinner = (current) => {
        // console.log(current)
        if(current.scores[current.activePlayer] >= current.winningScore){
            //console.log(index)
             this.setState({
                    showDice:false,
                    gamePlaying:false
                
            })
        }else{
            this.nextPlayer(current.activePlayer)
        }

    }
  
  onChangeWinScore=(event) =>{
      let winValue = 100
      let inputValue = null
      event.target.value !== "" ? inputValue = event.target.value : inputValue = winValue
      
    this.setState({winningScore:inputValue})
   // console.log(this.state.winningScore)
  }

 

  nextPlayer = (active) =>{
    //   console.log(this.state)
     let activePlayer = 0;
        active === 0 ? activePlayer = 1 : activePlayer = 0

        this.setState((previousState) => {
            previousState.activePlayer = activePlayer
            previousState.showDice = false
            previousState.dice1 = 0
            previousState.dice2 = 0
            previousState.roundScore = 0
            return previousState;
        });
       //this.setState({activePlayer:activePlayer,showDice:false, dice1:0,dice2:0,roundScore:0})

  }

  onNewgame = () =>{
      this.setState( {scores :[0, 0],
        activePlayer: 0,
        player:[0,1],
        roundScore: 0,
        gamePlaying: true,
        showDice:false,
        dice1:0,
        dice2:0,
        winningScore:100})

        this.valueInput.value = '';

        
  }

  render() {
    return (      
      <div className="container ">
            <div className="row ">
                <div className="col-lg-12 text-xs-center box">
                    <div className="row content">
                        <div className="col-md-5 col-lg-5 col-sm-5 col-xs-5">
                            <Player activePlayer={this.state.activePlayer}
                                winner ={this.state.scores[0] >= this.state.winningScore ? true:false}
                                current={this.state.roundScore}
                                player={this.state.player[0]}
                                scores={this.state.scores[0]}
                                playerClasses = {this.state.activePlayer === this.state.player[0] ? 'player-0-panel col-xs-5 active' : 'player-0-panel col-xs-5'}
                                
                            />
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-5 col-xs-5">
                            <ButtonAll 
                                onNewgame = {this.onNewgame.bind(this)}
                                blankArea = {!this.state.showDice ? 'btn-area bottom' : 'btn-area'}
                                diceImg1 = {this.state.dice1}
                                diceImg2 = {this.state.dice2}
                                showDice={this.state.showDice}
                                onHold  ={this.onHold.bind(this)}
                                onRollDice={this.onRollDice.bind(this)}/>
                                <div className='btn-area '>
                                    <input type="number" id='inputValue' ref={input  => this.valueInput  = input} disabled = {(this.state.scores[0] || this.state.scores[1] !== 0)? "disabled" : ""}  onChange={this.onChangeWinScore.bind(this)} placeholder="Final score" className="final-score"/>
                   
                                </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-5 col-xs-5">
                            <Player activePlayer={this.state.activePlayer}
                                winner ={this.state.scores[1] >= this.state.winningScore ? true:false}
                                current={this.state.roundScore}
                                player={this.state.player[1]}
                                scores={this.state.scores[1]}
                                playerClasses = {this.state.activePlayer === this.state.player[1] ? 'player-0-panel col-xs-5 active' : 'player-0-panel col-xs-5'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }

 
  
}

export default App;
