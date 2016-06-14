describe('myStringService', function() {
    'use strict'

    var myStringService;

    beforeEach(module('app.component1'));

    beforeEach(inject(function(_myStringService_) {
        myStringService = _myStringService_;
    }));

    describe('functions tests', function() {
        it('should concatenate three strings "One" "Two" "Three" and return "OneTwoThree"', function() {
            // given
            var str1 = "One",
                str2 = "Two",
                str3 = "Three",
                result;
            // when
            result = myStringService.concatenateThreeStrings(str1, str2, str3);
            //then
            expect(result).toEqual("OneTwoThree");
        });

        it('should concatenate two strings "One" "Two", fill third by undefined and return "OneTwoundefined"', function() {
            // given
            var str1 = "One",
                str2 = "Two",
                result;
            // when
            result = myStringService.concatenateThreeStrings(str1, str2);
            //then
            expect(result).toEqual("OneTwoundefined");
        });

        it('should replace first occurence of "Ala" by "Olek" in "Ala ma kota, Ala jest fajna" and return "Olek ma kota, Ala jest fajna"', function() {
            // given
            var oldString = "Ala",
                newString = "Olek",
                stringWhereReplace = "Ala ma kota, Ala jest fajna",
                result;
            // when
            result = myStringService.repleceOneStringByAnother(stringWhereReplace, oldString, newString);
            //then
            expect(result).toEqual("Olek ma kota, Ala jest fajna");
        });

        it('should replace first occurence of "it" by "XD" in "it was sunny day, without any clouds" and return "XD was sunny day, without any clouds"', function() {
            // given
            var oldString = "it",
                newString = "XD",
                stringWhereReplace = "it was sunny day, without any clouds",
                result;
            // when
            result = myStringService.repleceOneStringByAnother(stringWhereReplace, oldString, newString);
            //then
            expect(result).toEqual("XD was sunny day, without any clouds");
        });

        it('should replace all occurences of "Ala" by "Ania" in "Ala ma kota, Ala jest fajna" and return "Ania ma kota, Ania jest fajna"', function() {
            // given
            var oldString = "Ala",
                newString = "Ania",
                stringWhereReplace = "Ala ma kota, Ala jest fajna",
                result;
            // when
            result = myStringService.repleceAllOccurencesOneStringByAnother(stringWhereReplace, oldString, newString);
            //then
            expect(result).toEqual("Ania ma kota, Ania jest fajna");
        });

        it('should replace all occurences of "it" by "XD" in "it was sunny day, without any clouds" and return "XD was sunny day, wXDhout any clouds"', function() {
            // given
            var oldString = "it",
                newString = "XD",
                stringWhereReplace = "it was sunny day, without any clouds",
                result;
            // when
            result = myStringService.repleceAllOccurencesOneStringByAnother(stringWhereReplace, oldString, newString);
            //then
            expect(result).toEqual("XD was sunny day, wXDhout any clouds");
        });

        it('should reverse string "Ala ma kota" and return "atok am alA"', function() {
            // given
            var str = "Ala ma kota",
                result;
            // when
            result = myStringService.reverseString(str);
            //then
            expect(result).toEqual("atok am alA");
        });

        it('should replace every 3 char in "Ala ma kota" with $ and return "Al$ m$ k$ta"', function() {
            // given
            var str = "Ala ma kota",
                placeToStart = 3,
                newChar = '$',
                result;
            // when
            result = myStringService.replaceEveryXCharInStringWithOtherChar(str, placeToStart, newChar);
            //then
            expect(result).toEqual("Al$ m$ k$ta");
        });

        it('should not change "Ala ma kota"', function() {
            // given
            var str = "Ala ma kota",
                placeToStart = 15,
                newChar = '$',
                result;
            // when
            result = myStringService.replaceEveryXCharInStringWithOtherChar(str, placeToStart, newChar);
            //then
            expect(result).toEqual("Ala ma kota");
        });

        it('should parse "abcabcabca" into 3 lengthed strings in array', function() {
            // given
            var str = "abcabcabca",
                lengthOfStrings = 3,
                result = [];
            // when
            result = myStringService.parseStringIntoArrayOfXLengthStrings(str, lengthOfStrings);
            //then
            expect(result[1]).toEqual("abc");
            expect(result[3]).toEqual("a");
            expect(result.length).toEqual(4)
        });

        it('should parse "abc" into 3 lengthed strings in array', function() {
            // given
            var str = "abc",
                lengthOfStrings = 5,
                result = [];
            // when
            result = myStringService.parseStringIntoArrayOfXLengthStrings(str, lengthOfStrings);
            //then
            expect(result[0]).toEqual("abc");
            expect(result[0].length).toEqual(3)
        });

        it('should skip all uppercase chars in "ANGULAR!?" and return remaining in reverse order', function() {
            // given
            var str = "ANGULAR!?",
                result;
            // when
            result = myStringService.reverseLowerCaseChars(str);
            //then
            expect(result).toEqual("?!");
        });

        it('should skip all uppercase chars in "ALa ma koTA" and return remaining in reverse order', function() {
            // given
            var str = "ALa ma koTA",
                result;
            // when
            result = myStringService.reverseLowerCaseChars(str);
            //then
            expect(result).toEqual("ok am a");
        });

        it('should count spaces in "Ala ma kota" and return 2', function() {
            // given
            var str = "Ala ma kota",
                result;
            // when
            result = myStringService.countSpaces(str);
            //then
            expect(result).toEqual(2);
        });

        it('should count spaces in "Ala  ma  ko t a" and return 6', function() {
            // given
            var str = "Ala  ma  ko t a",
                result;
            // when
            result = myStringService.countSpaces(str);
            //then
            expect(result).toEqual(6);
        });

        it('should remove all a from "Ala ma kota" and return "Al m kot"', function() {
            // given
            var str = "Ala ma kota",
                char = 'a',
                result;
            // when
            result = myStringService.removeCharFromString(str, char);
            //then
            expect(result).toEqual("Al m kot");
        });

        it('should add all digits from "Ala ma 3 koty i 2 psy" and return 5', function() {
            // given
            var str = "Ala ma 3 koty i 2 psy",
                result;
            // when
            result = myStringService.addAllDigitsFromString(str);
            //then
            expect(result).toEqual(5);
        });

        it('should add all digits from "Ala ma 32 koty i 2 psy" and return 5', function() {
            // given
            var str = "Ala ma 32 koty i 2 psy",
                result;
            // when
            result = myStringService.addAllDigitsFromString(str);
            //then
            expect(result).toEqual(7);
        });

        it('should add all digits from "Ala ma kota" and return 5', function() {
            // given
            var str = "Ala ma kota",
                result;
            // when
            result = myStringService.addAllDigitsFromString(str);
            //then
            expect(result).toEqual(0);
        });
    });
});
