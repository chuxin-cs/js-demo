import fs from "fs";
import { defineConfig } from "rollup";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

async function getPackageProperty() {
  let param = {};
  try {
    const pack = fs.readFileSync("package.json", "utf8");
    param = JSON.parse(pack);
  } catch (error) {
    console.log(error);
  }
  return param;
}
const { main, module, browser } = await getPackageProperty();

export default defineConfig({
  // 入口文件
  input: "./main.js",
  // 出口文件
  output: [
    {
      file: main,
      format: "cjs",
    },
    {
      file: module,
      format: "es",
    },
    {
      file: browser,
      format: "iife",
      name: "chuXin",
    },
  ],
  plugins: [json(), commonjs()],
});

// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
