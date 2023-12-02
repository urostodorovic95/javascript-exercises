const removeFromArray = function(array, ...args) {
    function isItemInArgs(item) {
        return (!args.includes(item))
        }
    return (
        array.filter(isItemInArgs)
    )
}

// Do not edit below this line
module.exports = removeFromArray;
