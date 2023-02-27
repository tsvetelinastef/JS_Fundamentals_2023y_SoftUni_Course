function movies(array) {
    let movies = [];

    array.forEach(element => {
        if (element.includes("addMovie")) {
            let movie = element.replace("addMovie ", "");
            movies.push({ name: movie });
        } else if (element.includes("directedBy")) {
            let [currentMovie, director] = element.split(" directedBy ");

            movies.forEach((obj) => {
                if (obj.name === currentMovie) {
                    obj.director = director;
                }
            });
        } else if (element.includes("onDate")) {
            let [currentMovie, date] = element.split(" onDate ");

            movies.forEach((obj) => {
                if (obj.name === currentMovie) {
                    obj.date = date;
                }
            });
        }
    });

    movies.forEach((obj) => {
        if ("name" in obj && "director" in obj && "date" in obj) {
            console.log(JSON.stringify(obj));
        }
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

movies("---------------");

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);