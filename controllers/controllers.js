'use strict';
(function() {
  angular
    .module('GraphSlider')
    .controller('MainController', ['$scope', 'Graphs',
      function($scope, Graphs) {
        const vm = this;
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

        vm.removeComment = function(index) {
          Graphs.removeComment(index);
        };

        vm.onDropComplete = function (index, obj, evt) {
            const otherObj = vm.graphs[index];
            const otherIndex = vm.graphs.indexOf(obj);
            vm.graphs[index] = obj;
            vm.graphs[otherIndex] = otherObj;
        };

      }
  ]);
})();
