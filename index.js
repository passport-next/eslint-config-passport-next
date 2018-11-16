module.exports = {
  "extends": ["eslint:recommended", "standard", "plugin:compat/recommended"],
  "plugins": ["promise", "import", "jsdoc", "markdown"],
  "rules": {
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error"],
    "array-callback-return": ["error"],
    "arrow-parens": ["error"],
    "block-scoped-var": ["error"],
    "callback-return": ["error"],
    "computed-property-spacing": ["error"],
    "consistent-return": ["error"],
    "dot-notation": ["error"],
    "func-name-matching": ["error"],
    "function-paren-newline": ["error", "consistent"],
    "global-require": ["error"],
    "guard-for-in": ["error"],
    "implicit-arrow-linebreak": ["error"],
    "jsx-quotes": ["error"],
    "linebreak-style": ["error"],
    "max-nested-callbacks": ["error"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-bitwise": ["error"],
    "no-buffer-constructor": ["error"],
    "no-confusing-arrow": ["error"],
    "no-div-regex": ["error"],
    "no-duplicate-imports": ["error"],
    "no-else-return": ["error"],
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-eq-null": ["error"],
    "no-extra-label": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-misleading-character-class": ["error"],
    "no-mixed-requires": ["error", {"grouping": true, "allowCall": true}],
    "no-process-env": ["error"],
    "no-process-exit": ["error"],
    "no-prototype-builtins": ["error"],
    "no-restricted-globals": ["error", {
        "name": "event",
        "message": "Use local event parameter instead (preferably as \"e\" or \"ev\")."
    }, {
        "name": "fdescribe",
        "message": "Do not commit fdescribe. Use describe instead."
    }],
    "no-restricted-properties": ["error", {
        "property": "__defineGetter__",
        "message": "Please use `Object.defineProperty` instead."
    }],
    "no-script-url": ["error"],
    "no-sync": ["error"],
    "no-var": ["error"],
    "no-void": ["error"],
    "nonblock-statement-body-position": ["error"],
    "object-shorthand": ["error", "always", {"avoidExplicitReturnArrows": true}],
    "operator-assignment": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["error", {"object": true}],
    "prefer-object-spread": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "quote-props": ["error", "as-needed"],
    "radix": ["error", "as-needed"],
    "require-atomic-updates": ["error"],
    "require-await": ["error"],
    "semi-style": ["error"],
    "strict": ["error"],
    "switch-colon-spacing": ["error"],
    "wrap-regex": ["error"],

    "semi": ["error", "always"],
    "indent": ["error", 2, {"outerIIFEBody": 0}],
    "object-property-newline": ["off"],
    "one-var": ["off"],
    "object-curly-spacing": ["error", "never"],

    "valid-jsdoc": ["error", {
        "prefer": {
            "arg": "param",
            "argument": "param",
            "return": "returns",
            "virtual": "abstract"
        },
        "preferType": {
            "Boolean": "boolean",
            "Number": "number",
            "String": "string",
            "object": "Object",
            "array": "Array"
        },
        "requireReturn": true,
        "requireReturnType": true,
        "requireParamType": true,
        "matchDescription": "^([A-Z][\\s\\S]*[.`?!])?$",
        "requireParamDescription": false,
        "requireReturnDescription": false
    }],

    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/always-return": "error",

    "promise/no-new-statics": "error",
    "promise/prefer-await-to-then": "error",


    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-amd": "error",

    "import/extensions": ["error", "always", {"ignorePackages": true}],
    "import/order": ["error", {"groups": [
      "builtin",
      "external",
      "internal",
      ["parent", "sibling", "index"]
    ]}],
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",

    "jsdoc/check-examples": ["error"],
    "jsdoc/check-param-names": ["error"],
    "jsdoc/check-tag-names": ["error"],
    "jsdoc/check-types": ["error"],
    "jsdoc/valid-types": ["error"],

    "jsdoc/require-param": ["warn"],
    "jsdoc/require-param-name": ["warn"],
    "jsdoc/require-param-type": ["warn"],
    "jsdoc/require-returns-type": ["warn"]
  }
};