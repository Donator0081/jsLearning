"use strict";

let numberOfFilms,
    lastMovieWatched,
    movieMark;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");
    while (!numberOfFilms || isNaN(numberOfFilms) || numberOfFilms < 0) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");
    }
}


start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    outer: for (let i = 0; i < 2;) {
        lastMovieWatched = prompt("Один из последний просмотренных фильмов?");
        if (!lastMovieWatched || lastMovieWatched.length > 50) {
            alert("Введите название фильма!");
            continue outer;
        }
        movieMark = +prompt("На сколько оцените его?");
        if (!movieMark || movieMark > 10) {
            alert("Введите оценку от 1 до 10!");
            continue outer;
        }
        personalMovieDB.movies[lastMovieWatched] = movieMark;
        i++;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Прсмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(false);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
