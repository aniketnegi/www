/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			// Common
			"orange": "#ff7100",

			// Light Mode
			"LM-White": "#e9e9e9",
			"LM-Secondary": "#dadada",
			"LM-Text-Secondary": "#b5b5b5",
			"LM-Background": "#F6F6F6",
			"LM-Nav-Unselected": "#696969",
			"LM-Nav-Selected": "#16151B",
			"LM-Text": "#141414",


			// Dark Mode
			"DM-Black": "#070707",
			"DM-Secondary": "#303030",
			"DM-Text-Secondary": "#696969",
			"DM-Background": "#181717",
			"DM-Nav-Unselected": "#b5b5b5",
			"DM-Nav-Selected": "#f4f4f6",
			"DM-Text": "#e9e9e9",

		},
		fontFamily: {
			"sans": ["Manrope Variable", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			"serif": ["Newsreader Variable", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
			"mono": ["JetBrains Mono Variable", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
		},
		extend: {
			spacing: {
				// '6.5xl': '75rem',
			},
		},
	},
	darkMode: ['selector', '[data-theme="dark"]'],
	plugins: [
		require('@tailwindcss/typography'),
	],


}
