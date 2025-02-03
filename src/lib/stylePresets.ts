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
    backgroundColor: mainColors.lightColor,
    backgroundHoverProperty: `hover:bg-[${mainColors.secondaryColor}]`,
    underlineActiveColorProperty: `border-b-[${mainColors.corporateIdentityColor}]`,
    underlineInActiveColorProperty: `border-b-[${mainColors.lightColor}]`,
    underlineHoverColorProperty: `hover:border-b-[${mainColors.secondaryColor}]`,
  },
  home: {
    contactSection: {
      fromProperty: 'from-[#fd3964]',
      viaProperty: 'via-[#fa2150]',
      toProperty: `to-[${mainColors.corporateIdentityColor}]`,
    },
  },
  footer: {
    borderTopProperty: `border-[${mainColors.corporateIdentityColor}]`,
  },
  productCard: {
    headBackgroundColor: mainColors.corporateIdentityColor,
    textColor: mainColors.lightColor,
  },
  card: {
    backgroundColorDark: mainColors.secondaryColor,
    backgroundColorLight: mainColors.lightColor,
    backgroundPropertyActive: `bg-[${mainColors.secondaryColor}]`,
  },
  table: {
    headBackgroundColor: mainColors.corporateIdentityColor,
    headBorderColor: mainColors.lightColor,
    unitsBorderColor: mainColors.secondaryDarkColor,
    headTextColor: mainColors.lightColor,
    cellBackgroundPropertyEven: 'even:bg-[#ffffff]',
    cellBackgroundPropertyOdd: 'odd:bg-[#f9fafb]',
    cellBorderColor: mainColors.secondaryDarkColor,
    highlightRowProperty: `hover:bg-[${mainColors.corporateIdentityColor}20]`, // 20% opacity
  },
  notification: {
    asteriskColor: mainColors.corporateIdentityColor,
    textColor: mainColors.corporateIdentityColor,
    borderProperty: `border-[${mainColors.secondaryDarkColor}]`,
    iconColor: '#1e40af',
  },
  button: {
    backgroundProperty: `bg-[${mainColors.corporateIdentityColor}]`,
    backgroundHoverProperty: 'hover:bg-[#ff3366]',
    textProperty: `text-[${mainColors.lightColor}]`,
  },
  confirmMessage: {
    textColor: '#166534',
    backgroundColor: '#dcfce7',
    borderColor: '#86efac',
  },
};
