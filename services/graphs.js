'use strict';
(function() {
  angular
    .module('GraphSlider')
    .factory('Graphs', [
      function() {
        const Graphs = {};
        Graphs.graphs = [];
        Graphs.current = [null];

        function Graph(img) {
          this.img = img;
          this.comments = [];
        };

        function Comment(msg) {
          this.msg = msg;
          this.time = Date.now();
        }

        Graphs.populate = function() {
          Graphs.graphs.push(new Graph('http://www.stockmarket-coach.com/images/reading-stock-charts-candlestick-chart.jpg'));
          Graphs.graphs.push(new Graph('http://www.simple-stock-trading.com/wp-content/uploads/2015/06/ibm_stock_chart_is_example_of_online_stock_charts.png'));
          Graphs.graphs.push(new Graph('http://www.tradinggraphs.com/wp-content/uploads/2010/11/x-stock-graph.png'));
        };

        Graphs.add = function(img) {
          Graphs.graphs.push(new Graph(img));
        };

        Graphs.setCurrent = function(graph) {
          Graphs.current[0] = graph;
        };

        Graphs.addComment = function(msg) {
          Graphs.current[0].comments.push(new Comment(msg));
        };

        Graphs.removeComment= function(index) {
          Graphs.current[0].comments.splice(index, 1);
        };

        Graphs.populate();
        Graphs.setCurrent(Graphs.graphs[0]);
        return Graphs;
      }
  ]);
})();
