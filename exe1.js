"use strict";
// exports.__esModule = true;
var projectList = [
    { id: 1, name: "abc", image: "http://" },
    { id: 2, name: "abc", image: "http://" },
    { id: 3, name: "abc", image: "http://" }
];
var listProject = function (projects) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n                Data\n            ";
        }).join("");
    }
    else {
        console.log("Khong tim thay the");
    }
};
listProject(projectList);
