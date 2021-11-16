(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'items_resolve'];
function ItemDetailController($stateParams, items_resolve) {

  var item_detail = this;

  var item = items_resolve[$stateParams.itemId];

  item_detail.name_detail = item.name;
  item_detail.qauntity_detail = item.quantity;
  item_detail.description_detail = item.description;


}


})();
