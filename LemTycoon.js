// Variables //
var money = 1500;
var numlemons = 0;
var numsugars = 0;
var numstrawberries = 0;
var numchocolates = 0;
var numherbs = 0
var numlemonades = 0;
var numPinkLemonades = 0;
var numBrownies = 0;
var numMasalas = 0;
var lemprice = 8;
var pinkLemPrice = 12;
var lemonade_cost = 7;
var lemrate = 4000;
var pink_lemrate = 4000;
var brownie_rate = 4000;
var masala_rate = 4000;
var Lemonade_min = 9;
var Lemonade_max = 14;
var pinkLem_min = 13;
var pinkLem_max = 18;
var brownie_min = 12;
var brownie_max = 20;
var masala_min = 26;
var masala_max = 35;
var current_time = "day";
var current_day = 1;
var currentRent = 100;
var totalRent = 0;
var taxToggle = true;
var cookLevel = 1;
var cookRate = 3000;
var totalsales = 0;
var recipes = 1;
var rating = 0;

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
         else if (item === "herb") {
            numherbs ++;
            document.getElementById("numherbs").innerText = numherbs
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

function makeMasala() {
    if ( numlemons >= 2 && numherbs >=1) {
        numlemons -= 2
        numherbs -= 1
        numMasalas += 1
        document.getElementById("numlemons").innerText = numlemons;
        document.getElementById("numherbs").innerText = numherbs;
        document.getElementById("numMasalaLemonades").innerText = numMasalas;
    }
}



//Refreshing prices and generating random numbers
setInterval(refreshprices, 40000)
function refreshprices(){
    products.Lemonade = getRandomNumber(Lemonade_min,Lemonade_max)
    products.Pink_Lemonade = getRandomNumber(pinkLem_min,pinkLem_max)
    products.Brownie = getRandomNumber(brownie_min, brownie_max)
    products.Masala_Lemonade = getRandomNumber(masala_min, masala_max)
    document.getElementById("lemprice").innerText = products.Lemonade
    document.getElementById("pinkLemPrice").innerText = products.Pink_Lemonade
    document.getElementById("brownieprice").innerText = products.Brownie
    document.getElementById("masala_price").innerText = products.Masala_Lemonade



}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  // Sell lemonade auto function //

products = {
    "Pink_Lemonade": 12,
    "Lemonade": 8,
    "Brownie": 10,
    "Masala_Lemonade": 27
}

items = {
    "lemon": 3,
    "sugar": 1,
    "strawberry":4,
    "chocolate": 8,
    "herb": 13,
}
console.log(products)
setInterval(SellLemonade, lemrate)
setInterval(SellPinkLemonade, pink_lemrate)
setInterval(SellBrownie, brownie_rate)
setInterval(SellMasala, masala_rate)
function SellLemonade(){
    if (numlemonades >= 1){
        numlemonades -= 1
        money += products.Lemonade
        console.log(products.Lemonade)
        document.getElementById("money").innerText = money;
        document.getElementById("numlemonades").innerText = numlemonades;
        totalsales ++;

    }
}

function SellPinkLemonade() {
    if(numPinkLemonades >= 1){
        numPinkLemonades -= 1
        money += products.Pink_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numPinkLemonades").innerText = numPinkLemonades;
        totalsales ++;

    }
}

function SellBrownie() {
    if(numBrownies >= 1) {
        numBrownies -= 1
        money += products.Brownie
        document.getElementById("money").innerText = money;
        document.getElementById("numBrownies").innerText = numBrownies;
        totalsales ++;
        
    }
}

function SellMasala() {
    if(numMasalas >= 1) {
        numMasalas -= 1
        money += products.Masala_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numMasalaLemonades").innerText = numMasalas;
        totalsales ++;

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
        masala_min ++;
        masala_max ++;
        document.getElementById("money").innerText = money;
        rating ++;
    }
}

function ad2() {
    if ( money >= 500){
        money -= 500
        lemrate -= 1000
        pink_lemrate -= 1000
        document.getElementById("money").innerText = money;
        console.log(lemrate)
        rating ++;
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
        document.getElementById("masala").style.display = "block";
        money += 10
        document.getElementById("money").innerText = money;
        recipes ++;
        rating ++;

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
        recipes ++;
        rating ++;




    }
}

function masalaUpgrade() {
    if (money >= 500) {
        money -= 500
        document.getElementById("InvHerbs").style.display = "block";
        document.getElementById("masala").style.display = "none";
        document.getElementById("buyHerb").style.display= "block";
        document.getElementById("masala_lemonades").style.display = "block";
        document.getElementById("makeMasala").style.display = "block";
        money += 10
        document.getElementById("money").innerText = money;
        recipes ++
        rating ++;


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


// Rent and Taxes
 setInterval(triggerModal, 400000)
var closeSpan = document.getElementsByClassName("close")[0];

function triggerModal() {
    document.getElementById("popupModal").style.display = "block"
    var taxes = Math.floor(money/5)
    if (taxToggle) {
        money -= taxes
    }
    else {
        taxes = 0
    }
    
    document.getElementById("taxes").innerText = taxes
    if( money <= totalRent+currentRent) {
        var rentpaid = money
        totalRent += currentRent
        rentpaid -= 10;
    }
    else {
        var rentNotPaid = money - currentRent;
        var rentpaid = money - rentNotPaid;
    }
    document.getElementById("rentpaid").innerText = rentpaid;
    document.getElementById("money").innerText = money;
    document.getElementById("taxes").innerText = taxes;
    document.getElementById("totalrent").innerText = totalRent;
    money -= rentpaid
    totalRent -= rentpaid

}

function removeModal() {
    document.getElementById("popupModal").style.display = "none";
}

function taxEvasion() {
    if ( money >= 250) {
        money -= 250;
        taxToggle = false;
        document.getElementById("money").innerText = money;
        document.getElementById("tax_evasion").style.display = "none";
        rating ++;
    }
}



// cook and stock manager upgrades //

function cookUpgrade() {
    if ( money >= 750) {
        money -= 750
        setInterval(cookfood, cookRate)
        document.getElementById("money").innerText = money
        document.getElementById("CookInfo").style.display = "block"
        document.getElementById("cook").style.display = "none";
        rating ++;

    }
}

function cookfood() {
    makelemonade()
    makePinkLemonade()
    makeBrownie()
    makeMasala()
}

function workerMenuOn() {
    document.getElementById("workerModal").style.display = "block"
}

function workerMenuRemove(){
    document.getElementById("workerModal").style.display = "none";
}

function UpCook() {
    if(money >= 200 && cookRate >1000) {
        money -= 200
        cookLevel += 1
        cookRate -= 500
        document.getElementById("money").innerText = money
        document.getElementById("cookLevel").innerText = cookLevel
        document.getElementById("cookrate").innerText = cookRate/1000

    }
}

// Profile Button //

 function profileMenuOn() {
    document.getElementById("profileModal").style.display = "block";
    document.getElementById("pfpMoney").innerText = money;
    document.getElementById("totalsales").innerText = totalsales;
    document.getElementById("recipesUnlocked").innerText = recipes;
    document.getElementById("rating").innerText = rating;
 }

 function pfpRemove() {
    document.getElementById("profileModal").style.display = "none";
 }
