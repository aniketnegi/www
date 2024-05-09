/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// Light Mode
			"LM-Background": "#F6F6F6",
			"LM-Nav-Selected": "#16151B",


			// Dark Mode
			"DM-Background": "#181717",

		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
				'12xl': '150rem',
			  },
		},
	},
	plugins: [],
}
