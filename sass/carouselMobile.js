document.addEventListener('DOMContentLoaded', function() {
    var controls = document.querySelectorAll('.control a');
    var contents = document.querySelectorAll('.images .content');
    var filmName = document.querySelector('.nameFilm .SocialNetwork');
    var filmLink = document.querySelector('.firstFilm');

    var films = [
        { name: 'СОЦИАЛЬНАЯ СЕТЬ', href: 'social.html' },
        { name: 'ИНТЕРСТЕЛЛАР', href: 'int.html' },
        { name: 'ОСТРОВ ПРОКЛЯТЫХ', href: 'island.html' },
        { name: 'АФИША', href: 'error.html' },
    ];

    controls.forEach(function(control, index) {
        control.addEventListener('click', function(event) {
            // Сначала удаляем класс active у всех ссылок
            controls.forEach(function(control) {
                control.classList.remove('active');
            });

            // Добавляем класс active только к текущей нажатой ссылке
            control.classList.add('active');

            // Скрываем все изображения
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Показываем только активное изображение
            var activeContent = document.querySelector('.images .content[data-index="' + index + '"]');
            activeContent.classList.add('active');

            // Плавно изменяем текст
            filmName.classList.add('fade-ou');


            // Через некоторое время (например, 500 мс), изменяем текст и удаляем класс затухания
            setTimeout(function() {
                filmName.innerText = films[index].name;
                filmName.classList.remove('fade-ou');
            }, 1000);
            filmLink.classList.add('fade-out');

            setTimeout(function() {
                filmLink.href = films[index].href;
                filmLink.classList.remove('fade-out');
            }, 1000);

        });
    });
});
