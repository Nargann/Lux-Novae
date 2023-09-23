document.addEventListener('DOMContentLoaded', function() {
    hideSubAdd();
    hideButton()
}, false);

function redirect() {
    //var baseURL= window.location.href.split('https://lux-novae.forumactif.com/')[0];
    var codeTCard = document.getElementById('tcardId').outerHTML;
    sessionStorage.setItem("codeTCard",codeTCard);
    var baseURL= window.location.origin;
    var redirectPage = "/TCard/TCard.html" + "#" + window.location.pathname.substring(1);
    var URL = baseURL + redirectPage;
    console.log(URL);
    console.log(window.location);
    window.location.href = URL; 
}

function redirectToTCardPokemon() {
    //var baseURL= window.location.href.split('https://lux-novae.forumactif.com/')[0];
    var codeTCardPokemon = document.getElementById('tcardId-pokemon').outerHTML;
    sessionStorage.setItem("codeTCardPokemon",codeTCardPokemon);
    var baseURL= window.location.origin;
    var redirectPage = "/TCard-Pokemon/TCard-Pokemon.html" + "#" + window.location.pathname.substring(1);
    var URL = baseURL + redirectPage;
    console.log(URL);
    console.log(window.location);
    window.location.href = URL; 
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
function hideButton() {
try {
var btnTcardHelper = document.getElementById('tcard-helper');
var codeTCard = document.getElementById('tcardId').outerHTML;
if (codeTCard) {
btnTcardHelper.style.visibility = "visible";
btnTcardHelper.style.display = "block";
}
} catch (e) {
btnTcardHelper.style.visibility = "hidden";
btnTcardHelper.style.display = "none";
}
}