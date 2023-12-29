"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
function fetchData() {
    var apiUrl = 'http://localhost:3000/posts';
    return new Promise(function (resolve, reject) {
        (0, node_fetch_1.default)(apiUrl)
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            return response.json();
        })
            .then(function (data) {
            resolve(data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
}
// Example usage
fetchData()
    .then(function (data) {
    console.log('Data from API:', data);
})
    .catch(function (error) {
    console.error('Error:', error);
});
