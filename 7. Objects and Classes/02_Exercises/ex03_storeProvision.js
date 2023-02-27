function storeProvision(store, orderStore) {
    let myStore = {}

    for (let i = 0; i < store.length; i += 2) {
        let name = store[i];
        let quantity = store[i + 1];
        myStore[name] = Number(quantity);
    }


    for (let i = 0; i < orderStore.length; i += 2) {
        let name = orderStore[i];
        let quantity = Number(orderStore[i + 1]);

        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }
    }

    for (let product of Object.keys(myStore)) {
        // for(let product in store){
        console.log(`${product} -> ${myStore[product]}`);
    }

}

storeProvision(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);

//================================================================
/*
  let myStore = {}

    addProduct(store);
    addProduct(orderStore);

    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }

    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {
            let name = data[i];
            let quantity = Number(data[i + 1]);
            if (myStore.hasOwnProperty(name)) {
                myStore[name] += quantity;
            } else {
                myStore[name] = quantity;
            }
        }
    }
*/

// ===========================================================
/*
 let store = {};

    for (let i = 0; i < currentStocks.length; i += 2) {
        let product = currentStocks[i];
        let quantity = Number(currentStocks[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < forDelivery.length; i += 2) {
        let product = forDelivery[i];
        let quantity = Number(forDelivery[i + 1]);
        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

*/