const fs = require('fs');
const unified = require('unified');
const parse = require('rehype-parse');
const visit = require('unist-util-visit');
const stringify = require('rehype-stringify');

const visitor = () => (tree) => {
  visit(tree, 'text', (node) => {
    node.value = node.value.replace('Plugins', 'Corgis');
  });
};

exports.modifyHtml = (filePath) => {
  const markup = unified()
    .use(parse)
    .use(visitor)
    .use(stringify)
    .processSync(fs.readFileSync(filePath))
    .toString();

  fs.writeFileSync(filePath, markup);
};
