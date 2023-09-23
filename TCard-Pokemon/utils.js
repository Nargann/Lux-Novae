document.addEventListener('DOMContentLoaded', function() {
    loadItemHTML();
    loadForm();

    // Add Event Listener to Poketab to reload Form on click
    var poketabList = document.getElementsByClassName('poketab');
    for (let i = 0; i < poketabList.length; i++) {
        const element = poketabList[i];
        element.setAttribute('onclick', 'reloadPokemon(this)');      
    }


    // Add Event Listener to + and -
    var btnPlus = document.getElementsByClassName('add');
    for (var i = 0; i < btnPlus.length; i++) {
        var element = btnPlus[i];
        element.addEventListener("click", addOne);     
    }
    var btnPlus = document.getElementsByClassName('substract');
    for (var i = 0; i < btnPlus.length; i++) {
        var element = btnPlus[i];
        element.addEventListener("click", substractOne);     
    }       

}, false);

function reloadPokemon (element) {
    console.log("reload");
    document.getElementById(element.getAttribute('for')).checked = true;
    loadForm();
}
    
function refreshTextArea() {
    hideSubAdd();
    document.getElementById("textAreaCode").value = document.getElementById('tcardId-pokemon').outerHTML; 
    showSubAdd();
}

function loadItemHTML() {
    var codeTCard = sessionStorage.getItem("codeTCardPokemon");
    sessionStorage.removeItem("codeTCardPokemon");
    if (codeTCard) {
        document.getElementById("tcardId-pokemon").outerHTML = codeTCard;
        document.getElementById("textAreaCode").value = document.getElementById('tcardId-pokemon').outerHTML; 
        showSubAdd();
    } else {
        document.getElementById("textAreaCode").value = document.getElementById('tcardId-pokemon').outerHTML;          
    }
   
}

function hideSubAdd() {
    var subs = document.getElementsByClassName('substract');
    var adds = document.getElementsByClassName('add');
    for (let i = 0; i < subs.length; i++) {
        const btn = subs[i];
        const btn2 = adds[i];

        btn.style.visibility = 'hidden';
        btn2.style.visibility = 'hidden';
        btn.style.display = 'none';
        btn2.style.display = 'none';
    }
}

function showSubAdd() {
    var subs = document.getElementsByClassName('substract');
    var adds = document.getElementsByClassName('add');
    for (let i = 0; i < subs.length; i++) {
        const btn = subs[i];
        const btn2 = adds[i];

        btn.style.visibility = 'visible';
        btn2.style.visibility = 'visible';
        btn.style.display = 'block';
        btn2.style.display = 'block';
    }
}

function loadForm() {
    setSelectedPokemon();

    let poketabs = document.getElementsByName("poketabs");
    for (let i = 0; i < poketabs.length; i++) {
        const poketab = poketabs[i];
        if (poketab.checked) {
            let poketabcont = poketab.nextElementSibling;
            document.getElementById("tCardform_Pokeball").value = document.getElementsByClassName("tCard_Pokeball")[i].src;
            document.getElementById("tCardform_MiniSprite").value = poketabcont.getElementsByClassName("tCard_MiniSprite")[0].src;
            document.getElementById("tCardform_Sprite").value = poketabcont.getElementsByClassName("tCard_Sprite")[0].src;
            document.getElementById("tCardform_Type1").value = poketabcont.getElementsByClassName("tCard_Type1")[0].src;
            if (poketabcont.getElementsByClassName("tCard_Type2")[0])
                document.getElementById("tCardform_Type2").value = poketabcont.getElementsByClassName("tCard_Type2")[0].src;
            document.getElementById("tCardform_Nom").value = poketabcont.getElementsByClassName("tCard_Nom")[0].textContent;
            document.getElementById("tCardform_Espece").value = poketabcont.getElementsByClassName("tCard_Espece")[0].textContent;
            document.getElementById("tCardform_Obtention").value = poketabcont.getElementsByClassName("tCard_Obtention")[0].textContent;
            document.getElementById("tCardform_Declare").value = poketabcont.getElementsByClassName("tCard_Declare")[0].textContent.toLowerCase();
            document.getElementById("tCardform_Shiny").value = poketabcont.getElementsByClassName("tCard_Shiny")[0].classList.length;
            document.getElementById("tCardform_Rang").value = poketabcont.getElementsByClassName("tCard_Rang")[0].textContent.toLowerCase();
            document.getElementById("tCardform_Genre").value = poketabcont.getElementsByClassName("tCard_Genre")[0].textContent;
            document.getElementById("tCardform_Talent").value = poketabcont.getElementsByClassName("tCard_Talent")[0].textContent;
            document.getElementById("tCardform_TalentDescription").value = poketabcont.getElementsByClassName("tCard_TalentDescription")[0].textContent;
            document.getElementById("tCardform_PokemonDescription").value = poketabcont.getElementsByClassName("tCard_PokemonDescription")[0].textContent;
        }
    }     
}

