/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// Common
			"orange": "#f48525",

			// Light Mode
			"LM-Background": "#F6F6F6",
			"LM-Nav-Unselected": "#696969",
			"LM-Nav-Selected": "#16151B",
			"LM-Text": "#141414",


			// Dark Mode
			"DM-Background": "#181717",

		},
		extend: {
			spacing: {
				'6.5xl': '75rem',
			},
		},
	},
	plugins: [],
}
