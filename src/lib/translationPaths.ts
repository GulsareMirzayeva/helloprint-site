// Page heading images
import copyPrintIntroduction from '../assets/introduction-images/copyPrintIntroduction.jpg';
import customClothingIntroductionMale from '../assets/introduction-images/customPrintIntroduction-male-med.jpg';
import stickersIntroduction from '../assets/introduction-images/stickersIntroduction.jpg';
import flyersIntroduction from '../assets/introduction-images/flyersIntroduction.jpg';
import foldersIntroduction from '../assets/introduction-images/foldersIntroduction.jpg';
import postersIntroduction from '../assets/introduction-images/postersIntroduction.jpg';
import cardsIntroduction from '../assets/introduction-images/cardsIntroduction.jpg';

// Logo's for Office supplies page
import quantoreLogo from '../assets/officeSupplies/quantore-logo-sm.png';
import leitzLogo from '../assets/officeSupplies/leitz-logo-sm.png';
import hpLogo from '../assets/officeSupplies/hewlett-packard-logo-sm.png';
import hermaLogo from '../assets/officeSupplies/Herma-logo-sm.png';
import epsonLogo from '../assets/officeSupplies/Epson-logo-sm.png';
import dymoLogo from '../assets/officeSupplies/DYMO_logo-sm.png';
import canonLogo from '../assets/officeSupplies/Canon_logo_sm.png';

// List of brands that are displayed on the Office Supplies page
const logoList = [
  hpLogo,
  canonLogo,
  dymoLogo,
  epsonLogo,
  quantoreLogo,
  leitzLogo,
  hermaLogo,
];

// Common sentences
export const commonSentences = {
  tableCaption: 'commonSentences.tableCaption',
};

// Common used words
export const commonWords = {
  color: 'commonWords.color',
  colored: 'commonWords.colored',
  blackAndWhite: 'commonWords.blackAndWhite',
  prints: 'commonWords.prints',
};

// Paths to homepage information content in translation files
export const homeContentPaths = {
  title: 'home.title',
  subTitle: 'home.subTitle',
  introduction: 'home.introduction',
  readMore: 'home.readMore',
};

// Paths to Shop information information content in translation files
export const shopInfoPaths = {
  name: "Copy & Print shop 't Hartje",
  adress: 'Korreweg 38',
  zipCode: '9715 AB',
  town: 'Groningen',
  telNo: '050-5779365',
  email: 'info@thartje.nl',
  facebookUrl: 'https://www.facebook.com/copyshopthartje/',
  openingHoursMondayToFriday: '09:00 - 18:00',
  openingHoursSaturday: '10:00 - 17:00',
  openingHoursSunday: 'contactPage.closed',
  hour: 'shopInfo.openingHours.hour',
  termsOfSaleTitle: 'shopInfo.termsOfSale.title',
  telePhone: 'shopInfo.openingHours.telePhone',
  contactTitle: 'shopInfo.contact.contactTitle',
  contact: 'shopInfo.contact.contactDetails',
  adjustedHoursAttention: 'shopInfo.openingHours.adjustedHoursAttention',
  adjustedHoursIntroduction: 'shopInfo.openingHours.adjustedHoursIntroduction',
  adjustedHoursTitle: 'shopInfo.openingHours.adjustedHoursTitle',
  holidayOne: 'shopInfo.openingHours.holidayOne',
  holidayTwo: 'shopInfo.openingHours.holidayTwo',
  holidayThree: 'shopInfo.openingHours.holidayThree',
  holidayFour: 'shopInfo.openingHours.holidayFour',
  holidayFive: 'shopInfo.openingHours.holidayFive',
};

// Paths to contact information content in translation files
export const contactInfoTextContent = {
  pageTitle: 'contactPage.pageTitle',
  title: 'shopInfo.contact.title',
  subtitle: 'shopInfo.contact.subtitle',
  homePagesubtitle: 'shopInfo.contact.homePageSubtitle',
  contactIntroduction: 'contactPage.contactIntroduction',
  contactForm: 'shopInfo.contact.contactForm',
  messageTitle: 'shopInfo.contact.messageTitle',
  openingHoursTitle: 'shopInfo.openingHours.title',
  midweeks: 'shopInfo.openingHours.midweeks',
  midweeksShort: 'shopInfo.openingHours.midweeksShort',
  saturday: 'shopInfo.openingHours.saturday',
  sunday: 'shopInfo.openingHours.sunday',
  closed: 'shopInfo.openingHours.closed',
};

