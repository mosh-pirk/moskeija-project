const { Schema, model } = require("mongoose");
const { stringRequired } = require("../../schema/common");


const CommonData = {
    name: '',
    sureName: ''
}

const ValidCommonData = {
    name: 'Hello',
    sureName: 'Hello Hello'
}

const CommonSchema = new Schema({
    name: stringRequired('nimi on pakollinen kenttä'),
    sureName: stringRequired('sukunimi on pakollinen kenttä')
})


const CommonModel = model('CommonData', CommonSchema);


module.exports = {
    CommonSchema,
    CommonModel,
    CommonData,
    ValidCommonData
}