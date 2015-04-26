eventosModule.service('CU2Service', ['$q', '$http', function($q, $http) {

    this.AVerEventosInscritos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/AVerEventosInscritos',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VPrincipalUsuario", "/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VPrincipalUsuario = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/VPrincipalUsuario',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AVerEventosNoInscritos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/AVerEventosNoInscritos',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VPrincipalUsuario", "/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VEventosInscritos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/VEventosInscritos',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AVerEventoInscrito = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/AVerEventoInscrito',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VEventosInscritos", "/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VEventoInscrito = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/VEventoInscrito',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ACertificado = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/ACertificado',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VEventosNoInscritos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/VEventosNoInscritos',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ACredencial = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/ACredencial',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.AVerEventoNoInscrito = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/AVerEventoNoInscrito',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VEventosNoInscritos", "/VPrincipalUsuario", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VEventoNoInscrito = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU2/VEventoNoInscrito',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AReservarEvento = function(fPersona) {
        return  $http({
          url: "CU2/AReservarEvento",
          data: fPersona,
          method: 'POST',
        });
    //    var labels = ["/VEventosInscritos", "/VEventosNoInscritos", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

}]);