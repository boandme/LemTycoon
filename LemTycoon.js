var money = 20;
var numlemons = 0;
var numsugars = 0;
var numlemonades = 0;
var lemprice = 5;
document.getElementById("money").innerText = money
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

function makelemonade() {
    if (numlemons >= 2 && numsugars >= 1) {
        numlemons -= 2
        numsugars -=1
        numlemonades += 1
        document.getElementById("numsugars").innerText = numsugars
        document.getElementById("numlemons").innerText = numlemons
        document.getElementById("numlemonades").innerText = numlemonades


    }
}