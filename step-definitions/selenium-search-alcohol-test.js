let {$, sleep} = require('./funcs');

module.exports = function () {

  let search;

 //Scenario: Successfully sök product på Systemnolagets webb

          //Given that I am on the Systembolaget.se page
            this.Given(/^that I am on the Systembolaget.se page$/, async function () {
                await helpers.loadPage('https://www.systembolaget.se/');
               // await sleep(3000);
            });
            
        
        
           
        
           //And then I am searching a product
           this.Given(/^then I am searching a product$/, async function () {
            let searchProduct = await $('.form #productSearchForm');
            assert.notEqual(searchProduct, null, 'could not found a product');
            await searchProduct.sendKeys("gambrinus");
            
            
           
            let button = await $('.button #ProductSearchSubmitButton');
            assert.notEqual(icon, "Could not find the button");
            await button.click();
          });
           
    
            
    
        
 
    
    // When I get the product
        this.When(/^I get the product$/, async function () {
            
          
     });
    
    //When I get the product 
    

//And then I should check the product included ”Maltig smak med inslag av knäckebröd, aprikos, örter, apelsinskal och honung”.
   
this.When(/^then I should check the product included ”Maltig smak med inslag av knäckebröd, aprikos, örter, apelsinskal och honung”\.$/, function () {  
});      
    
    //Scenario: Successfully sök a product på Systemnolagets webb
    //Given that I am on the Systembolaget.se page
    //And then I am searching after ”ballast” 
    this.Given(/^then I am searching after ”ballast”$/, function () {
    });
    //When I get the product 
    //Then I should report how many items are available in the intire range as well as  through agents. 
    this.Then(/^I should report how many items are available in the intire range as well as  through agents\.$/, function () {
    });
  

    //Scenario: Successufully hitta Systembolaget på annat ort
    //Given that I am on the Systembolaget.se page
  
    //And then I am finding the system company in Burlöv Centrum
    this.Given(/^then I am finding the system company in Burlöv Centrum$/, function () {
    }); 
    //And then confirm they have open 10.00-19.00 on Fridays.
    this.Given(/^then confirm they have open (\d+)\.(\d+)\-(\d+)\.(\d+) on Fridays\.$/, function (arg1, arg2, arg3, arg4,) {  
    });


//Scenario: Successfully sök en produkt
//Given that I am on the Systembolaget.se page
//And then I am searching after ”Nanny state” 
this.Given(/^then I am searching after ”Nanny state”$/, function () {
});
//When I get the product 
//Then I should add the product to cart 
this.Then(/^I should add the product to cart$/, function () {
});
//And then go to the cart enter store "Hansa" 
this.Then(/^then go to the cart enter store "([^"]*)"$/, function (arg1,) {
});
//And then confirm that there are more than 10 copies in this store.
this.Then(/^then confirm that there are more than (\d+) copies in this store\.$/, function (arg1,) {
});

}
