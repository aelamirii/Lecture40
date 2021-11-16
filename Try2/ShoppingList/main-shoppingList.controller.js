(function () {

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);



MainShoppingListController.$inject = ['items_resolve'];
function MainShoppingListController(items_resolve) {

  var mainList = this;

  mainList.Items = items_resolve;



};


// ItemDetailController.$inject = ['ShoppingListService'];
// function ItemDetailController(ShoppingListService) {
//
//   var mainList = this;
//
//   mainList.Items = [];
//
//   mainList.$onInit = function () {
//
//     ShoppingListService.getItems()
//     .then(function (result) {
//       mainList.Items = result;
//     })
//
//   }
//
// };


})();
