
const ageDateFormatting = (year, month, day) => {
    let specificDate;
    const currentDate = new Date();

    if (typeof year === 'string' && !month && !day) {
        specificDate = new Date(year);
    } else {
        specificDate = new Date(year, month - 1, day, 0, 0, 0);
    }
    const dayfin = String(specificDate.getDate()).padStart(2, '0');
    const monthfin = String(specificDate.getMonth() + 1).padStart(2, '0');
    const yearfin = specificDate.getFullYear();

    return {
        bDate: specificDate,
        nowDate: currentDate,
        diff: Math.floor((currentDate - specificDate)  / (365.25 * 24 * 60 * 60 * 1000)),
        formatedbDate: `${dayfin}.${monthfin}.${yearfin}`
    };
};


const parseErrorMessage = (errorMessage) => {
    const jsonObject = {};
    console.log(errorMessage)

    let index = errorMessage.indexOf('failed:');
    const errorMessageWithoutPrefix = errorMessage.substring(index + 'failed:'.length)

    const regex = /(\w+): ([^,]+)/g;
    let match;
    while ((match = regex.exec(errorMessageWithoutPrefix)) !== null) {
        jsonObject[match[1]] = match[2];
    }

    return jsonObject;
}

module.exports = {
    ageDateFormatting,
    parseErrorMessage
}