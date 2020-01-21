Feature: Systembolaget 

Scenario: Search for "gambrinus" på systemboget
Given that I am on the page www.systembolaget.se
When I search for "gambrinus"
Then the products text includes "Maltig smak med inslag av knäckebröd, aprikos, örter"

Scenario: Search for "ballast" på systemboget
Given that I am on the page www.systembolaget.se
When I search for "ballast"
Then the products list contains several products

Scenario: hitta systembolaget i Burlövs Centrum och bekräfta att de har öppet 10.00-19.00 på fredagar.
Given that I am on the page www.systembolaget.se
When I search for systembolaget i "Burlövs Centrum"
Then confirm that is open from "10:00" to "19:00" on "Fredag"

Scenario: Search for "Nanny state" på systemboget
Given that I am on the page www.systembolaget.se
When I search for "Nanny state"
Then put it in the cart and go to the cart
And then enter store "Hansa"
And then confirm that there are more 10 pieces in this store
