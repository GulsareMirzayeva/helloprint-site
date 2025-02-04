export type StylePresetType = {
  overall: {
    textColorPrimary: string;
    textColorSecondary: string;
    textColorLight: string;
    backgroundColor: string;
    formTextColor: string;
  };
  header: {
    backgroundColor: string;
  };
  navigation: {
    backgroundColor: string;
    backgroundHover: string;
    underlineActiveColor: string;
    underlineInActiveColor: string;
    underlineHoverColor: string;
  };
  home: {
    from: string;
    via: string;
    to: string;
  };
  footer: {
    borderTopColor: string;
    backgroundColor: string;
  };
  productCard: {
    headBackgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  card: {
    backgroundColorDark: string;
    backgroundColorLight: string;
    backgroundColorActive: string;
  };
  table: {
    headBackgroundColor: string;
    headBorderColor: string;
    unitsBorderColor: string;
    headTextColor: string;
    cellBackgroundEven: string;
    cellBackgroundOdd: string;
    cellBorderColor: string;
    highlightRow: string;
  };
  notification: {
    textColor: string;
    asteriskColor: string;
    borderColor: string;
    iconColor: string;
  };
  button: {
    backgroundColor: string;
    backgroundHover: string;
    textColor: string;
  };
  confirmMessage: {
    textColor: string;
    backgroundColor: string;
    borderColor: string;
  };
};
