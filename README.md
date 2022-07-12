Gestão de Vendas

Introdução

Gestão de estoque e vendas é uma aplicação web desenvolvida para a disciplina de Desenvolvimento de Aplicações Distribuídas (DAD), com o objetivo de utilizar os conceitos e exemplos repassados em sala de aula, assim como explorar e usufruir das funcionalidades de plataformas de computação em nuvem. Neste projeto utilizamos a Amazon Web Services (AWS).

Aplicação

Este projeto consiste de uma aplicação web para o gerenciamento de estoque e controle de vendas. Dentro da aplicação, o usuário poderá se cadastrar no site, verificar o andamento do estoque, assim como a sua manutenção com o que precisa ser abastecido, realizar o registro das vendas, consultar o histórico de movimentação dos produtos e das vendas.

Infraestrutura

Nossa aplicação foi dividida em front-end, desenvolvido com Javascript, Html e Css, e API, Node.js e Express. A API REST possui o CRUD completo das entidades usuário, produto e venda, fornecendo os endpoints que são consumidos pelo front-end. O front possui uma tela inicial de login, além dos formulários de cadastro e os relatórios de vendas e estoque.
Nossa infraestrutura de nuvem utilizará o Amazon Elastic Compute Cloud (EC2) do tipo t2.micro, com sistema operacional Ubuntu 18.04, para executar o container da aplicação. Utilizaremos para registrar os dados de vendas e produtos o cluster do MongoDB, que é um banco de dados não relacional com estrutura baseada em documentos no estilo JSON. Iremos usar uma instância para rodar a infraestrutura do back-end, com a api node.js integrada ao mongodb, e uma outra instância para executar o front-end que será acessado pelo usuário.
Usamos também o Nginx que é um servidor web responsável por processar as solicitações de forma orientada a eventos. Esse servidor oferece alto desempenho devido ao seu processamento assíncrono, além de possuir um balanceador de carga. Em nossa infraestrutura ele é responsável por hospedar a aplicação web e servir como proxy reverso. 
Nossa aplicação é gerenciada dentro do servidor pelo PM2, nos fornecendo a relação dos serviços em execução, das portas em uso e dos logs para acompanhamento das rotinas.

Referências

https://www.educba.com/nginx-vs-tomcat/
https://nginx.org/en/
https://pm2.io/docs/enterprise/aws/
https://www.digitalocean.com/community/tutorials/how-to-secure-mongodb-on-ubuntu-20-04
https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04-pt
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

