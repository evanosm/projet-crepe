let nbLait = document.getElementById('nbLait')
let nbOeufs = document.getElementById('nbOeufs')
let nbFarine = document.getElementById('nbFarine')
let nbSucre = document.getElementById('nbSucre')
let nbHuile = document.getElementById('nbHuile')
let recipeTitle = document.getElementById('recipe-title')


let lait1 = 15
let oeufs1 = 1
let farine1 = 50
let sucre1 = 1
let huile1 = 1

nnbLait.innerHTML = lait1 + " cl"
nbOeufs.innerHTML = oeufs1
nbFarine.innerHTML = farine1 + " g"
nbSucre.innerHTML = sucre1 + " cuil. à soupe"
nbHuile.innerHTML = huile1 + " cuil. à soupe"   
recipeTitle.innerHTML = "Recette de crêpes pour 1 personne(s) :"

function crepeGenerator3000() {
    let nbCrepe = parseInt(document.getElementById('number').value)
    console.log(nbCrepe, typeof nbCrepe)
    if(isNaN(nbCrepe)) {
        alert("Erreur ! Entrez un nombre !")
        return
    } if(nbCrepe === 1) {
        nbLait.innerHTML = lait1 + " cl"
        nbOeufs.innerHTML = oeufs1
        nbFarine.innerHTML = farine1 + " g"
        nbSucre.innerHTML = sucre1 + " cuil. à soupe"
        nbHuile.innerHTML = huile1 + " cuil. à soupe"
        recipeTitle.innerHTML = "Recette de crêpes pour 1 personne(s) :"


    } else {

        let lait = lait1 * nbCrepe
        let oeufs = oeufs1 * nbCrepe
        let farine = farine1 * nbCrepe
        let sucre = sucre1 * nbCrepe
        let huile = huile1 * nbCrepe

        nbLait.innerHTML = lait + " cl"
        nbOeufs.innerHTML = oeufs
        nbFarine.innerHTML = farine + " g"
        nbSucre.innerHTML = sucre + " cuil. à café"
        nbHuile.innerHTML = huile + " cuil. à café"
        recipeTitle.innerHTML = "Recette de crêpes pour " + String(nbCrepe) + " personne(s) :"
    }
    
}

inputId = document.getElementById('number');
inputId.addEventListener('keydown', function onEvent(event) {
    if (event.key === "Enter") {
        console.log("bababab");
    }
});

function show(idElement) {
    let fiche = document.getElementById(idElement);

    fiche.style.transform = "scale(1) rotate(0deg)"
}

function hide(idElement) {
    let ficheToHide = document.getElementById(idElement);

    ficheToHide.style.transform = "scale(0) rotate(20deg)"
}


