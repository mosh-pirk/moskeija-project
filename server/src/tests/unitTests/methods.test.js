const { ageDateFormatting } = require("../../utils/helper_methods");


describe('formatDate', () => {
    test('formats the date correctly in Finnish format (DD.MM.YYYY)', () => {
        const formattedDate = ageDateFormatting('2001-03-15');
        console.log(formattedDate)
        expect(formattedDate.formatedbDate).toBe('15.03.2001');
        expect(formattedDate.diff).toBe(22);
    });
});