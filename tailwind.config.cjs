/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "1.5xl": ["1.375rem", { lineHeight: "1.875rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "2.5xl": ["1.75rem", { lineHeight: "2.125rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "3.5xl": ["2rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "5.5xl": ["3.375rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }],
        },
        screens: {
            "max-xsm": { max: "480px" },
            xsm: "480px",
            sm: "640px",
            md: "768px",
            "max-md": { max: "768px" },
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            height: {
                "10/12": "83.333333%",
                "11/12": "91.666667%",
            },
            spacing: {
                13: "3.25rem",
                15: "3.75rem",
                18: "4.5rem",
                128: "32rem",
                144: "36rem",
            },
            colors: {
                "custom-black": "#000000",
                "custom-white": "#CECECE",
            },
            backgroundImage: {
                "custom-primary-gradient": "linear-gradient(180deg, #ffb6ff, #b344ff)",
                "custom-secondary-gradient": "linear-gradient(180deg,#ffe993,#eb831c)",
            },
            fontFamily: {
                "custom-primary": ["Helvetica", "sans-serif"],
                // "custom-secondary": ["Helvetica", "sans-serif"],
            },

            fontSize: {
                "custom-mobile-semi-medium": ["18px", { lineHeight: "1.75rem" }],
                "custom-desktop-semi-medium": ["24px", { lineHeight: "2.25rem" }],
                "custom-mobile-medium": ["20px", { lineHeight: "1.75rem" }],
                "custom-desktop-medium": ["32px", { lineHeight: "2.25rem" }],
            },
        },
    },
    plugins: [],
};
