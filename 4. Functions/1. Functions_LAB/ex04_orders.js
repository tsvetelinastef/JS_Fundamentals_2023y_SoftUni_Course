function orders(product, quantity) {
    let res;

    switch (product) {
        case "coffee":
            res = (x) => quantity * 1.5;
            break;
        case "water":
            res = (x) => quantity * 1.00;
            break;
        case "coke":
            res = (x) => quantity * 1.40;
            break;
        case "snacks":
            res = (x) => quantity * 2.00;
            break;
    }

    console.log(res(product, quantity).toFixed(2));
}

orders("water", 5);  // 5.00
orders("coffee", 2);  // 3.00