const path = require("path");

const esbuild = require("esbuild");

// !!! Reply on the environment variable
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const distPath = path.resolve(__dirname, "../dist");

esbuild
  .build({
    minify: isProd,
    sourcemap: isDev ? "linked" : "external",
    entryPoints: [path.resolve(__dirname, `../src/index.ts`)],
    bundle: true,
    platform: "node",
    target: ["node12.22.0"],
    outdir: distPath,
    tsconfig: path.resolve(__dirname, "../tsconfig.json"),
    define: {
      __DEV__: isDev,
    },
    logLevel: isProd ? "error" : "warning",
    plugins: [],
    watch: isDev
      ? {
          onRebuild(error, result) {
            if (error) {
              console.error(error);
            } else {
              // eslint-disable-next-line no-use-before-define
              console.log("Watch build succeeded", new Date());
            }
          },
        }
      : false,
  })
  .then((result) => {
    if (isDev) {
      console.log("Watching...");
    } else {
      console.log(`Build succeeded`);
    }
  })
  .catch((e) => {
    console.error(e);
    isProd && process.exit(1);
  });
