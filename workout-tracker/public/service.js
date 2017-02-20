angular.module('workout')
.service('mainService', function ($http) {
  this.test = function () {
    return $http.get('/api/test');
  }
})
