// Получаем все элементы мест
const placeElements = document.querySelectorAll('.placeSeet');

// Получаем элемент информации о выбранном месте
const infoElement = document.querySelector('.info');

// Перебираем каждый элемент места и добавляем обработчик события клика
placeElements.forEach(place => {
    place.addEventListener('click', () => {
        // Убираем рамку у всех мест
        placeElements.forEach(p => {
            p.classList.remove('selected');
        });
        // Добавляем рамку к выбранному месту
        place.classList.add('selected');

        // Получаем ряд и номер места
        const row = place.getAttribute('row');
        const index = place.getAttribute('index');

        // Выводим информацию о выбранном месте в поле info
        infoElement.innerHTML = `<p>Ряд ${row}</p><p>Место ${index}</p>`;
        
        // Делаем информацию видимой
        infoElement.style.display = 'block';
    });
});

// Добавляем обработчик клика ко всему документу
document.addEventListener('click', (event) => {
    // Проверяем, был ли клик выполнен вне информации о выбранном месте и не на самом месте
    if (!infoElement.contains(event.target) && !event.target.classList.contains('placeSeet')) {
        // Убираем рамку у всех мест
        placeElements.forEach(place => {
            place.classList.remove('selected');
        });
        // Скрываем информацию о выбранном месте
        infoElement.style.display = 'none';
    }
});

