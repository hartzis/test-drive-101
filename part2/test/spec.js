// describe("Module", function() {
//     it("should do something", function() {
//         expect(true).toEqual(false);
//     });
// });

describe("splice an array and insert if neccassary", function() {

    it("should remove c and d from array", function() {
        expect(splice(['a', 'b', 'c', 'd', 'e'], 2, 2)).toEqual(['a', 'b', 'e']);
    });

    it("should not change original array", function() {
        var a = ['a', 'b', 'c', 'd', 'e'];
        splice(a, 2, 2);
        expect(a).toEqual(['a', 'b', 'c', 'd', 'e']);
    });

    it("should remove 'b' and 'c' and insert 'z' where those were", function() {
        expect(splice(['a', 'b', 'c', 'd', 'e'], 1, 2, 'z')).toEqual(['a', 'z', 'd', 'e']);
    });

    it("should only insert 'z' after 'a'", function() {
        expect(splice(['a', 'b', 'c', 'd', 'e'], 1, 0, 'z')).toEqual(['a', 'z', 'b', 'c', 'd', 'e']);
    });

    it("should insert at the end if start > arr.length", function() {
        expect(splice(['a', 'b', 'c'], 99, 0, 'z')).toEqual(['a', 'b', 'c', 'z']);
    });

    it("should insert at the end if start > arr.length", function() {
        expect(splice(['a', 'b', 'c'], 99, 1, 'z')).toEqual(['a', 'b', 'c', 'z']);
    });

    it("should insert an arbitrary number of values using multiple arguments", function() {
        expect(splice(['a', 'b', 'c'], 99, 1, 'x', 'y', 'z')).toEqual(['a', 'b', 'c', 'x', 'y', 'z']);
    });

    it("should take an array for the 'replace' argument", function() {
        expect(splice(['a', 'b', 'c', 'd', 'e'], 2, 2, ['y', 'z'])).toEqual(['a', 'b', 'y', 'z', 'e']);
    });


})