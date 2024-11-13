# EnglishQuest - Sistema para resolver questões em Inglês

## Visão Geral

EnglishQuest is a web platform designed to help users practice and solve English language exercises and questions. It aims to improve language skills through interactive challenges and personalized content.

## Tecnologias Utilizadas

- Linguagens: Node.js v18, TypeScript v5, JavaScript 
- Frameworks: Spring Boot 2.7(JDK), React(versão 18)(NodeJs 18)
- Banco de Dados: MySQL v8
- Servidor: Amazon Web Services (AWS)
- Hospedagem: Amazon Relational Database Service
- HTML v5
- CSS v3
- Ferramenta de construção Front-End: Vite (versão 4)

## Principais Funcionalidades

### Escolher questões Enem

- Permite ao usuário escolher questões do tipo enem

### Escolher questões Gramática

- Permite ao usuário escolher questões do tipo gramática

### Sortear questão

- Sortear uma questão aleatória dentro de uma categoria escolhida (ex: Enem, Gramática).
- Exibir questão sorteada com opção de responder ou descartar.
- Armazenar histórico das questões já sorteadas.

### Escolher assunto

- Listar assuntos disponíveis para seleção (ex: Exercícios de Inglês WAS WERE DID ).
- Exibir questões do tema escolhido ao clicar no botão draw question

### Responder questões

- Exibir área para o usuário responder a questão.
- Validar resposta e fornecer feedback imediato (correto/incorreto).
- Salvar resposta para análise de desempenho futuro.

### Sortear nova questão

- Sortear uma nova questão,após finalizar a questão atual e clicar no botão draw question.
- Evitar repetição de questões já sorteadas na mesma sessão.
- Exibir feedback sobre a questão anterior antes de sortear a nova.

### Escolher outro tema

- Permitir troca de tema sem perder o progresso atual.
- Exibir lista de temas disponíveis para seleção.
- Salvar o progresso atual antes de trocar de tema.

### Visualizar progresso

- Exibir o número de questões respondidas corretamente e a taxa de acerto.
- Exibir o número de questões respondidas incorretamente e a taxa de erro.
- Exibir o número total de questões e a porcentagem de questões respondidas em relação ao total.

### Planejar objetivo semanalPlanejar objetivo semanal

- Permitir que o usuário defina um objetivo semanal (ex: número de questões a responder).
- Exibir progresso em relação ao objetivo semanal definido.
- Mostrar um gráfico para acompanhar a quantidade de questões respondidas por dia.

## Padrões de Commit

- Utilize mensagens de commit descritivas que expliquem as mudanças realizadas.
- Use verbos no imperativo (ex. "Adicione uma nova funcionalidade" em vez de "Adicionado uma nova funcionalidade").
- Adicione um identificador de problema se estiver vinculado a um problema de rastreamento (por exemplo, "Adicione #123 para corrigir o problema #123").

## Uso de Branches

- Mantenha master (ou main) como a branch principal e estável.
- Crie branches de recursos ou tarefas separadas para desenvolvimento, por exemplo, feature/nova-funcionalidade ou bugfix/correcao-de-bug.
- Use branches de lançamento (como baseline+versão) para preparar versões para produção.

## Estrutura de diretório

my-project/ ├── backend/ # Código do servidor Node.js com Express, Spring Boot ou outro framework back-end │ ├── node-backend/ # Diretório do backend com Node.js │ │ ├── src/ # Código fonte │ │ │ ├── controllers/ # Controladores da API │ │ │ ├── models/ # Modelos de dados e schemas (Mongoose para MongoDB, Sequelize para SQL, etc.) │ │ │ ├── routes/ # Definições de rotas da API │ │ │ ├── services/ # Lógica de negócios │ │ │ ├── utils/ # Funções utilitárias │ │ │ ├── app.ts # Arquivo principal de configuração do app │ │ │ ├── server.ts # Arquivo para inicialização do servidor │ │ ├── package.json # Dependências do Node.js, scripts, etc. │ │ └── tsconfig.json # Configuração do TypeScript │ └── spring-boot-backend/ # Diretório do backend com Spring Boot (se for utilizado) │ ├── src/ │ │ ├── main/ # Código fonte principal │ │ │ ├── java/ # Código Java │ │ │ ├── resources/ # Arquivos de configuração do Spring (application.properties ou application.yml) │ │ │ ├── controllers/ # Controladores do Spring Boot │ │ │ ├── models/ # Entidades e classes de modelo │ │ ├── pom.xml # Gerenciamento de dependências com Maven (ou build.gradle com Gradle) │ └── build/ # Arquivos gerados pela compilação │ ├── frontend/ # Código do front-end com React e Vite │ ├── src/ # Código fonte do front-end │ │ ├── assets/ # Imagens, fontes, ícones, etc. │ │ ├── components/ # Componentes React reutilizáveis │ │ ├── pages/ # Páginas ou views do React │ │ ├── hooks/ # Hooks customizados │ │ ├── services/ # Funções para fazer chamadas de API │ │ ├── store/ # Gerenciamento de estado (Redux, Context API, etc.) │ │ ├── styles/ # Arquivos CSS ou SASS │ │ ├── App.tsx # Componente principal da aplicação │ │ ├── index.tsx # Arquivo de inicialização │ │ └── vite.config.ts # Configuração do Vite │ ├── public/ # Arquivos públicos (index.html, favicon, etc.) │ ├── package.json # Dependências do React, scripts, etc. │ └── tsconfig.json # Configuração do TypeScript para o front-end │ ├── database/ # Arquivos de banco de dados, como scripts SQL ou configuração de ORM │ ├── migrations/ # Scripts de migração do banco de dados (Sequelize, TypeORM, Flyway, Liquibase, etc.) │ ├── seeds/ # Scripts para popular o banco de dados com dados iniciais │ └── db-config.ts # Arquivo de configuração para a conexão do banco de dados │ ├── .env # Arquivo de variáveis de ambiente para configurações sensíveis (ex: credenciais de banco) ├── .gitignore # Arquivo para listar arquivos ou pastas que devem ser ignorados pelo Git ├── README.md # Documentação do projeto └── docker-compose.yml 

## Boas Práticas de Codificação

- Utilizar o padrão de nomenclatura Camel Case em classes, métodos e variáveis.
- Métodos, nomes de variáveis e etc. devem possuir nomes que signicam alguma coisa em relação ao seu objetivo.
- Nome de classes devem ser substantivos e não conter verbos. Já nomes de métodos devem conter verbos pois eles indicam ações.
- Evitar comentários desnecessários, quando a própria função deixa claro o que está sendo feito não é necessário o uso de comentários.
- Cada função, classe ou módulo deve ter uma única responsabilidade, para torna o código mais legível e organizado.
- Formatar de forma clara e padronizada o escopo das classes, métodos, estruturas condicionais, estruturas de repetição.
  
## Como rodar a aplicação

-Execute o seu backend, a forma como isso vai acontecer irá depender da sua IDE, mas é comum que ao entrar no arquivo de backend um botão de execução apareça na sua tela
-Dentro da pasta onde contém o frontend rode os seguinte comandos nessa ordem:
  1 - "npm install"
  2 - "npm run dev"


