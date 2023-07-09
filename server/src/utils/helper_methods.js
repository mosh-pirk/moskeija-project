
const ageDateFormatting = (year, month, day) => {
    let specificDate;
    const currentDate = new Date();

    if (typeof year === 'string' && !month && !day) {
        specificDate = new Date(year);
    } else {
        specificDate = new Date(year, month - 1, day, 0, 0, 0); // Year, Month (0-11), Day, Hour, Minute, Second
    }
    const dayfin = String(specificDate.getDate()).padStart(2, '0');
    const monthfin = String(specificDate.getMonth() + 1).padStart(2, '0');
    const yearfin = specificDate.getFullYear();

    return {
        bDate: specificDate,
        nowDate: currentDate,
        differential: Math.floor((currentDate - specificDate)  / (365.25 * 24 * 60 * 60 * 1000)),
        formatedbDate: `${dayfin}.${monthfin}.${yearfin}`
    };
};


module.exports = {
    ageDateFormatting
}