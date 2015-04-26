// Creación del módulo de la aplicación
var eventosModule = angular.module('eventos', ['ngRoute', 'ngAnimate', 'flash']);
eventosModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
                controller: 'VPrincipalController',
                templateUrl: 'app/CU3/VPrincipal.html'
            });
});
eventosModule.controller('eventosController_',  ['$scope', '$http', '$location',
function($scope) {
    $scope.title = "Aplicacion";
}]);
eventosModule.directive('sameAs', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs, control) {
            var checker = function () {
                //get the value of the this field
                var e1 = scope.$eval(attrs.ngModel); 
 
                //get the value of the other field
                var e2 = scope.$eval(attrs.sameAs);
                return e1 == e2;
            };
            scope.$watch(checker, function (n) {
 
                //set the form control to valid if both 
                //fields are the same, else invalid
                control.$setValidity("unique", n);
            });
        }
    };
}]);
eventosModule.directive('file', function () {
    return {
        restrict: 'A',
        scope: {
            file: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    };
});
