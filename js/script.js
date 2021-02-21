"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");
while (!numberOfFilms || numberOfFilms.length > 50) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastMovieWatched,
    movieMark;

outer: for (let i = 0; i < 2;) {
    lastMovieWatched = prompt("Один из последний просмотренных фильмов?");
    if (!lastMovieWatched || lastMovieWatched.length > 50) {
        alert("Введите название фильма!");
        continue outer;
    }
    movieMark = prompt("На сколько оцените его?");
    if (!movieMark || movieMark.length > 10) {
        alert("Введите оценку от 1 до 10!");
        continue outer;
    }
    personalMovieDB.movies[lastMovieWatched] = movieMark;
    i++;
}

console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    console.log("Прсмотренно довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}