function getSelectedPokemon() {
    var poketabs = document.getElementsByName('poketabs');
    for (let i = 0; i < poketabs.length; i++) {
        const poketab = poketabs[i];
        if (poketab.checked == true) {
            let pokecont = poketab.nextElementSibling;
            return pokecont;
        }
    } 
    return "Pokecont not found";
}

function setSelectedPokemon() {
    let poketabs = document.getElementsByName("poketabs");
    for (let i = 0; i < poketabs.length; i++) {
        const poketab = poketabs[i];
        if (poketab.checked) {
            let pokecont = poketab.nextElementSibling;
            let nomPokemon = pokecont.getElementsByClassName("tCard_Nom");
            if(nomPokemon.length == 1) {
                document.getElementById("pokemonSelected").textContent = nomPokemon[0].textContent;
            }
        }
    }
}

function fillTCard() {
    let poketabs = document.getElementsByName("poketabs");
    for (let i = 0; i < poketabs.length; i++) {
        const poketab = poketabs[i];
        if (poketab.checked) {
            let poketabcont = poketab.nextElementSibling;
            document.getElementsByClassName("tCard_Pokeball")[i].src = document.getElementById("tCardform_Pokeball").value;
            poketabcont.getElementsByClassName("tCard_MiniSprite")[0].src = document.getElementById("tCardform_MiniSprite").value;
            poketabcont.getElementsByClassName("tCard_Sprite")[0].src = document.getElementById("tCardform_Sprite").value;
            poketabcont.getElementsByClassName("tCard_Type1")[0].src = document.getElementById("tCardform_Type1").value;
            poketabcont.getElementsByClassName("tCard_Type2")[0].src = document.getElementById("tCardform_Type2").value;
            poketabcont.getElementsByClassName("tCard_Nom")[0].textContent = document.getElementById("tCardform_Nom").value;
            poketabcont.getElementsByClassName("tCard_Espece")[0].textContent =  document.getElementById("tCardform_Espece").value;
            poketabcont.getElementsByClassName("tCard_Obtention")[0].textContent = document.getElementById("tCardform_Obtention").value;
            poketabcont.getElementsByClassName("tCard_Declare")[0].textContent = document.getElementById("tCardform_Declare").value;
            poketabcont.getElementsByClassName("tCard_Shiny")[0].classList.length = document.getElementById("tCardform_Shiny").value;
            poketabcont.getElementsByClassName("tCard_Rang")[0].textContent = document.getElementById("tCardform_Rang").value;
            poketabcont.getElementsByClassName("tCard_Genre")[0].textContent = document.getElementById("tCardform_Genre").value;
            poketabcont.getElementsByClassName("tCard_Talent")[0].textContent = document.getElementById("tCardform_Talent").value;
            poketabcont.getElementsByClassName("tCard_TalentDescription")[0].textContent = document.getElementById("tCardform_TalentDescription").value;
            poketabcont.getElementsByClassName("tCard_PokemonDescription")[0].textContent = document.getElementById("tCardform_PokemonDescription").value;
        }
    }   
    refreshTextArea();
}

