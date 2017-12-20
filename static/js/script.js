


$(document).ready(function () {

    var keywords = siteData.keywords;
    
    for (var i = 0; i < keywords.length; i++) {
        $('#gallery__container').append(
                "<a href='/details.html?subject=" + keywords[i].name + "' class='gallery__img__wrapper'>" +
                "<img src='/static/img/" + keywords[i].img + "' data-tags='" + keywords[i].keys + "' alt='" + keywords[i].alt + "' />" +
                "</a>"
                );
    }

    var $imgs = $('#gallery__container .gallery__img__wrapper img'); //get images
    var $search = $('#photo-search'); //get input element
    var cache = []; //create array

    $imgs.each(function () {
        cache.push({//add object to cache array
            element: this,
            text: this.alt.trim().toLowerCase() //trim and lowercase alt text
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase(); //get query

        cache.forEach(function (img) {
            var index = 0;
            if (query) { //if there is query text
                index = img.text.indexOf(query); //find if query text exist
            }

            img.element.parentNode.style.display = index === -1 ? 'none' : ''; //show hide images
        });
    }

    if ('oninput' in $search[0]) { //if supported in browser
        $search.on('input', filter); //use input event to call filter
    } else {
        $search.on('keyup', filter); //if no support use keyup event to call filter()
    }



    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str.name)) {
                    matches.push(str.name);
                }
            });

            cb(matches);
        };
    };



    $('#keywords .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
            {
                name: 'keywords',
                source: substringMatcher(keywords)
            });


});