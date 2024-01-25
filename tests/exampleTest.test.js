const { testExportedFunction, /* testExportedFunctionWithPem */ } = require('../src/testedComponent');

describe('test throws error and displays line causing issue', () => {

    it('throws an error', () => {

        expect(2 + 2).toBe(4);

        expect(3 + 3).toBe(6);

        expect(2 + 2).toBe(5);

    });

    it('calls external function', async () => {
        await testExportedFunction();
    });

});