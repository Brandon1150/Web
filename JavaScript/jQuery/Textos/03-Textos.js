$(document).ready(function () {


    reloadLinks();
    $('#add_button')
    .removeAttr('disabled')
    .click(function () {
        $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>');
        $("#add_link").val('');
        reloadLinks(); // prepend,before,html
    });

});

function reloadLinks() {
    $('a').each(function (index) {
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target','_blank');
        that.removeAttr('" attribute you want to remove "');
        that.text(enlace);

    });

$(selector).append(content);

}