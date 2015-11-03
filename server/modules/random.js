function randomNumber(min, max){
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber;