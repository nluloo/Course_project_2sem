function move(element) {
    var selected, next, prev, nextSecond, prevSecond, prevPrevSecond, nextNextSecond;

    if (element === "FourFilm") {
        selected = $(".TreeFilm").next();
    } else if (element === "SecondFilm") {
        selected = $(".TreeFilm").prev();
    } else {
        selected = $(element).closest('.TreeFilm');
    }

    next = $(selected).next();
    prev = $(selected).prev();
    nextSecond = $(next).next();
    prevSecond = $(prev).prev();
    prevPrevSecond = $(prevSecond).prev();
    nextNextSecond = $(nextSecond).next();

    $(selected).removeClass().addClass("TreeFilm");
    $(prev).removeClass().addClass("SecondFilm");
    $(next).removeClass().addClass("FourFilm");
    $(nextSecond).removeClass().addClass("FiveFilm");
    $(prevSecond).removeClass().addClass("FirstFilm");
    $(nextNextSecond).removeClass().addClass("hideRight");
    $(prevPrevSecond).removeClass().addClass("hideLeft");


}

$(document).on('click', '.FirstFilm, .SecondFilm, .FourFilm, .FiveFilm, .hideLeft, .hideRight', function(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
});

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            move('SecondFilm');
            break;
        case 39:
            move('FourFilm');
            break;
        default:
            return;
    }
    e.preventDefault();
});

$('#prev').click(function() {
    move('FourFilm');
});
$('#next').click(function() {
    move('SecondFilm');
});
