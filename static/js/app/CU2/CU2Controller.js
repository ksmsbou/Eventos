eventosModule.config(function ($routeProvider) {
    $routeProvider.when('/VPrincipalUsuario', {
                controller: 'VPrincipalUsuarioController',
                templateUrl: 'app/CU2/VPrincipalUsuario.html'
            }).when('/VEventosInscritos', {
                controller: 'VEventosInscritosController',
                templateUrl: 'app/CU2/VEventosInscritos.html'
            }).when('/VEventoInscrito', {
                controller: 'VEventoInscritoController',
                templateUrl: 'app/CU2/VEventoInscrito.html'
            }).when('/VEventosNoInscritos', {
                controller: 'VEventosNoInscritosController',
                templateUrl: 'app/CU2/VEventosNoInscritos.html'
            }).when('/VEventoNoInscrito', {
                controller: 'VEventoNoInscritoController',
                templateUrl: 'app/CU2/VEventoNoInscrito.html'
            });
});

eventosModule.controller('VPrincipalUsuarioController', 
   ['$scope', '$location', '$route', 'flash', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU2Service, CU3Service) {
      $scope.msg = '';
      CU2Service.VPrincipalUsuario().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEventosInscritos0 = function() {
        $location.path('/VEventosInscritos');
      };
      $scope.VEventosNoInscritos1 = function() {
        $location.path('/VEventosNoInscritos');
      };
      $scope.VPrincipal2 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VEventosInscritosController', 
   ['$scope', '$location', '$route', 'flash', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU2Service, CU3Service) {
      $scope.msg = '';
      CU2Service.VEventosInscritos().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.AVerEventosInscritos0 = function() {
          
        CU2Service.AVerEventosInscritos().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventosInscritos') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal1 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VEventoInscritoController', 
   ['$scope', '$location', '$route', 'flash', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU2Service, CU3Service) {
      $scope.msg = '';
      CU2Service.VEventoInscrito().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.AVerEventoInscrito0 = function() {
          
        CU2Service.AVerEventoInscrito().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventoInscrito') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.ACredencial1 = function() {
          
        CU2Service.ACredencial().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventoInscrito') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.ACertificado2 = function() {
          
        CU2Service.ACertificado().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventoInscrito') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal3 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VEventosNoInscritosController', 
   ['$scope', '$location', '$route', 'flash', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU2Service, CU3Service) {
      $scope.msg = '';
      CU2Service.VEventosNoInscritos().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEventoNoInscrito0 = function() {
        $location.path('/VEventoNoInscrito');
      };
      $scope.AVerEventosNoInscritos1 = function() {
          
        CU2Service.AVerEventosNoInscritos().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventosNoInscritos') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal2 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VEventoNoInscritoController', 
   ['$scope', '$location', '$route', 'flash', 'CU2Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU2Service, CU3Service) {
      $scope.msg = '';
      $scope.fPersona = {};

      CU2Service.VEventoNoInscrito().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.AVerEventoNoInscrito0 = function() {
          
        CU2Service.AVerEventoNoInscrito().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventoNoInscrito') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal2 = function() {
        $location.path('/VPrincipal');
      };

      $scope.fPersonaSubmitted = false;
      $scope.AReservarEvento1 = function(isValid) {
        $scope.fPersonaSubmitted = true;
        if (isValid) {
          
          CU2Service.AReservarEvento($scope.fPersona).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VEventoNoInscrito') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

    }]);