function copyToClipboard() {
    var copyText = document.getElementById("textAreaCode");

    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Code Copié !";
} 

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function addPokemon() {
    // Ajouter une tab à la div tabs2
    var forLabelTab = "p" + Date.now();
    var tabs2 = document.getElementById('tabs2');


    const labelTab = document.createElement('label');
    labelTab.setAttribute('for', forLabelTab);
    labelTab.className = "poketab evtab";
    labelTab.checked = true;
    labelTab.setAttribute('onclick', 'reloadPokemon(this)');
    labelTab.setAttribute('oncontextmenu', 'deletePokemon(event,this)');

    const imgTab = document.createElement('img');
    imgTab.className = "tCard_Pokeball";
    imgTab.src = "https://www.pokebip.com/pages/icones/balls/bis.png";

    labelTab.appendChild(imgTab);
    tabs2.appendChild(labelTab);


    // Ajouter un input et span à la div pkmonglets
    var pkmonglets = document.getElementById('pkmonglets');
    var spanTemp = document.getElementsByClassName('poketabcont')[0];
    // Create a copy of it
    var cloneSpan = spanTemp.cloneNode(true);
    cloneSpan.getElementsByClassName("tCard_Nom")[0].textContent = "Le " + forLabelTab.toUpperCase();
    var inputTemp = document.createElement('input');
    inputTemp.id = forLabelTab;
    inputTemp.type = "radio";
    inputTemp.name = "poketabs";

    pkmonglets.appendChild(inputTemp);
    pkmonglets.appendChild(cloneSpan);

    document.getElementById(forLabelTab).checked = true;
    loadForm();
    refreshTextArea();
}

function deletePokemon(e, label) {
    e.preventDefault();
    var deleteConfirmed = confirm("Supprimer ce pokemon ?");
    if(deleteConfirmed) {
        var pokemonID = label.getAttribute('for');
        var pokemon = document.getElementById(pokemonID);
        pokemon.remove();
        label.remove();
        console.log("Deleted " + pokemonID);

        if (document.getElementsByClassName('poketab').length > 0) {
            reloadPokemon(document.getElementsByClassName('poketab')[0]);
        }
    }
}

function addAttack() {
    var pokecont = getSelectedPokemon();
    var divPkAtt = pokecont.getElementsByClassName('pk-att')[0];
    // Construction
    const divAtt = document.createElement('div');
    divAtt.className = "att";
    divAtt.setAttribute('oncontextmenu', 'deleteAttack(event,this)');
    const img = document.createElement('img');
    img.src = addAttackForm_Type.value;
    const divNom = document.createElement('div');
    divNom.textContent = addAttackForm_Nom.value;
    const divObtention = document.createElement('div');
    divObtention.textContent = addAttackForm_Obtention.value;
    // Ajout
    divAtt.appendChild(img);
    divAtt.appendChild(divNom);
    divAtt.appendChild(divObtention);
    divPkAtt.appendChild(divAtt);

    clearForm('addAttackForm');
    refreshTextArea();
}

function deleteAttack(event, att) {
    event.preventDefault();
    var deleteConfirmed = confirm("Supprimer cette attaque ?");
    if(deleteConfirmed) {
        att.remove();
        console.log("Deleted attack" + pokemonID);
        refreshTextArea();
    }    
}

function addOne() {
    quantite = this.previousElementSibling.previousElementSibling;
    number = quantite.textContent.split("x")[1];
    number++;
    number = "x"+number;
    quantite.textContent = number;
    refreshTextArea();
}

function substractOne() {
    quantite = this.previousElementSibling;
    number = quantite.textContent.split("x")[1];
    if (number != 1){ 
        number--;
    } else {
        removeItem(quantite.parentElement);
    }

    number = "x"+number;
    quantite.textContent = number;
    refreshTextArea();
}

function removeItem(item){
    item.remove();
}

function clearForm(formId) {
    document.getElementById(formId).reset();
}