// Paths to button names for the header in translation files
export const menuButtonNames = {
  home: 'menu.home',
  copyPrint: 'menu.copyPrint',
  customPrinting: 'menu.customPrinting',
  overview: 'menu.overview',
  stickers: 'menu.stickers',
  cards: 'menu.cards',
  flyers: 'menu.flyers',
  folders: 'menu.folders',
  posters: 'menu.posters',
  customClothing: 'menu.customClothing',
  contact: 'menu.contact',
  officeSupplies: 'menu.articles',
};

// Paths to text content in translation files
export const customClotingContentPaths = {
  // Used data
  data: {
    image: customClothingIntroductionMale,
  },
  pageHeader: {
    title: 'customClothingPage.pageHeaderContent.title',
    introduction: 'customClothingPage.pageHeaderContent.introduction',
  },
  cardTextileGarments: {
    header: {
      title: 'customClothingPage.cardTextileGarments.header.title',
      subTitle: 'customClothingPage.cardTextileGarments.header.subTitle',
      introduction:
        'customClothingPage.cardTextileGarments.header.introduction',
    },
    tableTextileGarments: {
      header: {
        title: '',
        subTitle: '',
      },
      variants: {
        shirt: 'customClothingPage.cardTextileGarments.variants.shirt',
        polo: 'customClothingPage.cardTextileGarments.variants.polo',
        sweater: 'customClothingPage.cardTextileGarments.variants.sweater',
        hoody: 'customClothingPage.cardTextileGarments.variants.hoody',
      },
    },
  },
  cardFlexAndDtg: {
    header: {
      title: 'customClothingPage.cardFlexAndDtg.header.title',
      subTitle: 'customClothingPage.cardFlexAndDtg.header.subTitle',
      introduction: 'customClothingPage.cardFlexAndDtg.header.introduction',
    },
    common: {
      headerOne: 'customClothingPage.cardFlexAndDtg.common.headerOne',
      headerTwo: 'customClothingPage.cardFlexAndDtg.common.headerTwo',
    },
    tableFlex: {
      header: {
        title: 'customClothingPage.cardFlexAndDtg.tableFlex.header.title',
        subTitle: 'customClothingPage.cardFlexAndDtg.tableFlex.header.subTitle',
      },
      columnHeaders: {
        headSingleColored: 'Single',
      },
      variants: {
        frontChestLogo:
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontChestLogo',
        frontBackLarge:
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontBackLarge',
        frontSmallBackLarge:
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontSmallBackLarge',
      },
    },
    tableDtg: {
      header: {
        title: 'customClothingPage.cardFlexAndDtg.tableDtg.header.title',
        subTitle: 'customClothingPage.cardFlexAndDtg.tableDtg.header.subTitle',
      },
      columnHeaders: {
        headTextileWhite:
          'customClothingPage.cardFlexAndDtg.tableDtg.columnHeaders.headTextileWhite',
        headTextileColor:
          'customClothingPage.cardFlexAndDtg.tableDtg.columnHeaders.headTextileColor',
      },
      variants: {
        tableHeadWhiteTextile:
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.tableHeadWhiteTextile',
        tableHeadcolored:
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.tableHeadcolored',
        frontChestLogo:
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.frontChestLogo',
        frontBackLarge:
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.frontBackLarge',
        frontSmallBackLarge:
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.frontSmallBackLarge',
      },
    },
  },
  notifications: {
    first: 'customClothingPage.notifications.first',
    second: 'customClothingPage.notifications.second',
    third: 'customClothingPage.notifications.third',
    fourth: 'customClothingPage.notifications.fourth',
  },
};

// Content that is shared with other categories in the Cutstom print category
export const customPrintingContentPaths = {
  title: 'customPrintPage.overviewTitle',
  introduction: 'customPrintPage.overviewIntroduction',
  contactTitle: 'customPrintPage.contactTitle',
  digitalPrintDeliveryTime: 'customPrintPage.common.digitalPrintDeliveryTime',
  offsetPrintDeliveryTime: 'customPrintPage.common.offsetPrintDeliveryTime',
  deliveryDisclaimer: 'customPrintPage.common.deliveryDisclaimer',
  pricesBasedonSelfService: 'customPrintPage.common.pricesBasedonSelfService',
};

