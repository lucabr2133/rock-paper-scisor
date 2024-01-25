const buttonpiedra=document.querySelector(".piedra")
const buttontijera=document.querySelector(".tijera")
const buttonpapel=document.querySelector(".papel")
const div=document.querySelector(".result");




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

let winusercont=0;
let winmachinecount=0;
const playgame=(playerSelection,computerSelection)=>{
    
    
  
    if(computerSelection==="piedra" ){
        if( playerSelection==="tijera"){
            winmachinecount++
            
          
        }else if(playerSelection==="papel"){
            winusercont++

        }else if(playerSelection==="rock"){
            let computeroptiom=computerchoice();
            
         
        }
        
       
    }
    if(computerSelection==="tijera" ){
        if( playerSelection==="tijera"){
            let computeroptiom=computerchoice();
           
        }else if(playerSelection==="papel"){
            winmachinecount++
          
        }else if(playerSelection==="rock"){
            winusercont++
       
          
        }
        
       
    }
    if(computerSelection==="papel" ){
        if( playerSelection==="tijera"){
            winusercont++
         
        
        }else if(playerSelection==="papel"){
            let computeroptiom=computerchoice();
         
        }else if(playerSelection==="rock"){
            winmachinecount++
        
        }
        
      
    }
    div.textContent=`Tu elegiste ${playerSelection} La maquina ${computerchoice()} 
        tu puntuacion ${winusercont} la de la maquina ${winmachinecount}
    `
    if(winusercont>=5){
        div.textContent="you win"
        winmachinecount=0;
        winusercont=0;
    }else if(winmachinecount>=5){
        div.textContent="you lose"
        winmachinecount=0;
        winusercont=0;
    }
   
}

buttonpiedra.addEventListener("click",()=>{
    
    playgame("rock",computerchoice())
})
buttonpapel.addEventListener("click",()=>{

    playgame("papel",computerchoice())
})

buttontijera.addEventListener("click",()=>{

    playgame("tijera",computerchoice())
})
