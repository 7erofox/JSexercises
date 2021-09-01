const removeFromArray = function(arr, ...removable) {
    const removed = arr.filter(element => !removable.includes(element));
    return removed;
};

module.exports = removeFromArray;
