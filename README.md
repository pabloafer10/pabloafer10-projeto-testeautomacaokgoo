# pabloafer10-projeto-testeautomacaokgoo
Teste Automação em Cypress KGo
Projeto de Teste desenvolvido para logar no Portal, adicionar um produto e realizar seu pagamento
URL: http://www.automationpractice.com/
Email: teste2021@teste.com.br
Senha: teste

O projeto possui as seguintes funcionalidades:

 Logar no Portal utilizando dados fornecidos
 Seleciona um item para adicionar ao carrinho
 Verifica os item do carrinho 
 Confirma dados de entrega e forma de pagamento
 Emite uma ordem de compra e verifica se a ordem foi emitida com sucesso.
 
Estrutura do projeto:
Desenvolvido em Cypress sem utilização direta do Cucumber 
Possui relatório em formato html, com evidência dos testes em anexo (imagens) - Pastas screenshots(imagens BUGS) e videos (videodo teste formato MP4)
 
Configurando o ambiente:
Antes de rodar os testes, por favor instale:

1 - [Node JS] - Instalando node (recomendado versão v14.18.3)

Guia Instalando Node no Windows: https://docs.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows


2 - [Visual Studio Code] - Instalando VS Code

Guia Instalando VS Code no Windows: https://code.visualstudio.com/docs/setup/windows

3 - [Cypress] - Instalando Cypress no projeto

Guia Instalando Cypress no Windows: https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn

Executando os testes:
4 - [Rodando os testes]

Para rodar os testes execute o seguinte comando no terminal do VS Code: npx cypress open
	Após aberto o projeto na interface do Cypress
	Escolher qual navegador deve ser efetuado o teste
Para rodar os testes em segundo plano com a geração de evidências em video (Todo teste) e imagens (BUGS): npx cypress run
