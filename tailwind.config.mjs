/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/Components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				white: "#ffffff",
				blackOne: "#2d333a",
				darkBlue: "#FFAB00",
			},
			keyframes: {
				fill: {
					"0%": {width: "0%"},
					"100%": {width: "100%"},
				},
				scroll: {
					"0%": {transform: "translateX(0%)"},
					"100%": {transform: "translateX(-50%)"},
				},
			},
			animation: {
				fill: "fill 2s linear forwards",
				scroll: "scroll 10s linear infinite",
			},
		},
	},
	plugins: [],
};
