/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			keyframes: {
				orbit: {
					from: {
						transform: "rotate(0deg) translateX(80px)"
					},
					to: {
						transform: "rotate(360deg) translateX(80px)"
					}
				}
			},
			animation: {
				orbit: "orbit 3000ms linear infinite"
			}
		},
  },
  plugins: [],
};
