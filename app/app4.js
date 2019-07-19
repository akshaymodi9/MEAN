//Error handling

module.exports = {
    divide: function (x, y, divHandler1) {

        try {
            if (y === 0) {
                throw new Error();
            }
            else {
                var result = x / y;
                divHandler1(result)
            }
        }
        catch (err) {
            divHandler1(undefined, err);
        }
    },

    addition: function (x, y, divHandler1) {

        var result = x + y;
        divHandler1(result);
    }

}

