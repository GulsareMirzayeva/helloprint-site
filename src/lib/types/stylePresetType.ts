export type stylePresetType = {
  overall: {
    primaryColor: string;
    backgroundColor: string;
    textColorDark: string;
    textColorLight: string;
  };
  header: {
    backgroundColor: string;
    activeLinkColor: string;
    inActiveLinkColor: string;
  };
  navigation: {
    backgroundColor: string;
    backgroundHoverProperty: string;
    underlineActiveColorProperty: string;
    underlineInActiveColorProperty: string;
    underlineHoverColorProperty: string;
  };
  home: {
    fromProperty: string;
    viaProperty: string;
    toProperty: string;
  };
  footer: {
    borderTopProperty: string;
  };
  productCard: {
    headBackgroundColor: string;
    textColor: string;
  };
  card: {
    backgroundColorDark: string;
    backgroundColorLight: string;
    backgroundPropertyActive: string;
  };
  table: {
    headBackgroundColor: string;
    headBorderColor: string;
    unitsBorderColor: string;
    headTextColor: string;
    cellBackgroundPropertyEven: string;
    cellBackgroundPropertyOdd: string;
    cellBorderColor: string;
    highlightRowProperty: string;
  };
  notification: {
    asteriskColor: string;
    textColor: string;
    borderProperty: string;
    iconColor: string;
  };
  button: {
    backgroundProperty: string;
    backgroundHoverProperty: string;
    textProperty: string;
  };
  confirmMessage: {
    textColor: string;
    backgroundColor: string;
    borderColor: string;
  };
};