// Contact form
export const contactFormTextContentPaths = {
  sendMessage: 'contactPage.sendMessage',
  formUserName: 'contactPage.formUserName',
  formUserTelNumber: 'contactPage.formUserTelNumber',
  formUserEmailAdress: 'contactPage.formUserEmailAdress',
  messageContent: 'contactPage.messageContent',
  messageSubject: 'contactPage.messageSubject',
  messageSubmit: 'contactPage.messageSubmit',
  messageSubmitLoading: 'contactPage.messageSubmitLoading',
  telephoneNo: 'commonWords.telephoneNo',
  email: 'commonWords.email',
  confirmMessage: 'shopInfo.contact.confirmMessage',
};

// Contact form error messages
export const contactFormErrorPaths = {
  telNoOnlyNumbers: 'shopInfo.contact.errors.telNoOnlyNumbers',
  telNoMinNumbers: 'shopInfo.contact.errors.telNoMinNumbers',
  telNoMaxNumbers: 'shopInfo.contact.errors.telNoMaxNumbers',
  emailValidAddress: 'shopInfo.contact.errors.emailValidAddress',
  messageMinChars: 'shopInfo.contact.errors.messageMinChars',
  messageRequired: 'shopInfo.contact.errors.messageRequired',
  requiredEmailOrTelNo: 'shopInfo.contact.errors.requiredEmailOrTelNo',
  errorSendingMail: 'shopInfo.contact.errors.errorSendingMail',
};

// Content for Office supplies page
export const officeSuppliesPaths = {
  data: {
    logoList: logoList,
  },
  title: 'officeSupplies.title',
  introduction: 'officeSupplies.introduction',
};

// Content displayed on the overview page of Custom print
export const customPrintOverviewContentPaths = {
  overviewTitle: 'customPrintPage.overviewTitle',
  overviewIntroduction: 'customPrintPage.overviewIntroduction',
};

// Copy & Print
export const copyPrintContentPaths = {
  // Used data
  data: {
    image: copyPrintIntroduction,
  },

  // Page header
  pageHeader: {
    title: 'copyPrintPage.pageHeaderContent.title',
    introduction: 'copyPrintPage.pageHeaderContent.introduction',
    subTitle: 'copyPrintPage.pageHeaderContent.subTitle',
    subText: 'copyPrintPage.pageHeaderContent.subText',
  },

  // Card - Budget
  cardBudget: {
    header: {
      title: 'copyPrintPage.cardBudget.header.title',
      subTitle: 'copyPrintPage.cardBudget.header.subTitle',
      introduction: 'copyPrintPage.cardBudget.header.introduction',
    },
    tableColor: {
      title: 'copyPrintPage.cardBudget.tableColor.title',
      subTitle: 'copyPrintPage.cardBudget.tableColor.subTitle',
    },
    tableBlackAndWhite: {
      title: 'copyPrintPage.cardBudget.tableBlackAndWhite.title',
      subTitle: 'copyPrintPage.cardBudget.tableBlackAndWhite.subTitle',
    },
  },

  // Card - High quality
  cardHq: {
    header: {
      title: 'copyPrintPage.cardHq.header.title',
      subTitle: 'copyPrintPage.cardHq.header.subTitle',
      introduction: 'copyPrintPage.cardHq.header.introduction',
    },
    tableHq: {
      title: 'copyPrintPage.cardHq.tableHq.title',
      subTitle: 'copyPrintPage.cardHq.tableHq.subTitle',
    },
  },

  // Notifications
  notifications: {
    first: 'copyPrintPage.notifications.first',
    second: 'copyPrintPage.notifications.second',
    third: 'copyPrintPage.notifications.third',
  },
};

