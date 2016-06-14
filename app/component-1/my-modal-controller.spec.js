describe('Controller: MyModalController', function() {

    beforeEach(module('app.component1'));

    var Ctrl,
        scope,
        modalInstance;

    beforeEach(inject(
        function($controller, $rootScope) {
            scope = $rootScope.$new();
            modalInstance = {
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            Ctrl = $controller('MyModalController', {
                $scope: scope,
                $modalInstance: modalInstance,
                book: function() {
                    return {}
                }
            });
        }));

    describe('Modal controller tests', function() {
        it('should instantiate the controller properly', function() {
            expect(Ctrl).toBeDefined();
        });

        it('should close the modal with result scope.book when ok()', function() {
            //when
            scope.ok();
            //then
            expect(modalInstance.close).toHaveBeenCalledWith(scope.book);
        });

        it('should close the modal with result \'cancel\' when cancel()', function() {
            //when
            scope.cancel();
            //then
            expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
        });
    });
});
