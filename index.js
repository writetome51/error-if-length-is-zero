"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_string_1 = require("error-if-not-string");
function errorIfNotStringLongerThanZero(arg) {
    error_if_not_string_1.errorIfNotString(arg);
    if (arg.length === 0)
        throw new Error("Input must be string longer than zero characters");
}
exports.errorIfNotStringLongerThanZero = errorIfNotStringLongerThanZero;