// Custom Print - Business Cards
export const cardsContentPaths = {
  data: {
    image: cardsIntroduction,
  },
  pageHeader: {
    title: 'customPrintPage.cards.pageHeader.title',
    introduction: 'customPrintPage.cards.pageHeader.introduction',
  },
  cardDigitalPrint: {
    header: {
      title: 'customPrintPage.cards.cardDigitalPrint.header.title',
      subTitle: 'customPrintPage.cards.cardDigitalPrint.header.subTitle',
      introduction:
        'customPrintPage.cards.cardDigitalPrint.header.introduction',
    },
    tableColor: {
      header: {
        title: 'customPrintPage.cards.cardDigitalPrint.tableColor.header.title',
        subTitle:
          'customPrintPage.cards.cardDigitalPrint.tableColor.header.subTitle',
      },
      columnHeaders: {
        headerOne:
          'customPrintPage.cards.cardDigitalPrint.tableColor.columnHeaders.headerOne',
        headerTwo:
          'customPrintPage.cards.cardDigitalPrint.tableColor.columnHeaders.headerTwo',
        headerThree:
          'customPrintPage.cards.cardDigitalPrint.tableColor.columnHeaders.headerThree',
      },
    },
    tableBlackAndWhite: {
      header: {
        title:
          'customPrintPage.cards.cardDigitalPrint.tableBlackAndWhite.header.title',
        subTitle:
          'customPrintPage.cards.cardDigitalPrint.tableBlackAndWhite.header.subTitle',
      },
      columnHeaders: {
        headerOne:
          'customPrintPage.cards.cardDigitalPrint.tableBlackAndWhite.columnHeaders.headerOne',
        headerTwo:
          'customPrintPage.cards.cardDigitalPrint.tableBlackAndWhite.columnHeaders.headerTwo',
        headerThree:
          'customPrintPage.cards.cardDigitalPrint.tableBlackAndWhite.columnHeaders.headerThree',
      },
    },
  },
  cardOffsetPrint: {
    header: {
      title: 'customPrintPage.cards.cardOffsetPrint.header.title',
      subTitle: 'customPrintPage.cards.cardOffsetPrint.header.subTitle',
      introduction: 'customPrintPage.cards.cardOffsetPrint.header.introduction',
    },
    tableOffsetPrint: {
      header: {
        title:
          'customPrintPage.cards.cardOffsetPrint.tableOffsetPrint.header.title',
        subTitle:
          'customPrintPage.cards.cardOffsetPrint.tableOffsetPrint.header.subTitle',
      },
      columnHeaders: {
        headerOne:
          'customPrintPage.cards.cardOffsetPrint.columnHeaders.headerOne',
        headerTwo:
          'customPrintPage.cards.cardOffsetPrint.columnHeaders.headerTwo',
        headerThree:
          'customPrintPage.cards.cardOffsetPrint.columnHeaders.headerTwo',
      },
    },
  },
};

// Custom Print - Flyers
export const flyersContentPaths = {
  data: {
    image: flyersIntroduction,
  },
  pageHeader: {
    title: 'customPrintPage.flyers.pageHeader.title',
    introduction: 'customPrintPage.flyers.pageHeader.introduction',
  },
  cardDigitalPrint: {
    header: {
      title: 'customPrintPage.flyers.cardDigitalPrint.header.title',
      subTitle: 'customPrintPage.flyers.cardDigitalPrint.header.subTitle',
      introduction:
        'customPrintPage.flyers.cardDigitalPrint.header.introduction',
    },
    common: {
      headerOne: 'customPrintPage.flyers.cardDigitalPrint.common.headerOne',
      headerTwo: 'customPrintPage.flyers.cardDigitalPrint.common.headerTwo',
      headerThree: 'customPrintPage.flyers.cardDigitalPrint.common.headerThree',
      headerFour: 'customPrintPage.flyers.cardDigitalPrint.common.headerFour',
      subTitleOne: 'customPrintPage.flyers.cardDigitalPrint.common.subTitleOne',
      subTitleTwo: 'customPrintPage.flyers.cardDigitalPrint.common.subTitleTwo',
    },
    tableA6: {
      header: {
        title: 'customPrintPage.flyers.cardDigitalPrint.tableA6.header.title',
      },
    },
    tableA5: {
      header: {
        title: 'customPrintPage.flyers.cardDigitalPrint.tableA5.header.title',
      },
    },
  },
  cardOffsetPrint: {
    header: {
      title: 'customPrintPage.flyers.cardOffsetPrint.header.title',
      subTitle: 'customPrintPage.flyers.cardOffsetPrint.header.subTitle',
      introduction:
        'customPrintPage.flyers.cardOffsetPrint.header.introduction',
    },
    common: {
      headerOne: 'customPrintPage.flyers.cardOffsetPrint.common.headerOne',
      headerTwo: 'customPrintPage.flyers.cardOffsetPrint.common.headerTwo',
      headerThree: 'customPrintPage.flyers.cardOffsetPrint.common.headerThree',
      headerFour: 'customPrintPage.flyers.cardOffsetPrint.common.headerFour',
      subTitleOne: 'customPrintPage.flyers.cardOffsetPrint.common.subTitleOne',
      subTitleTwo: 'customPrintPage.flyers.cardOffsetPrint.common.subTitleTwo',
    },
    tableA5: {
      header: {
        title: 'customPrintPage.flyers.cardOffsetPrint.tableA5.header.title',
      },
    },
    tableA6: {
      header: {
        title: 'customPrintPage.flyers.cardOffsetPrint.tableA6.header.title',
      },
    },
  },
};

