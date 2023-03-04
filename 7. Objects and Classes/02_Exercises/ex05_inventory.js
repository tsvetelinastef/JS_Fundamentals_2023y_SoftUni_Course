function inventory(data) {
    let res = []; //var that is empty array 

    for (let line of data) {  // going trough every line of data
        // destructor , every element => will return one array of 3 elements
        let [name, level, items] = line.split(" / "); // destructing, because I know there will be 3 elements
        // slash is with spaces like: " /  "  because my aim is to "eat" "Isacc / 25 / Apple, GravityGun" this slashes here 
        // so to remain ony the name, level and items ... they will remain like string

        // object heroes
        let heroes = {
            name: name,
            level: Number(level),  
            items: items.split(", ")
        }
        res.push(heroes);  // this object 'heroes' I will add to result 

        // }
        // if I add here console.table(res); ... I will see the table with the names, levels and items 
    }
    // sort takes two heroes and sorts our array, we check this again with console.table(res);
    res.sort((heroesA, heroesB) => heroesA.level - heroesB.level);
    // we now have to print this 
    // for every iteration I receive object
    for (let heroes of res) {
        // Hero: {heroName}
        // level => {heroLevel}
        // Items => {item1}, {item2}, {item3}

        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items.join(", ")}`); // it's array so I can join it

        // heroes.items.join(", ");
        //let items = line.split("/");
        //heroes = {
        //    name: items[0],
        //    level: Number(items[1]),
        //    items: items[2].split(", ")
        // }
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);


/*
solution: 2nd way 

let heroes = [];

  array.forEach((el) => {
    let [name, level, items] = el.split(" / ");
    let obj = { name: name, level: Number(level), items: items };
    heroes.push(obj);
  });

  let sorted = heroes.sort((a, b) => a.level - b.level);

  sorted.forEach((hero) => {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  });
}
*/
