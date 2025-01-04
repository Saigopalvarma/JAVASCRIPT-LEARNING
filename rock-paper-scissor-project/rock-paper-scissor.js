
let score=JSON.parse(localStorage.getItem('score'))||{Wins:0,Losses:0,Ties:0};
//  if(score===null){
//     score={Wins:0,Losses:0,Ties:0}
//  }
    
  updateScoreElement();
  function playGame(moves){
    const computerMove=Math.random()

    let computerMove1=''
    if(computerMove>=0&&computerMove<1/3){
      computerMove1="Rock"
      
    }
   else if(computerMove>1/3&&computerMove<=2/3){
      computerMove1="Paper"
    }
    else if(computerMove>2/3&&computerMove<1){
      computerMove1="Scissor"
    }
    let yourMove =moves
    let verdict=''
    if(yourMove==="Rock"){
      if(computerMove1==="Rock"){
          verdict="Draw"
          
      }
      else if(computerMove1==="Scissor"){
          verdict="Win"
       
      }
      else if(computerMove1==="Paper"){
          verdict="Loose"
        
      }
    }
    else if(yourMove==="Paper"){
      if(computerMove1==="Rock"){
          verdict="Win"
          
      }
      else if(computerMove1==="Scissor"){
          verdict="Loose"
          
      }
      else if(computerMove1==="Paper"){
          verdict='Draw'
         
      }
    }
    else if(yourMove==="Scissor"){
        if(computerMove1==="Rock"){
            verdict="Loose"
           
        }
        else if(computerMove1==="Scissor"){
            verdict="Draw"
            
        }
        else if(computerMove1==="Paper"){
            verdict='Win'
            
        }
     }
     if(verdict==='Win'){
      score.Wins+=1
     }
     else if(verdict==='Loose'){
      score.Losses+=1
     }
     else if(verdict==='Draw'){
      score.Ties+=1
     }
    localStorage.setItem('score',JSON.stringify(score))
    updateScoreElement();
    updadeVerdictElement(verdict)
    updateMovesElement(yourMove,computerMove1)
    //  alert(`your Move is ${yourMove}, ComputerMove is ${computerMove1},You ${verdict}\nWins : ${score.Wins} Losses : ${score.Losses} Ties : ${score.Ties}`)
  }
  function updateScoreElement(){
      document.querySelector('.js-score').innerHTML=`Wins : ${score.Wins} Losses : ${score.Losses} Ties : ${score.Ties}`
  }
  function updadeVerdictElement(verdict){
    document.querySelector('.js-verdict').innerHTML=`You ${verdict}.`
  
  }
  function updateMovesElement(yourMove,computerMove1){
    document.querySelector('.js-moves').innerHTML=`your move <img src="${yourMove.toLowerCase()}-emoji.png",alt='${yourMove}' height="40px" width="40px">  <img src="${computerMove1.toLowerCase()}-emoji.png" height="40px" width="40px" > computer move`
  }
  function Toggle(){
    const mode=document.querySelector('.Toggle');
    const body=document.querySelector('body');
    
    if(mode.innerHTML==='Light Mode'){
      body.classList.add('toggle-body');
      mode.innerHTML='Dark Mode';
    }
    else{
     
      mode.innerHTML='Light Mode';
      body.classList.remove('toggle-body');
    }
  }
  function Reset(){
    score.Losses=0
    score.Wins=0
    score.Ties=0
    // alert(`Your Score is Reset!`)
    document.querySelector('.js-verdict').innerHTML='Your Score is Reset!'
    document.querySelector('.js-moves').innerHTML=''
    localStorage.removeItem('score')
    localStorage.removeItem('message')
    updateScoreElement();
  }
