function  gramophone(bandName, albumName , songName){
    let time = (bandName.length * albumName.length)  * songName.length/2;

    let rotations = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); // The plate was rotated 167 times.
gramophone('Rammstein', 'Sehnsucht', 'Engel'); // The plate was rotated 81 times.

/*
Lecturer's method , but doesn't work:

 let buff = "";
    for (let row = 0; row < 3; row++) {
        buff += "<div> \n";  // buff += "<div>\n";
        for (let col = 0; col < 3; col++) {
            buff += "\t<span><\\span> \n";
        }
    }

    console.log(buff); 
*/