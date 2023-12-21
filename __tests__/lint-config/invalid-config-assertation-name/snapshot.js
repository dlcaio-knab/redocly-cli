// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config test with option: { dirName: 'invalid-config-assertation-name', option: 'warn' } 1`] = `

[1] .redocly.yaml:6:3 at #/rules/asset~1path-item-mutually-required

The field \`severity\` must be present on this level.

4 |
5 | rules:
6 |   asset/path-item-mutually-required:
  |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7 |     context:
8 |       - type: PathItem

Warning was generated by the configuration spec rule.


⚠️ Your config has 1 warning.
validating ../__fixtures__/valid-openapi.yaml...
../__fixtures__/valid-openapi.yaml: validated in <test>ms

Woohoo! Your API description is valid. 🎉

[WARNING] Unused rules found in .redocly.yaml: asset/path-item-mutually-required.
Check the spelling and verify the added plugin prefix.

`;
