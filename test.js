"use strict";

const { RuleTester, Linter } = require("eslint");

const rule = new Linter().getRules().get("arrow-parens");

const ruleTester = new RuleTester();

ruleTester.run("my-rule", rule, {
    valid: [
        {
            code: "(a) => a",
			parser: require.resolve("@babel/eslint-parser")
        }
    ],

    invalid: [
        {
            code: "a => a",
            errors: [{ message: "Expected parentheses around arrow function argument." }],
			output: "(a) => a",
			parser: require.resolve("@babel/eslint-parser")
        }
    ]
});