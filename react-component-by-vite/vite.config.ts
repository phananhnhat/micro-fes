import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// import packageJson from './package.json';

// const deps = packageJson.dependencies;

// https://vite.dev/config/

export default defineConfig({
    server: {
        port: 3003
    },
    plugins: [
        react(),
        federation({
            name: 'react_component_by_vite',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Counter': './src/Counter.tsx',
                "./counterWrapper": "./src/counterWrapper.tsx",
            },
            // shared: ['react','react-dom']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
