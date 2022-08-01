/// <reference types="cypress"/>
import LoginPage from '../page/loginPage'

/* login.spec.js
 *
 * Dado que portal da automation practice web encontra se online
 * Quando eu clico em Sign In
 * Então devo logar no portal com email e senha válidos 
 */


context('Logar no portal', () => {
    let data
    before(() => {
        cy.fixture('user').then( dadosUsuario => {
            data = dadosUsuario
        });
    });

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    });
    it('fazer login no portal', ()=> {
        cy.get('a[title="Log in to your customer account"]').click()

        LoginPage.login(data.email, data.senha)

    })
})