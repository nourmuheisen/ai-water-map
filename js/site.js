(function () {
    "use strict";

    var iframe = document.getElementById("map-iframe");
    if (!iframe) {
        return;
    }

    var mapSrc = iframe.getAttribute("data-src");
    if (!mapSrc) {
        return;
    }

    function loadMap() {
        if (iframe.getAttribute("src")) {
            return;
        }

        iframe.setAttribute("src", mapSrc);
    }

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        loadMap();
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "200px 0px" }
        );

        observer.observe(iframe);
    } else {
        loadMap();
    }
})();
