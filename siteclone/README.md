
# Site Clone da Cactus Tecnologia
O site da Cactus Tecnologia da Informação é uma empresa que se destaca na cidade de Mossoró, apresentando os projetos realizados pela equipe. Este projeto é uma recriação do site oficial da empresa, com o objetivo de fornecer uma experiência semelhante ao usuário.



## Descrição

O site da Cactus Tecnologia da Informação. Ele oferece uma interface amigável e informativa para os visitantes conhecerem os projetos, serviços e equipe da empresa.
## Tecnologias Utilizadas

- **React.js:** Biblioteca JavaScript para construção da interface de usuário. ![React.js Icon](https://cdn.icon-icons.com/icons2/2415/PNG/32/react_original_logo_icon_146374.png)

- **Vite:** Framework de desenvolvimento rápido para React.js. <img src="https://vitejs.dev/logo-with-shadow.png" width="32px"/>



- **React Hooks:** API do React para trabalhar com estado e ciclo de vida. <img src="https://res.cloudinary.com/codersociety/image/fetch/f_webp,ar_16:9,c_fill,w_1140/https://cdn.codersociety.com/uploads/react-hooks.jpeg" width="32px"/>

- **Chakra UI:** Biblioteca de design para React com componentes estilizados. <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" width="32px"/>

- **React Router:** Roteamento para aplicativos React de página única. <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FoAtRKR4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8htgh80sk78hlynnael2.png" width="32px"/>

## Como Rodar o Projeto

Certifique-se de ter o Node.js instalado.

1. Clone este repositório.
git clone https://github.com/seu-usuario/cactus-tecnologia-clone

2. Instale as dependências.
cd cactus-tecnologia-clone
npm install

3. Inicie o projeto.
npm start

4. Abra o navegador e acesse http://localhost:3000.
## Capturas de Tela

Pagina Home![Pagina Home](/src/assets/screenshots/pagina%20home.png)

Pagina Quem Somos![Pagina Quem Somos](/src/assets/screenshots/pagina%20quemSomos.png)

Pagina Soluções![Pagina Soluções](/src/assets/screenshots/pagina%20solucoes.png)

Pagina Portfolio![Pagina Portfolio](/src/assets/screenshots/pagina%20portfolio.png)

Pagina Talentos![Pagina Talentos](/src/assets/screenshots/pagina%20talentos.png)

Pagina Contato![Pagina Contato](/src/assets/screenshots/pagina%20contato.png)

## Contribuição

Se deseja contribuir, siga estas etapas:
1. Faça um fork do repositório.
2. Crie sua branch de feature (git checkout -b feature/MinhaFeature).
3. Faça commit das suas alterações (git commit -m 'Adiciona MinhaFeature').
4. Envie para a branch (git push origin feature/MinhaFeature).
5. Abra um Pull Request.
## Licença

Este projeto está sob a licença Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
## Contato

Para qualquer dúvida ou feedback, entre em contato conosco em cleitonfreelance@gmail.com.
## Referência

Site Oficial da Cactus Tecnologia. [Click Aqui.](https://www.cactustecnologia.com.br/2022/index.php)

React.js. [Click Aqui.](https://react.dev/)

Chakra UI. [Click Aqui.](https://chakra-ui.com/)
## API Utilizada 

O projeto utiliza uma API externa para obter informações sobre personagens de Star Wars. A API escolhida é a SWAPI [Star Wars API](https://swapi.dev/), que fornece dados sobre diversos aspectos do universo Star Wars, incluindo personagens, planetas, naves espaciais, entre outros.
## Como a API foi Utilizada

Para integrar a API ao projeto, foi feito uso da biblioteca Axios para realizar requisições HTTP. A API é consultada na página inicial do site, onde são exibidos os personagens de (Star Wars) no caso são os "colaboradores da empresa". Cada personagem é exibido como um card, e ao clicar no botão "Detalhes", é aberto um modal com mais informações sobre o personagem.

A aplicação faz uma requisição à SWAPI para obter os dados dos personagens e os exibe dinamicamente na página. O modal, por sua vez, é alimentado com os detalhes específicos do personagem selecionado, trazendo informações como altura, peso, ano de nascimento, entre outras.

A integração com a SWAPI enriquece a experiência do usuário ao fornecer informações detalhadas sobre os personagens de Star Wars de maneira interativa e visualmente atraente.

## Exemplo de Resposta da API SWAPI

{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}

## Muito Obrigado.