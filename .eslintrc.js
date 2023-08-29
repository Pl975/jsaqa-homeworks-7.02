module.exports = {
  "env": {
    // где будет исполняться наш код
    browser: true,
    es2023: true,
  },

  // Здесь мы подключаем используемые плагины.
  "plugins": ["react", "@typescript-eslint", "import", "prettier"],

     
  /* Правила для отслеживания линтером. Если пресеты покрывают не все ситуации, 
    вы можете прописать нужные правила вручную. */
  "rules": {
    "no-debugger": "off",
    "no-console": 0,
    "prettier/prettier": 'error', // Обязательно!! Подсвечивает ошибки из Prettier.
    "react/prop-types": 0 // Отключаем правило проверки передаваемых типов.

  },

  /* Пресет с настройками. prettier должен быть последним. 
    Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "airbnb",
    "airbnb-typescript/base",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ], 

  "parser": '@babel/eslint-parser', // Парсер для обработки jsx кода

  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }

}

