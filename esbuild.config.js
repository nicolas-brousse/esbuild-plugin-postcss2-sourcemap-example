const esbuild = require("esbuild")
const postCssPlugin = require("esbuild-plugin-postcss2")
const postCssConfig = require("./postcss.config")
const glob = require("glob").sync

esbuild
  .build({
    plugins: [
      postCssPlugin.default(postCssConfig),
    ],
    entryPoints: glob("src/*.*"),
    bundle: true,
    splitting: true,
    format: "esm",
    platform: "browser",
    watch: process.argv.includes("--watch"),
    sourcemap: true,
    outdir: "build",
    logLevel: "debug",
  })
  .catch(() => process.exit(1))
