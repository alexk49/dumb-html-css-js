function countBs(string) {
    // count all upper case Bs
    // in given string
    var length = string.length;
    var num_Bs = 0;

    for (var x = 0; x < length; x += 1) {
        var letter = string[x];
        if (letter === "B") {
            num_Bs += 1;
        }
        }
    return num_Bs;
}

console.log(countBs("BOB"));

function countChar(string, char_to_count) {
    // count all 
    // in given string
    var length = string.length;
    var num_char = 0;

    for (var x = 0; x < length; x += 1) {
        var letter = string[x];
        if (letter === char_to_count) {
            num_char += 1;
        }
        }
    return num_char;
}

console.log(countChar("kakkerlak", "k"));


