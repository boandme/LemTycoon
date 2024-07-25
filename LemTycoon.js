// Variables //
var money = 30;
var numlemons = 0;
var numsugars = 0;
var numstrawberries = 0;
var numlemonades = 0;
var numPinkLemonades = 0;
var lemprice = 8;
var pinkLemPrice = 12;
var lemonade_cost = 7;
var lemrate = 4000;
var pink_lemrate = 4000;
var Lemonade_min = 9;
var Lemonade_max = 14;
var pinkLem_min = 12;
var pinkLem_max = 17;

// Buy grocery items //
function BuyLemon(){
    if (money >= 3) {
        money -= 3
        numlemons +=1
        document.getElementById("numlemons").innerText = numlemons
        document.getElementById("money").innerText = money
    }

}
function BuySugar() {
    if (money >= 1) {
        money -= 1
        numsugars +=1
        document.getElementById("numsugars").innerText = numsugars
        document.getElementById("money").innerText = money
    }
}

function BuyStrawberry(){
    if (money >= 4) {
        money -= 4
        numstrawberries ++;
        document.getElementById("numstrawberries").innerText = numstrawberries
        document.getElementById("money").innerText = money

    }
}

// Lemonade making function //
function makelemonade() {
    if (numlemons >= 2 && numsugars >= 1) {
        numlemons -= 2;
        numsugars -=1;
        numlemonades += 1;
        document.getElementById("numsugars").innerText = numsugars;
        document.getElementById("numlemons").innerText = numlemons;
        document.getElementById("numlemonades").innerText = numlemonades;


    }
}

function makePinkLemonade(){
    if (numlemons >= 2 && numstrawberries >= 1) {
        numlemons -= 2;
        numstrawberries -= 1;
        numPinkLemonades += 1;
        document.getElementById("numstrawberries").innerText = numstrawberries;
        document.getElementById("numlemons").innerText = numlemons;
        document.getElementById("numPinkLemonades").innerText = numPinkLemonades;


    }
}



//Refreshing prices and generating random numbers
setInterval(refreshprices, 20000)
function refreshprices(){
    lemprice = getRandomNumber(Lemonade_min,Lemonade_max)
    drinks.Pink_Lemonade = getRandomNumber(pinkLem_min,pinkLem_max)
    document.getElementById("lemprice").innerText = lemprice
    document.getElementById("pinkLemPrice").innerText = drinks.Pink_Lemonade

}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  // Sell lemonade auto function //

drinks = {
    Pink_Lemonade: 12,
}
console.log(drinks)
setInterval(SellLemonade, lemrate)
setInterval(SellPinkLemonade, pink_lemrate)
function SellLemonade(){
    if (numlemonades >= 1){
        numlemonades -= 1
        money += lemprice
        console.log(lemprice)
        document.getElementById("money").innerText = money;
        document.getElementById("numlemonades").innerText = numlemonades;

    }
}

function SellPinkLemonade() {
    if(numPinkLemonades >= 1){
        numPinkLemonades -= 1
        money += drinks.Pink_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numPinkLemonades").innerText = numPinkLemonades;

    }
}

// Advertisements 1 upgrade
function ad1() {
    if (money >= 100) {
        money -= 100
        Lemonade_min ++;
        Lemonade_max ++;
        document.getElementById("money").innerText = money;
    }
}

// Pink Lemonade Upgrade to unlock pink lemonade //
function pinkLemUpgrade() {
    if (money >= 200) {
        money -= 200
        document.getElementById("InvStrawberries").style.display = "block";
        document.getElementById("pinkLem").style.display = "none";
        document.getElementById("makePinkLem").style.display = "block";
        document.getElementById("pink_lemonades").style.display = "block";
        document.getElementById("buyStraw").style.display= "block";
        money += 10
        document.getElementById("money").innerText = money;

    }
}

