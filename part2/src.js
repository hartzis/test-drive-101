var splice = function(arr, start, numToReplace, replace) {



    // var newArray = [];

    // var replaceArray = [];
    // for (var i = 3; i < arguments.length; i++) {
    //     replaceArray = replaceArray.concat(arguments[i])
    // };

    // newArray = (arr.slice(0, start));
    // if (replace !== undefined) {
    //     console.log(arguments);
    //     newArray = newArray.concat(replaceArray);

    // }

    // newArray = newArray.concat(arr.slice(numToReplace + start));




    // return newArray;

    return arr.slice(0, start).concat(Array.prototype.slice.call(arguments, 3)).concat(arr.slice(numToReplace + start));
};