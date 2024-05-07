document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки времени
    var timeButtons = document.querySelectorAll('.containerBlock button.block');

    // Добавляем обработчик события для каждой кнопки
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Удаляем класс active у всех кнопок времени
            timeButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Добавляем класс active к нажатой кнопке
            button.classList.add('active');
        });
    });
});
