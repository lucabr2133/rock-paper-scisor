const computerchoice=()=>{
        let numrandom=Math.floor(Math.random()*3+1)
        if(numrandom==1){
            return "piedra";
        }else if(numrandom==2){
            return "tijera";
        }else {
            return "papel";
        }

}
let userchoice=prompt("rock,papel,tijera");
let userchoicemin=userchoice.toLowerCase();
let winusercont=0;
let winmachinecount=0;
const playgame=(playerSelection,computerSelection)=>{
 

    if(computerSelection==="piedra" ){
        if( playerSelection==="tijera"){
            winmachinecount++
            return "You Lose! Rock beats scissors"
        }else if(playerSelection==="papel"){
            winusercont++
            return "You Win! Rock beats paper"
        }else if(playerSelection==="rock"){
            let computeroptiom=computerchoice();
            return playgame(userchoicemin, computeroptiom)
         
        }
        
       
    }
    if(computerSelection==="tijera" ){
        if( playerSelection==="tijera"){
            let computeroptiom=computerchoice();
            return playgame(userchoicemin, computeroptiom)
        }else if(playerSelection==="papel"){
            winmachinecount++
            return "You lose! scissors beats papel"
        }else if(playerSelection==="rock"){
            winusercont++
            return "You Win! Rock beats scissors"
        }
        
       
    }
    if(computerSelection==="papel" ){
        if( playerSelection==="tijera"){
            winusercont++
            return "You Win! scissors beats papel"
        }else if(playerSelection==="papel"){
            let computeroptiom=computerchoice();
            return playgame(userchoicemin, computeroptiom)
        }else if(playerSelection==="rock"){
            winmachinecount++
            return "You Lose! Paper beats rock"
        }
        
       
    }
    
}

const winOlose=()=>{
    for (let i = 0; i < 5; i++) {
        let computeroptiom=computerchoice();
        console.log(playgame(userchoicemin, computeroptiom),)
        console.log('');
        
    }
    
    if(winmachinecount>winusercont){
        console.log("sorry you lose")
    }else{
        console.log("execelent you a winner")
    }
}
winOlose()
