// {
//     "extends": [
//       "@rocketseat/eslint-config/node"
//     ],
//     "rules": {
//       "prettier/prettier": 0
//     }
//   }


import { node } from "globals"; // Importação ECMAScript

import rocketseatConfig from "@rocketseat/eslint-config/node.js";

export default [
    {
        // Inclui a configuração do Rocketseat diretamente
        ...rocketseatConfig,

        // Adiciona opções de linguagem para definir variáveis globais
        languageOptions: {
            globals: {
                ...node, // Utilizando as globais de Node.js
            },
        },

        // Define o escopo dos arquivos a serem lintados
        files: ["src/**/*.ts"],
    },
];