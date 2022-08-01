/// <reference types="cypress"/>

/* product.spec.js
 *
 * Dado que acesso pagina inicial da automation practice web 
 * Quando eu escolho o produto
 * E adiciono ao carrinho verificando os itens adicionado
 * Então devo realizar o pagamento do produto
*/


context('Dado que acesso o Portal', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=my-account')
    });


    it('Quando faço a busca pelo produto', ()=> {

        cy.get('a[title="Women"]').click()
        cy.get(':nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
        cy.wait(6000)
        cy.window('.swal2-popup>.swal2-html-container')
        
    })

    it('Quando verifico itens para realizar pagamento', ()=> {

        var produto ={
            quantidade : 1
            
        }
        var data ={
            email : "teste2021@teste.com.br",
            senha : "teste"
        }

        cy.visit('http://automationpractice.com/index.php?id_product=2&controller=product')
        cy.get('input[name="qty"]').clear()
        cy.get('#quantity_wanted').click().type(produto.quantidade, {force: true})
        cy.get('#group_1').select('2')
        cy.get('#color_11').click()
        cy.get('#add_to_cart').click(), {force: true}
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')
        cy.get('.layer_cart_product > h2').should('be.visible')
        cy.get('div a.btn-default').contains('Proceed to checkout').click(), {force: true}
        cy.get('a[class="button btn btn-default standard-checkout button-medium"]').click()
        //Portal não persistiu com login
        cy.get('#email').type(data.email)
        cy.get('#passwd').type(data.senha)
        cy.get('#SubmitLogin > span').click()
        cy.get('button[name="processAddress"]').click()
        cy.get('input[value="2,"]').click()
        cy.get('input[id="cgv"]').click()
        cy.get('button[name="processCarrier"]').click()   
        cy.get('.bankwire').click()
        
        cy.contains('I confirm my order').click()
        //cy.get('a[title="Pay by bank wire"]').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('p').should('be.visible')
          
    })
    
})