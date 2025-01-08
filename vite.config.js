import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: 'menu',
	build: {
		outDir: 'dist', // Asegúrate de que esté configurado correctamente
	},
});
