Cypress.Commands.add('getItems', (failOnStatusCode=true) => {
    cy.request({
      method: 'GET',
      url:Cypress.env("backendUrl")+"/items",
      failOnStatusCode:failOnStatusCode
    }).then(response=>{
        return response
    })
})  