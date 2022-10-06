function showEquip() {
    document.getElementById("pics").style.visibility = "visible";
    document.getElementById("text").innerHTML = "";
    document.getElementById("pics").src = "images/equipment.jpg";
}

function showCourt() {
    document.getElementById("pics").style.visibility = "visible";
    document.getElementById("text").innerHTML = "";
    document.getElementById("pics").src = "images/court.png";
}

function showImages() {
    document.getElementById("Info").innerHTML = '<span id="equipment" onclick="showEquip()">Equipment</span> | <span id="court" onclick="showCourt()">Court</span> ';
}

function showTips() {
    document.getElementById("Info").innerHTML = '<span id="kitchen" onclick="showKitchen()">Kitchen</span> | <span id="return" onclick="showReturn()">Return</span>' + 
                                                ' | <span id="serve" onclick="showServe()">Serve</span> ';
}

function showKitchen() {
    document.getElementById("text").innerHTML = "The non-volley zone, commonly referred to as the kitchen, is the seven foot long area that extends away from the net." 
    +" When playing pickleball you want to move up to the kitchen line. It is a big advantage to be up at this line rather than back at the baseline. "
    + " When you are up at this line it makes it easier to attack your opponent and it takes away angles for them to attack you. Players are not" + 
    " allowed to be inside that area and hit the ball out of the air. You are allowed to step in the kitchen and hit a ball that has bounced. " +
    "After stepping into the kitchen to hit a ball that is bounced it is important to quickly step back out of the kitchen to prepare for the next shot.";
    document.getElementById("pics").src = "";
    document.getElementById("pics").style.visibility = "hidden";
}

function showReturn() {
  document.getElementById("text").innerHTML = "In pickleball, when you are returning a serve you have to let the serve bounce before " +
    "you can hit the ball. The serving team must also let your return bounce before they can hit it. Because of this, the returning team " +
    "has an advantage over the  serving team. You want to be the first team to the kitchen so after your return you can move up to the kitchen " +
    "line, while the serving team must still let your return bounce before they can come up to the kitchen line. This makes it important " +
    "to return the ball deep to your opponent's side. You can do this safely because your opponent has to let the ball bounce so it doesn't matter " +
    "how high you hit your return. The deeper you return the ball it also makes it harder for your opponent to get up to the kitchen on their next shot."
  document.getElementById("pics").src = "";
  document.getElementById("pics").style.visibility = "hidden";
}

function showServer() {
    document.getElementById("pics").src = "";
    document.getElementById("pics").style.visibility = "hidden";
}