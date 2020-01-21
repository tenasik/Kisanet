let {$, sleep} = require('./funcs');
let webdriver = require('selenium-webdriver');

module.exports = function(){

    let s = 1000;

    this.Given(/^that I am on the page www\.systembolaget\.se$/, async function(){
        await helpers.loadPage('https://www.systembolaget.se');
        await sleep(s);
        let button = await driver.findElement(by.xpath('/html/body/div[17]/div/div/div/div/div[2]/div[2]/button'));
        await button.click();
        await sleep(2*s);
    });

    this.When(/^I search for "([^"]*)"$/, async function(searchPhrase){
        let searchField = await $('#ProductSearchTextInput');
        let searchBtn = await $('#ProductSearchSubmitButton');
        await searchField.sendKeys(searchPhrase);
        await searchBtn.click();
    });

    
    this.Then(/^the products text includes "([^"]*)"$/, async function (description){
        let product = await $('.elm-product-list-item-full-info');
        await product.click();
        await sleep(4 *s);
        let prodDescription = (await $('.description'))[0];
        let prodText = await prodDescription.getText();
        assert(prodText.includes(description), "The product does not contains: " + description);
       });

       this.Then(/^the products list contains several products$/, async function (){
        let numbers = (await $('.elm-product-list-item-full-info')).length;
        await sleep(4 *s);
        
        console.log("Products list contains " + numbers + " products");
       });  

       this.When(/^I search for systembolaget i "([^"]*)"$/, async function(searchPhrase){
        let  openButik = (await $('a[href="/butiker-ombud/"'))[0];
        await sleep(2 *s);
        await openButik.click();
        await sleep(2 *s);
        let siteSearch = await $('#sitesearch_input');
        await siteSearch.sendKeys(searchPhrase);
        await sleep(4*s);
        let obj = (await $('.ng-scope.uib-typeahead-match'))[0];
        await sleep(4*s);
        await obj.click();
        await sleep(4*s);
        let objName = await $('.ext-unstyled-list.store-address-list');
        let objText = await objName.getText();
        assert(objText.includes(searchPhrase), "Ths is not: " + searchPhrase);
        await sleep(5 *s);
    });

    this.Then(/^confirm that is open from "([^"]*)" to "([^"]*)" on "([^"]*)"$/, async function (h1,h2,d){
        await sleep(s);
        let days = await $('.pull-left');
        let hours = await $('.pull-right');
        let sDay, sHours;
        
        for(let i=1; i<days.length; i++){
            sDay = await days[i].getText();
            await sleep(s);
            if(sDay.includes(d)){
                sHours = await hours[i-1].getText();
                break;
            }
        }
        assert(sDay.includes(d), "The day is not: " + d);
        assert(sHours.includes(h1), "Open time is not correct");
        assert(sHours.includes(h2), "Close time is not correct");
      }); 

      this.Then(/^put it in the shopping cart,$/, async function (){
        // Add the product to shopping cart  
        let obj = await $('.click-area.ng-scope.ng-isolate-scope');
        await obj.click();
        await sleep(2 *s);
    }); 
        
    this.Then(/^go to the shopping cart,$/, async function (){
        // Go to the shopping cart  
        let  obj = await $('a[href="/varukorg"]');
        await sleep(2 *s);
        await obj.click();
        await sleep(4 *s);
    });

    this.Then(/^enter the shop "([^"]*)"$/, async function (shop){
        //Enter the name of shop  
        let  obj = (await $('.a11y.ng-binding'))[0];
        await obj.click();
        await sleep(2 *s);
        obj = await $('#site-picker-input');
        await obj.sendKeys(shop);
        await sleep(3 *s);
        
        //let obj2 = await $('.name.combined-match.ng-binding.ng-scope');
        let obj2 = await $('#typeahead-24-4105-option-0 > div.name.combined-match.ng-binding.ng-scope');
        await sleep(3 *s);
        await obj2.click();
        await sleep(4 *s);
    });

    this.Then(/^and confirm that there are more than (\d+) copies in this store.$/, async function (n){
        // Read the quantity of the product in the shop
        let  obj = (await $('.pull-right.bold-text.ng-binding'));
        let textObj = await obj.getText();
        // Extract only numbers from text
        let numObj = textObj.replace(/[^0-9\.]+/g, "");
        //Confirm that there are more than "n" copies
        assert((numObj / 1) > (n / 1), "Copies of the product is less than " + n );
    });

}