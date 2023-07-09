
const { parseErrorMessage } = require("../../utils/helper_methods");
const { CommonModel } = require("../helper/schema");


describe('schema test', () => {
    test('Common string required', async () => {
        try {
            await CommonModel.validate()
        } catch (e) {
            const errors = parseErrorMessage(e.message)
            expect(errors['name']).toEqual('nimi on pakollinen kenttä')

        }


    });
});