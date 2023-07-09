const { ageDateFormatting } = require("../../utils/helper_methods");
const persons = [
    {
        firstName: 'Hasan',
        fatherName: 'Moha',
        grandfatherName: 'Amiir',
        motherName: 'Sumeja',
        sureName: 'Smith',
        birthday: ageDateFormatting('01.02.2003').bDate,
        address: {
            country: '',
            city: '',
            post: '',
            street: '',
        },

        isActive: true
    }
]


module.exports = {
    persons
}