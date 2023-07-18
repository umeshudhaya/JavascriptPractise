let playgame=confirm("shall we  play the rock ,paper and scissors");
if(playgame){
let playerchoice=prompt("enter your choice rock,paper, scissors");
if(playerchoice){
    let playerone=playerchoice.trim().toLowerCase();
if (playerone === "rock" ||
    playerone === "paper" ||
    playerone === "scissors") {

        let computerchoice=Math.floor(Math.random()*3+1);

         let computer=  computerchoice ===1 ? "rock":
                     computerchoice ===2 ? "paper": "scissors";


    let result= playerone==computer ? "TIE GAME":
      playerone==="rock" && computer==="paper" 
      ? 'playerone: ${playerone}\n computer : ${computer}\n computerwins'
      :playerone==="paper" && computer==="scissors"
      ? 'playerone: ${playerone}\n computer : ${computer}\n computerwins'
      :playerone==="scissors" && computer==="rock"
      ? 'playerone: ${playerone}\n computer : ${computer}\n computerwins'
      : 'playerone: ${playerone}\n computer : ${computer}\n playerwins';

      alert(result);
      let playagain=confirm("playagain!");
      playagain ? location.reload() :alert("thanks for play")

  }
else{
    alert("you didn't  enter rock,paper, scissors");
      } 

    }

    else{
       alert   ("you changed your mindset ")
    }
}
else{
      alert("Thank you try to play next time ");
      
}