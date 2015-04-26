eventosModule.service('CU1Service', ['$q', '$http', function($q, $http) {

    this.ACrearEvento = function(fEvento) {
        return  $http({
          url: "CU1/ACrearEvento",
          data: fEvento,
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
          }    });
    //    var labels = ["/VPrincipalAdministrador", "/VPrincipalAdministrador", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VPrincipalAdministrador = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VPrincipalAdministrador',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AModificarEvento = function(fEvento) {
        return  $http({
          url: "CU1/AModificarEvento",
          data: fEvento,
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
          }    });
    //    var labels = ["/VListaEventos", "/VModificarEvento", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VCrearEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VCrearEvento',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AEliminarEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/AEliminarEvento',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VListaEventos", "/VEliminarEvento", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VModificarEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VModificarEvento',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AVerParticipantes = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/AVerParticipantes',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VPrincipalAdministrador", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VEliminarEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VEliminarEvento',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AVerEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/AVerEvento',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VListaEventos", "/VListaEventos", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    this.VListaEventos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VListaEventos',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VVerEvento = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'CU1/VVerEvento',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

}]);