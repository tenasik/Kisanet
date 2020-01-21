Feature:

Som en användare vill jag kunna söka efter en produkt på Systembolagets webb,
för att få en bekräftelse på att jag valt rätt varor.

Scenario: Successfully sök product på Systemnolagets webb
Given that I am on the Systembolaget.se page
And then I am searching a product
When I get the product 
And then I should check the product included ”Maltig smak med inslag av knäckebröd, aprikos, örter, apelsinskal och honung”.

Scenario: Successfully sök a product på Systemnolagets webb
Given that I am on the Systembolaget.se page
And then I am searching after ”ballast” 
When I get the product 
Then I should report how many items are available in the intire range as well as  through agents. 
   

Scenario: Successufully hitta Systembolaget på annat ort
Given that I am on the Systembolaget.se page
And then I am finding the system company in Burlöv Centrum 
And then confirm they have open 10.00-19.00 on Fridays.
    


Scenario: Successfully sök en produkt
Given that I am on the Systembolaget.se page
And then I am searching after ”Nanny state” 
When I get the product 
Then I should add the product to cart 
And then go to the cart enter store "Hansa" 
And then confirm that there are more than 10 copies in this store.






