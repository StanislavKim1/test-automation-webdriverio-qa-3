const assert = require('assert');

describe('Client', function () {

    it('Favicon', function () {
        browser.url('/favicon.ico');
        let icon = $('img');
        let width = icon.getCSSProperty('width').parsed.value;
        let height = icon.getCSSProperty('height').parsed.value;
        let size = `${width}x${height}`;
        assert.equal(size, '256x256');
    })

    it('get title', function () { // получить название теста
         //open baseUrl + string passed in .url() function. Браузер урл и ввожу переменную тайтл.
        browser.url('/');
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        //browser.pause(); //just pause to visually see that something is happening on the page
        console.log(title); //log "title" variable
        assert.equal(title, 'Bug Tracker'); //compare that "title" variable equals to "Bug Tracker" and error-message if not.
    })
    it('get global header', function () { // получить название теста
        let header = $('.custom-header').isDisplayed(); //get page title and assign it to the "title" variable
        //browser.pause(); //just pause to visually see that something is happening on the page
        assert.equal(header, true); //compare that "title" variable equals to "Bug Tracker" and error-message if not.
    })
    it('get global footer', function () { // получить название теста
        let footer = $('.custom-footer').isDisplayed(); //get page title and assign it to the "title" variable
        //browser.pause(); //just pause to visually see that something is happening on the page
        assert.equal(footer, true); //compare that "title" variable equals to "Bug Tracker" and error-message if not.
    })
    it('get global App', function () { // получить название теста
        let app = $('.p-5').isDisplayed(); //get page title and assign it to the "title" variable
        //browser.pause(); //just pause to visually see that something is happening on the page
        assert.equal(app, true); //compare that "title" variable equals to "Bug Tracker" and error-message if not.
    })

});


/*
Verify that page level title is “Bug Tracker” .
Verify that the app has Global Header
Verify that the app has Global Footer
Verify that Bug Tracking System (aka App itself) between them.
Verify that app works without any layout issues in 1920x1080
Verify that app works without any layout issues in 1366x768
Verify that app works at Chrome browser.

 import assert from ‘assert’;

describe(‘Registration’, function () {

   describe(‘Back Button’, function () {

       it(‘Get text’, function () {
           browser.url(‘/’);
           $(‘#registration’).click();
           let text = $(‘#back’).getText();
           assert.equal(text, ‘< Back’);
       })

       it(‘Get button aligning’, function () {
           let aligning = $(‘#back’).getCSSProperty(‘align-items’).value;
           assert.equal(aligning, ‘flex-start’);
       })

       it(‘Get button font size’, function () {
           let fontSize = $(‘#back’).getCSSProperty(‘font-size’).value;
           assert.equal(fontSize, ‘16px’);
       })

       it(‘Get button font weight’, function () {
           let fontWeight = $(‘#back’).getCSSProperty(‘font-weight’).value;
           assert.equal(fontWeight, ‘400’);
       })

       it(‘Get button font family’, function () {
           let fontFamily = $(‘#back’).getCSSProperty(‘font-family’).value;
           assert.equal(fontFamily, ‘segoe ui’);
       })

       it(‘Get button font color’, function () {
           let fontColor = $(‘#back’).getCSSProperty(‘color’).parsed.hex;
           assert.equal(fontColor, ‘#ffffff’);
       })

       it(‘Get button color’, function () {
           let color = $(‘#back’).getCSSProperty(‘background-color’).parsed.hex;
           assert.equal(color, ‘#17a2b8’);
       })

       it(‘Get button hover color’, function () {
           $(‘#back’).moveTo();
           browser.pause(1000);
           let hoverColor = $(‘#back’).getCSSProperty(‘background-color’).parsed.hex;
           assert.equal(hoverColor, ‘#138496’);
       })

   });
});

*/