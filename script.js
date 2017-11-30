var words = prompt("How many bah's?");
var nwords = Number(words);
var maxas = prompt("How many 'a's? can each word have?");
var nmaxas = Number(maxas);
var i = 0;
var randas = 0;
var text = "";

while(i <= nwords){
    text += "b";
    randas = Math.floor((Math.random() * nmaxas) + 1);
    for(var ie = 0;ie <= randas; ie++){
        text = text += "a";
    }
    text += "h ";
    i++;
}
document.getElementById("text").textContent = text;
