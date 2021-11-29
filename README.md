# ClimaBR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

# Como a aplicação funciona:

Após executar o servidor local, basta entrar no link definido (http://localhost:8100/home) e apertar o botão no canto superior direito com o texto "Meu Local"

![seta apontando para onde deve-se clicar](https://user-images.githubusercontent.com/55040458/143793790-dd2099ba-e317-4a0d-9d25-3a13363786f7.png)

Após isso, o aplicativo irá calcular e apresentar o clima da sua cidade (ou alguma próxima).

![temperatura jaboticabal](https://user-images.githubusercontent.com/55040458/143793822-df46326e-d98d-4298-9dc8-bde4cdd7c42b.png)

Sendo até mesmo possível clicar no botão "Ver detalhes" para ver os clima do dia atual e dos dois subsequentes:

![detalhes dos climas dos dias seguintes](https://user-images.githubusercontent.com/55040458/143793870-71541478-2481-4606-87a8-75dbe937c3c5.png)

Aproveite!
José Vítor Andrade Marques
Luis Henrique Saes Scandelai
