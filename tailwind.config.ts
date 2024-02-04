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
        "nft-image": "url(/nft_world.svg)",
        "play-image": "url(/play_now_bg.svg)",
        "slide1": "url(/site-banner-main.png)",
        "slide2": "url(/site-banner-1.png)",
        "roadmap": "url(/roadmap.png)"
      },
      dropShadow: {
        "primary-sh": "0px 3px 8px rgba(2, 156, 190, 0.5)",
        "card-sh" : "0px 30px 15px rgba(2, 156, 190, 0.2)",
        "astian-sh": "0px 5px 15px rgba(98, 158, 255, 0.3)",
        "game-bx": "0px 20px 20px rgba(98, 158, 255, 0.32"
      },
      boxShadow: {
        "secondary": "0px 5px 20px rgba(0, 201, 184, 0.25)",
        "ios-button": "0px 19px 0px 0px rgba(178, 207, 255, 1)",
      },
      borderRadius: {
        "btn": "30px",
        "x-btn": "40px"
      },
      colors: {
        primary: {
          DEFAULT: "#029BBD",
          light: "#2BC1D6",
          dark: "#049CBE",
          lighter: "#9AD7E5"
        },
        secondary: {
          DEFAULT: "#00C9B8"
        },
        third: {
          DEFAULT: "#102870"
        },
        ios: {
          DEFAULT: "#629EFF",
          light: "#B2CFFF",
        },
        nft: {
          DEFAULT: "#00C9B8",
          light: "#99E9E3",
        },
        play: {
          DEFAULT: "#FF6383",
          light: "#FFC1CD",
        },
        astian: {
          DEFAULT: "#629EFF",
          normal: "#C0D8FF",
          light: "#A1C4E8",
          lighter: "#D0E2FF",
          dark: "#102870"
        }
      }
    },
  },
  plugins: [],
};
export default config;
