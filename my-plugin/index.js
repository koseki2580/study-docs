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
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      // Create friends.json

      // Add the '/friends' routes, and ensure it receives the friends props
      addRoute({
        path: "/study-docs/othello",
        component: "@site/html/othello/index.js",
        exact: true,
      });
    },
  };
};
