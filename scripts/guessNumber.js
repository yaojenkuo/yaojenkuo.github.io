function guessNum() {

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

    //Using aCnt to record the number of As and bCnt to record the number of Bs.
    var aCnt = 0;
    var bCnt = 0;

    while (aCnt != 4) {
        //Using input to record the number which entered by the user.
        var input = prompt("Please enter a 4-digit number:");
        //Dummy proof: to prevent user entering wrong numbers
        if (input.length != 4) {
            alert("It seems that you did not enter a 4-digit number!");
            var input = prompt("Please input a number with 4 distinctive digits:");
        } else if (
            input.charAt(0) === input.charAt(1) || input.charAt(0) === input.charAt(2) || input.charAt(0) === input.charAt(3) || input.charAt(1) === input.charAt(2) || input.charAt(1) === input.charAt(3) || input.charAt(2) === input.charAt(3)
        ) {
            alert("It seems that you entered duplicated numbers!");
            var input = prompt("Please input a number with 4 distinctive digits:");
        };
        //Using a for-loop to count how many As
        for (var i = 0; i < 4; i++) {
            if (answer[i] === input.charAt(i)) {
                aCnt += 1;
            };
        };
        //Using a nested for-loop to count how many Bs
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i !== j && answer[i] === input.charAt(j)) {
                    bCnt += 1;
                }
            }
        }
        //To tell the result of guessing
        alert("You entered:" + input + " and you got: " + aCnt + "A" + bCnt + "B");

        //To break loop if the user gets the right number
        if (aCnt === 4) {
            alert("You Got the Right Number!");
            break;
        } else {
            var aCnt = 0;
            var bCnt = 0;
        };
    }
}
