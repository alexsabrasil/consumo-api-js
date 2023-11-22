# [Atividade] Api request - Campinho Digital Programação Web Full Stack 2.2023

### Desafio: consumo-api-js: 

Esta atividade é para criar um aplicativo que obtém informações de usuários do serviço JSONPlaceholder, uma API de teste para simular operações CRUD em uma API REST.

##

## Funcionalidade da API JASONPlaceholder:

A **JSONPlaceholder** é uma API REST de teste que proporciona um ambiente simulado para operações CRUD (Create, Read, Update, Delete). Isso permite interações fictícias com dados de vários recursos, como usuários, postagens e comentários. Este desafio foca especificamente nos dados de usuários disponíveis na API.

## Tarefa

O objetivo principal deste desafio é criar um aplicativo capaz de consumir os dados da API JSONPlaceholder. A função principal a ser implementada é exibir informações de usuários no console através da expressão `console.log('Usuários:')`. Adicionalmente, são propostas duas funcionalidades extras:

1. Utilização do pacote **nodemon** para facilitar o desenvolvimento.
2. Integração com **React** para exibição dos dados na tela.

As funcionalidades extras são opcionais, escolhi implementar para aprimorar o processo de desenvolvimento e renderizar os dados do usuário na tela.

## Considerações

Este desafio oferece uma oportunidade prática para praticar a obtenção e exibição de dados provenientes da API JSONPlaceholder. 

Observações:

- A API é gratuita e não requer autenticação.
- O método HTTP GET é utilizado para fazer solicitações e obter respostas em formato JSON.

##

## Resultados visual do API REST: 

![1](https://github.com/alexsabrasil/consumo-api-js/assets/113733583/2396493b-11ce-49c3-8d4e-e8facac3c1f7)

![2](https://github.com/alexsabrasil/consumo-api-js/assets/113733583/ccc1c63d-10a7-4959-9f2f-b3c9b71598af)

## Passo a passo Projeto Node.js
###### A - Criar um novo diretório
###### B - No terminal do Git Bash executar: 

    mkdir consumo-api-js 
    cd consumo-api-js
    npm 

1 - Inicializar o projeto Node.js

    executar o comando: npm init -y
    
2 - Instalar as bibliotecas necessárias:

    executar o comando: npm install axios node-fetch superagent 
    
    (Para facilitar as chamadas à API, escolhi instalar a biblioteca axios. Para fazer 
    requisições HTTP em JavaScript e para criação extra escolhi a biblioteca node-fetch incluindo a instalação do Superagent).

3 - Criar o aplicativo para obter as informações de usuários do JSONPlaceholder:

    Criar um arquivo chamado 'app.js'e adicionar ao código

    (Para obter informações de usuários do serviço JSONPlaceholder, uma API de teste para simular operações CRUD em uma API REST, escolhi criar o app 
     que faz a chamada à API usando axios e node-fetch)

4 - Adicionei no App.css e index.html(Público):

    Estrutura para criar a lista dos nomes dos usuários, as cores e footer
    Com efeito hover ao passar o mouse sobre a lista 

5 - Instalar nodemon:

    Executar o comando: npm install -g nodemon
    
    (Escolhi o Nodemon por ser uma ferramenta que ajuda a desenvolver app baseados em Node.js, reiniciando automaticamente o app quando os 
    arquivos são modificados).

    Em seguida para que pudesse executar o app com Nodemon, substitui o script 'scripts' no meu 'package.json' por:

    "scripts": {
        "start": "nodemon app.js"
    }

6 - Funcionalidade extra: Exibir dados na tela com React:

    Antes precisei configurar o projeto React separado

    Execute o comando:

    npx create-react-app consumo-api-react
    cd consumo-api-react

    (Substitui o conteúdo de 'src/App.js'com o código para exibir os dados, usei o estado 'useState' para armazenar os dados obtidos da API  
    e renderizá- los na insterface do usuário).

7 - Para iniciar o app React:

    Executar: npm start 

    (Vai iniciar o app React e abrirá automaticamente no navegador).

    Fim.

## Subir o projeto React para o GitHub

A - Iniciar um repositório Git localmente:

    Abrir o terminal no diretório do projeto no Git Bash

    Executar o comando:

    git init

B - Adicionar todos os arquivos ao controle de versão:

    git add .

C - Realizar o commit dos arquivos:

    git commit -m "inicializando o projeto"

D - Criar um repositório no GitHub:

    Acessar o GitHub 
    Preencha as informações do repositório e clicar em 'Create repository'

E - Conecte seu repositório local ao repositório remoto no GitHub:

   Copiar o link do repositório remoto

   git remote add origin <seu-link-remoto-do-github>

F - Enviar os arquivos para o GitHub:

    git branch (Verificar as Branches exitentes)
    
    git checkout -b main (Criar Branch "main" localmente)

    git add . (Adicione para fazer o commit das mudanças)

    git commit -m "mensagem-commit" (Fazer o commit)

    git push -u origin main (Fazer o Push para o repositório remoto)
    
##### Configurar Identidade Global e Configurar Identidade Localmente (Apenas para este repositório):

    git config --global user.email "alexsa.tecnolog@gmail.com"
    git config --global user.name "Alexsa"

    git config user.email "alexsa.tecnolog@gmail.com" 
    git config user.name "Alexsa"

G - Tentar novamente o Commit:

    git commit -m "projeto-consumo-api" (Depois que configurei a minha identidade, pude tentar o commit novamente)
    git push -u origin main (Após o commit executar o push)

## Erros cometidos:

    Vários entre eles, compreender a crição do diretório, implematar os critérios estabelicidos até chegar neste resultado final.

## Ajuda necessária:

    Orientação da instrutora e monitores do curso Programação Web Full Stack, fórum, amigas, documentações oficiais de ferramentas react,json,
    node.js e api. 
    

    
    

    
    

    
    
