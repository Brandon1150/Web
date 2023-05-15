$(document).ready(function () {

    //SLIDER
    if (window.location.href.indexOf('index') > -1) {


        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,  //Tamanño del slider
            responsive: true
        });
    }

    //POSTS
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYY"),
                content: ' augue facilisis ultricies. Donec pharetra sed enim id ullamcorper. Sed nec ornare orci. Cras dictum vel odio sed ultrices. Suspendisse tempus, lectus quis elementum iaculis, enim nisl blandit massa, non porttitor mauris quam tempor ante. Aenean sed rutrum quam, nec rhoncus tellus. Praesent ac convallis arcu. Morbi vitae enim efficitur sem dignissim eleifend pellentesque sit amet dui. Aliquam ut lorem pellentesque, venenatis nisl a, elementum libero. Cras id enim elementum, mattis purus sit amet, iaculis enim. Fusce pretium magna vitae tincidunt finibus. Aenean sed turpis vitae lorem varius mattis. Curabitur ut placerat sem. Proin quis pulvinar mauris. Etiam sit amet elit a massa ultrices auctor in sit amet nulla'
            }

        ];


        posts.forEach((item, index) => {
            var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
    </article>
    `;
            $('#posts').append(post);
        });
    }

    //SELECTOR DE TEMA
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue ").click(function () {
        theme.attr("href", "css/blue.css");
    });

    //Scroll Arriba de la web

    $('.subir').click(function () {
        // e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p")
        about_parrafo.html("<br><strong>Bienvenido," + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    }
});