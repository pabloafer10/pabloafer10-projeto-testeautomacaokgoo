class LoginPage{
    login(email, senha) {
        cy.get('input[id="email"]').type(email)  
        cy.get('input[id="passwd"]').type(senha)
        cy.get('i[class="icon-lock left"]').click()
    }
}
export default new LoginPage