    
const repeatString = function(str, num) {
    var a = "";
    if (num < 0) return 'ERROR';
    for (i = 0; i < num; i++) {
        a = a + str;
    }
    return a;
}

module.exports = repeatString