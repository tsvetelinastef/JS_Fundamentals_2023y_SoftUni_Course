// Task:  array with strings in the form of JSON's 
// parse the strings into one object... every string array hold terms and description
// if you receive the same term twice, replace it with new definition
// format: `Term: ${term} => Definition: ${definition}`
// sort the dictionary alphabetically 

function makeDictionary(dataAsJSON) {
    //   let myCollection = JSON.parse(dataAsJSON);
    let myCollection = {};  // object
    for(let line of dataAsJSON){
        let obj = JSON.parse(line); // every line - 1 obj
        let keys = Object.keys(obj);  // only 1 value 
        let key = keys[0];  /// the key always have 0 positon 
        myCollection[key] = obj[key];  // obj returns description
    }

    // only keys can be sorted
    let sortKey = Object.keys(myCollection).sort((keyA, keyB) => 
    keyA.localeCompare(keyB));

    for(let key of sortKey){
        console.log(`Term: ${key} => Definition: ${myCollection[key]}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a  tropical shrub."}', '{"Bus":"A large motor vehicle  carrying passengers by road,  typically one serving the public  on a fixed route and for a  fare."}', '{"Boiler":"A fuel-burning  apparatus or container for  heating water."}', '{"Tape":"A narrow strip of  material, typically used to hold  or fasten something."}', '{"Microphone":"An instrument  for converting sound waves into  electrical energy variations  which may then be amplified,  transmitted, or recorded."}'
]);

// output:
/*
    Term: Boiler => Definition: A fuel-burning apparatus or 
        container for heating water.
    Term: Bus => Definition: A large motor 
        vehicle carrying passengers by road, 
        typically one serving the public on a 
        fixed route and for a fare.
    Term: Coffee => Definition: A hot drink 
        made from the roasted and ground seeds 
        (coffee beans) of a tropical shrub.
    Term: Microphone => Definition: An 
        instrument for converting sound waves 
        into electrical energy variations which 
        may then be amplified, transmitted, or recorded.
    Term: Tape => Definition: A narrow 
        strip of material, typically used to 
        hold or fasten something.
*/