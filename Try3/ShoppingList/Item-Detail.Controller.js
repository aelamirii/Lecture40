(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);



ItemDetailController.$inject = ['$stateParams', 'items_resolve'];
function ItemDetailController($stateParams, items_resolve) {


  var itemDetail = this;

  var item = items_resolve[$stateParams.itemId];

  itemDetail.name_detail = item.name;
  itemDetail.quantity_detail = item.quantity;
  itemDetail.description_detail = item.description;


}


// ItemDetailController.$inject = ['item_detail_resolve'];
// function ItemDetailController(item_detail_resolve) {
//
//
//   var itemDetail = this;
//
//   itemDetail.name_detail = item_detail_resolve.name;
//   itemDetail.quantity_detail = item_detail_resolve.quantity;
//   itemDetail.description_detail = item_detail_resolve.description;
//
//
// }





})();
