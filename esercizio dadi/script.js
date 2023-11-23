let primoNum = 0;
let secondoNum = 0
primoDiv = document.getElementById("divUtente");
secondoDiv = document.getElementById("divComputer");

document.getElementById("utenteBtn").addEventListener("click",

    ()=>{
        primoNum = Math.floor(Math.random() * 6) + 1;
        primoDiv.innerHTML = primoNum;

        if(primoNum && secondoNum){

            if(primoNum > secondoNum){
                alert("hai vinto")
            }else if(primoNum < secondoNum){
                alert("hai perso");
            }else{
                alert("pareggio");
            }
        }
    }
    
)

document.getElementById("computerBtn").addEventListener("click",

    ()=>{
      secondoNum = Math.floor(Math.random() * 6) + 1;
      secondoDiv.innerHTML = secondoNum;

      if(primoNum && secondoNum){

        if(primoNum > secondoNum){
            alert("hai vinto")
        }else if(primoNum < secondoNum){
            alert("hai perso");
        }else{
            alert("pareggio");
        }
    }
    }
)

