const glob = require('glob');
const { modifyHtml, noCatsAllowed } = require('./modify-html.js');

module.exports = {
  onPostBuild: ({ constants: { PUBLISH_DIR }, utils }) => {
    const files = glob.sync(`${PUBLISH_DIR}/**/*.html`);

    files.map(modifyHtml);

    try {
      files.map(noCatsAllowed);
    } catch (error) {
      utils.build.failBuild(error.message);
    }
  },
};
