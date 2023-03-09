function leapYear(checkyear){
    if((checkyear % 4 ===  0 && checkyear % 100 !== 0) || checkyear % 400 === 0){
        console.log("yes");
    }  else {
        console.log("no");
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);
leapYear(1900); 