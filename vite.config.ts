import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import copy from 'rollup-plugin-copy'
import Markdown from 'vite-plugin-md'
import { existsSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";
import alias from '@rollup/plugin-alias'
import h from "highlight.js";
import mdCfg from "./src/cfg/mdCfg";

let externalSet = new Set<string>()

function addSet(path: string) {
  if (existsSync(path)) {
    readdirSync(path).forEach(function (file, index) {
      let curPath = join(path, file);
      if (statSync(curPath).isDirectory() && file.includes('assets')) {
        for (const f of readdirSync(curPath)) {
          externalSet.add(`${file}/${f}`)
        }
      }
    });
  }
}

addSet('src/md')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    Markdown(
      {
        markdownItOptions: {
          highlight: (str, lang): string => {
            if (lang && h.getLanguage(lang)) {
              try {
                return h.highlight(str, { language: lang }).value;
              } catch (__) {
              }
            }
            return '';
          }
        }
      }
    ),
    copy({
      targets: [
        { src: `${mdCfg.path}/**.assets`, dest: 'public' }
      ],
      verbose: true
    }),
    alias({
      entries: [
        { find: '@', replacement: resolve(join(__dirname, 'src')) }
      ],
    }),
    vue({
      script: {
        refSugar: true
      }, include: [/\.vue$/, /\.md$/],
    })],
  build: {
    rollupOptions: {
      external: Array.from(externalSet)
    }
  }
})
