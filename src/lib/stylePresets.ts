const mainColors = {
  corporateIdentityColor: '#fb0036', // Red
  secondaryColor: '#f3f4f6', // Light gray
  secondaryDarkColor: '#c2c2c2', // Dark gray
  lightColor: '#ffffff', // White
  darkColor: '#202020', // Light black
};

export const colorPresets = {
  overall: {
    primaryColor: mainColors.corporateIdentityColor,
    backgroundColor: mainColors.lightColor,
    textColorDark: mainColors.darkColor,
    textColorLight: mainColors.lightColor,
  },
  header: {
    backgroundColor: mainColors.lightColor,
    activeLinkColor: mainColors.corporateIdentityColor,
    inActiveLinkColor: mainColors.lightColor,
  },
  navigation: {
    backgroundColor: '#ffffff',
    backgroundHoverProperty: `hover:bg-[#f3f4f6]`,
    underlineActiveColorProperty: `border-b-[#fb0036]`,
    underlineInActiveColorProperty: `border-b-[#ffffff]`,
    underlineHoverColorProperty: `hover:border-b-[#f3f4f6]`,
  },
  home: {
    contactSection: {
      fromProperty: 'from-[#fd3964]',
      viaProperty: 'via-[#fa2150]',
      toProperty: `to-[#fb0036]`,
    },
  },
  footer: {
    borderTopProperty: `border-[#fb0036]`,
  },
  productCard: {
    headBackgroundColor: mainColors.corporateIdentityColor,
    textColor: mainColors.lightColor,
  },
  card: {
    backgroundColorDark: mainColors.secondaryColor,
    backgroundColorLight: mainColors.lightColor,
    backgroundPropertyActive: `bg-[#f3f4f6]`,
  },
  table: {
    headBackgroundColor: mainColors.corporateIdentityColor,
    headBorderColor: mainColors.lightColor,
    unitsBorderColor: mainColors.secondaryDarkColor,
    headTextColor: mainColors.lightColor,
    cellBackgroundPropertyEven: 'even:bg-[#ffffff]',
    cellBackgroundPropertyOdd: 'odd:bg-[#f9fafb]',
    cellBorderColor: mainColors.secondaryDarkColor,
    highlightRowProperty: `hover:bg-[#fb003620]`, // 20% opacity
  },
  notification: {
    asteriskColor: mainColors.corporateIdentityColor,
    textColor: mainColors.corporateIdentityColor,
    borderProperty: `border-[#c2c2c2]`,
    iconColor: '#1e40af',
  },
  button: {
    backgroundProperty: `bg-[#fb0036]`,
    backgroundHoverProperty: 'hover:bg-[#ff3366]',
    textProperty: `text-[#ffffff]`,
  },
  confirmMessage: {
    textColor: '#166534',
    backgroundColor: '#dcfce7',
    borderColor: '#86efac',
  },
};
