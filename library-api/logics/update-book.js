"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const data = JSON.parse(event.body);

  data.id = event.pathParameters.id;
  data.updatedAt = new Date().toISOString();
  if (!data.status || !["Available", "Not Available"].includes(data.status)) {
    return callback({
      statusCode: 400,
      msg: "incorrect or missing field - Status",
    });
  }

  const params = {
    TableName: "books",
    Item: data,
  };

  return dynamoDb.put(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};
