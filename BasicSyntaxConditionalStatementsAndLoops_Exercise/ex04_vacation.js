function vaction(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    let total = 0;

    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = groupOfPeople * 8.45;
            if (groupOfPeople >= 30) {
                total = price * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            }else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
           

        } else if (dayOfWeek === "Saturday") {
            price = groupOfPeople * 9.80;
            if (groupOfPeople >= 30) {
                total = price * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            

        } else if (dayOfWeek === "Sunday") {
            price = groupOfPeople * 10.46;
            if (groupOfPeople >= 30) {
                total = price * 0.85;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }

        }

    } else if (typeOfGroup === "Business") {
        if (dayOfWeek === "Friday") {
            price = groupOfPeople * 10.90;
            if (groupOfPeople >= 100) {
                total = (groupOfPeople - 10) * 10.90;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
           


        } else if (dayOfWeek === "Saturday") {
            price = groupOfPeople * 15.60;
            if (groupOfPeople >= 100) {
                total = (groupOfPeople - 10) * 15.60;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
           


        } else if (dayOfWeek === "Sunday") {
            price = groupOfPeople * 16;
            if (groupOfPeople >= 100) {
                total = (groupOfPeople - 10) * 16;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            
        }

    } else if (typeOfGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            price = groupOfPeople * 15;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                total = price * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }


        } else if (dayOfWeek === "Saturday") {
            price = groupOfPeople * 20;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                total = price * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }


        } else if (dayOfWeek === "Sunday") {
            price = groupOfPeople * 22.50;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                total = price * 0.95;
                console.log(`Total price: ${total.toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            

        }

    }
}

vaction(30, "Students", "Sunday");  
vaction(40, "Regular", "Saturday");  