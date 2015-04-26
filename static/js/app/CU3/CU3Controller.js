eventosModule.config(function ($routeProvider) {
    $routeProvider.when('/VPrincipal', {
                controller: 'VPrincipalController',
                templateUrl: 'app/CU3/VPrincipal.html'
            }).when('/VRegistro', {
                controller: 'VRegistroController',
                templateUrl: 'app/CU3/VRegistro.html'
            });
});

eventosModule.controller('VPrincipalController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU2Service, CU3Service) {
      $scope.msg = '';
      $scope.fUsuario = {};

      CU3Service.VPrincipal().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VRegistro0 = function() {
        $location.path('/VRegistro');
      };

      $scope.fUsuarioSubmitted = false;
      $scope.AIdentificacion1 = function(isValid) {
        $scope.fUsuarioSubmitted = true;
        if (isValid) {
          
          CU3Service.AIdentificacion($scope.fUsuario).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VPrincipal') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

    }]);
eventosModule.controller('VRegistroController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU2Service, CU3Service) {
      $scope.msg = '';
      $scope.fPersona = {};

      CU3Service.VRegistro().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VPrincipal0 = function() {
        $location.path('/VPrincipal');
      };

      $scope.fPersonaSubmitted = false;
      $scope.ARegistro1 = function(isValid) {
        $scope.fPersonaSubmitted = true;
        if (isValid) {
          
          CU3Service.ARegistro($scope.fPersona).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VRegistro') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

    }]);
