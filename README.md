# Sistema de Avaliação de Desempenho Hospital Universitário Lauro Wanderley (HULW)
## O que é?
> Está ferramenta será utilizada por um usuario servidor que terá permissão de responder um questionário fixo com algumas questões pré-estabelecidas pelo cliente com a finalidade de fazer uma auto-avaliação do seu trabalho dentro a instituição ao qual ele trabalha.
		Um segundo perfil de usuário é tido como Gestor tem acesso a todos os formulários das unidades e equipes, durante o preenchimento do questionário ele se auto-avalia e avalia o desempenho dos funcionários que pertencem a sua área e setor. 
		Um terceiro perfil de usuário é tido como Administrador, este perfil tem acesso a todas as informações referentes aos formulários já preenchidos além de se auto-avaliar e avaliar os demais dentro do seu ambiente de trabalho.
   

## Softwares

### [Backend](https://github.com/AbraaoHonorio/hulw_backend/)
O Backend HULW expõe uma API de fácil, provendo uma forma simples e eficiente
 
 
 ### [frontend](https://github.com/Kenedw/HULW)
O front HULW foi criado usando react, provendo um site de avaliação de forma simples.



## Instalação do frontend
Uma vez com o [NodeJS instalado](https://nodejs.org/en/download/)

1. Clone esse repositório e entre em seu diretório

```shell
$ git clone https://github.com/Kenedw/HULW.git
$ cd HULW
```

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
