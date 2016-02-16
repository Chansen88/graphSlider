'use strict';
(function() {
  angular
    .module('GraphSlider')
    .controller('MainController', ['$scope', 'Graphs',
      function($scope, Graphs) {
        var vm = this;
        vm.data = Graphs.data;
      }
  ]);
})();
