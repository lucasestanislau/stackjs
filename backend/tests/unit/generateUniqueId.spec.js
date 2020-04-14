const generateUniqueId = require('../../src/utils/gererateUniqueId');

describe('Generate Unique IID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});


/*
describe('Generate Unique IID', () => {
    it('should generate an unique ID', () =>{
        expect(2 + 2).toBe(5);
    });
});
*/