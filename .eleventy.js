const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = (eleventyConfig) => {
	eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.setChokidarConfig({
    usePolling: true,
    interval: 500,
  });

  return {
    dir: {
      input: "content", // default: "."
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
      output: "_site",
    },
  };
};
