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

        vm.addComment = function(comment) {
          Graphs.addComment(comment);
          vm.newComment = '';
        };

        vm.onDropComplete = function (index, obj, evt) {
            var otherObj = vm.graphs[index];
            var otherIndex = vm.graphs.indexOf(obj);
            vm.graphs[index] = obj;
            vm.graphs[otherIndex] = otherObj;
        };

      }
  ]);
})();
