import shopPage from "../pages/shopPage"
Cypress.Commands.add("logInThroughUI", (username, password)=>{
    shopPage.logInButton().click()
    shopPage.loginModal.usernameInput().type(username)
    shopPage.loginModal.passwordInput().type(password)
    shopPage.loginModal.loginButton().click()
})