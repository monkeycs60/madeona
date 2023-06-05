/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				titles: ['"Raleway"', 'sans-serif'],
				body: ['"DM Serif Display"', 'serif'],
        script: ['"Sugeng-Rawuh"', 'sans-serif'],
			},
		},
		plugins: [],
	},
};
