// Modules is nothing but a way to help us  organizing our code.
// 2 Keywords Are used to implement modules in our code "IMPORT" & "EXPORT"

export function hello() {
    console.log("Hello! from MODULES");
    
}


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
}


let CarCompany = "Lamborghini"

export {car, CarCompany}


// 2. Default Export 

let def = "Mein default export hunnnnnnnnnnnnnnn!"

export default def


// is used when you have to export one primary value.
// also when you don't want to use brackets in import and in export like we did in named export. LOL
