(function() {

  angular
    .module('angularIe8')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.message = 'world';
  }

})();
