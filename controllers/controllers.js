'use strict';
(function() {
  angular
    .module('GraphSlider')
    .controller('MainController', ['$scope', 'Graphs',
      function($scope, Graphs) {
        var vm = this;
        vm.graphs = Graphs.graphs;
        vm.current = Graphs.current;

        vm.setCurrent = function(graph) {
          console.log(graph);
          Graphs.setCurrent(graph);
        };
      }
  ]);
})();
