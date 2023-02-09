# Order List Project

## Sumário

- [Tarefas](#tasks)
- [Pré-requisitos](#pré-requisitos)
- [Como funciona este projeto](#work)
- [Como utilizar o projeto](#using)

---

<details close>
  <summary id="tasks">Tarefas e requisitos</summary>

  - [x] Ler todos os arquivos de pedidos:
    - [x] Lançar erro em tipagens erradas;
    - [x] Lançar erro em repetições de numero_item;
    - [x] Lançar erro em falta de numero_item consecutivo;

  - [x] Ler todos os arquivos de notas:
    - [x] Lançar erro em tipagens erradas;
    - [x] Lançar erro em pares inexistentes;

  - [x] Identificar os pedidos pendentes:
    - [x] Lançar erro se a soma ultrapassar o limite;

  - [x] Gravar um arquivo de texto com a listagem dos pedidos pendentes:
    - [x] Informar o valor total de cada pedido;
    - [x] Informar o saldo do valor residual;

  - [x] Gravar uma lista de itens pendentes:
    - [x] Informar o número dos itens pendentes;
    - [x] Informar o saldo de quantidade;
</details>

---

### Pré-requisitos:

<p>Para utilizar este projeto, você precisa apenas de:</p>

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);
- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git);
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ou [Yarn](https://yarnpkg.com/getting-started/install);

---

<h2 id='work'>Como funciona este projeto:</h2>

<h3>Este projeto funciona em duas etapas:</h3>

<h4>Build</h4>
A primeira é o build, em que os dados disponibilizados nos diretórios Pedidos e Notas será lido, limpo e pré tratado. Nesta etapa, as principais verificações (como tipos e consistência dos dados) são realizadas.

<h4>ATENÇÃO!!!</h4>

A etapa de build é muito importante, já que ela gerará dois arquivos que serão posteriormente utilizados no preparo do relatório.

<h4>Process(start)</h4>
A segunda etapa carregará os arquivos gerados pelo build. Aqui ocorre a aplicação da lógica, separando e agrupando os dados para gerar o arquivo final.

---

<h2 id='using'>Como utilizar o código:</h2>

A primeira etapa é cloná-lo em sua máquina:
```
git clone git@github.com:manupilation/OrderList.git
```

Navegue para dentro do diretório clonado e realize a instalação das dependências (que são bem poucas 😉):

```
cd OrderList
```

Use seu gerenciador de pacotes favorito:

```
$ npm install
$ yarn install
```

Agora você precisa apenas gerar os arquivos para análise (garanta que estarão nos diretórios corretos e respeitando as regras!):

Rode o comando de build para gerar os dois arquivos JSON:

```
$ npm run dev
$ yarn dev
```

Agora, use o comando para gerar o arquivo report, que é o relatório.

```
$ npm start
$ yarn start
```
Se tudo ocorreu bem, você receberá uma mensagem logada:
"Relatório gerado com sucesso"
