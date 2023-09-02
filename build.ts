import * as esbuild from "https://deno.land/x/esbuild@v0.15.10/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";
import { parse } from "https://deno.land/std@0.170.0/flags/mod.ts";
import { copySync, ensureDir } from "https://deno.land/std@0.170.0/fs/mod.ts";
import { resolve } from "https://deno.land/std@0.170.0/path/mod.ts";

interface BrowserManifestSettings {
  color: string;
  omits: string[];
  // deno-lint-ignore no-explicit-any
  overrides?: { [id: string]: any };
}

interface BrowserManifests {
  [id: string]: BrowserManifestSettings;
}

const args = parse(Deno.args);
const isWatching = args.watch || args.w;

const browsers: BrowserManifests = {
  chrome: {
    color: "\x1b[32m",
    omits: ["applications", "options_ui", "browser_action"],
  },
};

console.log("\x1b[37mPackager\n========\x1b[0m");

const builds = Object.keys(browsers).map(async (browserId) => {
  const distDir = `_dist/${browserId}`;

  // Copy JS/HTML/CSS/ICONS
  ensureDir(`${distDir}/static`);

  const options = { overwrite: true };
  copySync("static", distDir, options);

  const browserManifestSettings = browsers[browserId];

  // Transform Manifest
  const manifest = {
    ...JSON.parse(Deno.readTextFileSync("extension/manifest.json")),
    ...browserManifestSettings.overrides,
  };
  browserManifestSettings.omits.forEach((omit) => delete manifest[omit]);

  Deno.writeTextFileSync(
    distDir + "/manifest.json",
    JSON.stringify(manifest, null, 2),
  );

  const color = browserManifestSettings.color || "";
  const browserName = browserId.toUpperCase();
  const colorizedBrowserName = `\x1b[1m${color}${browserName}\x1b[0m`;
  const outdir = `_dist/${browserId}/`;

  console.log(`Initializing ${colorizedBrowserName} build...`);
  const esBuildOptions: esbuild.BuildOptions = {
    entryPoints: [
      "extension/options.tsx",
      "extension/deco_content.ts",
      "extension/deco_background.ts",
      "extension/popup.tsx",
    ],
    outdir,
    bundle: true,
    format: "esm",
    logLevel: "verbose",
    plugins: [],
  };

  esBuildOptions.plugins = [denoPlugin()];

  // Add watch esbuild options
  if (isWatching) {
    esBuildOptions.watch = {
      onRebuild(error: Error) {
        if (error) {
          console.error(`Rebuild for ${colorizedBrowserName} failed:`, error);
        } else console.log(`Rebuilt for ${colorizedBrowserName}`);
      },
    };
  }

  await esbuild.build(esBuildOptions);
  console.log(`Build complete for ${colorizedBrowserName}: ${resolve(outdir)}`);
});

await Promise.all(builds);
if (!isWatching) Deno.exit(0);
