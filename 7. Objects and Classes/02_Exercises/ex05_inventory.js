function inventory(data){
   let res = [];

   for(let line of data){
        let [name, level, items] = line.split("/");
        let heroes = {
            name: name,
            level: Number(level),
            items: items.split(", ")
        }
        res.push(heroes);
   }

   
} 

inventory();
