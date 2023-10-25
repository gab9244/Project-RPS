

function Main(){



    return(
       <> <div className="Main"> 
            <img src="/rock-paper-scissors-master/images/bg-triangle.svg" alt="A triangle" className="triangle" />
            <div className="paperDiv"  onClick={Winner} >
                <img src="/rock-paper-scissors-master/images/icon-paper.svg" alt="Paper symbol" className="paper "  onClick={() => Choice('paper')}/>
                </div>
            <div className="scissorsDiv"  onClick={Winner}>
                <img src="/rock-paper-scissors-master/images/icon-scissors.svg" alt="Scissors symbol" className="scissors" onClick={() => Choice('scissors')}/>
            </div>
            <div className="rockDiv" onClick={Winner}>
                <img src="/rock-paper-scissors-master/images/icon-rock.svg" alt="Rock symbol" className="rock" onClick={() => Choice('rock')}/>
            </div>
        </div>

        <div className="WinnerDiv none">
            <div className="Computer">
            <img src= {`/rock-paper-scissors-master/images/icon-paper.svg`} alt="Paper symbol" className="paper" />
            </div>
            <div className="Player">
            <img  className="rock PlayerChoice" />
            </div>
            <button className="newGame" onClick={startNewGame}>Play Again</button>
        </div>
 </>
    )
        function Winner(){
            const main = document.querySelector('.Main')
            const wDiv = document.querySelector('.WinnerDiv')
            main?.classList.add('none')
            wDiv?.classList.remove('none')

        }
        
       function Choice(choice:string){
        // const img = document.createElement('img');
        // img.className = 'playerChoice scissors'
        // img?.setAttribute('src','')
        const img = document.querySelector('.PlayerChoice')
        const player = document.querySelector('.Player')
        

        if(choice == 'scissors' ) { 
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-scissors.svg`)
            img?.setAttribute('alt', 'scissors')
            player?.setAttribute('class','PlayerScissors Player')
        }
        if(choice == 'paper') {
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-paper.svg`)
            img?.setAttribute('alt', 'paper')
            player?.setAttribute('class','PlayerPaper Player')
        }
        if(choice == 'rock') {
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-rock.svg`)
            img?.setAttribute('alt', 'rock')
            player?.setAttribute('class','PlayerRock Player')
        }
        
       }
    
        function startNewGame(){
            const main = document.querySelector('.Main')
            const wDiv = document.querySelector('.WinnerDiv')
            const img = document.querySelector('.playerChoice')
            img?.setAttribute('src','')
            main?.classList.remove('none')
            wDiv?.classList.add('none')

        }
    


}

export default Main