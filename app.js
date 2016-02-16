(function() {
  angular
    .module('GraphSlider', ['ngRoute', 'ngDraggable'])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: '/partials/home.html',
            controller: 'MainController',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]);
})();
