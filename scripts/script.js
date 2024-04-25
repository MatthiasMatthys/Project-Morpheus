function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

function togglePopup2() {
    var popup = document.getElementById("popup2");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

function checkInput() {
    var userInput = document.getElementById("binaryInput").value;
    var wrongimg1 =  document.getElementById("wrong1");
    var message = "";

    if (userInput.length !== 5) {
        message ="Input must be 5 characters long.";
        popupTitle = "Answer incorrect."
        wrongimg1.style.display = "block"
    }else if(userInput.toUpperCase() != "KOALA"){
        message ="Wrong answer, I am disappointed!";
        popupTitle = "Answer incorrect."
        wrongimg1.style.display = "block"
    } else {
        message = "Good job! The answer was indeed 'koala'!"
        popupTitle = "Answer correct!"
        locationMessage = "De locatie van je eerste cadeaux kan je vinden in je kamer. Ik zou een ladder gebruiken of je bureaustoel ;)"
        var locationElement = document.getElementById("gift1location");
        locationElement.innerHTML = locationMessage;
        var nextPuzzleButton = document.getElementById("navNextPuzzle");
        nextPuzzleButton.style.display = 'block'
        wrongimg1.style.display = "none"
    }
    var popup = document.getElementById("popup");
    var title = document.getElementById("popup-title");
    var binaryMessage = document.getElementById("binaryMessage");
    title.innerHTML = popupTitle;
    binaryMessage.innerHTML = message;
    popup.style.display = "block";
}

function checkInput2(){
    var inputnumber1 = document.getElementById("inputnumber1").value;
    var inputnumber2 = document.getElementById("inputnumber2").value;
    var inputnumber3 = document.getElementById("inputnumber3").value;
    var inputnumber4 = document.getElementById("inputnumber4").value;
    var inputnumber5 = document.getElementById("inputnumber5").value;
    var wrongimg2 =  document.getElementById("wrong2");

    var message = "";
    var popupTitle = "";
    var location = "";

    var title2 = document.getElementById("popup-title2");
    var binaryMessage2 = document.getElementById("binaryMessage2");
    var locationElement2 = document.getElementById("gift2location");
    var locationElement3 = document.getElementById("gift3location");

    if(inputnumber1 == 5 && inputnumber2 == 1 && inputnumber3 == 9 && inputnumber4 == 9 && inputnumber5 == 5){
        message ="Good job again on finding the code!";
        popupTitle = "Combination correct!";
        location = "De locatie van dit cadeaux kan je vinden wanneer je de krant leest op het toilet. OPGELET BIJ HET OPENEN! ER IS ONTPLOFFINGSGEVAAR!";
        wrongimg2.style.display = "none";
        locationElement3.style.display = "block";
    }else{
        message ="Wrong answer. I am disappointed!";
        popupTitle =  inputnumber1 + inputnumber2 + inputnumber3 + inputnumber4 + inputnumber5 + " is incorrect.";
        wrongimg2.style.display = "block";
    }

    title2.innerHTML = popupTitle;
    binaryMessage2.innerHTML = message;
    locationElement2.innerHTML = location;

    togglePopup2();
}

function showNextPuzzle(){
    var puzzle1container = document.getElementById("puzzle1container");
    var puzzle2container = document.getElementById("puzzle2container");

    puzzle1container.style.display = "none";
    puzzle2container.style.display = "block";

    togglePopup();

}
