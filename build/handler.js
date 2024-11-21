"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event, _context) => {
    console.log('This is a Test Lambda Function');
    return {
        statusCode: 200,
        body: "Hello World From Test Lambda Function!"
    };
};
exports.hello = hello;
