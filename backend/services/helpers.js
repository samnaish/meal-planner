module.exports = {
    stringToArray: (val, character) => {
        return val.split(character)
        .filter((item) => item.length > 0);
    }
}