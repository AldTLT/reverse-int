module.exports = function reverse (n) {
    return n
    .toString()
    .split('')
    .filter(x => Number.isInteger(+x))
    .reverse()
    .join('');
}
