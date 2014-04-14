// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {



    var newArray = [];

    var replaceArray = [];
    for (var i = 3; i < arguments.length; i++) {
        replaceArray = replaceArray.concat(arguments[i])
    };

    newArray = (arr.slice(0, start));
    if (replace !== undefined) {
        console.log(arguments);
        newArray = newArray.concat(replaceArray);

    }

    newArray = newArray.concat(arr.slice(numToReplace + start));




    return newArray;
};