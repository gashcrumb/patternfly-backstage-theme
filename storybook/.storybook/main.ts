import path from "path";

/**
 * This set of stories are the ones that we publish to backstage.io.
 */
const BACKSTAGE_CORE_STORIES = [
  "packages/core-components",
  "packages/app",
  "plugins/org",
  "plugins/search",
  "plugins/search-react",
  "plugins/home",
  "plugins/stack-overflow",
  "plugins/catalog-react",
];

// Some configuration needs to be available directly on the exported object
const staticConfig = {
  addons: ["storybook-dark-mode/register"],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      rollupOptions: {
        ...config.rollupOptions,
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    };
  },
};

module.exports = Object.assign(({ args }) => {
  // Calling storybook with no args causes our default list of stories to be used.
  // This set of stories are the ones that we publish to backstage.io
  //
  // If it's called with args, each arg should be the path to a package that we will
  // show the stories from, for example `yarn storybook plugins/catalog`.

  const rootPath = process.env.BACKSTAGE_SOURCE_ROOT;
  if (typeof rootPath == "undefined") {
    console.warn(
      "Set BACKSTAGE_SOURCE_ROOT to the absolute path of your backstage repository clone building or running storybook",
    );
    process.exit(1);
  }
  const storiesSrcGlob = "src/**/*.stories.tsx";

  const getStoriesPath = (pkg: string) =>
    path.posix.join(rootPath!, pkg, storiesSrcGlob);

  const packages = args.length === 0 ? BACKSTAGE_CORE_STORIES : args;
  const stories = packages.map(getStoriesPath);

  return {
    ...staticConfig,
    stories,
  };
}, staticConfig);
