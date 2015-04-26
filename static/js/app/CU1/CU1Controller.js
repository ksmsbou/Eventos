eventosModule.config(function ($routeProvider) {
    $routeProvider.when('/VPrincipalAdministrador', {
                controller: 'VPrincipalAdministradorController',
                templateUrl: 'app/CU1/VPrincipalAdministrador.html'
            }).when('/VCrearEvento', {
                controller: 'VCrearEventoController',
                templateUrl: 'app/CU1/VCrearEvento.html'
            }).when('/VModificarEvento/:id', {
                controller: 'VModificarEventoController',
                templateUrl: 'app/CU1/VModificarEvento.html'
            }).when('/VEliminarEvento', {
                controller: 'VEliminarEventoController',
                templateUrl: 'app/CU1/VEliminarEvento.html'
            }).when('/VListaEventos', {
                controller: 'VListaEventosController',
                templateUrl: 'app/CU1/VListaEventos.html'
            }).when('/VVerEvento', {
                controller: 'VVerEventoController',
                templateUrl: 'app/CU1/VVerEvento.html'
            });
});

eventosModule.controller('VPrincipalAdministradorController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU3Service) {
      $scope.msg = '';
      CU1Service.VPrincipalAdministrador().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VListaEventos0 = function() {
        $location.path('/VListaEventos');
      };
      $scope.VCrearEvento1 = function() {
        $location.path('/VCrearEvento');
      };
      $scope.VPrincipal2 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VCrearEventoController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU3Service) {
      $scope.msg = '';
      $scope.fEvento = {};

      CU1Service.VCrearEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VPrincipal1 = function() {
        $location.path('/VPrincipal');
      };

      $scope.fEventoSubmitted = false;
      $scope.ACrearEvento0 = function(isValid) {
        $scope.fEventoSubmitted = true;
        if (isValid) {
          
          CU1Service.ACrearEvento($scope.fEvento).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VCrearEvento') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

    }]);
eventosModule.controller('VModificarEventoController', 
   ['$scope', '$location', '$route', 'flash', '$routeParams', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, $routeParams, CU1Service, CU3Service) {
      $scope.msg = '';
      $scope.fEvento = {};

      CU1Service.VModificarEvento({"id":$routeParams.id}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VPrincipal1 = function() {
        $location.path('/VPrincipal');
      };

      $scope.fEventoSubmitted = false;
      $scope.AModificarEvento0 = function(isValid) {
        $scope.fEventoSubmitted = true;
        if (isValid) {
          
          CU1Service.AModificarEvento($scope.fEvento).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VModificarEvento') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

    }]);
eventosModule.controller('VEliminarEventoController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU3Service) {
      $scope.msg = '';
      CU1Service.VEliminarEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.AEliminarEvento0 = function() {
          
        CU1Service.AEliminarEvento().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEliminarEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal1 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VListaEventosController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU3Service) {
      $scope.msg = '';
      CU1Service.VListaEventos().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VModificarEvento0 = function(id) {
        $location.path('/VModificarEvento/'+id);
      };
      $scope.VEliminarEvento1 = function() {
        $location.path('/VEliminarEvento');
      };
      $scope.VVerEvento2 = function() {
        $location.path('/VVerEvento');
      };
      $scope.AVerParticipantes3 = function() {
          
        CU1Service.AVerParticipantes().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VListaEventos') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal4 = function() {
        $location.path('/VPrincipal');
      };

    }]);
eventosModule.controller('VVerEventoController', 
   ['$scope', '$location', '$route', 'flash', 'CU1Service', 'CU3Service',
    function ($scope, $location, $route, flash, CU1Service, CU3Service) {
      $scope.msg = '';
      CU1Service.VVerEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VModificarEvento0 = function(id) {
        $location.path('/VModificarEvento/'+id);
      };
      $scope.VEliminarEvento1 = function() {
        $location.path('/VEliminarEvento');
      };
      $scope.AVerEvento2 = function() {
          
        CU1Service.AVerEvento().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VVerEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VPrincipal3 = function() {
        $location.path('/VPrincipal');
      };

    }]);
