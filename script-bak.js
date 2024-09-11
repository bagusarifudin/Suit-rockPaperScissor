

function getComputerChoice() {
       
    let compChoice=Math.random();
  
    if (Comp < 0.35) {
      compChoice = "gunting";
    } else if (Comp > 0.7) {
      compChoice = "batu";
    } else {
      compChoice = "kertas";
    }
  
    return compChoice;
}
let compChoose = getComputerChoice();

let userChoose = prompt("Masukkan pilihan anda: ").toLowerCase();
// let Comp = getComputerChoice();



// function getPilihanKomputer(Comp) {
//     let compChoice;
  
//     if (Comp < 0.35) {
//       compChoice = "gunting";
//     } else if (Comp > 0.7) {
//       compChoice = "batu";
//     } else {
//       compChoice = "kertas";
//     }
  
//     return compChoice;
//   }






//   function ayoSuit(compChoose, userChoose){ 
//     if(userChoose === compChoose){
//     return " Hasil SERI";
//   }
//   else if ((userChoose === "batu" && compChoose==="gunting") || (userChoose==="gunting" && compChoose==="kertas") | (userChoose==="kertas"&&compChoose==="batu")) {
//     // Kode yang akan dijalankan jika salah satu kondisi benar
//     return "MENANG";
//   }
//   else {
//     return "KALAH";
//   }
// }

  function ayoSuit(compChoose, userChoose){ 
  if ((userChoose === "batu" && compChoose==="gunting") || (userChoose==="gunting" && compChoose==="kertas") | (userChoose==="kertas"&&compChoose==="batu")) {
    // Kode yang akan dijalankan jika salah satu kondisi benar
    return "MENANG";
  }
  else {
    return "KALAH";
  }
}

// let hasilSuit = ayoSuit(compChoose, userChoose);
// alert(`${hasilSuit}`);

let humanScore = 0;
let computerScore = 0;




function playGame(){

  
  for (let i = 0; i < 5; i++) {
    let compChoose = getComputerChoice();

let userChoose = prompt("Masukkan pilihan anda: ").toLowerCase();
let hasilSuit = ayoSuit(compChoose, userChoose);
    
    if( hasilSuit === "MENANG"){
      humanScore++;
    }
    else if( hasilSuit === "KALAH"){
      computerScore++;
    }
     }
}
playGame();





function theWinner(){
  if(humanScore>computerScore){
    return "Kamu MENANG";
  }
  else if(humanScore<computerScore){
    return "Kamu KAlah";
  }
  else{
    return " hasil SERI";
  }
  
}
alert(theWinner());
 


// function playRound(humanChoice, computerChoice) {
//   // your code here!
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);