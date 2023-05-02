website.controller("anasayfaCtrl", function($scope) {

    $scope.baslik = "Anasayfa";
    $scope.resim = "assets/resim.jpg";
    $scope.icerik = "Sosyal medya adresleri";
    $scope.instagramURL = "https://www.instagram.com/mond.34tr/";
    $scope.githubURL = "https://github.com/abdullah-aydogan";
});

website.controller("hakkimdaCtrl", function($scope) {

    $scope.baslik = "Hakkımda";
    $scope.resim = "assets/resim.jpg";
    $scope.icerik = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisl tristique ex pellentesque tempor. Pellentesque sollicitudin tempus lorem. Fusce massa neque, tempus vitae pretium et, varius non lacus. Phasellus non ex sit amet justo dictum sodales et nec magna. Etiam convallis volutpat malesuada. Fusce sit amet nibh lacus. Nunc venenatis quis ante vel iaculis. Proin sagittis ac lorem vel volutpat. Nam in neque vel felis sodales commodo pellentesque in mauris. Phasellus eu gravida felis. Phasellus ultricies arcu nisl, ut pretium justo tincidunt et. Ut accumsan ornare est ut tempor. Sed varius consectetur rutrum.";
});

website.controller("portfolyoCtrl", function($scope, $http) {

    $scope.baslik = "Portfolyo";
    $scope.icerik = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    $http.get("json/portfolyo.json").success(function(response) {

        $scope.sonuc = response;
    });
});

website.controller("iletisimCtrl", function($scope) {

    $scope.baslik = "İletişim";
    $scope.icerik = "e-mail";
    $scope.email = "example@example.com";
});

website.directive("activeLink", function() {

    return {

        link: function(scope, element, attrs) {

            element.find(".nav a").on("click", function() {
                
                angular.element(this).parent().siblings(".active").removeClass("active");
                angular.element(this).parent().addClass("active");
            });
        }
    };
});