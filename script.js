document.addEventListener('DOMContentLoaded', init);

const movies = [
    {
        id: 1,
        title: 'Дюна: Часть вторая',
        year: 2024,
        genre: ['Фантастика', 'Приключения', 'Драма'],
        rating: 8.8,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/o869RihWTdTyBcEZBjz0izvEsVf.jpg',
        duration: '2ч 46м',
        director: 'Дени Вильнёв',
        actors: 'Тимоти Шаламе, Зендея, Ребекка Фергюсон',
        description: 'Пол Атрейдес объединяется с Чани и Свободными, чтобы отомстить заговорщикам, уничтожившим его семью.'
    },

    {
        id: 2,
        title: 'Оппенгеймер',
        year: 2023,
        genre: ['Драма', 'Исторический', 'Триллер'],
        rating: 8.5,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
        duration: '3ч 00м',
        director: 'Кристофер Нолан',
        actors: 'Киллиан Мерфи, Эмили Блант, Мэтт Дэймон',
        description: 'История Роберта Оппенгеймера и его роли в разработке атомной бомбы.'
    },

    {
        id: 3,
        title: 'Интерстеллар',
        year: 2014,
        genre: ['Фантастика', 'Драма', 'Приключения'],
        rating: 8.7,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
        duration: '2ч 49м',
        director: 'Кристофер Нолан',
        actors: 'Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн',
        description: 'Исследовательская группа отправляется в космос через червоточину, чтобы найти новый дом для человечества.'
    },

    {
        id: 4,
        title: 'Побег из Шоушенка',
        year: 1994,
        genre: ['Драма'],
        rating: 9.3,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        duration: '2ч 22м',
        director: 'Фрэнк Дарабонт',
        actors: 'Тим Роббинс, Морган Фриман',
        description: 'Банкир Энди Дюфрейн осуждён за убийство, которое он не совершал, и попадает в тюрьму Шоушенк.'
    },

    {
        id: 5,
        title: 'Крёстный отец',
        year: 1972,
        genre: ['Драма', 'Криминал'],
        rating: 9.2,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
        duration: '2ч 55м',
        director: 'Фрэнсис Форд Коппола',
        actors: 'Марлон Брандо, Аль Пачино',
        description: 'Стареющий глава мафиозной семьи передаёт дела своему младшему сыну.'
    },

    {
        id: 6,
        title: 'Тёмный рыцарь',
        year: 2008,
        genre: ['Боевик', 'Криминал', 'Драма'],
        rating: 9.0,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
        duration: '2ч 32м',
        director: 'Кристофер Нолан',
        actors: 'Кристиан Бэйл, Хит Леджер',
        description: 'Бэтмен противостоит Джокеру, который сеет хаос в Готэме.'
    },

    {
        id: 7,
        title: 'Начало',
        year: 2010,
        genre: ['Фантастика', 'Триллер', 'Боевик'],
        rating: 8.8,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
        duration: '2ч 28м',
        director: 'Кристофер Нолан',
        actors: 'Леонардо ДиКаприо, Джозеф Гордон-Левитт',
        description: 'Вор проникает в сны людей, чтобы красть их секреты.'
    },

    {
        id: 8,
        title: 'Форрест Гамп',
        year: 1994,
        genre: ['Драма', 'Мелодрама', 'Комедия'],
        rating: 8.9,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg',
        duration: '2ч 22м',
        director: 'Роберт Земекис',
        actors: 'Том Хэнкс, Робин Райт',
        description: 'История жизни простого человека, ставшего свидетелем ключевых событий XX века.'
    },

    {
        id: 9,
        title: 'Матрица',
        year: 1999,
        genre: ['Фантастика', 'Боевик'],
        rating: 8.7,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/l4QHerTSbMI7qgvasqxP36pqjN6.jpg',
        duration: '2ч 16м',
        director: 'Лана и Лилли Вачовски',
        actors: 'Киану Ривз, Лоренс Фишбёрн',
        description: 'Программист узнаёт, что реальность — это симуляция.'
    },

    {
        id: 10,
        title: 'Бойцовский клуб',
        year: 1999,
        genre: ['Драма', 'Триллер'],
        rating: 8.8,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
        duration: '2ч 19м',
        director: 'Дэвид Финчер',
        actors: 'Брэд Питт, Эдвард Нортон',
        description: 'Офисный работник создаёт подпольный бойцовский клуб.'
    },

    {
        id: 11,
        title: 'Игра престолов',
        year: 2011,
        genre: ['Фэнтези', 'Драма', 'Приключения'],
        rating: 9.2,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/suopoADq0k8A1FJ1X9rL9Z9a.jpg',
        duration: '8 сезонов',
        director: 'Дэвид Бениофф, Д.Б. Уайсс',
        actors: 'Эмилия Кларк, Кит Харингтон',
        description: 'Семь королевств борются за Железный трон.'
    },

    {
        id: 12,
        title: 'Шерлок',
        year: 2010,
        genre: ['Детектив', 'Драма', 'Триллер'],
        rating: 9.1,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/2K9fG1J8Y9xW0Q1N7Z8P3.jpg',
        duration: '4 сезона',
        director: 'Пол Макгиган',
        actors: 'Бенедикт Камбербэтч, Мартин Фриман',
        description: 'Современная адаптация приключений Шерлока Холмса.'
    },

    {
        id: 13,
        title: 'Во все тяжкие',
        year: 2008,
        genre: ['Драма', 'Криминал', 'Триллер'],
        rating: 9.5,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg',
        duration: '5 сезонов',
        director: 'Винс Гиллиган',
        actors: 'Брайан Крэнстон, Аарон Пол',
        description: 'Учитель химии начинает новую опасную жизнь.'
    },

    {
        id: 14,
        title: 'Очень странные дела',
        year: 2016,
        genre: ['Фантастика', 'Ужасы', 'Драма'],
        rating: 8.7,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
        duration: '4 сезона',
        director: 'Братья Даффер',
        actors: 'Милли Бобби Браун, Финн Вулфхард',
        description: 'Мальчик исчезает в маленьком городке, где происходят странные события.'
    },

    {
        id: 15,
        title: 'Корона',
        year: 2016,
        genre: ['Драма', 'Исторический'],
        rating: 8.6,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/5RbyH7IvD9J3f9Q7T7a.jpg',
        duration: '6 сезонов',
        director: 'Питер Морган',
        actors: 'Клэр Фой, Оливия Колман',
        description: 'История правления королевы Елизаветы II.'
    },

    {
        id: 16,
        title: 'Мандалорец',
        year: 2019,
        genre: ['Фантастика', 'Боевик', 'Приключения'],
        rating: 8.7,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/9ijMGlJKqcslswWUzTEwScm82Gs.jpg',
        duration: '3 сезона',
        director: 'Джон Фавро',
        actors: 'Педро Паскаль',
        description: 'Охотник за головами путешествует по галактике.'
    },

    {
        id: 17,
        title: 'Джокер',
        year: 2019,
        genre: ['Драма', 'Триллер', 'Криминал'],
        rating: 8.4,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        duration: '2ч 02м',
        director: 'Тодд Филлипс',
        actors: 'Хоакин Феникс',
        description: 'История происхождения культового злодея.'
    },

    {
        id: 18,
        title: 'Паразиты',
        year: 2019,
        genre: ['Драма', 'Комедия', 'Триллер'],
        rating: 8.5,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
        duration: '2ч 12м',
        director: 'Пон Джун-хо',
        actors: 'Сон Кан-хо, Ли Сон-гюн',
        description: 'Бедная семья внедряется в богатый дом.'
    },

    {
        id: 19,
        title: 'Аватар: Путь воды',
        year: 2022,
        genre: ['Фантастика', 'Приключения', 'Боевик'],
        rating: 7.7,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/s16H6tpK2cOKzCTt7Q1bT3dJ.jpg',
        duration: '3ч 12м',
        director: 'Джеймс Кэмерон',
        actors: 'Сэм Уортингтон, Зои Салдана',
        description: 'Семья Салли продолжает бороться за выживание.'
    },

    {
        id: 21,
        title: 'Гладиатор 2',
        year: 2024,
        genre: ['Боевик', 'Драма', 'Исторический'],
        rating: 7.8,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/8Z8d9f4.jpg',
        duration: '2ч 28м',
        director: 'Ридли Скотт',
        actors: 'Пол Мескал, Дензел Вашингтон',
        description: 'Продолжение эпической истории о гладиаторах.'
    },

    {
        id: 22,
        title: 'Дэдпул и Росомаха',
        year: 2024,
        genre: ['Боевик', 'Комедия', 'Фантастика'],
        rating: 7.9,
        type: 'movie',
        poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
        duration: '2ч 08м',
        director: 'Шон Леви',
        actors: 'Райан Рейнольдс, Хью Джекман',
        description: 'Дэдпул объединяется с Росомахой для нового приключения.'
    },

    {
        id: 23,
        title: 'Одни из нас',
        year: 2023,
        genre: ['Драма', 'Триллер', 'Фантастика'],
        rating: 8.8,
        type: 'series',
        poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/9n2v3p3h.jpg',
        duration: '2 сезона',
        director: 'Крейг Мейзин',
        actors: 'Педро Паскаль, Белла Рамзи',
        description: 'Выживание в мире после пандемии грибка.'
    }
];

