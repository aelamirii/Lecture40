(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'Try4/ShoppingList/Templates/home.template.html'
  })

  .state('mainList', {
    url: '/main-List',
    templateUrl: 'Try4/ShoppingList/Templates/main-shoppingList.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items_resolve: ['ShoppingListService', function (ShoppingListService) {
                      return ShoppingListService.getItems();
      }]
    }
  })

  .state('mainList.itemDetail', {
    // url: '/item-detail/{itemId}',
    templateUrl: 'Try4/ShoppingList/Templates/item-detail.template.html',
    controller: 'ItemDetailController as itemdetail',
    params: {
      itemId: null
    }
    // resolve: {
    //   items_detail_resolve: ['$stateParams', 'ShoppingListService', function ($stateParams, ShoppingListService) {
    //                           return ShoppingListService.getItems()
    //                           .then(function (result) {
    //                               return result[$stateParams.itemId];
    //                           })
    //   }]
    // }
  })



}


})();
