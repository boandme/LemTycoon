// Variables //

//Individual items 
var money = 50;
var numlemons = 0;
var numsugars = 0;
var numbreads = 0;
var numstrawberries = 0;
var numchocolates = 0;
var numherbs = 0

// Recipes
var numlemonades = 0;
var numCookies = 0;
var numPinkLemonades = 0;
var numBrownies = 0;
var numMasalas = 0;

/// Daily prices & rates
var lemprice = 8;
var pinkLemPrice = 12;
var lemonade_cost = 7;
var lemrate = 4000;
var cookie_rate = 3000
var pink_lemrate = 4000;
var brownie_rate = 4000;
var masala_rate = 4000;
var Lemonade_min = 9;
var Lemonade_max = 14;
var cookie_min = 19;
var cookie_max = 29;
var pinkLem_min = 13;
var pinkLem_max = 18;
var brownie_min = 12;
var brownie_max = 20;
var masala_min = 26;
var masala_max = 35;

/// Time & Taxes // 
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

// Bools //
var pinkLem_bought = false;
var brownie_bought = false;
var masala_bought = false;
var cook_bought = false;
var taxEvasion_bought = false;

// LOCAL STORAGE //
var money = localStorage.getItem("money")
var numlemons = localStorage.getItem("numlemons");
var numsugars = localStorage.getItem("numsugars");
var numbreads = localStorage.getItem("numbreads");
var numstrawberries = localStorage.getItem("numstrawberries");
var numchocolates = localStorage.getItem("numchocolates");
var numherbs = localStorage.getItem("numherbs");
var numlemonades = localStorage.getItem("numlemonades");
var numCookies = localStorage.getItem("numCookies");
var numPinkLemonades = localStorage.getItem("numPinkLemonades");
var numBrownies = localStorage.getItem("numBrownies");
var numMasalas = localStorage.getItem("numMasalas");
//var lemrate = localStorage.getItem("lemrate")
//var pink_lemrate = localStorage.getItem("pink_lemrate")
//var brownie_rate = localStorage.getItem("brownie_rate")
//var masala_rate = localStorage.getItem("masala_rate")

var current_day = localStorage.getItem("current_day")
var cookLevel = localStorage.getItem("cookLevel")
var totalsales = localStorage.getItem("totalsales")
var recipes = localStorage.getItem("recipes")
var rating = localStorage.getItem("rating")

var pinkLem_bought = localStorage.getItem("pinkLem_bought");
var brownie_bought = localStorage.getItem("brownie_bought");
var masala_bought = localStorage.getItem("masala_bought");
var cook_bought = localStorage.getItem("cook_bought");
var taxEvasion_bought = localStorage.getItem("taxEvasion_bought");



console.log(money)
var products = {
    "Pink_Lemonade": 12,
    "Lemonade": 8,
    "Cookie": 21,
    "Brownie": 10,
    "Masala_Lemonade": 27
}

var items = {
    "lemon": 3,
    "sugar": 1,
    "bread": 6,
    "strawberry":4,
    "chocolate": 8,
    "herb": 13,
}

window.addEventListener("load", (event) => {
    
    money = 50;
    //localStorage.clear()
    if (pinkLem_bought == 'true') {
        money = parseInt(money)
        money += 190
        pinkLemUpgrade()
        
    }
    if (brownie_bought == 'true') {
        money = parseInt(money)
        money += 340
        brownieUpgrade()
        
    }
    if (masala_bought == 'true') {
        money = parseInt(money)
        money += 490
        masalaUpgrade()
        
    }
    if (cook_bought == 'true') {
        money = parseInt(money)
        money += 740
        cookUpgrade()
    }
    if (taxEvasion_bought == 'true') {
        money = parseInt(money)
        money += 240
        taxEvasion()
        
    }
   
    
    document.getElementById("money").innerText = money;
    document.getElementById("numstrawberries").innerText = numstrawberries;
    document.getElementById("numlemons").innerText = numlemons;
    document.getElementById("numchocolates").innerText = numchocolates;
    document.getElementById("numherbs").innerText = numherbs;
    document.getElementById("numsugars").innerText = numsugars;
    document.getElementById("numlemonades").innerText = numlemonades;
    document.getElementById("numPinkLemonades").innerText = numPinkLemonades;
    document.getElementById("numBrownies").innerText = numBrownies;
    document.getElementById("numMasalaLemonades").innerText = numMasalas;
    document.getElementById("daynum").innerText = current_day
   

    

 });
