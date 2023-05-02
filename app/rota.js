website.config(function($routeProvider) {

    $routeProvider

    .when("/", {

        templateUrl: "template/anasayfa.html",
        controller: "anasayfaCtrl"
    })

    .when("/anasayfa", {

        templateUrl: "template/anasayfa.html",
        controller: "anasayfaCtrl"
    })

    .when("/hakkimda", {

        templateUrl: "template/hakkimda.html",
        controller: "hakkimdaCtrl"
    })

    .when("/portfolyo", {

        templateUrl: "template/portfolyo.html",
        controller: "portfolyoCtrl"
    })

    .when("/iletisim", {

        templateUrl: "template/iletisim.html",
        controller: "iletisimCtrl"
    });
});