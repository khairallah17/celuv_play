import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "",
        "slide-1": "url(/nft_slide.jpg)",
        "linear-primary": "linear-gradient(to left, #2BC1D6, #049CBE)",
        "linear-secondary": "linear-gradient(to bottom right, rgba(43, 193, 214, .50), rgba(4, 156, 190, .5))",
        "phone": "url(/astian_dapp.svg)",
        "nft": "url(/nft_world.svg)"
      },
      dropShadow: {
        "primary": "0px 3px 8px rgba(2, 156, 190, 0.5)",
      },
      boxShadow: {
        "secondary": "0px 5px 20px rgba(0, 201, 184, 0.25)",
        "ios-button": "0px 19px 0px 0px rgba(178, 207, 255, 1)",
      },
      colors: {
        primary: {
          DEFAULT: "#029BBD",
          light: "#2BC1D6",
          dark: "#049CBE"
        },
        secondary: {
          DEFAULT: "#00C9B8"
        },
        third: {
          DEFAULT: "#102870"
        },
        ios: {
          DEFAULT: "#629EFF",
          light: "#B2CFFF"
        },
        nft: {
          DEFAULT: "#00C9B8",
          light: "#99E9E3"
        }
      }
    },
  },
  plugins: [],
};
export default config;
