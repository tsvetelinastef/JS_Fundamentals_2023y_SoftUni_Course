function dayWeek(number){
    // the corresponding name of the day of the week
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if(number >= 1 && number <= 7){  
        console.log(days[number - 1]);
    } else {
        console.log("Invalid day!");
    }
}

dayWeek(3); // Wednesday
dayWeek(6);  // Saturday
dayWeek(11);  // Invalid day! 

/*
    because you receive for example 3 ... buuttt the 
    array starts from 0 - Monday, 1 - Tuesday, 2 - Wednesday, 3 - Thursday
    3 is actually Thursday ... that's why days[number - 1] = days [2] 
    on the second position is Wednesday      
*/