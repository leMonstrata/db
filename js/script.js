'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимосccтaaь",
        "Скотт Пилигрим против..."
    ]
};

let ads = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    moviesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('[type="text"]'),
    addCheckbox = addForm.querySelector('[type="checkbox"]');




 
    
function adsRemover(adv) {
adv.forEach(item => {
    item.remove();
});
}

function sortFilm(arr) {
    arr.sort();
}

function Changes() {
    genre.textContent = 'Драма';
    poster.style.backgroundImage = 'url("../img/bg.jpg")';
}

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favoriteFilm = addCheckbox.checked;
    
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`
        }
        if (favoriteFilm) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(newFilm);
        sortFilm(movieDB.movies);
        createMovieList(movieDB.movies, moviesList);
    }
    
    event.target.reset();
    });

function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortFilm(films);
    films.forEach((film, i) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
                        `;
    document.querySelectorAll('.delete').forEach((element, i) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });
});
}

adsRemover(ads);
Changes();

createMovieList(movieDB.movies, moviesList);




