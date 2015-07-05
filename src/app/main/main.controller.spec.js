(function() {

  describe('test angularIe8', function() {

    beforeEach(module('angularIe8'));

    describe('test MainController', function(){

      var scope, mainController;

      beforeEach(inject(function($rootScope, $controller) {
          scope = $rootScope.$new();
          mainController = $controller('MainController', {$scope: scope});
      }));

      it('should uppercase correctly', function(){
        expect(scope.message).toEqual('world');
      });

    });
  });

})();