// ============================================
// ОТЗЫВЫ
// ============================================

let reviews = [];

function loadReviews() {
    try {
        const saved = localStorage.getItem('cinefinder_reviews');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                reviews = parsed;
                return;
            }
        }
    } catch(e) {}
    reviews = [
        { user: 'Алексей', rating: 9, text: 'Невероятный фильм! Атмосфера, игра актёров и визуал — всё на высшем уровне. Обязательно к просмотру.' },
        { user: 'Мария', rating: 8, text: 'Очень понравился сюжет, но немного затянуто в середине. В целом — отличное кино.' },
        { user: 'Дмитрий', rating: 10, text: 'Шедевр! Пересматривал уже 3 раза и каждый раз нахожу что-то новое. Рекомендую всем.' },
        { user: 'Екатерина', rating: 7, text: 'Хороший фильм, но ожидала большего от такого состава. Визуал потрясающий.' },
        { user: 'Иван', rating: 9, text: 'Музыка, операторская работа, сюжет — всё на месте. Один из лучших фильмов года.' }
    ];
    saveReviews();
}

function saveReviews() {
    localStorage.setItem('cinefinder_reviews', JSON.stringify(reviews));
}

// ============================================
// СОСТОЯНИЕ
// ============================================

let currentFilter = { search: '', genre: 'all', year: 'all', rating: 'all', type: 'all', sort: 'popular' };
let favorites = [];
try { favorites = JSON.parse(localStorage.getItem('cinefinder_favorites') || '[]'); if (!Array.isArray(favorites)) favorites = []; } catch(e) { favorites = []; }
let visibleMoviesCount = 8;
const MOVIES_PER_PAGE = 4;
let currentModalMovieId = null;

