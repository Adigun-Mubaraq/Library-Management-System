"use strict";

const createBook = require("./logics/create-book");
const deleteBook = require("./logics/delete-book");
const readAllBooks = require("./logics/read-all-books");
const readOneBook = require("./logics/read-one-book");
const updateBook = require("./logics/update-book");

module.exports.create = (event, context, callback) => {
  createBook(event, (error, result) => {
    const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        msg: "book added successfully",
        result,
      }),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  readAllBooks(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        msg: "list of all books",
        result,
      }),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  readOneBook(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        msg: "book succesfully fetched",
        result,
      }),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  updateBook(event, (error, result) => {
    const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        msg: "book updated successfully",
        result,
      }),
    };

    error
      ? context.succeed(JSON.stringify(error))
      : context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  deleteBook(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        msg: "book deleted successfully",
        result,
      }),
    };

    context.succeed(response);
  });
};
