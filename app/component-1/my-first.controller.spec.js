describe('Controller: MyFirstController', function() {

    beforeEach(module('app.component1'));

    var Ctrl, scope,
        _$modal_ = {
            result: {
                then: function(confirmCallback, cancelCallback) {
                    this.confirmCallBack = confirmCallback;
                    this.cancelCallback = cancelCallback;
                    return this;
                },
                catch: function(cancelCallback) {
                    this.cancelCallback = cancelCallback;
                    return this;
                },
                finally: function(finallyCallback) {
                    this.finallyCallback = finallyCallback;
                    return this;
                }
            },
            close: function(item) {
                this.result.confirmCallBack(item);
            },
            dismiss: function(item) {
                this.result.cancelCallback(item);
            },
            finally: function() {
                this.result.finallyCallback();
            }
        };

    beforeEach(inject(
        function($controller, $rootScope) {
            scope = $rootScope.$new();
            Ctrl = $controller('MyFirstController', {
                $scope: scope,
                $modal: _$modal_,
                books: function() {
                    return [];
                }
            });
        }));

    describe('MyFirstController tests', function() {
        it('should instantiate the controller properly', function() {
            expect(Ctrl).toBeDefined();
            expect(scope.isEditButtonVisible).toEqual(false);
            expect(scope.isGenreTableVisible).toEqual(false);
        });

    });
});