// ============================================
// DOM
// ============================================

const elements = {
    navLinks: document.getElementById('navLinks'),
    menuToggle: document.getElementById('menuToggle'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    themeToggle: document.getElementById('themeToggle'),
    heroBg: document.getElementById('heroBg'),
    heroTitle: document.getElementById('heroTitle'),
    heroDesc: document.getElementById('heroDesc'),
    watchBtn: document.getElementById('watchBtn'),
    detailsBtn: document.getElementById('detailsBtn'),
    moviesGrid: document.getElementById('moviesGrid'),
    popularGrid: document.getElementById('popularGrid'),
    newGrid: document.getElementById('newGrid'),
    bestGrid: document.getElementById('bestGrid'),
    seriesGrid: document.getElementById('seriesGrid'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    favoritesSection: document.getElementById('favoritesSection'),
    favoritesLink: document.getElementById('favoritesLink'),
    favCount: document.getElementById('favCount'),
    genreFilter: document.getElementById('genreFilter'),
    yearFilter: document.getElementById('yearFilter'),
    ratingFilter: document.getElementById('ratingFilter'),
    typeFilter: document.getElementById('typeFilter'),
    sortBy: document.getElementById('sortBy'),
    resultsCount: document.getElementById('resultsCount'),
    showMoreBtn: document.getElementById('showMoreBtn'),
    emptyMessage: document.getElementById('emptyMessage'),
    movieModal: document.getElementById('movieModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalPoster: document.getElementById('modalPoster'),
    modalTitle: document.getElementById('modalTitle'),
    modalRating: document.getElementById('modalRating'),
    modalYear: document.getElementById('modalYear'),
    modalDuration: document.getElementById('modalDuration'),
    modalGenres: document.getElementById('modalGenres'),
    modalDesc: document.getElementById('modalDesc'),
    modalDirector: document.getElementById('modalDirector'),
    modalActors: document.getElementById('modalActors'),
    modalFavBtn: document.getElementById('modalFavBtn'),
    trailerModal: document.getElementById('trailerModal'),
    trailerOverlay: document.getElementById('trailerOverlay'),
    trailerClose: document.getElementById('trailerClose'),
    trailerFrame: document.getElementById('trailerFrame'),
    trailerBtn: document.getElementById('trailerBtn'),
    backToTop: document.getElementById('backToTop'),
    reviewsGrid: document.getElementById('reviewsGrid'),
    addReviewBtn: document.getElementById('addReviewBtn'),
    reviewModal: document.getElementById('reviewModal'),
    reviewModalOverlay: document.getElementById('reviewModalOverlay'),
    reviewModalClose: document.getElementById('reviewModalClose'),
    reviewForm: document.getElementById('reviewForm'),
    reviewUserName: document.getElementById('reviewUserName'),
    reviewRating: document.getElementById('reviewRating'),
    reviewText: document.getElementById('reviewText'),
    reviewCancelBtn: document.getElementById('reviewCancelBtn')
};

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

function init() {
    loadReviews();
    loadTheme();
    updateFavoritesCount();
    setupHero();
    renderAllSections();
    renderReviews();
    setupEventListeners();
    setupScrollSpy();
}

// ============================================
// ТЕМА
// ============================================

function loadTheme() {
    const savedTheme = localStorage.getItem('cinefinder_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (elements.themeToggle) elements.themeToggle.textContent = '☀️';
    } else {
        if (elements.themeToggle) elements.themeToggle.textContent = '🌙';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    elements.themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('cinefinder_theme', isLight ? 'light' : 'dark');
}

// ============================================
// HERO
// ============================================

function setupHero() {
    const heroMovie = movies.find(m => m.id === 1);
    if (!heroMovie) return;
    if (elements.heroBg) elements.heroBg.style.backgroundImage = `url("${heroMovie.backdrop}")`;
    if (elements.heroTitle) elements.heroTitle.textContent = heroMovie.title;
    if (elements.heroDesc) elements.heroDesc.textContent = heroMovie.description;
    const heroMeta = document.querySelector('.hero-meta');
    if (heroMeta) {
        heroMeta.innerHTML = `<span class="rating">⭐ ${heroMovie.rating}</span><span>${heroMovie.year}</span><span>${heroMovie.genre.join(', ')}</span>`;
    }
}

// ============================================
// КАРТОЧКА ФИЛЬМА
// ============================================

function createMovieCard(movie, index = 0) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.movieId = movie.id;
    card.style.animationDelay = `${index * 0.05}s`;

    const isFavorite = favorites.includes(movie.id);
    const typeLabel = movie.type === 'series' ? 'Сериал' : 'Фильм';

    card.innerHTML = `
        <button class="fav-btn ${isFavorite ? 'active' : ''}" data-id="${movie.id}" title="Добавить в избранное" type="button">${isFavorite ? '❤️' : '🤍'}</button>

        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">

            <div class="movie-card-top">
                <span class="movie-badge rating-badge">⭐ ${movie.rating}</span>
                <span class="movie-badge type-badge">${typeLabel}</span>
            </div>

            <div class="movie-card-play"></div>

            <div class="movie-card-info">
                <div class="movie-card-title">${movie.title}</div>
                <div class="movie-card-meta">
                    <span>${movie.year}</span>
                    <span class="dot"></span>
                    <span class="genre">${movie.genre[0]}</span>
                </div>
            </div>
        </div>
    `;

    const favBtn = card.querySelector('.fav-btn');
    if (favBtn) {
        favBtn.addEventListener('click', function(e) {
            gtag('event', '');
            e.stopPropagation();
            toggleFavorite(movie.id);
        });
    }

    const playBtn = card.querySelector('.movie-card-play');
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            gtag('event', 'play-btn-clicked');
            e.stopPropagation();
            watchMovie(movie.id);
        });
    }

    card.addEventListener('click', function() { openModal(movie.id); });
    return card;
}

