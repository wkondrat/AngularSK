describe('Controller: MyModalController', function () {

  beforeEach(module('app.component1'));

  var Ctrl;
  var scope;
  var modalInstance;

  // Initialize the controller and a mock scope
  beforeEach(inject(
    function ($controller, $rootScope) {
      scope = $rootScope.$new();
      modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      };
      Ctrl = $controller('MyModalController', {
        $scope: scope,
        $modalInstance: modalInstance,
        book: function () { return {} }
      });
    })
  );

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(Ctrl).toBeDefined();
    });

    it('should close the modal with result scope.book when ok()', function () {
      scope.ok();
      expect(modalInstance.close).toHaveBeenCalledWith(scope.book);
    });

    it('should close the modal with result \'cancel\' when cancel()', function () {
      scope.cancel();
      expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
    });
  });
});
