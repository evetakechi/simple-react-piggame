import React from 'react';
import '../styles/PlayerForm.css'



const ButtonForm = ({onRollDice,showDice,diceImg1,diceImg2,blankArea,onHold,onNewgame}) => (
               <div className='col-lg-12 text-xs-center'>
                   <div className='btn-area'>
                        
                       <button className='btn btn-lg btn-outline-new  btn-block' onClick={ () => onNewgame()}> New game</button>
                   </div>
                  {showDice ? <div className='col-lg-12 text-xs-center offset-md-1 '>
                     
                      <img src={require('../images/dice-' + diceImg1 + '.png')}  alt='dice' className='dice'/>
                      <img src={require('../images/dice-' + diceImg2 + '.png')} alt='dice' className='dice'/>
                   </div> : <div className=' col-lg-12 text-xs-center'></div>}
                   <div className={blankArea}>
                        <button  className='btn btn-lg btn-outline-new btn-block' onClick={() => onRollDice()}> Roll Dice</button>
                        <button className='btn btn-lg btn-outline-new btn-block' onClick={()=> onHold()}> Hold</button>
                   </div>
                   
                   
               </div>
                
     
)

export default ButtonForm