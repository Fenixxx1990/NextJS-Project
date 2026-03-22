import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      //Ошибка, если точка с запятой отсутствует.
      semi: ["error"],
      //Ошибка, если для строковых литералов используются не одинарные кавычки.
      quotes: ["error", "double"],
      //Ошибка, если используется конкатенация строк вместо шаблонных литералов.
      "prefer-template": ["error"],
      //Ошибка, если в качестве коллбека используется не стрелочная функция.
      "prefer-arrow-callback": ["error"],
      //Ошибка, если в одном из ветвлений функция возвращает значение, а в другом нет.
      "consistent-return": "error",
      //Ошибка, если объявлен пустой интерфейс. Исключение, если он расширяет другой интерфейс.
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true },
      ],
      //Ошибка, если при импорте типа не используется type.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      //Обязывает указывать у функций тип возвращаемого значения.
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],
    },
  },
]);

export default eslintConfig;
