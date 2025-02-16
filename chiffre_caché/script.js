function generer_chiffre(difficulté){
    let max;
    if(difficulté==="facile"){
        max=10;
    }
    else if (difficulté==="intermediaire"){
        max=50;
    }
    else if(difficulté==="difficile"){
        max=100;
    }
    return Math.floor(Math.random()*(max+1));

}

function jouerPartie(){
    let difficulté=prompt("choisir le niveau de difficulté(facile,intermediaire,difficile)");
    if (difficulté === null) {
        alert("Jeu annulé");
        return; 
    }
    while(difficulté.toLowerCase()!=="facile" && difficulté.toLowerCase()!=="intermediaire" && difficulté.toLowerCase()!=="difficile"){
        difficulté=prompt("choisir le niveau de difficulté(facile,intermediaire,difficile)");
        if (difficulté === null) {
            alert("Jeu annulé");
            return; 
        }
    }
    let maxTentatives;
    let maxIntervalles;
    if(difficulté.toLowerCase()==="facile"){
        maxTentatives=5;
        maxIntervalles=10;
    }
    else if(difficulté.toLowerCase()==="intermediaire"){
        maxTentatives=7;
        maxIntervalles=50;
    }
    else if(difficulté.toLowerCase()==="difficile"){
        maxTentatives=10;
        maxIntervalles=100;
    }
    

    let nombre=generer_chiffre(difficulté.toLowerCase());
    let tentativesRestantes=maxTentatives;
    let trouve=false;
    while(tentativesRestantes > 0 && !trouve){
        let tentative=prompt(`Il vous reste ${tentativesRestantes} tentatives \n
        Devinez le chiffre entre 0 et ${maxIntervalles}`);
        if (tentative === null) {
            alert("Jeu annulé");
            return; 
        }
        tentative=parseInt(tentative);
        if(isNaN(tentative) || tentative<0 || tentative > maxIntervalles){
            alert(`Veuillez entrer un nombre valide dans l'intervalle [0,${maxIntervalles}]`);
            continue;
        }
        else if(tentative===nombre){
            alert("Félicitation ! Vous avez trouvé le chiffre !");
            trouve=true;
        }
        else{
            tentativesRestantes--;
            if(tentative>nombre){
                alert("le chiffre est plus petit ! ");
            }
            else{
                alert("le chiffre est plus grand ! ");
            }
            
        }



    }
    if(!trouve){
        alert(`Vous avez épuisé vos tentatives.Le chiffre était ${nombre}.`)
    }
    let rejouer=prompt("Voulez vous rejouer?(oui/non) ");
    if (rejouer === null) {
        alert("Jeu annulé");
        return; 
    }
    else if(rejouer.toLowerCase()==="oui"){
        jouerPartie();
    }
    else{
        alert("Merci d'avoir joué !");
    }


}

jouerPartie();