// LocalStorage //


function Buy(item) {;
    if( money >= items[item]) {
        money -= items[item]
        localStorage.setItem("money", JSON.stringify(money));
        if (item === "strawberry") {
            numstrawberries ++;
            document.getElementById("numstrawberries").innerText = numstrawberries
            localStorage.setItem("numstrawberries", JSON.stringify(numstrawberries))
        }
        else if (item === "lemon") {
            numlemons ++;
            document.getElementById("numlemons").innerText = numlemons
            localStorage.setItem("numlemons", JSON.stringify(numlemons))
        }
        else if (item === "sugar") {
            numsugars ++;
            document.getElementById("numsugars").innerText = numsugars
            localStorage.setItem("numsugars", JSON.stringify(numsugars))
        }
        else if (item === "bread"){
            numbreads ++;
            document.getElementById("numbreads").innerText = numbreads;
            localStorage.setItem("numbreads", JSON.stringify(numbreads));

        }
         else if (item === "chocolate") {
             numchocolates ++;
             document.getElementById("numchocolates").innerText = numchocolates
             localStorage.setItem("numchocolates", JSON.stringify(numchocolates))
         }
         else if (item === "herb") {
            numherbs ++;
            document.getElementById("numherbs").innerText = numherbs
            localStorage.setItem("numherbs", JSON.stringify(numherbs))
         }
        document.getElementById("money").innerText = money
        localStorage.setItem("money", JSON.stringify(money))
        
        
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
        localStorage.setItem("numlemonades", JSON.stringify(numlemonades))
        localStorage.setItem("numsugars", JSON.stringify(numsugars))
        localStorage.setItem("numlemons", JSON.stringify(numlemons))
    


    }
}
function makeCookie() {
    if (numbreads >= 2 && numsugars >= 2) {
        numbreads -= 2;
        numsugars -=2;
        numCookies += 1;
        document.getElementById("numbreads").innerText = numbreads;
        document.getElementById("numsugars").innerText = numsugars;
        document.getElementById("numCookies").innerText = numCookies;
        localStorage.setItem("numCookies", JSON.stringify(numCookies))
        localStorage.setItem("numsugars", JSON.stringify(numsugars))
        
    


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
        localStorage.setItem("numPinkLemonades", JSON.stringify(numPinkLemonades))
        localStorage.setItem("numstrawberries", JSON.stringify(numstrawberries))
        localStorage.setItem("numlemons", JSON.stringify(numlemons))
        


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
        localStorage.setItem("numBrownies", JSON.stringify(numBrownies))
        localStorage.setItem("numsugars", JSON.stringify(numsugars))
        localStorage.setItem("numchocolates", JSON.stringify(numchocolates))
        localStorage.setItem("money", JSON.stringify(money))

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
        localStorage.setItem("numMasalas", JSON.stringify(numMasalas))
        localStorage.setItem("numherbs", JSON.stringify(numherbs))
        localStorage.setItem("numlemons", JSON.stringify(numlemons))
        localStorage.setItem("money", JSON.stringify(money))
    }
}



//Refreshing prices and generating random numbers
setInterval(refreshprices, 40000)
function refreshprices(){
    products.Lemonade = getRandomNumber(Lemonade_min,Lemonade_max)
    products.Cookie = getRandomNumber(cookie_min, cookie_max)
    products.Pink_Lemonade = getRandomNumber(pinkLem_min,pinkLem_max)
    products.Brownie = getRandomNumber(brownie_min, brownie_max)
    products.Masala_Lemonade = getRandomNumber(masala_min, masala_max)
    document.getElementById("lemprice").innerText = products.Lemonade
    document.getElementById("pinkLemPrice").innerText = products.Pink_Lemonade
    document.getElementById("cookiePrice").innerText = products.Cookie
    document.getElementById("brownieprice").innerText = products.Brownie
    document.getElementById("masala_price").innerText = products.Masala_Lemonade



}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

 

