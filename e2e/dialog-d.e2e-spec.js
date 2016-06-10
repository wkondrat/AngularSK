describe('dialog-d test', function() {

    it('should get initial list of books equals 8', function() {
        //given
        browser.get('http://localhost:9000/#/component-3/dialog-d');
        //when
        var bookList = element.all(by.repeater('item in data.books'));
        //then
        expect(bookList.count()).toEqual(8);
    });

    it('should isGenreTableVisible table be not visible', function() {
        //given
        browser.get('http://localhost:9000/#/component-3/dialog-d');
        //when
        //then
        expect($('[ng-show=isGenreTableVisible]').isDisplayed()).toBeFalsy();
    });

    it('should show isGenreTableVisible containing books with genre as selected book', function() {
        //given
        browser.get('http://localhost:9000/#/component-3/dialog-d');
        //when
        element(by.repeater('item in data.books').row(5)).click();
        var bookList = element.all(by.repeater('item in booksByGenre'));
        var selectedBookGenre = element(by.repeater('item in data.books').row(5).column('item.genre')).getText();
        var displayedBooksGenre = element(by.repeater('item in booksByGenre').row(0).column('item.genre')).getText();
        //then
        expect($('[ng-show=isGenreTableVisible]').isDisplayed()).toBeTruthy();
        expect(bookList.count()).toEqual(2);
        expect(selectedBookGenre).toEqual(displayedBooksGenre);
    });
});