// Custom Print - Folders
export const foldersContentPaths = {
  data: {
    image: foldersIntroduction,
  },
  pageHeader: {
    title: 'customPrintPage.folders.pageHeader.title',
    introduction: 'customPrintPage.folders.pageHeader.introduction',
  },
  common: {
    headerOne: 'customPrintPage.folders.common.headerOne',
    headerTwo: 'customPrintPage.folders.common.headerTwo',
    headerThree: 'customPrintPage.folders.common.headerThree',
    headerFour: 'customPrintPage.folders.common.headerFour',
    headerFive: 'customPrintPage.folders.common.headerFive',
    headerSix: 'customPrintPage.folders.common.headerSix',
    subTitleOne: 'customPrintPage.folders.common.subTitleOne',
    subTitleTwo: 'customPrintPage.folders.common.subTitleTwo',
  },
  cardDigitalPrint: {
    header: {
      title: 'customPrintPage.folders.cardDigitalPrint.header.title',
      subTitle: 'customPrintPage.folders.cardDigitalPrint.header.subTitle',
      introduction:
        'customPrintPage.folders.cardDigitalPrint.header.introduction',
    },
    tableColor: {
      header: {
        title:
          'customPrintPage.folders.cardDigitalPrint.tableColor.header.title',
        subTitle:
          'customPrintPage.folders.cardDigitalPrint.tableColor.header.subTitle',
      },
    },
    tableBlackAndWhite: {
      header: {
        title:
          'customPrintPage.folders.cardDigitalPrint.tableBlackAndWhite.header.title',
        subTitle:
          'customPrintPage.folders.cardDigitalPrint.tableBlackAndWhite.header.subTitle',
      },
    },
  },
  cardOffsetPrint: {
    header: {
      title: 'customPrintPage.folders.cardOffsetPrint.header.title',
      subTitle: 'customPrintPage.folders.cardOffsetPrint.header.subTitle',
      introduction:
        'customPrintPage.folders.cardOffsetPrint.header.introduction',
    },
    tableA4Trifold: {
      header: {
        title:
          'customPrintPage.folders.cardOffsetPrint.tableA4Trifold.header.title',
        subTitle:
          'customPrintPage.folders.cardOffsetPrint.tableA4Trifold.header.subTitle',
      },
    },
    tableA4Bifold: {
      header: {
        title:
          'customPrintPage.folders.cardOffsetPrint.tableA4Bifold.header.title',
        subTitle:
          'customPrintPage.folders.cardOffsetPrint.tableA4Bifold.header.subTitle',
      },
    },
    tableA3: {
      header: {
        title: 'customPrintPage.folders.cardOffsetPrint.tableA3.header.title',
        subTitle:
          'customPrintPage.folders.cardOffsetPrint.tableA3.header.subTitle',
      },
    },
  },
};

