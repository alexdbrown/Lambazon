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

onlineStore.controller('CustomersCtrl', function CustomersCtrl($scope) {
  $scope.customers = [];
  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.customerName,
      address: $scope.customerAddress,
      zip: $scope.customerZip
    });
  }
});
