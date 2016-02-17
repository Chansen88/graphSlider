'use strict';
(function() {
  angular
    .module('GraphSlider')
    .controller('MainController', ['$scope', 'Graphs', '$location',
      function($scope, Graphs, $location) {
        const vm = this;
        vm.graphs = Graphs.graphs;
        vm.current = Graphs.current;

        vm.newpage = function() {
          $location.path('/new');
        };

        vm.newGraph = function(img) {
          Graphs.add(img);
          $location.path('/');
        };

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

        vm.onDropComplete = function(index, obj, evt) {
          const otherObj = vm.graphs[index];
          const otherIndex = vm.graphs.indexOf(obj);
          vm.graphs[index] = obj;
          vm.graphs[otherIndex] = otherObj;
        };

      }
  ]);
})();
