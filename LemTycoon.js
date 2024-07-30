// Variables //
var money = 1000;
var numlemons = 0;
var numsugars = 0;
var numstrawberries = 0;
var numchocolates = 0;
var numlemonades = 0;
var numPinkLemonades = 0;
var numBrownies = 0;
var lemprice = 8;
var pinkLemPrice = 12;
var lemonade_cost = 7;
var lemrate = 4000;
var pink_lemrate = 4000;
var brownie_rate = 4000;
var Lemonade_min = 9;
var Lemonade_max = 14;
var pinkLem_min = 13;
var pinkLem_max = 18;
var brownie_min = 12;
var brownie_max = 20;
var current_time = "day"
var current_day = 1


function Buy(item) {
    if( money >= items[item]) {
        money -= items[item]
        if (item === "strawberry") {
            numstrawberries ++;
            document.getElementById("numstrawberries").innerText = numstrawberries
        }
        else if (item === "lemon") {
            numlemons ++;
            document.getElementById("numlemons").innerText = numlemons
        }
        else if (item === "sugar") {
            numsugars ++;
            document.getElementById("numsugars").innerText = numsugars
        }
         else if (item === "chocolate") {
             numchocolates ++;
             document.getElementById("numchocolates").innerText = numchocolates
         }
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

function makeBrownie() {
    if (numchocolates >= 1 && numsugars >= 1) {
        numchocolates -= 1;
        numsugars -= 1;
        numBrownies += 1;
        document.getElementById("numchocolates").innerText = numchocolates;
        document.getElementById("numsugars").innerText = numsugars;
        document.getElementById("numBrownies").innerText = numBrownies;

    }
}



//Refreshing prices and generating random numbers
setInterval(refreshprices, 40000)
function refreshprices(){
    products.Lemonade = getRandomNumber(Lemonade_min,Lemonade_max)
    products.Pink_Lemonade = getRandomNumber(pinkLem_min,pinkLem_max)
    products.Brownie = getRandomNumber(brownie_min, brownie_max)
    document.getElementById("lemprice").innerText = products.Lemonade
    document.getElementById("pinkLemPrice").innerText = products.Pink_Lemonade
    document.getElementById("brownieprice").innerText = products.Brownie


}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  // Sell lemonade auto function //

products = {
    "Pink_Lemonade": 12,
    "Lemonade": 8,
    "Brownie": 10,
}

items = {
    "lemon": 3,
    "sugar": 1,
    "strawberry":4,
    "chocolate": 8
}
console.log(products)
setInterval(SellLemonade, lemrate)
setInterval(SellPinkLemonade, pink_lemrate)
setInterval(SellBrownie, brownie_rate)
function SellLemonade(){
    if (numlemonades >= 1){
        numlemonades -= 1
        money += products.Lemonade
        console.log(products.Lemonade)
        document.getElementById("money").innerText = money;
        document.getElementById("numlemonades").innerText = numlemonades;

    }
}

function SellPinkLemonade() {
    if(numPinkLemonades >= 1){
        numPinkLemonades -= 1
        money += products.Pink_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numPinkLemonades").innerText = numPinkLemonades;

    }
}

function SellBrownie() {
    if(numBrownies >= 1) {
        numBrownies -= 1
        money += products.Brownie
        document.getElementById("money").innerText = money;
        document.getElementById("numBrownies").innerText = numBrownies;
        
    }
}

// Advertisements 1 upgrade
function ad1() {
    if (money >= 100) {
        money -= 100
        Lemonade_min ++;
        Lemonade_max ++;
        pinkLem_max ++;
        pinkLem_min ++;
        brownie_min ++;
        brownie_max ++;
        document.getElementById("money").innerText = money;
    }
}

function ad2() {
    if ( money >= 500){
        money -= 500
        lemrate -= 1000
        pink_lemrate -= 1000
        document.getElementById("money").innerText = money;
        console.log(lemrate)
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

function brownieUpgrade() {
    if (money >= 350){
        money -= 350
        document.getElementById("InvChocolates").style.display = "block";
        document.getElementById("chocolatier").style.display = "none";
        document.getElementById("buyChoc").style.display= "block";
        document.getElementById("brownies").style.display = "block";
        document.getElementById("makeBrownie").style.display = "block";
        money += 10
        document.getElementById("money").innerText = money;




    }
}

// day and time system //
setInterval(changeTime, 20000)
setInterval(changeDay, 40000)
function changeTime() {
    if (current_time === "day") {
        current_time = "night"
        document.getElementById("nightday").innerText = "🌙"
    }
    else {
        current_time = "day"
        document.getElementById("nightday").innerText = "☀️"
    }
}

function changeDay(){
    current_day ++;
    document.getElementById("daynum").innerText = current_day
}

