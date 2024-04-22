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
    }else if(userInput.toUpperCase() != "KOALA"){
        message ="Wrong answer.";
    } else {
        message = "Good job!"
    }
    var popup = document.getElementById("popup");
    var binaryMessage = document.getElementById("binaryMessage");
    binaryMessage.innerHTML = message;
    popup.style.display = "block";
}