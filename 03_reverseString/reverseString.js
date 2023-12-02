const reverseString = function(string) {
    const mapped = [];
    for (let char of string) {
        mapped.push(char)
    }
    return (
        mapped.reverse().join("")
    )
};

// Do not edit below this line
module.exports = reverseString;
