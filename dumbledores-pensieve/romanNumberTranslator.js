
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */



var translateRomanNumeral = function(romanNumeral) {

    // I played before V or X indicates one less, so IV is four and IX is 9
    // ex: XIV --> should be 14
    const toInteger = {
        I: 1,
        V: 5,
        X: 10, 
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    // MCMXCVI
    
    let integer = 0; // 2000
    let prev = null; // 100
    
    for (let i = 0; i < s.length; i++) {
        // if value is greater than prev value and prev exists
        const current = toInteger[s[i]];
        if (prev && current > prev) {
            // subtract prev from integer
            integer -= prev;
            // add current - prev to integer
            integer += (current - prev);
            prev = null;
        } else {
        // else 
            // add current value
            integer += current;
            prev = current;
        }
    }
    
    return integer;
};
