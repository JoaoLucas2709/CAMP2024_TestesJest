# Framework de Testes em JavaScrpit - Implementação do Jest no NodeJS e verificação de seu funcionamento com a API de Rick and Morty.
  
- Projeto desenvolvido para a realização de testes automatizados no NODEJS.
- Utilização do framework "Jest".
- As informações que serão testadas fazem parte da API de Rick and Morty (https://rickandmortyapi.com/).
  
## Como rodar os testes através do Jest?

- `npm i --save-dev jest`
- `npm i supertest`
- `npm i -g jest`
    Tais comandos são necessários para instalar os pacotes do framework em questão.
- `npm run test` 
    Finalmente, utilizamos-o para rodar os testes.
- Caso haja algum problema com o funcionamento do Jest, acesse o link "https://jestjs.io/pt-BR/docs/getting-started" para mais informações.

## Utilizando a API de Rick And Morty

- Infelizmente, diferentemente da API de Star Wars e da API de Pokemón, por exemplo, a API de Rick and Morty não conta com uma forma mais intuitiva de pesquisa e para acessar os dados de seus personagens, localizações ou episódios, é necessário a pesquisa através do ID do elemento que se deseja interagir. 
- Para ficar mais claro, caso queira pesquisar por personagens, basta escrever: "https://rickandmortyapi.com/api/character/iddopersonagem". Rick Sanchez, protagonista da série, apresenta "1" como id. Logo, seu link de pesquisa seria: "https://rickandmortyapi.com/api/character/1".
- Para acessar as localizações, utiliza-se o link: "https://rickandmortyapi.com/api/location/iddalocalização".
- Por fim, tem-se os episódios: "https://rickandmortyapi.com/api/episodes/iddoepisódio"
- Para consultar o id dos personagens, episódios e localizações, basta acessar o link: "https://rickandmortyapi.com/api/character" e marcar a opção "estilos de formatação" para tornar a pesquisa mais fácil.

## Finalização do Teste

- Ao final da execução do comando "npm run test", será exibida uma mensagem que informará se houve reprovação nos testes - ou seja, uma informação recebida da API era diferente da que se estava esperando
e em caso afirmativo, o teste fracassado será apontado.