let listaArray = ["mario@gmail.com", "paolo@gmail.com", "giorgio@gmail.com", "pino@gmail.com"];

document.getElementById("bottone").addEventListener("click",

    function(){
        let emailInviata = document.getElementById("mail").value;
        let controllo = false;

        for(let i in listaArray){

            if(listaArray[i] == emailInviata){

                controllo = true;
            }
        }

        controllo? alert("Email confermata") : alert("Email rifiutata");
    }
)

