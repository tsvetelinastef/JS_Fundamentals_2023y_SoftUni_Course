function convertToJSON(fName, lName, hairsColor){
    let person = {
        name : fName,
        lastName : lName,
        hairColor : hairsColor,
    }

    console.log(JSON.stringify(person));
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');