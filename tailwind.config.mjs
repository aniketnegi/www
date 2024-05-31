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
      "LM-Text-Secondary": "#6b6b6b",
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
      "mono": ["JetBrains Mono Variable", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],

      // my site's payload is 60% fonts. i should just do this instead
      // "sans": ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      // "serif": ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      // "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      // "hi": ["Noto Serif Devanagari Variable"],
    },

    extend: {
      dropShadow: {
        glowdark: [
          "0 0px 20px rgba(244, 133, 37, 0.35)",
          "0 0px 35px rgba(244, 133, 37, 0.2)"
        ],
        glowlight: [
          "0 0px 20px rgba(185, 107, 19, 0.57)",
          "0 0px 35px rgba(185, 107, 19, 0.48)"
        ]
      },
      spacing: {
        // '6.5xl': '75rem',
      },
      typography: (theme) => ({
        DEFALUT: {
          css:
          {
            // Colours
            '--tw-prose-body': theme('colors.LM-Text'),
            '--tw-prose-headings': theme('colors.LM-Text'),
            '--tw-prose-lead': theme('colors.LM-Text'),
            '--tw-prose-links': theme('colors.LM-Text'),
            '--tw-prose-bold': theme('colors.LM-Text'),
            '--tw-prose-counters': theme('colors.LM-Text'),
            '--tw-prose-bullets': theme('colors.LM-Text'),
            '--tw-prose-hr': theme('colors.LM-Text'),
            '--tw-prose-quotes': theme('colors.LM-Text'),
            '--tw-prose-quote-borders': theme('colors.LM-Text'),
            '--tw-prose-captions': theme('colors.LM-Text'),
            '--tw-prose-kbd': theme('colors.LM-Text'),
            '--tw-prose-kbd-shadows': theme('colors.LM-Text'),
            '--tw-prose-code': theme('colors.LM-Text'),
            '--tw-prose-pre-code': theme('colors.LM-Text'),
            '--tw-prose-pre-bg': theme('colors.LM-Text'),
            '--tw-prose-th-borders': theme('colors.LM-Text'),
            '--tw-prose-td-borders': theme('colors.LM-Text'),
            '--tw-prose-invert-body': theme('colors.DM-Text'),
            '--tw-prose-invert-headings': theme('colors.DM-Text'),
            '--tw-prose-invert-lead': theme('colors.DM-Text'),
            '--tw-prose-invert-links': theme('colors.DM-Text'),
            '--tw-prose-invert-bold': theme('colors.DM-Text'),
            '--tw-prose-invert-counters': theme('colors.DM-Text'),
            '--tw-prose-invert-bullets': theme('colors.DM-Text'),
            '--tw-prose-invert-hr': theme('colors.DM-Text'),
            '--tw-prose-invert-quotes': theme('colors.DM-Text'),
            '--tw-prose-invert-quote-borders': theme('colors.DM-Text'),
            '--tw-prose-invert-captions': theme('colors.DM-Text'),
            '--tw-prose-invert-kbd': theme('colors.DM-Text'),
            '--tw-prose-invert-kbd-shadows': theme('colors.DM-Text'),
            '--tw-prose-invert-code': theme('colors.DM-Text'),
            '--tw-prose-invert-pre-code': theme('colors.DM-Text'),
            '--tw-prose-invert-th-borders': theme('colors.DM-Text'),
            '--tw-prose-invert-td-borders': theme('colors.DM-Text'),
          }
        }
      }),
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
