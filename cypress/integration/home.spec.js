/// <reference types="cypress"/>

/* home.spec.js
 *
 * Dado que sou usuário castrado na automation practice web
 * Quando entro no portal
 * Então quero verificar se o portal está online
 */

describe('home page' , ()=> {
    it('página deve estar online' , ()=> {
        cy.viewport(1440, 900),
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a[title="Log in to your customer account"]').should('have.text', '\n\t\t\tSign in\n\t\t')
    })
})
   