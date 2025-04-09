/*

Light theme

*/

export const lightTheme = {
  // Algemene stijlen die op meerdere pagina's worden gebruikt
  overall: {
    textColorPrimary: 'text-gray-900', // Tekstkleur voor algemene tekst
    textColorSecondary: 'text-gray-600', // Tekstkleur voor sub titels
    textColorLight: 'text-gray-50', // Tekstkleur voor tekst op rode of donkere achtergronden
    textColorCompanyColor: 'text-[#fb0036]', // Tekstkleur in bedrijfs kleur (rood)
    backgroundColor: 'bg-gray-50', // Algemene achtergrondkleur
    diverderColor: '#c2c2c2', // Kleur van horizontale schedingslijn
  },

  // Contact formulier
  contactForm: {
    textColor: 'text-gray-800', // Tekstkleur voor tekst in formulier invoervelden
    backgroundColor: 'bg-gray-50', // Achtergrondkleur van invoervelden in formulier
    borderColor: 'border-gray-300', // Kleur van de omlijning van de invoervelden
  },

  // Navigatiemenu container bovenaan de website
  header: {
    backgroundColor: 'bg-gray-50', // Achtergrondkleur van de navigatie container
  },

  // Knoppen in het navigatiemenu
  navigation: {
    textSize: 'text-lg', // Tekstgrootte van menuknoppen
    backgroundColor: 'bg-gray-50', // Achtergrondkleur van het submenu
    backgroundHover: 'hover:bg-[#fb0036]', // Achtergrondkleur van knoppen in het submenu bij aanwijzen
    textColor: 'text-gray-800', // Tekstkleur van knoppen in het submenu
    textColorHover: 'hover:text-gray-50', // Tekstkleur van knoppen in het submenu bij aanwijzen
    underlineActiveColor: 'border-b-[#fb0036]', // Kleur van streep onder actieve knop
    underlineInActiveColor: 'border-b-gray-50', // Kleur van streep onder inactieve knop
    underlineHoverColor: 'hover:border-b-gray-400', // Kleur van streep onder knop bij aanwijzen
  },

  // Openingstijden en contactmogelijkheden component op de homepage
  shopInfoCard: {
    backgroundColor: 'bg-gradient-radial', // Achtergrond effect voor het contact gedeelte
    from: 'from-[#fd3964]',
    via: 'via-[#fa2150]',
    to: 'to-[#fb0036]',
  },

  // Footer onderaan de pagina
  footer: {
    borderTopColor: 'border-[#fb0036]', // Kleur van streep boven footer gedeelte
    backgroundColor: 'bg-gray-50', // Achtergrondkleur van footer gedeelte
  },

  // Product kaarten op de homepage
  productCard: {
    titleColor: 'text-gray-50', // Tekstkleur voor titels in de kaarten
    headBackgroundColor: 'bg-[#fb0036]', // Achtergrondkleur van titels
    borderColor: 'border-[#EAE0D5]', // Kleur van kaartranden
    imageBackgroundColor: 'bg-gray-50', // Achtergrondkleur van afbeelding
  },

  // Categorie kaarten op pagina's waar prijstabellen worden weergegeven
  // Wordt ook gebruikt in Terms of Sale pagina waar een geselecteerde sectie wordt gehighlight
  categoryCard: {
    borderColor: 'border border-gray-300', // Randkleur van kaart
    backgroundColorDark: 'bg-gradient-to-br from-gray-100 to-[#e8e8e8]', // Kaartkleur, zelfde kleur als achtergrond
    backgroundColorLight: 'bg-gradient-to-br from-gray-100 to-[#e8e8e8]', // Highlighted kaartkleur
    backgroundColorActive: 'bg-gray-200', // Terms of Sale actieve sectie
  },

  // Prijstabellen
  table: {
    headTextColor: 'text-gray-50', // Tekstkleur voor titel
    headBackgroundColor: 'bg-[#fb0036]', // Achtergrondkleur voor titel
    headBorderColor: 'border-gray-400', // Randkleur voor titel header
    unitsBorderColor: 'border-gray-400', // Randkleur voor units rij
    unitsBackgroundColor: 'bg-gray-50', // Randkleur voor units rij
    cellBackgroundEven: 'even:bg-[#ebebeb]', // Achtergrondkleur voor even regels
    cellBackgroundOdd: 'odd:bg-gray-50', // Achtergrondkleur voor oneven regels
    cellBorderColor: 'border-gray-400', // Randkleur voor prijs sectie
    highlightRow: 'hover:bg-gray-300', // Achtergrondkleur voor regel bij aanwijzen
  },

  // Extra informatie onderaan de pagina content, wanneer van toepassing
  notification: {
    textColor: 'text-[#fb0036]', // Tekstkleur voor informatie sectie
    asteriskColor: 'text-[#fb0036]', // Kleur van asterisk symbool
    borderColor: 'border-[#c2c2c2]', // Randkleur voor notificatie bericht
    iconColor: 'text-[#1e40af]', // Kleur van informatie icoon
  },

  // Knoppen in kaarten of formulier
  button: {
    backgroundColor: 'bg-[#fb0036]', // Achtergrondkleur van knop
    backgroundHover: 'hover:bg-[#e00030]', // Achtergrondkleur van knop bij aanwijzen
    textColor: 'text-gray-50', //Tekstkleur van knop
  },

  // Bevestigingsbericht na het versturen van een bericht via het formulier
  confirmMessage: {
    textColor: 'text-[#166534]', // Tekstkleur van bevestigingsbericht
    backgroundColor: 'bg-[#dcfce7]', // Achtergrondkleur van bevestigingsbericht
    borderColor: 'border-green-300', //Randkleur van bevestigingsbericht
  },
};

/*

Dark theme

*/

