const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should return an array ', () =>{
       const array = shuffleArray([1,2,3])
       expect(Array.isArray(array)).toBe(true);
    });
    test('should returns an array of the same length as the argument sent in ', () =>{
        const arrayLength = shuffleArray([1,2,3])
        expect(arrayLength.length).toBe(3)
         });
});