document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Сбор данных из формы
    const cinema = document.getElementById('cinema').value;
    const film = document.getElementById('film').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const seat = document.getElementById('seat').value;

    // Создание объекта JSON
    const orderData = {
        cinema: cinema,
        movie: film,
        time: time,
        date: date,
        seat: seat
    };

    // Преобразование объекта JSON в строку
    const jsonData = JSON.stringify(orderData);

    // Создание Blob из строки JSON
    const blob = new Blob([jsonData], {type: 'application/json'});

    // Сохранение файла
    saveAs(blob, 'order.json');
});
