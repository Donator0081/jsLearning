"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "Ни одного");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastMovieWatched1 = prompt("Один из последний просмотренных фильмов?"),
    movieMark1 = prompt("На сколько оцените его?"),
    lastMovieWatched2 = prompt("Один из последний просмотренных фильмов?"),
    movieMark2 = prompt("На сколько оцените его?");

personalMovieDB.movies[lastMovieWatched1] = movieMark1;
personalMovieDB.movies[lastMovieWatched2] = movieMark2;

console.log(personalMovieDB);