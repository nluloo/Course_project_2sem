document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки, занято ли место
    function checkSeatAvailability(row, index, tickets, cinema,date, time, film) {
        return tickets.some(function(ticket) {
            return ticket.place.row === row &&
                   ticket.place.index === index &&
                   ticket.cinema == cinema &&
                   ticket.date == date && 
                   ticket.time == time &&
                   ticket.film == film;
        });
    }

    // Функция для обновления классов мест в зависимости от данных в localStorage
    function updateSeatAvailability(cinema, date, time, film, tickets) {
        document.querySelectorAll('.placeSeet').forEach(function(seat) {
            var row = seat.getAttribute('row');
            var index = seat.getAttribute('index');
            if (checkSeatAvailability(row, index, tickets, cinema, date, time, film)) {
                seat.classList.add('obs');
            } else {
                seat.classList.remove('obs');
            }
        });
    }

    // Слушаем изменения выбора кинотеатра
    document.getElementById('selectCinema').addEventListener('change', function() {
        var selectedCinema = this.value;
        var selectedDate = document.getElementById('start').value;
        var selectedTime = document.querySelector('.containerBlock button.active').textContent;
        var selectedFilm = document.getElementById('selectFilm').options[document.getElementById('selectFilm').selectedIndex].text;
        var previousTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        updateSeatAvailability(selectedCinema, selectedDate, selectedTime, selectedFilm, previousTickets);
    });

    // Слушаем изменения выбора даты
    document.getElementById('start').addEventListener('change', function() {
        var selectedCinema = document.getElementById('selectCinema').value;
        console.log("Selected cinema ID: " + selectedCinema);
        var selectedDate = this.value;
        console.log("Selected date: " + selectedDate);
        var selectedTime = document.querySelector('.containerBlock button.active').textContent;
        console.log("Selected time: " + selectedTime);
        var selectedFilm = document.getElementById('selectFilm').options[document.getElementById('selectFilm').selectedIndex].text;
        console.log("Selected film: " + selectedFilm);
        var previousTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        updateSeatAvailability(selectedCinema, selectedDate, selectedTime, selectedFilm, previousTickets);
    });

    // Слушаем изменения выбора времени
    document.querySelectorAll('.containerBlock button').forEach(function(button) {
        button.addEventListener('click', function() {
            var selectedCinema = document.getElementById('selectCinema').value;
            console.log("Selected cinema ID: " + selectedCinema);
            var selectedDate = document.getElementById('start').value;
            console.log("Selected date: " + selectedDate);
            var selectedTime = this.textContent;
            console.log("Selected time: " + selectedTime);
            var selectedFilm = document.getElementById('selectFilm').options[document.getElementById('selectFilm').selectedIndex].text;
            console.log("Selected film: " + selectedFilm);
            var previousTickets = JSON.parse(localStorage.getItem('tickets')) || [];
            updateSeatAvailability(selectedCinema, selectedDate, selectedTime, selectedFilm, previousTickets);
        });
    });

    // Слушаем изменения выбора фильма
    document.getElementById('selectFilm').addEventListener('change', function() {
        var selectedCinema = document.getElementById('selectCinema').value;
        console.log("Selected cinema ID: " + selectedCinema);
        var selectedDate = document.getElementById('start').value;
        console.log("Selected date: " + selectedDate);
        var selectedTime = document.querySelector('.containerBlock button.active').textContent;
        console.log("Selected time: " + selectedTime);
        var selectedFilm = this.options[this.selectedIndex].text;
        console.log("Selected film: " + selectedFilm);
        var previousTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        updateSeatAvailability(selectedCinema, selectedDate, selectedTime, selectedFilm, previousTickets);
    });
});
