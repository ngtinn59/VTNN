import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: "#052C1E",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
                display: ["var(--font-display)"],
            },
            keyframes: {
                "subtle-zoom": {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "subtle-zoom": "subtle-zoom 30s infinite alternate",
                "fade-up": "fade-up 0.8s ease-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
