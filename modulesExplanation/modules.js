"use strict";
// Modules is nothing but a way to help us  organizing our code.
// 2 Keywords Are used to implement modules in our code "IMPORT" & "EXPORT"
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCompany = exports.car = exports.hello = void 0;
function hello() {
    console.log("Hello! from MODULES");
}
exports.hello = hello;
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//_____________________________________________________________________________________
//  There are multiple ways of creating exportable functions, objs, array, variables etc.
// 1. EXPORTING BY NAME
let car = {
    type: "superCar",
    name: "bugatti Chiron"
};
exports.car = car;
let CarCompany = "Lamborghini";
exports.CarCompany = CarCompany;
// 2. Default Export 
let def = "Mein default export hunnnnnnnnnnnnnnn!";
exports.default = def;
// is used when you have to export one primary value.
// also when you don't want to use brackets in import and in export like we did in named export. LOL