export const darkTheme = {
  // Algemene stijlen die op meerdere pagina's worden gebruikt
  overall: {
    textColorPrimary: 'text-[#ffffff]', // Tekstkleur voor algemene tekst
    textColorSecondary: 'text-gray-400', // Tekstkleur voor sub titels
    textColorLight: 'text-[#ffffff]', // Tekstkleur voor tekst op rode of donkere achtergronden
    textColorCompanyColor: 'text-[#ffffff]', // Tekstkleur in bedrijfs kleur (rood)
    backgroundColor: 'bg-[#202020]', // Algemene achtergrondkleur
    diverderColor: '#ffffff', // Kleur van horizontale schedingslijn
  },

  // Contact formulier
  contactForm: {
    textColor: 'text-gray-800', // Tekstkleur voor tekst in formulier invoervelden
    backgroundColor: 'bg-[#ffffff]', // Achtergrondkleur van invoervelden in formulier
    borderColor: 'border-gray-50', // Kleur van de omlijning van de invoervelden
  },

  // Navigatiemenu container bovenaan de website
  header: {
    backgroundColor: 'bg-[#2c2c2c]', // Achtergrondkleur van de navigatie container
  },

  // Knoppen in het navigatiemenu
  navigation: {
    textSize: 'text-lg', // Tekstgrootte van menuknoppen
    backgroundColor: 'bg-[#2c2c2c]', // Achtergrondkleur van het submenu
    backgroundHover: 'hover:bg-gray-600', // Achtergrondkleur van knoppen in het submenu bij aanwijzen
    textColorHover: 'text-[#ffffff]', // Tekstkleur van knoppen in het submenu bij aanwijzen
    textColor: 'text-[#ffffff]', // Tekstkleur van knoppen in het submenu
    underlineActiveColor: 'border-b-[#b02a37]', // Kleur van streep onder actieve knop
    underlineInActiveColor: 'border-b-[#2c2c2c]', // Kleur van streep onder inactieve knop
    underlineHoverColor: 'hover:border-b-[#ffffff]', // Kleur van streep onder knop bij aanwijzen
  },

  // Openingstijden en contactmogelijkheden component op de homepage
  shopInfoCard: {
    backgroundColor: 'bg-gradient-radial', // Achtergrond effect voor het contact gedeelte
    from: 'from-[#3a3a3a]',
    via: 'via-[#333333]',
    to: 'to-[#2c2c2c]',
  },

  // Footer onderaan de pagina
  footer: {
    borderTopColor: 'border-[#b02a37]', // Kleur van streep boven footer gedeelte
    backgroundColor: 'bg-[#202020]', // Achtergrondkleur van footer gedeelte
  },

  // Product kaarten op de homepage
  productCard: {
    titleColor: 'text-gray-50', // Tekstkleur voor titels in de kaarten
    headBackgroundColor: 'bg-[#b02a37]', // Achtergrondkleur van titels
    borderColor: 'border-gray-700', // Kleur van kaartranden
    imageBackgroundColor: 'bg-gray-50', // Achtergrondkleur van afbeelding
  },

  // Categorie kaarten op pagina's waar prijstabellen worden weergegeven
  // Wordt ook gebruikt in Terms of Sale pagina waar een geselecteerde sectie wordt gehighlight
  categoryCard: {
    borderColor: 'border border-[#202020]', // Randkleur van kaart
    backgroundColorDark: 'bg-gradient-to-br from-[#2c2c2c] to-[#2e2e2e]', // Kaartkleur, zelfde kleur als achtergrond
    backgroundColorLight: 'bg-gradient-to-br from-[#2c2c2c] to-[#2e2e2e]', // Highlighted kaartkleur
    backgroundColorActive: 'bg-gray-600', // Terms of Sale actieve sectie
  },

  // Prijstabellen
  table: {
    headTextColor: 'text-[#ffffff]', // Tekstkleur voor titel
    headBackgroundColor: 'bg-[#b02a37]', // Achtergrondkleur voor titel
    headBorderColor: 'border-gray-700', // Randkleur voor titel header
    unitsBorderColor: 'border-gray-700', // Randkleur voor units rij
    unitsBackgroundColor: 'bg-[#202020]', // Randkleur voor units rij
    cellBackgroundEven: 'even:bg-[#2c2c2c]', // Achtergrondkleur voor even regels
    cellBackgroundOdd: 'odd:bg-[#252525]', // Achtergrondkleur voor oneven regels
    cellBorderColor: 'border-gray-700', // Randkleur voor prijs sectie
    highlightRow: 'hover:bg-gray-600', // Achtergrondkleur voor regel bij aanwijzen
  },

  // Extra informatie onderaan de pagina content, wanneer van toepassing
  notification: {
    textColor: 'text-gray-500', // Tekstkleur voor informatie sectie
    asteriskColor: 'text-[#b02a37]', // Kleur van asterisk symbool
    borderColor: 'border-[#2c2c2c]', // Randkleur voor notificatie bericht
    iconColor: 'text-[#1e40af]', // Kleur van informatie icoon
  },

  // Knoppen in kaarten of formulier
  button: {
    backgroundColor: 'bg-[#b02a37]', // Achtergrondkleur van knop
    backgroundHover: 'hover:bg-[#a82a2a]', // Achtergrondkleur van knop bij aanwijzen
    textColor: 'text-gray-50', //Tekstkleur van knop
  },

  // Bevestigingsbericht na het versturen van een bericht via het formulier
  confirmMessage: {
    textColor: 'text-[#166534]', // Tekstkleur van bevestigingsbericht
    backgroundColor: 'bg-[#dcfce7]', // Achtergrondkleur van bevestigingsbericht
    borderColor: 'border-green-300', //Randkleur van bevestigingsbericht
  },
};
