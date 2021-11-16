(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl: 'Try1/ShoppingList/Templates/shoppingList.template.html',
  bindings: {
    items: '<'
  }
});



})();
