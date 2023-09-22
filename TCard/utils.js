document.addEventListener('DOMContentLoaded', function() {
    loadItemHTML();
    loadForm();

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
    
function refreshTextArea() {
    hideSubAdd();
    document.getElementById("textAreaCode").value = document.getElementById('tcardId').outerHTML; 
    showSubAdd();
}

function loadItemHTML() {
    var codeTCard = sessionStorage.getItem("codeTCard");
    sessionStorage.removeItem("codeTCard");
    if (codeTCard) {
        document.getElementById("tcardId").outerHTML = codeTCard;
        document.getElementById("textAreaCode").value = document.getElementById('tcardId').outerHTML; 
        showSubAdd();
    } else {
        document.getElementById("textAreaCode").value = document.getElementById('tcardId').outerHTML;          
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
    document.getElementById("tCardform_Banner").value = document.getElementById("tCard_Banner").src;
    document.getElementById("tCardform_Icone").value = document.getElementById("tCard_Icone").src ;

    document.getElementById("tCardform_PrenomNom").value = document.getElementById("tCard_PrenomNom").innerHTML;
    document.getElementById("tCardform_NomPersonnage").value = document.getElementById("tCard_NomPersonnage").innerHTML;
    document.getElementById("tCardform_NomOeuvre").value = document.getElementById("tCard_NomOeuvre").innerHTML;
  
    document.getElementById("tCardform_Rang").value = document.getElementsByClassName("boîteniveau")[0].classList[1];
    document.getElementById("tCardform_Faction").value = document.getElementById('tcardId').classList[1];
  
    document.getElementById("tCardform_T1-Talent1").value = document.getElementById("tCard_T1-Talent1").innerHTML;
    document.getElementById("tCardform_T1-Talent2").value = document.getElementById("tCard_T1-Talent2").innerHTML;
    document.getElementById("tCardform_T1-Talent3").value = document.getElementById("tCard_T1-Talent3").innerHTML;
    document.getElementById("tCardform_T1-Talent4").value = document.getElementById("tCard_T1-Talent4").innerHTML;
    document.getElementById("tCardform_T1-Talent5").value = document.getElementById("tCard_T1-Talent5").innerHTML;
    document.getElementById("tCardform_T1-Talent6").value = document.getElementById("tCard_T1-Talent6").innerHTML;
    document.getElementById("tCardform_T1-Talent7").value = document.getElementById("tCard_T1-Talent7").innerHTML;
    document.getElementById("tCardform_T1-Talent8").value = document.getElementById("tCard_T1-Talent8").innerHTML;
    document.getElementById("tCardform_T1-Talent9").value = document.getElementById("tCard_T1-Talent9").innerHTML;
    document.getElementById("tCardform_T1-Talent10").value = document.getElementById("tCard_T1-Talent10").innerHTML;

    document.getElementById("tCardform_T2-Talent1").value = document.getElementById("tCard_T2-Talent1").innerHTML;
    document.getElementById("tCardform_T2-Talent2").value = document.getElementById("tCard_T2-Talent2").innerHTML;
    document.getElementById("tCardform_T2-Talent3").value = document.getElementById("tCard_T2-Talent3").innerHTML;
    document.getElementById("tCardform_T2-Talent4").value = document.getElementById("tCard_T2-Talent4").innerHTML;
    document.getElementById("tCardform_T2-Talent5").value = document.getElementById("tCard_T2-Talent5").innerHTML;
    document.getElementById("tCardform_T2-Talent6").value = document.getElementById("tCard_T2-Talent6").innerHTML;
    document.getElementById("tCardform_T2-Talent7").value = document.getElementById("tCard_T2-Talent7").innerHTML;
    document.getElementById("tCardform_T2-Talent8").value = document.getElementById("tCard_T2-Talent8").innerHTML;

    document.getElementById("tCardform_T3-Talent1").value = document.getElementById("tCard_T3-Talent1").innerHTML;
    document.getElementById("tCardform_T3-Talent2").value = document.getElementById("tCard_T3-Talent2").innerHTML;
    document.getElementById("tCardform_T3-Talent3").value = document.getElementById("tCard_T3-Talent3").innerHTML;        
}

function fillTCard() {
    var currentFaction = document.getElementById('tcardId').classList[1];
    var currentRang = document.getElementsByClassName("boîteniveau")[0].classList[1];
    document.getElementById("tCard_Banner").src = document.getElementById("tCardform_Banner").value;
    document.getElementById("tCard_Icone").src = document.getElementById("tCardform_Icone").value;

    document.getElementById("tCard_PrenomNom").innerHTML = document.getElementById("tCardform_PrenomNom").value;
    document.getElementById("tCard_NomPersonnage").innerHTML = document.getElementById("tCardform_NomPersonnage").value;
    document.getElementById("tCard_NomOeuvre").innerHTML = document.getElementById("tCardform_NomOeuvre").value;

  document.getElementById('tcardId').className = document.getElementById('tcardId').className.replace(currentFaction,document.getElementById("tCardform_Faction").value);
document.getElementsByClassName("boîteniveau")[0].className = document.getElementsByClassName("boîteniveau")[0].className.replace(currentRang, document.getElementById("tCardform_Rang").value);
  
    document.getElementById("tCard_T1-Talent1").innerHTML = document.getElementById("tCardform_T1-Talent1").value;
    document.getElementById("tCard_T1-Talent2").innerHTML = document.getElementById("tCardform_T1-Talent2").value;
    document.getElementById("tCard_T1-Talent3").innerHTML = document.getElementById("tCardform_T1-Talent3").value;
    document.getElementById("tCard_T1-Talent4").innerHTML = document.getElementById("tCardform_T1-Talent4").value;
    document.getElementById("tCard_T1-Talent5").innerHTML = document.getElementById("tCardform_T1-Talent5").value;
    document.getElementById("tCard_T1-Talent6").innerHTML = document.getElementById("tCardform_T1-Talent6").value;
    document.getElementById("tCard_T1-Talent7").innerHTML = document.getElementById("tCardform_T1-Talent7").value;
    document.getElementById("tCard_T1-Talent8").innerHTML = document.getElementById("tCardform_T1-Talent8").value;
    document.getElementById("tCard_T1-Talent9").innerHTML = document.getElementById("tCardform_T1-Talent9").value;
    document.getElementById("tCard_T1-Talent10").innerHTML = document.getElementById("tCardform_T1-Talent10").value;

    document.getElementById("tCard_T2-Talent1").innerHTML = document.getElementById("tCardform_T2-Talent1").value;
    document.getElementById("tCard_T2-Talent2").innerHTML = document.getElementById("tCardform_T2-Talent2").value;
    document.getElementById("tCard_T2-Talent3").innerHTML = document.getElementById("tCardform_T2-Talent3").value;
    document.getElementById("tCard_T2-Talent4").innerHTML = document.getElementById("tCardform_T2-Talent4").value;
    document.getElementById("tCard_T2-Talent5").innerHTML = document.getElementById("tCardform_T2-Talent5").value;
    document.getElementById("tCard_T2-Talent6").innerHTML = document.getElementById("tCardform_T2-Talent6").value;
    document.getElementById("tCard_T2-Talent7").innerHTML = document.getElementById("tCardform_T2-Talent7").value;
    document.getElementById("tCard_T2-Talent8").innerHTML = document.getElementById("tCardform_T2-Talent8").value;

    document.getElementById("tCard_T3-Talent1").innerHTML = document.getElementById("tCardform_T3-Talent1").value;
    document.getElementById("tCard_T3-Talent2").innerHTML = document.getElementById("tCardform_T3-Talent2").value;
    document.getElementById("tCard_T3-Talent3").innerHTML = document.getElementById("tCardform_T3-Talent3").value;

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

function addItem() {
    var objets;
    if (document.getElementById('addItemForm_Objet').checked) {
        objets = document.getElementById("objets");
    } else {
        objets = document.getElementById("ctdts");
    }
    
    const divParent = document.createElement('div');
    divParent.className += "item";

    const divIcone = document.createElement('div');
    const divNom = document.createElement('div');
    const divQuantite = document.createElement('div');
    const img = document.createElement('img');
    img.src = addItemForm_Icone.value;

    const buttonSubstract = document.createElement('button');
    buttonSubstract.className += "substract";
    buttonSubstract.textContent = "-";

    const buttonAdd = document.createElement('button');
    buttonAdd.className += "add";
    buttonAdd.textContent = "+";

    /*const buttonDelete = document.createElement('button');
    buttonSubstract.className += "delete";*/

    divNom.textContent = addItemForm_Nom.value;
    divQuantite.textContent = "x"+addItemForm_Quantite.value;

    divIcone.appendChild(img);
    divParent.appendChild(divIcone);
    divParent.appendChild(divNom);
    divParent.appendChild(divQuantite);
    divParent.appendChild(buttonSubstract);
    divParent.appendChild(buttonAdd);

    objets.appendChild(divParent);
    clearForm('addItemForm');
    refreshTextArea();
}

function addOne() {
    quantite = this.previousElementSibling.previousElementSibling;
    console.log(quantite.textContent + " yoo");
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