const sumAll = function(int1, int2) {
    if (typeof(int1, int2) != "number" || int1 < 0 || int2 < 0) {
        return "ERROR"
    }
    let n1, n2;
    if (int2 > int1) {
        n1 = int1;
        n2 = int2;

    } else {
        n1 = int2;
        n2 = int1;
    }
    
    let returnSum = 0;
    for (; n1 <= n2; n1++) {
        returnSum += n1;
    }
    return returnSum;
};

// Do not edit below this line
module.exports = sumAll;
