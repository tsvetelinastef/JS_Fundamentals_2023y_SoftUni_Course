function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}

nextDay(2016, 9, 30); // 2020-3-25
nextDay(2020, 3, 24); // 2016-10-1
nextDay(1951, 12, 24); // 1951-12-25
nextDay(1, 1, 1); //  1901-1-2
nextDay(2016, 2, 28);  // 2016-2-29

// date.setDate(date.getDate());
// let dateString = date.toISOString().slice(0, 10);
// console.log(dateString.replace(/\b0/g, ""));
