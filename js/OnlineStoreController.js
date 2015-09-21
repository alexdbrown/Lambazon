onlineStore.controller('ProductsCtrl', function ProductsCtrl($scope) {
  $scope.products = [];
  $scope.addProduct = function() {
    $scope.products.push({
      name: $scope.productName,
      description: $scope.productDescription,
      price: $scope.productPrice,
      quantity: $scope.productQuantity
    });
  }
});