// ============================================
// РЕНДЕР СЕКЦИЙ
// ============================================

function renderSection(container, moviesList) {
    if (!container) return;
    container.innerHTML = '';
    moviesList.forEach((movie, index) => {
        container.appendChild(createMovieCard(movie, index));
    });
}

function renderAllSections() {
    const allMovies = movies.filter(m => m.type === 'movie');
    renderSection(elements.moviesGrid, allMovies);

    const popular = [...movies].filter(m => m.type === 'movie').sort((a,b) => b.rating - a.rating).slice(0, visibleMoviesCount);
    renderSection(elements.popularGrid, popular);

    const newMovies = [...movies].sort((a,b) => b.year - a.year).slice(0, 8);
    renderSection(elements.newGrid, newMovies);

    const best = [...movies].sort((a,b) => b.rating - a.rating).slice(0, 8);
    renderSection(elements.bestGrid, best);

    const series = movies.filter(m => m.type === 'series').slice(0, 8);
    renderSection(elements.seriesGrid, series);

    renderFavorites();
    updateResultsCount();
}

// ============================================
// ОТЗЫВЫ
// ============================================

function renderReviews() {
    if (!elements.reviewsGrid) return;
    if (reviews.length === 0) {
        elements.reviewsGrid.innerHTML = `<div class="empty-message" style="display:flex;padding:30px 20px;"><p style="color:var(--text-muted);font-size:1.1rem;">Пока нет отзывов. Будьте первым! ✍️</p></div>`;
        return;
    }
    elements.reviewsGrid.innerHTML = reviews.map((r) => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${r.user[0]}</div>
                <div class="review-user">${r.user} <span>• зритель</span></div>
                <div class="review-rating">⭐ ${r.rating}/10</div>
            </div>
            <div class="review-text">${r.text}</div>
        </div>
    `).join('');
}

function addReview(user, rating, text) {
    reviews.push({ user: user.trim(), rating: Number(rating), text: text.trim() });
    saveReviews();
    renderReviews();
}

// ============================================
// ИЗБРАННОЕ
// ============================================

function renderFavorites() {
    if (!elements.favoritesSection) return;
    const favMovies = movies.filter(m => favorites.includes(m.id));
    if (favMovies.length > 0) {
        elements.favoritesSection.style.display = 'block';
        renderSection(elements.favoritesGrid, favMovies);
    } else {
        elements.favoritesSection.style.display = 'none';
        if (elements.favoritesGrid) elements.favoritesGrid.innerHTML = '';
    }
}

function toggleFavorite(movieId) {
    const index = favorites.indexOf(movieId);
    if (index !== -1) favorites.splice(index, 1);
    else favorites.push(movieId);
    localStorage.setItem('cinefinder_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderAllSections();
    applyFiltersAndSearch();
    if (currentModalMovieId === movieId) updateModalFavButton(movieId);
}

function updateFavoritesCount() {
    if (elements.favCount) elements.favCount.textContent = favorites.length;
}

function updateModalFavButton(movieId) {
    if (!elements.modalFavBtn) return;
    const isFavorite = favorites.includes(movieId);
    elements.modalFavBtn.textContent = isFavorite ? '❤️ В избранном' : '🤍 В избранное';
    elements.modalFavBtn.classList.toggle('active', isFavorite);
}

// ============================================
// ФИЛЬТРЫ
// ============================================

function getFilteredMovies() {
    let filtered = [...movies];
    if (currentFilter.search.trim()) {
        const searchTerm = currentFilter.search.toLowerCase().trim();
        filtered = filtered.filter(m => m.title.toLowerCase().includes(searchTerm) || m.genre.some(g => g.toLowerCase().includes(searchTerm)));
    }
    if (currentFilter.genre !== 'all') filtered = filtered.filter(m => m.genre.includes(currentFilter.genre));
    if (currentFilter.year !== 'all') filtered = filtered.filter(m => m.year === Number(currentFilter.year));
    if (currentFilter.rating !== 'all') filtered = filtered.filter(m => m.rating >= Number(currentFilter.rating));
    if (currentFilter.type !== 'all') filtered = filtered.filter(m => m.type === currentFilter.type);
    if (currentFilter.sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    else if (currentFilter.sort === 'year') filtered.sort((a,b) => b.year - a.year);
    else filtered.sort((a,b) => b.rating - a.rating);
    return filtered;
}

function applyFiltersAndSearch() {
    const filtered = getFilteredMovies();
    const isFilterActive = Boolean(currentFilter.search.trim()) || currentFilter.genre !== 'all' || currentFilter.year !== 'all' || currentFilter.rating !== 'all' || currentFilter.type !== 'all';

    renderSection(elements.moviesGrid, filtered);
    renderSection(elements.popularGrid, filtered.slice(0, visibleMoviesCount));

    const newSection = document.getElementById('new');
    const bestSection = document.getElementById('best');
    const seriesSection = document.getElementById('series');
    if (newSection) newSection.style.display = isFilterActive ? 'none' : 'block';
    if (bestSection) bestSection.style.display = isFilterActive ? 'none' : 'block';
    if (seriesSection) seriesSection.style.display = isFilterActive ? 'none' : 'block';

    const moviesSection = document.getElementById('movies');
    if (moviesSection) moviesSection.style.display = 'block';
    const popularSection = document.getElementById('popular');
    if (popularSection) popularSection.style.display = 'block';

    if (elements.emptyMessage) {
        elements.emptyMessage.style.display = filtered.length === 0 ? 'flex' : 'none';
    }
    updateResultsCount(filtered.length);
    if (elements.showMoreBtn) {
        elements.showMoreBtn.style.display = filtered.length > visibleMoviesCount ? 'block' : 'none';
    }
}

function updateResultsCount(count) {
    if (count === undefined) count = getFilteredMovies().length;
    if (elements.resultsCount) elements.resultsCount.textContent = `Показано: ${count} фильмов/сериалов`;
}

// ============================================
// МОДАЛЬНОЕ ОКНО ФИЛЬМА
// ============================================

function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    currentModalMovieId = movieId;
    elements.modalPoster.src = movie.poster;
    elements.modalPoster.alt = movie.title;
    elements.modalTitle.textContent = movie.title;
    elements.modalRating.textContent = `⭐ ${movie.rating}`;
    elements.modalYear.textContent = movie.year;
    elements.modalDuration.textContent = movie.duration;
    elements.modalDesc.textContent = movie.description;
    elements.modalDirector.textContent = movie.director;
    elements.modalActors.textContent = movie.actors;
    elements.modalGenres.innerHTML = movie.genre.map(g => `<span>${g}</span>`).join('');
    updateModalFavButton(movieId);
    elements.movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.movieModal.classList.remove('active');
    document.body.style.overflow = '';
    currentModalMovieId = null;
}

// ============================================
// МОДАЛЬНОЕ ОКНО ОТЗЫВА
// ============================================

function openReviewModal() {
    elements.reviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    elements.reviewUserName.value = '';
    elements.reviewRating.value = '';
    elements.reviewText.value = '';
    elements.reviewUserName.focus();
}

function closeReviewModal() {
    elements.reviewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// СМОТРЕТЬ ФИЛЬМ
// ============================================

function watchMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    const query = encodeURIComponent(`${movie.title} фильм смотреть онлайн`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
}

// ============================================
// SCROLL SPY
// ============================================

function setupScrollSpy() {
    const sections = [
        { id: 'hero', linkId: 'homeLink' },
        { id: 'movies', linkId: 'moviesLink' },
        { id: 'series', linkId: 'seriesLink' },
        { id: 'reviews', linkId: 'reviewsLink' }
    ];

    function updateActiveLink() {
        elements.navLinks.querySelectorAll('a').forEach(a => {
            a.classList.remove('section-active');
            a.classList.remove('active');
        });

        const scrollPos = window.scrollY + 120;
        let currentSection = 'hero';

        for (const section of sections) {
            const el = document.getElementById(section.id);
            if (!el) continue;
            if (el.offsetTop <= scrollPos) {
                currentSection = section.id;
            }
        }

        const activeLink = sections.find(s => s.id === currentSection);
        if (activeLink) {
            const link = document.getElementById(activeLink.linkId);
            if (link) link.classList.add('section-active');
        }
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
    updateActiveLink();
}

// ============================================
// НАВИГАЦИЯ
// ============================================

function setupNavigation() {
    if (!elements.navLinks) return;
    elements.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            gtag('event', '');
            elements.navLinks.classList.remove('mobile-active');
            const href = link.getAttribute('href');
            if (link.id === 'favoritesLink') {
                e.preventDefault();
                if (favorites.length === 0) { alert('В избранном пока ничего нет ❤️'); return; }
                elements.favoritesSection.scrollIntoView({ behavior: 'smooth' });
                return;
            }
            if (href && href.startsWith('#') && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ============================================
// ОБРАБОТЧИКИ
// ============================================

function setupEventListeners() {
    if (elements.themeToggle) elements.themeToggle.addEventListener('click', toggleTheme);

    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', function(e) {
            gtag('event', '');
            e.stopPropagation();
            elements.navLinks.classList.toggle('mobile-active');
        });
    }
    setupNavigation();

    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', function(e) {
            gtag('event', '');
            currentFilter.search = e.target.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
        elements.searchInput.addEventListener('keydown', function(e) {
            gtag('event', '');
            if (e.key === 'Enter') {
                currentFilter.search = elements.searchInput.value;
                visibleMoviesCount = 8;
                applyFiltersAndSearch();
            }
        });
    }
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', function() {
            gtag('event', '');
            currentFilter.search = elements.searchInput.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
    }

    if (elements.genreFilter) {
        elements.genreFilter.addEventListener('change', function(e) {
            gtag('event', '');
            currentFilter.genre = e.target.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
    }
    if (elements.yearFilter) {
        elements.yearFilter.addEventListener('change', function(e) {
            gtag('event', '');
            currentFilter.year = e.target.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
    }
    if (elements.ratingFilter) {
        elements.ratingFilter.addEventListener('change', function(e) {
            gtag('event', '');
            currentFilter.rating = e.target.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
    }
    if (elements.typeFilter) {
        elements.typeFilter.addEventListener('change', function(e) {
            gtag('event', '');
            currentFilter.type = e.target.value;
            visibleMoviesCount = 8;
            applyFiltersAndSearch();
        });
    }
    if (elements.sortBy) {
        elements.sortBy.addEventListener('change', function(e) {
            gtag('event', '');
            currentFilter.sort = e.target.value;
            applyFiltersAndSearch();
        });
    }

    if (elements.showMoreBtn) {
        elements.showMoreBtn.addEventListener('click', function() {
            gtag('event', '');
            visibleMoviesCount += MOVIES_PER_PAGE;
            applyFiltersAndSearch();
        });
    }

    if (elements.modalClose) elements.modalClose.addEventListener('click', closeModal);
    if (elements.modalOverlay) elements.modalOverlay.addEventListener('click', closeModal);

    if (elements.modalFavBtn) {
        elements.modalFavBtn.addEventListener('click', function() {
            gtag('event', '');
            if (currentModalMovieId !== null) toggleFavorite(currentModalMovieId);
        });
    }

    if (elements.watchBtn) {
        elements.watchBtn.addEventListener('click', function() { watchMovie(1); });
    }
    if (elements.trailerBtn) {
        elements.trailerBtn.addEventListener('click', function() {
            gtag('event', '');
            if (currentModalMovieId !== null) watchMovie(currentModalMovieId);
        });
    }

    if (elements.detailsBtn) {
        elements.detailsBtn.addEventListener('click', function() { openModal(1); });
    }

    if (elements.addReviewBtn) {
        elements.addReviewBtn.addEventListener('click', openReviewModal);
    }
    if (elements.reviewModalClose) {
        elements.reviewModalClose.addEventListener('click', closeReviewModal);
    }
    if (elements.reviewModalOverlay) {
        elements.reviewModalOverlay.addEventListener('click', closeReviewModal);
    }
    if (elements.reviewCancelBtn) {
        elements.reviewCancelBtn.addEventListener('click', closeReviewModal);
    }

    if (elements.reviewForm) {
        elements.reviewForm.addEventListener('submit', function(e) {
            gtag('event', '');
            e.preventDefault();
            const name = elements.reviewUserName.value.trim();
            const rating = elements.reviewRating.value;
            const text = elements.reviewText.value.trim();
            if (!name || !rating || !text) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }
            addReview(name, rating, text);
            closeReviewModal();
            alert('Спасибо за ваш отзыв! ❤️');
        });
    }

    if (elements.trailerClose) elements.trailerClose.addEventListener('click', closeTrailer);
    if (elements.trailerOverlay) elements.trailerOverlay.addEventListener('click', closeTrailer);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { closeModal(); closeReviewModal(); closeTrailer(); }
    });

    window.addEventListener('scroll', function() {
        gtag('event', '');
        if (!elements.backToTop) return;
        if (window.scrollY > 300) elements.backToTop.classList.add('show');
        else elements.backToTop.classList.remove('show');
    });
    if (elements.backToTop) {
        elements.backToTop.addEventListener('click', function() {
            gtag('event', '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.addEventListener('click', function(e) {
        gtag('event', '');
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
            if (elements.navLinks) elements.navLinks.classList.remove('mobile-active');
        }
    });
}

function closeTrailer() {
    if (!elements.trailerModal) return;
    elements.trailerModal.classList.remove('active');
    if (elements.trailerFrame) elements.trailerFrame.src = '';
    document.body.style.overflow = '';
}