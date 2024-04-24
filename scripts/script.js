function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

function checkInput() {
    var userInput = document.getElementById("binaryInput").value;

    var message = "";
    if (userInput.length !== 5) {
        message ="Input must be 5 characters long.";
        popupTitle = "Answer incorrect."
    }else if(userInput.toUpperCase() != "KOALA"){
        message ="Wrong answer.";
        popupTitle = "Answer incorrect."
    } else {
        message = "Good job! The answer was indeed 'koala'!"
        popupTitle = "Answer correct!"
        locationMessage = "De locatie van je eerste cadeaux kan je vinden in je kamer. Ik zou een ladder gebruiken of je bureaustoel ;)"
        var locationElement = document.getElementById("gift1location");
        locationElement.innerHTML = locationMessage;
    }
    var popup = document.getElementById("popup");
    var title = document.getElementById("popup-title");
    var binaryMessage = document.getElementById("binaryMessage");
    title.innerHTML = popupTitle;
    binaryMessage.innerHTML = message;
    popup.style.display = "block";
}