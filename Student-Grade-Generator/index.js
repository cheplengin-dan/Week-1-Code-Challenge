// We use Math.random() method to generate a random decimal
// number between 0 and 1. Math.floor() rounds down the number.

let score = Math.floor(Math.random() * 100) + 0;

// we use if else to check for conditions.

function checkScore(score) {
    if ( score >= 79) {
        return 'A';

    } else if ( score >= 60) {
        return 'B';

    } else if ( score >= 59) {
        return 'C';

    } else if ( score >= 40) {
        return 'D';

    }else {
        return 'E';
    }
}
