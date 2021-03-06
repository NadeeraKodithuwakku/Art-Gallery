angular.module('welcomePageApp.LoginView', [])
  .controller('LoginCtrl', function ($scope, $http, $state, $rootScope) {
    $scope.message = "Login";
    $scope.url = '/welcome/about';
    $scope.form = {
        firstName: "",
        lastName: "",
        password: ""
    }
   var oriPerson = angular.copy($scope.form);
    $scope.signup = function ($event) {
        var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With':'XMLHttpRequest' }
        }
        $http.post('welcome/login', $.param($scope.form), config)
        .success(function (data, status, headers, config)
        {
          $state.go('home');
        })
        .error(function (data, status, headers, config)
        {
          $rootScope.message = "Error: Cannot reach the server";
          $state.go('error');
        });

    }
}).directive('loginMessage', function() {
   return {
     restrict: 'E',
     template: '<div>Please Register before login</div>'
   };
 });