//Auto Sell 
setInterval(SellLemonade, lemrate)
setInterval(SellPinkLemonade, pink_lemrate)
setInterval(SellBrownie, brownie_rate)
setInterval(SellMasala, masala_rate)
setInterval(SellCookie, cookie_rate)
function SellLemonade(){
    if (numlemonades >= 1){
        numlemonades -= 1
        money = parseInt(money)
        money += products.Lemonade
        //console.log(products.Lemonade)
        document.getElementById("money").innerText = money;
        document.getElementById("numlemonades").innerText = numlemonades;
        localStorage.setItem("numlemonades", JSON.stringify(numlemonades))
        localStorage.setItem("money", JSON.stringify(money))
        totalsales ++;

    }
}
function SellCookie(){
    if (numCookies >= 1){
        numCookies -= 1
        money = parseInt(money)
        money += products.Cookie
        document.getElementById("money").innerText = money;
        document.getElementById("numCookies").innerText = numCookies;
        localStorage.setItem("numCookies", JSON.stringify(numCookies))
        localStorage.setItem("money", JSON.stringify(money))
        totalsales ++;

    }
}

function SellPinkLemonade() {
    if(numPinkLemonades >= 1){
        numPinkLemonades -= 1
        money += products.Pink_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numPinkLemonades").innerText = numPinkLemonades;
        localStorage.setItem("numPinkLemonades", JSON.stringify(numPinkLemonades))
        localStorage.setItem("money", JSON.stringify(money))
        totalsales ++;

    }
}

function SellBrownie() {
    if(numBrownies >= 1) {
        numBrownies -= 1
        money += products.Brownie
        document.getElementById("money").innerText = money;
        document.getElementById("numBrownies").innerText = numBrownies;
        localStorage.setItem("numBrownies", JSON.stringify(numBrownies))
        localStorage.setItem("money", JSON.stringify(money))
        totalsales ++;
        
    }
}

function SellMasala() {
    if(numMasalas >= 1) {
        numMasalas -= 1
        money += products.Masala_Lemonade
        document.getElementById("money").innerText = money;
        document.getElementById("numMasalaLemonades").innerText = numMasalas;
        localStorage.setItem("numMasalaLemonades", JSON.stringify(numMasalas))
        localStorage.setItem("money", JSON.stringify(money))
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
        localStorage.setItem("money", JSON.stringify(money))
        pinkLem_bought = true;
        localStorage.setItem("pinkLem_bought", JSON.stringify(pinkLem_bought))
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
        localStorage.setItem("money", JSON.stringify(money))
        brownie_bought = true;
        localStorage.setItem("brownie_bought", JSON.stringify(brownie_bought))




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
        localStorage.setItem("money", JSON.stringify(money))
        masala_bought = true;
        localStorage.setItem("masala_bought", JSON.stringify(masala_bought))


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
    localStorage.setItem("current_day", current_day)
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
        money += 10
        localStorage.setItem("money", JSON.stringify(money))
        taxEvasion_bought = true;
        localStorage.setItem("taxEvasion_bought", JSON.stringify(taxEvasion_bought))
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
        money += 10
        localStorage.setItem("money", JSON.stringify(money))
        cook_bought = true;
        cookRate = parseInt(cookRate)
        localStorage.setItem("cook_bought", JSON.stringify(cook_bought))
        localStorage.setItem("cookLevel", JSON.stringify(cookLevel))

    }
}

function cookfood() {
    makelemonade()
    makePinkLemonade()
    makeBrownie()
    makeMasala()
    makeCookie()
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
        cookRate = parseInt(cookRate)
        cookRate -= 500
        document.getElementById("money").innerText = money
        document.getElementById("cookLevel").innerText = cookLevel
        document.getElementById("cookrate").innerText = cookRate/1000
        localStorage.setItem("cookLevel", JSON.stringify(cookLevel))


    }
}

// Profile Button //

 function profileMenuOn() {
    document.getElementById("profileModal").style.display = "block";
    document.getElementById("pfpMoney").innerText = money;
    document.getElementById("totalsales").innerText = totalsales;
    document.getElementById("recipesUnlocked").innerText = recipes;
    document.getElementById("rating").innerText = rating;
    localStorage.setItem("rating", JSON.stringify(rating))
    localStorage.setItem("recipes", JSON.stringify(recipes))
 }

 function pfpRemove() {
    document.getElementById("profileModal").style.display = "none";
 }



 function  ResetGame() {
    localStorage.clear();
    if(localStorage.length === 0) {
        location.reload()
        money = 500
    }
      
 };