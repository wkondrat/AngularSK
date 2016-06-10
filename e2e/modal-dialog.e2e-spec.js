describe('modal-dialog test', function() {

    it('should get initial list of books equals 8', function() {
        //given
        browser.get('http://localhost:9000/#/component-1/dialog-a');
        //when
        var bookList = element.all(by.repeater('item in data.books'));
        //then
        expect(bookList.count()).toEqual(8);
    });

    it('should add a book', function() {
        //given
        browser.get('http://localhost:9000/#/component-1/dialog-a');
        //when
        element(by.css('[value="Add"]')).click();
        element(by.model('book.title')).sendKeys('Test title');
        element(by.model('book.author')).sendKeys('Test author');
        element(by.model('book.genre')).sendKeys('Test genre');
        element(by.model('book.year')).sendKeys('2000');
        element(by.css('[value="ok"]')).click();
        var bookList = element.all(by.repeater('item in data.books'));
        //then
        expect(bookList.count()).toEqual(9);
    });

    it('should edit a book', function() {
        //given
        browser.get('http://localhost:9000/#/component-1/dialog-a');
        //when
        element(by.repeater('item in data.books').row(0)).click()
        if (element(by.css('[value="Edit"]')).isDisplayed()) {
            element(by.css('[value="Edit"]')).click();
        }
        element(by.model('book.title')).clear().sendKeys('Test title');
        element(by.model('book.author')).clear().sendKeys('Test author');
        element(by.model('book.genre')).clear().sendKeys('Test genre');
        element(by.model('book.year')).clear().sendKeys('2000');
        element(by.css('[value="ok"]')).click();
        var bookList = element.all(by.repeater('item in data.books'));
        var editedBook = element(by.repeater('item in data.books').row(0).column('item.title')).getText();
        //then
        expect(bookList.count()).toEqual(8);
        expect(editedBook).toEqual('Test title');
    });
});
