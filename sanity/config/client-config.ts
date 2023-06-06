import { createClient } from 'next-sanity';

const config = {
	dataset: 'production',
	projectId: 'ptjyjnva',
	apiVersion: '2023-06-05',
};

export const sanityClient = createClient(config);
