function convertToObject(jsonString){
   // let myPerson = JSON.stringify(jsonString);
   let myPerson = JSON.parse(jsonString);

    for(let key of Object.keys(myPerson)){
        console.log(`${key}: ${myPerson[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');