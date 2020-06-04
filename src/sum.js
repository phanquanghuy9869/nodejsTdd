exports.sum = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw Error('Something');
    }
    return (a + b);
}
