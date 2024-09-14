Aqui está um exemplo de README.md para o seu pacote **helpers-and-utils**:

---

# helpers-and-utils

[![npm version](https://badge.fury.io/js/helpers-and-utils.svg)](https://www.npmjs.com/package/helpers-and-utils)

**helpers-and-utils** é um pacote npm para JavaScript e TypeScript que oferece máscaras, formatações e abstrações, facilitando tarefas comuns no desenvolvimento, como formatação de CPF e máscaras de números de celular.

## Instalação

Você pode instalar o pacote via npm:

```bash
npm install helpers-and-utils
```

Ou via yarn:

```bash
yarn add helpers-and-utils
```

## Funcionalidades

- **Máscara de CPF**: Aplique facilmente formatação em números de CPF.
- **Máscara de Celular**: Adicione máscaras em números de celular com ou sem DDD.
- **Formatações diversas**: Aplique formatações úteis de forma simples.
- **Abstrações**: Utilitários que evitam a necessidade de helpers customizados repetitivos.

## Exemplos de uso

### 1. Máscara de CPF

```js
import { maskCPF } from 'helpers-and-utils';

const cpf = "12345678901";
const formattedCPF = maskCPF(cpf);

console.log(formattedCPF); // "123.456.789-01"
```

### 2. Máscara de Celular

```js
import { maskPhone } from 'helpers-and-utils';

const phone = "11987654321";
const formattedPhone = maskPhone(phone);

console.log(formattedPhone); // "(11) 98765-4321"
```

## Suporte a TypeScript

O pacote é totalmente compatível com TypeScript:

```ts
import { maskCPF } from 'helpers-and-utils';

const cpf: string = "12345678901";
const formattedCPF: string = maskCPF(cpf);
```


## Licença

Este projeto está licenciado sob a licença ISC.