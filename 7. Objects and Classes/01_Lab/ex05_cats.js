function cats(input){
    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let catInfo of input){
        let [name, age] = catInfo.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

/*
    love cats = [];
//TODO:  create class Cat
    for(let i = 0; i < arr.length; i++){
        let catData = arr[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    //TODO: Iterate through cats[] and invoke .meow() using for... of loop 
} 

solve(['Mellow 2', 'Tom 5']);
*/