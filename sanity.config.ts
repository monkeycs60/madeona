import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
	dataset: 'production',
	projectId: 'ptjyjnva',
	title: 'madeona website',
	apiVersion: '2023-06-05',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: {
		types: schemas,
	},
    useCdn: true,
});

export default config;
