/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/front-end/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "card-project":
          "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14)",
        "dropdown-language-switcher": "0px 5px 10px 0 #f9f9f9",
        footer: "0 0 0 100vmax #023b39",
        "header-root-mobile": "0 4px 4px 0 rgba(0, 0, 0, 0.03)",
        "hover-primary-button": "0 4px 4px 0 rgba(0, 0, 0, 0.08)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
      },
      colors: {
        black: {
          50: "#f9f9f9",
          100: "#e0e0e0",
          200: "#d1d1d1",
          300: "#aeaeae",
          400: "#959595",
          500: "#7d7d7d",
          600: "#4b4b4b",
          700: "#323232",
          800: "#191919",
          900: "#000000",
        },
        cream: {
          500: "#faf9f6",
          600: "#fbf8f4",
          700: "#f5eee1",
          800: "#f4ecdd",
          900: "#f3ead9",
        },
        error: {
          900: "#ff1323",
        },
        primary: {
          50: "#e6ebeb",
          100: "#ccd8d7",
          200: "#b3c4c4",
          300: "#9ab1b0",
          400: "#819d9c",
          500: "#678988",
          600: "#4e7674",
          700: "#356261",
          800: "#1b4f4d",
          900: "#023b39",
        },
        red: {
          900: "#d2000e",
        },
        success: {
          900: "#039855",
        },
        warning: {
          900: "#b54708",
        },
        white: {
          900: "#ffffff",
        },
        yellow: {
          900: "#f9bf6b",
        },
      },
      container: {
        padding: {
          DEFAULT: "1.25rem", // 20px
          sm: "1.25rem", // 20px
          md: "1.75rem", // 28px
          lg: "1.875rem", // 30px
          xl: "2.531rem", // 40.5px
          "2xl": "3.4375rem", // 55px
        },
      },
      fontSize: {
        "heading-1": "4.25rem", // 68px
        "heading-2": "2.5rem", // 40px
        "heading-3": "2rem", // 32px
        "heading-4": "1.75rem", // 28px
        xxs: "0.625rem", // 10px
        "0.375xxs": "0.375rem", // 6px
        "0.5xxs": "0.5rem", // 8px
        "2.75xl": "1.75rem", // 22px
      },
      gap: {
        46.25: "11.563rem", // 185px
      },
      letterSpacing: {
        default: "0.01em",
      },
      lineHeight: {
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.25: "1.563rem", // 25px
        13: "3.25rem", // 52px
        23: "5.75rem", // 92px
      },
      margin: {
        7.25: "1.813rem", // 29px
        12.5: "3.125rem", // 50px
        13.75: "3.438rem", // 55px
      },
      maxWidth: {
        42.5: "10.625rem", // 170px
        55: "13.75rem", // 220px
        68.5: "17.125rem", // 274px
      },
      minHeight: {
        9: "2.25rem", // 36px
        11: "2.75rem", // 44px
        12: "3rem", // 48px
        33: "8.25rem", // 132px
      },
      minWidth: {
        8.25: "2.063rem", // 33px
        44.5: "11.125rem", // 178px
      },
      rotate: {
        270: "270deg", // 270 degree
      },
      spacing: {
        0.75: "0.188rem", // 3px
        1.25: "0.313rem", // 5px
        1.5: "0.375rem", // 6px
        1.75: "0.438rem", // 7px
        2.25: "0.563rem", // 9px
        2.5: "0.625rem", // 10px
        2.75: "0.688rem", // 11px
        3: "0.75rem", // 12px
        3.25: "0.813rem", // 13px
        3.75: "0.938rem", // 15px
        4.25: "1.063rem", // 17px
        4.5: "1.125rem", // 18px
        5: "1.25rem", // 20px
        5.5: "1.375rem", // 22px
        5.75: "1.438rem", // 23px
        6.25: "1.563rem", // 25px
        6.5: "1.625rem", //26px
        7: "1.75rem", // 28px
        7.5: "1.875rem", // 30px
        8: "2rem", // 32px
        8.5: "2.125rem", // 34px
        8.75: "2.188rem", // 35px
        9.5: "2.375rem", // 38px
        10.125: "2.531rem", // 40.5px
        10.5: "2.625rem", // 42px
        11: "2.75rem", // 44px
        11.5: "2.875rem", // 46px
        12: "3rem", //48px
        12.5: "3.125rem", // 50px
        13.5: "3.375rem", // 54px,
        13.75: "3.438rem", // 55px
        14.5: "3.625rem", //58px
        14: "3.5rem", // 56px
        15: "3.75rem", // 60px
        15.5: "3.875rem", // 62px
        16.75: "4.188rem", // 67px
        17.5: "4.375rem", // 70px
        18: "4.5rem", // 72px
        19: "4.75rem", // 76px
        19.25: "4.813rem", // 77px
        19.5: "4.875rem", // 78px
        20: "5rem", // 80px
        21: "5.25rem", // 84px
        21.625: "5.406rem", // 86.5
        21.75: "5.438rem", // 87px,
        22.5: "5.625rem", // 90px
        23: "5.75rem", // 92px
        25: "6.25rem", // 100px
        27.5: "6.875rem", // 110px
        30: "7.5rem", // 120px
        31.25: "7.813rem", // 125px
        31.5: "7.875rem", //126px
        32.5: "8.125rem", // 130px
        33: "8.25rem", // 132px
        33.5: "8.375rem", // 134px
        33.75: "8.438rem", // 135px
        34: "8.5rem", // 136px
        35: "8.75rem", // 140px
        36: "9rem", // 144px
        37.5: "9.375rem", // 150px
        40.5: "10.125rem", // 162px
        40.75: "10.188rem", // 163px
        42.5: "10.625rem", // 170px
        50: "12.5rem", // 200px
        55: "13.75rem", // 220px
        56.5: "14.125rem", // 226px
        55.25: "13.813rem", // 221px,
        59.5: "14.875rem", // 238px
        62.5: "15.625rem", // 250px
        62.75: "15.688rem", // 251px
        63.25: "15.813rem", // 253px
        65: "16.25rem", // 260px
        72.5: "18.125rem", // 290px,
        75: "18.75rem", // 300px
        75.5: "18.875rem", // 302px
        76.5: "19.125rem", //306px
        77.5: "19.375rem", // 310px
        82.5: "20.625rem", // 330px
        87.5: "21.875rem", // 350px
        88.75: "22.188rem", // 355px
        90: "22.5rem", // 360px
        91.5: "22.875rem", // 366px
        94.5: "23.625rem", // 378px
        100: "25rem", // 400px
        105.75: "26.438rem", // 423px
        109.5: "27.375rem", // 438px
        110.5: "27.625rem", // 442px
        132.5: "33.125rem", // 530px
        150: "37.5rem", // 600px
        150.5: "37.625rem", // 602px
        181: "45.25rem", // 724px
        216: "54rem", // 864px
        250: "62.5rem", // 1000px
        273.75: "68.438rem", // 1095px
        305: "76.25rem", // 1220px
        320: "80rem", // 1280px
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
};
