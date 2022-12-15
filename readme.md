# Search Bar

Plugin para uma barra de pesquisa simples.

```js
// 1 - Copie o arquivo searchScript.js da pasta js e cole no seu site.

// 2 - Link o arquivo utilizando o import em seu arquivo javascript pessoal, Exemplo:
import {} from "./js/plugins/searchScript.js";

// Para que a importação funcione seu javascript pessoal precisa ser ´type='module', Exemplo:´
<script type="module" src="./js/script.js"></script>;
```

```js
// 3 - Escolha um modo de procura, tendo duas opções:
import { SearchOnChange } from "./js/plugins/searchScript.js";
// ou
import { SearchOnKeyDown } from "./js/plugins/searchScript.js";

// 4 - Atribua a uma variavel a classe escolhida, Exemplo:
const searchBar = new SearchOnKeyDown();
```

Para que o plugin funcione é necessario colocar alguns elementos HTML como parâmetro da classe, porém isso depende do seu caso, tendo duas opções

- Pesquisa em lista
- Pesquisa em items

Para a pesquisa em lista é necessario os elementos que seguem no exemplo:

```js
// Apenas o elemento para receber valores e os elementos para a comparação
const searchBar = new SearchOnKeyDown("input", "ul li");
```

Caso seus elementos de pesquisa possuem filhos é acrescentado mais um parâmetro, Exemplo:

```js
// Esta é a mesma lógica do exemplo a cima, porém e preciso adicionar o tópico que deseja usarm como elemento de comparação
const searchBar = new SearchOnKeyDown("input", ".container div", "h1");
```

Logo após isso inicie o script com:

```js
searchBar.init();
```

Assim ja esta pronto para uso.

Se ainda resta alguma dúvida olhe a pasta de `examples` no repositório, onde tem os dois exemplos na prática.

## Preferencias

A seguir vem funções que você pode ou não ativar, pois não afetam no propósito principal do plugin:

### FocusOnLoad

Com esta função ativa o elemento input ja vai estar selecionado a cada carregamento de página.

```js
// Considerando os exemplos ja vistos
searchBar.focusOnLoad();
```

### Anima

Em desenvolvimento...
