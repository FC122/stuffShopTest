/// <reference types="cypress" />
import shopPage from "../support/pages/shopPage"
import loginData from "../fixtures/loginData.json"
describe('Login tests', () => {
    let itemsResponse

    beforeEach("Wait for items to load", ()=>{
        cy.intercept('GET', `${Cypress.env("backendUrl")}/items`).as('getItems');
        cy.visit(Cypress.env("frontendUrl"))
        cy.wait("@getItems", {timeout:60000}).then(interception=>{
            itemsResponse = interception.response
        })
    })

    it("Log in modal should open upon clicking login button", ()=>{
        shopPage.logInButton().click()
        for(const methodName in shopPage.loginModal){
            shopPage.loginModal[methodName]().should("be.visible")
        }
    })

    it("User should be able to log in", ()=>{
        cy.intercept('GET', `${Cypress.env("backendUrl")}/users?username=${loginData.username}&password=${loginData.password}`).as('getUser');
        cy.logInThroughUI(loginData.username, loginData.password)
        cy.wait("@getUser").then(interception=>{
            expect(interception.response.statusCode).to.eq(200)
        })
    })
    
    it("Check that modal can get closed", ()=>{
        shopPage.logInButton().click()
        for(const methodName in shopPage.loginModal){
            shopPage.loginModal[methodName]().should("be.visible")
        }
        shopPage.loginModal.closeButton().click()
        for(const methodName in shopPage.loginModal){
            shopPage.loginModal[methodName]().should("not.be.shown")
        }
    })
})
