const reverseString = function(userString) {
    var stringArray = userString.split("");
    var revString = "";
    for (i = 0; stringArray.length > 0; i++) {
    revString += stringArray.slice(-1)[0];
    stringArray.pop();
    }
    return revString;
}

module.exports = reverseString