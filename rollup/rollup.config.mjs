import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'
// import awesome from 'rollup-plugin-awesome'
import cleanup from 'rollup-plugin-cleanup'
export default {
    input: "./src/index.js",
    output: {
        file: "main.js",
        format: "cjs"
    },
    plugins: [nodeResolve(), commonjs(), terser(), cleanup()],
}