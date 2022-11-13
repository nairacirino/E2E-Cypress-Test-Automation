# AUTOMAÇÃO DE TESTE E2E USANDO CYPRESS

## SUMARIO

   * [Descrição do Projeto](#DESCRIÇÃO-DO-PROJETO)
   * [Linguagens e Ferramentas Utilizadas](#LINGUAGENS-E-FERRAMENTAS-UTILIZADAS)
   * [Etapas de Construção do Projeto](#ETAPAS-DE-CONSTRUÇÃO-DO-PROJETO)
   * [Licença e Restrições](#LICENÇA-E-RESTRIÇÕES)

## DESCRIÇÃO DO PROJETO

Projeto criado em um desafio de automação proposto no programa Reset, da CWI. 

O objetivo do desafio era implementar um cenário de criação de conta de usuário no ecommerce https://magento.softwaretestingboard.com/, cenário esse que deveria: 

* Acessar a página inicial da loja
* Realizar o cadastro do usuário atráves do link 'Create an Account'
* Com o usuário cadastrado, adicionar um endereço padrão via 'Default Billing Address'
* Finalizar na tela de 'My Account'

## LINGUAGENS E FERRAMENTAS UTILIZADAS

O cenário foi criado utilizando <b>Cypresss</b> e <b>JavaScript</b>, seguindo o padrão Page Object.

O versionamento do código foi feito utilizando o Git através do GitKraken.

## ETAPAS DE CONSTRUÇÃO DO PROJETO

Iniciei o projeto completando o planejamento do teste:

* Objetivo e tipo de teste já foram definidos no próprio desafio: implementar um cenário de criação de conta de usuário no ecommerce https://magento.softwaretestingboard.com/ usando o Cypress.
* Escopo: os entregáveis/evidências foram definidos também no desafio. Para definir a massa de dados necessária, fiz um teste exploratório do fluxo, anotando as telas envolvidas e os campos a serem preenchidos.
* Riscos: o principal risco identificado foi a indisponibilidade do site ou quebra de alguma biblioteca utilizada na construção do teste. 
* Estimativa: estimei 1 dia para construção do teste, 1 dia para refatoramento e documentação.
* Métricas/Acompanhamento: não se aplica ao projeto em questão.

Iniciei a modelagem do teste com a criação da estrutura do projeto: criação da pasta do projeto, instalação e configuração dos módulos. Como já havia mapeado as telas e elementos envolvidos, estruturei os arquivos do projeto usando o padrão Page Object, criando uma pasta para cada página, e fiz o relacionamento entre os arquivos com as exportações e importações necessárias. 

Criei então a massa de dados que seria necessária para o teste: especifiquei os elementos envolvidos no processo nos arquivos elements.js de cada página, conforme mapeamento já feito anteriormente. 

Escrevi as etapas do teste nos arquivos index.js de cada página e criei o caso de teste no arquivo signing-up.cy.js

Uma vez escrito e funcionando como esperado, refatorei o código para dar maior clareza e aderência aos padrões e boas práticas do framework.

## LICENÇA E RESTRIÇÕES

Projeto criado sob a licença CC0 1.0 Universal - Dedicação ao Domínio Público. Saiba mais sobre esse tipo de licença <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR'>. Mas se estiver com preguiça, em resumo, sob esta licença estou renunciando a todos os meus direitos de autor e/ou de direitos conexos referentes ao trabalho, em todo o mundo, na medida permitida por lei.

Você pode copiar, modificar, distribuir e executar o trabalho, mesmo para fins comerciais, sem pedir minha autorização e sem atribuição de créditos. 

Vale ressaltar: apenas a criação do teste é de minha autoria. Não tenho qualquer propriedade intelectual sobre o desafio original, frameworks e padrões utilizados.
