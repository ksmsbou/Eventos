eventosModule.service('CU3Service', ['$q', '$http', function($q, $http) {

    this.ARegistro = function(fPersona) {
        return  $http({
          url: "CU3/ARegistro",
          data: fPersona,
          method: 'POST',
        });
    //    var labels = ["/VPrincipal", "/VRegistro", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VPrincipal = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU3/VPrincipal',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AIdentificacion = function(fUsuario) {
        return  $http({
          url: "CU3/AIdentificacion",
          data: fUsuario,
          method: 'POST',
        });
    //    var labels = ["/VPrincipal", "/VPrincipalUsuario", "/VPrincipalAdministrador", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VRegistro = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU3/VRegistro',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

}]);