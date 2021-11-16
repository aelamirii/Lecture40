(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);

ShoppingListService.$inject = ['$q', '$timeout'];
function ShoppingListService($q, $timeout) {

  var service = this;

    var items = [];
    // pre-populate a no cookie List
    items.push({
      name: "flour",
      quantity: "2 bags",
      description: "Sugar used for baking delicious ... baked goods"
    });

    items.push({
      name: "Sugar",
      quantity: "1 bag",
      description: "High quality wheat flour."
    });

    items.push({
      name: "Chocolate chips",
      quantity: "3 bag",
      description: "Put these in the dough."
    });


    service.getItems = function () {

      var deferrer = $q.defer();

      $timeout(function () {

        deferrer.resolve(items);

      }, 500);

      return deferrer.promise;
    }

}


})();
