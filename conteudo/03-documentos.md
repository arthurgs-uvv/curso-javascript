# Documentos

## Módulos

- Caso queira utilizar itens de arquivos diferentes podemos utilizar o commomjs e es modules.  
  
CommomJs
No .json "type": "commomjs"

```js
module.exports = {item1, item2}

const math = require("./caminho")
const {sum} = require("./caminho")
```
  
ES Modules
No .json "type": "module"

```js
export etc
export default //Não pode desestruturar

import { } from "./caminho"
```

## Bibliotecas

- No terminal do package.json utilize: npm install (biblioteca)

- Clack/prompt é interessante

```js
import (itens) from "biblioteca";


## Scripts

No package.json  
  
- Para executar os arquivos no terminal, utilize nmp run (scripts) (exemplo)

- No package.json, quando for criar um arquivo .js (sempre colocar em uma pasta src), alterar o "main": para "src/index.js"  
  
- Em "Scripts":

- "start": "node --env-file .env src/index.js" (a parte do env serve para poder acessar esses dados)

- .env : não é enviado para github, pode conter informações sensíveis.

- "watch": "node --watch --env-file .env src/index.js" (serve para manter o arquivo sendo executado)

## Caminhos

```js
./ Mesma pasta
../ Voltar uma pasta
../../ Voltar duas pastas
./folder/ Entra em uma pasta
../out/ Volta uma pasta e entra em outra
./file.js Acessa um arquivo
