import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('twind-simple-typography')({
      fontFamilyMap: {
        'pretendard-normal': {
          weight: 400,
          family: '"Pretendard", sans-serif',
        },
        'pretendard-bold': {
          weight: 700,
          family: '"Pretendard", sans-serif',
        },
      },
      fontSizeList: [
        80, 60, 40, 35, 30, 28, 25, 22, 20, 18, 15, 13, 12, 11, 10,
      ],
      lineHeightList: [130, 160],
    }),
  ],
};
export default config;
