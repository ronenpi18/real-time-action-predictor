var Validator = require('schema-validator');

var listenerSchema = {
    authKey:{
        type: String,
        required: true,
    },
    warRoom:{
        type: String
    },
    tags:{
        type: Array,
        required: false,

    },
    commonActionsTaken:{
        type: Array,
        required: true
    }
}

var senderSchema = {
    transactionId: {
        type: String,
    },
    warRoom: {
        type:String
    },
    typeOfAction:{
      type: Enumerator('POPUP','Mail','communityInvite')   //TODO check if correct
    },
    suggestions: {
        type: Array,
        default: [],
        required: true
    },
    tags: {
        required:false,
        type:Array
    }
}
var listenerValidator = new Validator(listenerSchema);
var senderValidator = new Validator(senderSchema);

module.exports = {
    listenerValidator:listenerValidator,
    senderValidator:senderValidator
}