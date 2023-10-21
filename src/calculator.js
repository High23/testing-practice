export let calculator = {
    add: function(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') return;
        return number1 + number2
    },
    subtract: function(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') return;
        return number1 - number2
    },
    divide: function(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') return;
        return number1 / number2
    },
    multiply: function(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') return;
        return number1 * number2
    }
}