const glob = require('glob');
const { modifyHtml } = require('./modify-html.js');

module.exports = {
  onPostBuild: ({ constants: { PUBLISH_DIR } }) => {
    // find all HTML
    const files = glob.sync(`${PUBLISH_DIR}/**/*.html`);

    files.map(modifyHtml);

    // run a word replacement in each file

    // celebrate?
    console.log('we’re about to build!');
  },
};
