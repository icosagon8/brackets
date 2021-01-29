module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map(item => item.join(''));

    let j = 0;
    while (j < brackets.length) {
        if (str.includes(brackets[j])) {
            str = str.replace(brackets[j], '');
            j = 0;
        } else {
            j++;
        }
    }

    return str ? false : true;
}
