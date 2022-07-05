module.exports = function (context, options) {
  return {
    name: "my-plugin",
    injectHtmlTags({ content }) {
      return {
        headTags: [
          `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"/></pre></li>`,
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
