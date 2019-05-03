const assert = require('assert');

describe('General', function () {

    it('Header width', function () {
        browser.url('/');
        let paddingLeft  = $ ('.container').getCSSProperty('padding-left').parsed.value;
        let paddingRight = $ ('.container').getCSSProperty('padding-right').parsed.value;
        let pageWidth   = $ ('.container').getCSSProperty('width').parsed.value - paddingLeft - paddingRight;
        let headerWidth = $ ('.custom-header').getCSSProperty('width').parsed.value;
        assert.equal(headerWidth, pageWidth); //compare that "title" variable equals to "Bug Tracker" and error-message if not.
    })


});
/*Verify that Global Header component is always displayed on the top of the page. TO DO

"Verify that it contains only title with icon in format: “Bug{icon}Tracker”
"
"Verify that icon is the same as favicon.ico.
"*/