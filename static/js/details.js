$(document).ready(function () {

    var currentPage = {};


    function param(name) {

        return (location.search.split(name + '=')[1] || '').split('?')[0];
        /* 
         Function written by rodnaph https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js/39768285#39768285
         */

    }

    var keywords = siteData.keywords;

    for (var i = 0; i < keywords.length; i++) {
        
        if (keywords[i].name === param('subject')) {
            currentPage = keywords[i];
            $('#gallery__container').append(
                "<div class='gallery__img__wrapper'>" +
                "<img src='/static/img/" + keywords[i].img + "' data-tags='" + keywords[i].keys + "' alt='" + keywords[i].alt + "' />" +
                "<h1>"+ keywords[i].name + "</h1>" +
                "<p>This image contains the following alt tags: <b>"+ keywords[i].alt + "</b>. These can be used to search the images.</p>" +
                "</div>"
                );
            break;
            
        }
    }

});