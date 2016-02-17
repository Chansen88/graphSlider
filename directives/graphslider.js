'use strict';
(function() {
  angular
    .module('GraphSlider')
    .directive('graphSlider', function() {
      return {
        template: `<table>
          <tr ng-repeat="graph in vm.graphs track by $index" ng-drop="true" ng-drop-success="vm.onDropComplete($index, $data, $event)">
            <td ng-drag="true" ng-drag-data="graph">
              <div>{{$index}}</div>
              <img ng-src="{{graph.img}}" ng-click="vm.setCurrent(graph)" alt="graph thumbnail" class="thumbnail" />
            </td>
          </tr>
        </table>
        <button type="button" ng-click="vm.newpage()">+</button>`
      };
    });
})();
