function requiredReading(pagesPerDay, readPerHour, numberDays){
    let hours = pagesPerDay / readPerHour;
    hours /= numberDays;
    console.log(hours);
}

requiredReading(212, 20 , 2); // 5.3 
requiredReading(432, 15 , 4);  // 7.2 