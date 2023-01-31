var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAJDNCKLXFA******", "secretAccessKey": "lLW7LNxCgtt******ZiaL9hkHRDVKjCTDsDJwuQ"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = id,name,surname,dob,gender
12357,John,Doe,11/11/2011,male
12356,Doe,Jane,01/01/2001,female
12354,Jes,Dam,11/12/2013,male
;
    var params = {
        TableName: "users",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();
