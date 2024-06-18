/// <reference types="cypress" />
import shopPage from "../support/pages/shopPage"

describe('Item tests', () => {
    let itemsResponse;
    beforeEach("Wait for items to load", ()=>{
        cy.intercept('GET', `${Cypress.env("backendUrl")}/items`).as('getItems');
        cy.visit(Cypress.env("frontendUrl"))
        cy.wait("@getItems", {timeout:60000}).then(interception=>{
            itemsResponse = interception.response
        })
    })

    it("Items should be displayed", ()=>{
        shopPage.items().should("have.length", itemsResponse.body.length);
    })

    it("Items data should be displayed", ()=>{
        itemsResponse.body.forEach((item,index)=>{
            shopPage.itemNameLabel(index).should("contain", item.name); 
            shopPage.itemDetailsLabel(index).should("contain", item.description); 
            shopPage.itemPriceLabel(index).should("contain", `$ ${item.price}`);
            shopPage.itemSupplyLabel(index).should("contain", `Supply: ${item.supply}`); 
            shopPage.itemPicture(index).should("be.visible")
        })
    })

    it("Item search should display searched items", ()=>{
        let index = itemsResponse.body.length-1
        let item = itemsResponse.body[index]
        shopPage.searchInput().type(item.name)
        shopPage.itemNameLabel(0).should("contain", item.name); 
        shopPage.itemDetailsLabel(0).should("contain", item.description); 
        shopPage.itemPriceLabel(0).should("contain", `$ ${item.price}`);
        shopPage.itemSupplyLabel(0).should("contain", `Supply: ${item.supply}`); 
        shopPage.itemPicture(0).should("be.visible")
    })
})