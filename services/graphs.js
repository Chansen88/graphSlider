'use strict';
(function() {
  angular
    .module('GraphSlider')
    .factory('Graphs', [
      function() {
        const Graphs = {};
        Graphs.graphs = ['http://www.stockmarket-coach.com/images/reading-stock-charts-candlestick-chart.jpg', 'http://www.simple-stock-trading.com/wp-content/uploads/2015/06/ibm_stock_chart_is_example_of_online_stock_charts.png', 'http://www.tradinggraphs.com/wp-content/uploads/2010/11/x-stock-graph.png'];
        Graphs.current = [];

        Graphs.setCurrent = function(graph) {
          Graphs.current[0] = graph;
        };

        return Graphs;
      }
  ]);
})();
