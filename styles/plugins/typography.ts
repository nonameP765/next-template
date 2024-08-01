import plugin from 'tailwindcss/plugin';

const typography = plugin(({ addUtilities }) => {
  const fontSizeList = [
    80, 60, 40, 35, 30, 28, 25, 22, 20, 18, 15, 13, 12, 11, 10,
  ] as const;
  const fontWeightList = [400, 700] as const;
  const fontWeightLabel: Record<(typeof fontWeightList)[number], string> = {
    400: 'normal',
    700: 'bold',
  };
  const fontWeightStyleRecord: Record<(typeof fontWeightList)[number], any> = {
    400: {
      fontFamily: '"Pretendard", sans-serif',
      fontWeight: 400,
    },
    700: {
      fontFamily: '"Pretendard", sans-serif',
      fontWeight: 700,
    },
  };

  const lineHeightList = [130, 160] as const;

  const newUtilities: Record<string, any> = {};

  fontSizeList.forEach((fontSize) => {
    fontWeightList.forEach((fontWeight) => {
      lineHeightList.forEach((lineHeight) => {
        const key = `.typography-${fontSize}-${fontWeightLabel[fontWeight]}-${lineHeight}`;
        newUtilities[key] = {
          fontSize: `${fontSize}px`,
          ...fontWeightStyleRecord[fontWeight],
          lineHeight: `${lineHeight}%`,
        };
      });
    });
  });

  addUtilities(newUtilities);
});

export default typography;
