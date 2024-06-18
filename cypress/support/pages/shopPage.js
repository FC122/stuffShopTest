
module.exports={
    items:()=>cy.get(`.item`),
    itemNameLabel:(n)=> cy.get(`:nth-child(${n+1}) > .item > .item-details > .item-name`),
    itemDetailsLabel:(n)=> cy.get(`:nth-child(${n+1}) > .item > .item-details > :nth-child(2)`),
    itemPriceLabel:(n)=>cy.get(`:nth-child(${n+1}) > .item > .item-details > .item-price`),
    itemSupplyLabel:(n)=>cy.get(`:nth-child(${n+1}) > .item > .item-details > :nth-child(4)`),
    itemAddToCartButton:(n)=>cy.get(`:nth-child(${n+1}) > .item > .item-details > .add-to-cart-button`),
    itemPicture:(n)=> cy.get(`:nth-child(${n+1}) > .item > .item-image > .item-picture`),
    searchInput:()=>cy.get('input'),
    cartItemAmountLabel:()=>cy.get('h3'),
    logInButton:()=>cy.get('#login'),
    signUpButton:()=>cy.get('#signup'),
    cartButton:()=> cy.get('#cart'),
    titleLabel:()=>cy.get('h1'),
    loginModal:{
        loginButton:()=> cy.get('[type="submit"]'),
        closeButton:()=> cy.get('.close-button'),
        usernameInput:()=> cy.get('#username'),
        passwordInput:()=> cy.get('#password'),
        titleLabel:()=> cy.get('.modal-content > h2'),
        usernameLabel:()=> cy.get(':nth-child(1) > label'),
        passwordLabel:()=> cy.get(':nth-child(1) > label')
    }
}