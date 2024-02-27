const express = require('express');
const fs = require('fs');

function loggingMiddleware(req, res, next) {
    const { method, url } = req;
    const dateTime = new Date().toISOString();

    const logMessage = `[${dateTime}] ${method} ${url}`;

    // Log to console
    console.log(logMessage);

    // Log to file
    fs.appendFile('logged_info.txt', logMessage + '\n', (err) => {
        if (err) {
            console.error('Error logging request:', err);
        }
    });
    next();
}


module.exports = {
    loggingMiddleware: loggingMiddleware
};
