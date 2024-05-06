// Объект цен для каждого кинотеатра и фильма
const ticketPrices = {
    's0': [10, 12, 15, 11, 13], // Цены для s0
    's1': [11, 13, 16, 12, 14], // Цены для s1
    // Другие кинотеатры и их цены для каждого фильма
};

// Получение элементов DOM
const cinemaSelect = document.getElementById('selectCinema');
const filmSelect = document.getElementById('selectFilm');
const priceElement = document.querySelector('.price');

// Функция для обновления итоговой цены
function updateTotalPrice() {
    const cinema = cinemaSelect.value;
    const filmIndex = parseInt(filmSelect.value);
    const totalPrice = ticketPrices[cinema][filmIndex] || 0;
    priceElement.textContent = `Итоговая цена: $${totalPrice}`;
}

// Слушатели событий для изменения кинотеатра и фильма
cinemaSelect.addEventListener('change', updateTotalPrice);
filmSelect.addEventListener('change', updateTotalPrice);

// Инициализация итоговой цены
updateTotalPrice();
