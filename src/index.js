module.exports = reverse = (n) => {
    n = Math.abs(n)
    return String(n).split('').reverse().join('');
};