// Custom Print - Posters
export const postersContentPaths = {
  data: {
    image: postersIntroduction,
  },
  pageHeader: {
    title: 'customPrintPage.posters.pageHeader.title',
    introduction: 'customPrintPage.posters.pageHeader.introduction',
  },
  common: {
    headerOne: 'customPrintPage.posters.common.headerOne',
    headerTwo: 'customPrintPage.posters.common.headerTwo',
    headerThree: 'customPrintPage.posters.common.headerThree',
    headerFour: 'customPrintPage.posters.common.headerFour',
    headerFive: 'customPrintPage.posters.common.headerFive',
  },
  cardColorOrBlackAndWhite: {
    header: {
      title: 'customPrintPage.posters.cardColorOrBlackAndWhite.header.title',
      subTitle:
        'customPrintPage.posters.cardColorOrBlackAndWhite.header.subTitle',
      introduction:
        'customPrintPage.posters.cardColorOrBlackAndWhite.header.introduction',
    },
    tableColor: {
      header: {
        title:
          'customPrintPage.posters.cardColorOrBlackAndWhite.tableColor.header.title',
        subTitle:
          'customPrintPage.posters.cardColorOrBlackAndWhite.tableColor.header.subTitle',
      },
    },
    tableBlackAndWhite: {
      header: {
        title:
          'customPrintPage.posters.cardColorOrBlackAndWhite.tableBlackAndWhite.header.title',
        subTitle:
          'customPrintPage.posters.cardColorOrBlackAndWhite.tableBlackAndWhite.header.subTitle',
      },
    },
  },
  cardColorHeavyPaper: {
    header: {
      title: 'customPrintPage.posters.cardColorHeavyPaper.header.title',
      subTitle: 'customPrintPage.posters.cardColorHeavyPaper.header.subTitle',
      introduction:
        'customPrintPage.posters.cardColorHeavyPaper.header.introduction',
    },
    table160gsmMatte: {
      header: {
        title:
          'customPrintPage.posters.cardColorHeavyPaper.table160gsmMatte.header.title',
        subTitle:
          'customPrintPage.posters.cardColorHeavyPaper.table160gsmMatte.header.subTitle',
      },
    },
    table160gsmSatin: {
      header: {
        title:
          'customPrintPage.posters.cardColorHeavyPaper.table160gsmSatin.header.title',
        subTitle:
          'customPrintPage.posters.cardColorHeavyPaper.table160gsmSatin.header.subTitle',
      },
    },
    table190gsmGloss: {
      header: {
        title:
          'customPrintPage.posters.cardColorHeavyPaper.table190gsmGloss.header.title',
        subTitle:
          'customPrintPage.posters.cardColorHeavyPaper.table190gsmGloss.header.subTitle',
      },
    },
    table260gsmSatin: {
      header: {
        title:
          'customPrintPage.posters.cardColorHeavyPaper.table260gsmSatin.header.title',
        subTitle:
          'customPrintPage.posters.cardColorHeavyPaper.table260gsmSatin.header.subTitle',
      },
    },
  },
  cardColorSpecialMaterials: {
    header: {
      title: 'customPrintPage.posters.cardColorSpecialMaterials.header.title',
      subTitle:
        'customPrintPage.posters.cardColorSpecialMaterials.header.subTitle',
      introduction:
        'customPrintPage.posters.cardColorSpecialMaterials.header.introduction',
    },
    tablePolypropylene: {
      header: {
        title:
          'customPrintPage.posters.cardColorSpecialMaterials.tablePolypropylene.header.title',
        subTitle:
          'customPrintPage.posters.cardColorSpecialMaterials.tablePolypropylene.header.subTitle',
      },
    },
    table260gsmHandmade: {
      header: {
        title:
          'customPrintPage.posters.cardColorSpecialMaterials.table260gsmHandmade.header.title',
        subTitle:
          'customPrintPage.posters.cardColorSpecialMaterials.table260gsmHandmade.header.subTitle',
      },
    },
  },
  cardColorA3: {
    header: {
      title: 'customPrintPage.posters.cardColorA3.header.title',
      subTitle: 'customPrintPage.posters.cardColorA3.header.subTitle',
      introduction: 'customPrintPage.posters.cardColorA3.header.introduction',
    },
    table150gsm: {
      header: {
        title: 'customPrintPage.posters.cardColorA3.table150gsm.header.title',
        subTitle:
          'customPrintPage.posters.cardColorA3.table150gsm.header.subTitle',
      },
    },
    table80gsm: {
      header: {
        title: 'customPrintPage.posters.cardColorA3.table80gsm.header.title',
        subTitle:
          'customPrintPage.posters.cardColorA3.table80gsm.header.subTitle',
      },
    },
  },
};

// Custom Print - Stickers
export const stickersContentPaths = {
  data: {
    image: stickersIntroduction,
  },
  pageHeader: {
    title: 'customPrintPage.stickers.pageHeader.title',
    introduction: 'customPrintPage.stickers.pageHeader.introduction',
  },
  cardLargeFormat: {
    header: {
      introduction:
        'customPrintPage.stickers.cardLargeFormat.header.introduction',
    },
    tableLargeFormat: {
      header: {
        title:
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.header.title',
        subTitle:
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.header.subTitle',
      },
      columnHeaders: {
        headerOne:
          'customPrintPage.stickers.tableLargeFormat.columnHeaders.headerOne',
        headerTwo:
          'customPrintPage.stickers.tableLargeFormat.columnHeaders.headerTwo',
      },
      rowHeaders: {
        headerOne:
          'customPrintPage.stickers.tableLargeFormat.rowHeaders.headerOne',
        headerTwo:
          'customPrintPage.stickers.tableLargeFormat.rowHeaders.headerTwo',
      },
    },
  },
};
