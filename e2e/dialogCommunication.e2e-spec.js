describe('dialog communication test', function() {
    it('should add book and display it in Dialog D', function() {
        //given
        browser.get('http://localhost:9000/');
        element(by.linkText('Dialog A')).click();
        element(by.css('[value="Add"]')).click();
        element(by.model('book.title')).sendKeys('Test title');
        element(by.model('book.author')).sendKeys('Test author');
        element(by.model('book.genre')).sendKeys('Test genre');
        element(by.model('book.year')).sendKeys('2000');
        element(by.css('[value="ok"]')).click();
        //when
        var bookListDialogA = element.all(by.repeater('item in data.books'));
        element(by.linkText('Dialog D')).click();
        var bookListDialogD = element.all(by.repeater('item in data.books'));
        //then
        expect(bookListDialogA.count()).toEqual(bookListDialogD.count());
        expect(bookListDialogD.count()).toEqual(9);
    });
});
