const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

function prev() {
    const human = document.getElementById("human").value;
    const animal = document.getElementById("animal").value;
    const species = document.getElementById("species").value;
    const age = document.getElementById("age").value;
    const num = document.getElementById("num").value;


    const Human = document.getElementById("Human");
    const Animal = document.getElementById("Animal");
    const Species = document.getElementById("Species");
    const Age = document.getElementById("Age");
    const Num = document.getElementById("Num");

    Human.innerHTML = human;
    Animal.innerHTML = animal;
    Species.innerHTML = species;
    Age.innerHTML = age;
    Num.innerHTML = num;

    const canvas = document.getElementById("result");

    canvas.height = canvas.width / 1.616;

    const ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";

    ctx.fillStyle = "#159";
    ctx.rect(0, 0, 300, 56);
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.fillText("Pickleball Membership", 10, 25);
    ctx.font = "16px Arial";
    ctx.fillText("Donor Card", 15, 45);
    const logo = document.getElementById("logo");
    ctx.drawImage(logo, 230, 3, 50, 50);

    ctx.fillStyle = "#000";
    ctx.fillText(Human.innerHTML, 110, 90);
    ctx.fillText(Animal.innerHTML, 110, 110);
    ctx.fillText(Species.innerHTML, 110, 130);
    ctx.fillText(Age.innerHTML, 110, 150);
    ctx.fillText(Num.innerHTML, 110, 170);

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 10, 65, 80, 105);
}

const down = document.getElementById("down");
down.addEventListener("click", function(){

    const canvas = document.getElementById("result");
    
    const a = document.createElement("a");
    a.setAttribute('crossorigin', 'Anonymous');
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
});

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

window.addEventListener('onload', prev, false);

