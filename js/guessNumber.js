//To create an array with 0-9 as its elements
var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//To create an empty array called answer
var answer = [];

//Randomly select 4 different numbers from the array
//To remove the selected number from the array during each loop
for (var i = 0; i < 4; i++) {
    var random = Math.floor((Math.random() * array.length));
    answer[i] = array[random];
    array.splice(random, 1);
}

function guessNum() {

    //Retrieve the value from input box
    var myInput = document.getElementById("myInput").value;
    //Using an if-else if-else to justify the entry
    if (myInput.length < 4) {
        document.getElementById("returnInput").innerHTML += "Your entry was less than 4 digits" + "<br>";
        document.getElementById("returnResult").innerHTML += "Your entry was less than 4 digits" + "<br>";
        document.getElementById("myInput").value = "";
    } else if (isNaN(myInput) === true) {
        document.getElementById("returnInput").innerHTML += "Your entry contained characters instead of numbers" + "<br>";
        document.getElementById("returnResult").innerHTML += "Your entry contained characters instead of numbers" + "<br>";
        document.getElementById("myInput").value = "";
    } else if (myInput.charAt(0) === myInput.charAt(1) || myInput.charAt(0) === myInput.charAt(2) || myInput.charAt(0) === myInput.charAt(3) || myInput.charAt(1) === myInput.charAt(2) || myInput.charAt(1) === myInput.charAt(3) || myInput.charAt(2) === myInput.charAt(3)) {
        document.getElementById("returnInput").innerHTML += "Your entry contained duplicated numbers" + "<br>";
        document.getElementById("returnResult").innerHTML += "Your entry contained duplicated numbers" + "<br>";
        document.getElementById("myInput").value = "";
    } else {
        var aCnt = 0;
        var bCnt = 0;
        //Using a for-loop to count how many As
        for (var i = 0; i < 4; i++) {
            if (answer[i] === myInput.charAt(i)) {
                aCnt += 1;
            };
        };
        //Using a nested for-loop to count how many Bs
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i !== j && answer[i] === myInput.charAt(j)) {
                    bCnt += 1;
                }
            }
        }
        document.getElementById("returnInput").innerHTML += myInput + "<br>";
        document.getElementById("returnResult").innerHTML += aCnt + "A" + bCnt + "B" + "<br>";
        document.getElementById("myInput").value = "";
        if (aCnt === 4) {
            alert("Congratulations, " + myInput + " is the right answer!");
            location.reload();
        };
    };
}

function reloadNum() {
    location.reload();
}

function enterPress() {
    if (window.event.keyCode == 13) {
        guessNum();
        document.getElementById("myInput").value = "";
    };
}
