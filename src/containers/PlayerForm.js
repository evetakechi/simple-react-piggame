
import React from 'react';
import '../styles/PlayerForm.css'



const PlayerForm = ({activePlayer,player,playerClasses,current,scores,winner}) => (
  
                        <div className={playerClasses}>
                          
                          <div className="player-name" >Player{player === 0 ? '1' : '2' }</div>
                          <div className="player-score" >{scores}</div>
                          <div className="winner">{winner ? 'Winner': ' '}</div>
                          <div className="player-current-box">
                              <div className="player-current-label">Current</div>
                              <div className="player-current-score" >{activePlayer === player ?current:0}</div>
                          </div>
                          
                        </div>
     
)

export default PlayerForm