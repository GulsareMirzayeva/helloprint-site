export const prices = {
  // Kopieren en printen
  copyPrint: {
    // Kopieren en printen - A4
    A4: {
      // Kopieren/printen - A4 - Zwart/wit (budget)
      blackWhite: {
        '1-00': {
          budget: 0.15,
        },
        '101-250': {
          budget: 0.1,
        },
        '251-500': {
          budget: 0.07,
        },
        '501-1000': {
          budget: 0.06,
        },
      },
      // Kopieren/printen - A4 - Kleur (budget)
      color: {
        '1-00': {
          budget: 0.35,
        },
        '101-250': {
          budget: 0.3,
        },
        '251-500': {
          budget: 0.25,
        },
        '501-1000': {
          budget: 0.2,
        },
      },
      // Kopieren/printen - A4 - HQ - Kleur en zwart/wit
      hq: {
        '1-00': {
          blackWhite: 0.2,
          color: 0.85,
        },
        '101-250': {
          blackWhite: 0.15,
          color: 0.65,
        },
        '251-500': {
          blackWhite: 0.12,
          color: 0.55,
        },
        '501-1000': {
          blackWhite: 0.1,
          color: 0.45,
        },
      },
    },
  },
  // Drukwerk
  customPrint: {
    // Drukwerk - Folders
    folders: {
      // Drukwerk - Folders - Digitaal geprint
      print: {
        // Drukwerk - Folders - Digitaal geprint - A4
        A4: {
          // Drukwerk - Folders - Digitaal geprint A4 - Zwart/wit
          blackWhite: {
            100: {
              '80gr': 28,
            },
            250: {
              '80gr': 60,
            },
            500: {
              '80gr': 80,
            },
            1000: {
              '80gr': 150,
            },
          },
          color: {
            // Drukwerk - Folders - Digitaal geprint - A4 - Kleur
            50: {
              '150gr': 47,
              '170gr': 52,
              '250gr': 57,
            },
            100: {
              '150gr': 71,
              '170gr': 52,
              '250gr': 81,
            },
            250: {
              '150gr': 110,
              '170gr': 115,
              '250gr': 120,
            },
            500: {
              '150gr': 165,
              '170gr': 170,
              '250gr': 175,
            },
          },
        },
      },
      // Drukwerk - Folders - Drukwerk
      offsetPrint: {
        // Drukwerk - Folders - Drukwerk - A4
        A4: {
          // Drukwerk - Folders - Drukwerk - A4 - Kleur
          color: {
            // Drukwerk - Folders - Drukwerk - A4 - Kleur- 2-slag
            halfFold: {
              500: {
                '135gr': 105,
                '170gr': 112,
                '250gr': 125,
              },
              1000: {
                '135gr': 125,
                '170gr': 142,
                '250gr': 164,
              },
              2500: {
                '135gr': 175,
                '170gr': 208,
                '250gr': 305,
              },
              5000: {
                '135gr': 280,
                '170gr': 342,
                '250gr': 505,
              },
              10000: {
                '135gr': 475,
                '170gr': 597,
                '250gr': 947,
              },
            },
            // Drukwerk - Folders - Drukwerk - A4 - Kleur - 3-slag
            triFold: {
              500: {
                '135gr': 99,
                '170gr': 115,
                '250gr': 125,
              },
              1000: {
                '135gr': 125,
                '170gr': 145,
                '250gr': 160,
              },
              2500: {
                '135gr': 180,
                '170gr': 199,
                '250gr': 295,
              },
              5000: {
                '135gr': 275,
                '170gr': 345,
                '250gr': 489,
              },
              10000: {
                '135gr': 485,
                '170gr': 608,
                '250gr': 890,
              },
            },
          },
        },
        // Drukwerk - Folders - Drukwerk - A3
        A3: {
          // Drukwerk - Folders - Drukwerk - A3 - Kleur
          color: {
            // Drukwerk - Folders - Drukwerk - A3 - Kleur - 3-slag
            triFold: {
              500: {
                '135gr': 167,
                '170gr': 191,
                '250gr': 210,
              },
              1000: {
                '135gr': 206,
                '170gr': 239,
                '250gr': 295,
              },
              2500: {
                '135gr': 350,
                '170gr': 430,
                '250gr': 515,
              },
              5000: {
                '135gr': 545,
                '170gr': 689,
                '250gr': 878,
              },
              10000: {
                '135gr': 955,
                '170gr': 1275,
                '250gr': 1635,
              },
            },
          },
        },
      },
    },
    // Drukwerk - Flyers
    flyers: {
      // Drukwerk - Flyers - Digitaal geprint
      print: {
        // Drukwerk - Flyers - Digitaal geprint - A5
        A5: {
          // Drukwerk - Flyers - Digitaal geprint - A5 - Enkelzijdig
          singleSided: {
            100: {
              '90gr': 28,
              '150gr': 33,
              '250gr': 36,
            },
            250: {
              '90gr': 63,
              '150gr': 76,
              '250gr': 82,
            },
            500: {
              '90gr': 125,
              '150gr': 150,
              '250gr': 163,
            },
            1000: {
              '90gr': 200,
              '150gr': 250,
              '250gr': 275,
            },
          },
          // Drukwerk - Flyers - Digitaal geprint - A5 - Dubbelzijdig
          doubleSided: {
            100: {
              '90gr': 55,
              '150gr': 65,
              '250gr': 80,
            },
            250: {
              '90gr': 125,
              '150gr': 144,
              '250gr': 157,
            },
            500: {
              '90gr': 225,
              '150gr': 250,
              '250gr': 263,
            },
          },
        },
        // Drukwerk - Flyers - Digitaal geprint - A6
        A6: {
          // Drukwerk - Flyers - Digitaal geprint - A6 - Enkelzijdig
          singleSided: {
            100: {
              '90gr': 14,
              '150gr': 16.5,
              '250gr': 18,
            },
            250: {
              '90gr': 35,
              '150gr': 42,
              '250gr': 45,
            },
            500: {
              '90gr': 63,
              '150gr': 76,
              '250gr': 82,
            },
            1000: {
              '90gr': 138,
              '150gr': 163,
              '250gr': 175,
            },
          },
          // Drukwerk - Flyers - Digitaal geprint - A6 - Dubbelzijdig
          doubleSided: {
            100: {
              '90gr': 27.5,
              '150gr': 30,
              '250gr': 32,
            },
            250: {
              '90gr': 63,
              '150gr': 70,
              '250gr': 73,
            },
            500: {
              '90gr': 125,
              '150gr': 140,
              '250gr': 144,
            },
            1000: {
              '90gr': 200,
              '150gr': 225,
              '250gr': 238,
            },
          },
        },
      },
      // Drukwerk - Flyers - Drukwerk
      offsetPrint: {
        // Drukwerk - Flyers - Drukwerk - A5
        A5: {
          // Drukwerk - Flyers - Drukwerk - A5 - Enkelzijdig (leeg want niet van toepassing)
          singleSided: {},
          // Drukwerk - Flyers - Drukwerk - A5 - Dubbelzijdig
          doubleSided: {
            500: {
              '135gr': 60,
              '170gr': 61,
              '250gr': 68,
            },
            1000: {
              '135gr': 75,
              '170gr': 79,
              '250gr': 86,
            },
            2500: {
              '135gr': 95,
              '170gr': 105,
              '250gr': 126,
            },
            5000: {
              '135gr': 141,
              '170gr': 155,
              '250gr': 215,
            },
            10000: {
              '135gr': 246,
              '170gr': 262,
              '250gr': 350,
            },
          },
        },
        // Drukwerk - Flyers - Drukwerk - A6
        A6: {
          // Drukwerk - Flyers - Drukwerk - A6 - Enkelzijdig (leeg want niet van toepassing)
          singleSided: {},
          // Drukwerk - Flyers - Drukwerk - A6 - Dubbelzijdig
          doubleSided: {
            500: {
              '135gr': 47,
              '170gr': 49,
              '250gr': 52,
            },
            1000: {
              '135gr': 57,
              '170gr': 61,
              '250gr': 65,
            },
            2500: {
              '135gr': 72,
              '170gr': 75,
              '250gr': 78,
            },
            5000: {
              '135gr': 91,
              '170gr': 97,
              '250gr': 110,
            },
            10000: {
              '135gr': 125,
              '170gr': 147,
              '250gr': 205,
            },
            20000: {
              '135gr': 220,
              '170gr': 255,
              '250gr': 345,
            },
          },
        },
      },
    },
    // Drukwerk - Posters
    posters: {
      // Drukwerk - Posters - Zwart/wit
      blackWhite: {
        A2: {
          '42x59.4': 2.75,
        },
        B2: {
          '50x70': 3.25,
        },
        A1: {
          '59.4x84.1': 4,
        },
        B1: {
          '70x100': 4.25,
        },
        A0: {
          '84.1x118.9': 4.5,
        },
      },
      // Drukwerk - Posters - Kleur - 80 grams
      color: {
        '80gr': {
          A2: {
            '1-5': 9,
            '6-10': 8,
            '10+': 7,
          },
          B2: {
            '1-5': 11,
            '6-10': 10,
            '10+': 9,
          },
          A1: {
            '1-5': 15,
            '6-10': 14,
            '10+': 13,
          },
          B1: {
            '1-5': 17,
            '6-10': 16,
            '10+': 15,
          },
          A0: {
            '1-5': 18,
            '6-10': 17,
            '10+': 16,
          },
        },
        // Drukwerk - Posters - Kleur - 160 grams Mat
        '160grMat': {
          A2: {
            '1-5': 11,
            '6-10': 10,
            '10+': 9,
          },
          B2: {
            '1-5': 15,
            '6-10': 14,
            '10+': 13,
          },
          A1: {
            '1-5': 17.5,
            '6-10': 16.5,
            '10+': 15.5,
          },
          B1: {
            '1-5': 19,
            '6-10': 18,
            '10+': 17,
          },
          A0: {
            '1-5': 23.5,
            '6-10': 22,
            '10+': 21.5,
          },
        },
        // Drukwerk - Posters - Kleur - 160 grams Satijn
        '160grSatin': {
          A2: {
            '1-5': 13.5,
            '6-10': 12.5,
            '10+': 11.5,
          },
          B2: {
            '1-5': 16.5,
            '6-10': 15.5,
            '10+': 14.5,
          },
          A1: {
            '1-5': 19.5,
            '6-10': 18.5,
            '10+': 17.5,
          },
          B1: {
            '1-5': 22.5,
            '6-10': 21.5,
            '10+': 20.5,
          },
          A0: {
            '1-5': 25.5,
            '6-10': 24.5,
            '10+': 23.5,
          },
        },
        // Drukwerk - Posters - Kleur - 190 grams Glans
        '190grGloss': {
          A2: {
            '1-5': 13.5,
            '6-10': 12.5,
            '10+': 11.5,
          },
          B2: {
            '1-5': 16.5,
            '6-10': 15.5,
            '10+': 14.5,
          },
          A1: {
            '1-5': 19.5,
            '6-10': 18.5,
            '10+': 17.5,
          },
          B1: {
            '1-5': 22.5,
            '6-10': 21.5,
            '10+': 20.5,
          },
          A0: {
            '1-5': 25.5,
            '6-10': 24.5,
            '10+': 23.5,
          },
        },
        // Drukwerk - Posters - Kleur - 260 grams Satijn
        '260grSatin': {
          A2: {
            '1-5': 14.5,
            '6-10': 13.5,
            '10+': 12.5,
          },
          B2: {
            '1-5': 18.5,
            '6-10': 17.5,
            '10+': 16.5,
          },
          A1: {
            '1-5': 22.5,
            '6-10': 21.5,
            '10+': 20.5,
          },
          B1: {
            '1-5': 26.5,
            '6-10': 25.5,
            '10+': 24.5,
          },
          A0: {
            '1-5': 29.5,
            '6-10': 28.5,
            '10+': 27.5,
          },
        },
        // Drukwerk - Posters - Kleur - Polypropyleen
        polypropylene: {
          A2: {
            perPiece: 17.5,
          },
          B2: {
            perPiece: 21.5,
          },
          A1: {
            perPiece: 25.5,
          },
          B1: {
            perPiece: 31.5,
          },
          A0: {
            perPiece: 37.5,
          },
        },
        // Drukwerk - Posters - Kleur - 260 grams Geschept papier
        '260grHandMade': {
          A2: {
            perPiece: 17.5,
          },
          B2: {
            perPiece: 21.5,
          },
          A1: {
            perPiece: 25.5,
          },
          B1: {
            perPiece: 31.5,
          },
          A0: {
            perPiece: 37.5,
          },
        },
        // Drukwerk - Posters - Budget Full color
        fullColorBudget: {
          '1-100': {
            perPiece: 0.7,
          },
          '101-250': {
            perPiece: 0.6,
          },
          '251-500': {
            perPiece: 0.5,
          },
        },
        // Drukwerk - Posters - HQ Full color
        fullColorHq: {
          '1-100': {
            perPiece: 1.9,
          },
          '101-250': {
            perPiece: 1.5,
          },
          '251-500': {
            perPiece: 1.1,
          },
        },
      },
    },
    // Drukwerk - Stickers
    stickers: {
      // Drukwerk - Stickers - A4
      A4: {
        perA4: 8.95,
      },
      // Drukwerk - Stickers - Vierkante meter
      squareMeter: {
        perMeter: 69,
      },
    },
    // Drukwerk - Kaarten
    cards: {
      // Drukwerk - Kaarten - Digitaal geprint
      print: {
        // Drukwerk - Kaarten - Digitaal geprint - Zwart/wit - Enkel- en dubbelzijdig
        blackWhite: {
          100: {
            singleSide: 9.5,
            doubleSide: 13,
          },
          250: {
            singleSide: 13.5,
            doubleSide: 20,
          },
          500: {
            singleSide: 23.5,
            doubleSide: 38,
          },
        },
        // Drukwerk - Kaarten - Digitaal geprint - Kleur - Enkel- en dubbelzijdig
        color: {
          100: {
            singleSide: 14,
            doubleSide: 22,
          },
          250: {
            singleSide: 23.5,
            doubleSide: 38,
          },
          500: {
            singleSide: 43.5,
            doubleSide: 69.5,
          },
        },
      },
      // Drukwerk - Kaarten - Drukwerk
      offsetPrint: {
        // Drukwerk - Kaarten - Drukwerk - Kleur
        color: {
          500: {
            singleSide: 55,
            doubleSide: 50,
          },
          1000: {
            singleSide: 69,
            doubleSide: 65,
          },
          2500: {
            singleSide: 89,
            doubleSide: 79,
          },
          5000: {
            singleSide: 130,
            doubleSide: 99,
          },
        },
      },
    },
  },
  // Kleding en textiel
  customClothing: {
    // Kleding en textiel - Kledingstukken
    textile: {
      // Kleding en textiel - Kledingstukken - T-shirt
      tShirt: {
        blackWhite: 5.95,
        color: 6.95,
      },
      // Kleding en textiel - Kledingstukken - Polo
      polo: {
        blackWhite: 14.95,
        color: 16.95,
      },
      // Kleding en textiel - Kledingstukken - Sweater
      sweaters: {
        blackWhite: 29.95,
        color: 32.95,
      },
      // Kleding en textiel - Kledingstukken - Hoody
      hoody: {
        blackWhite: 37.95,
        color: 39.95,
      },
    },
    flex: {
      // Kleding en textiel - Flex - Voorkant borst logo
      frontChestLogo: {
        allColors: 9.95,
      },
      // Kleding en textiel - Flex - Voor- of achterkant groot
      frontOrBacklarge: {
        allColors: 12.95,
      },
      // Kleding en textiel - Flex - Voorkant klein en achterkant groot
      frontSmallBackLarge: {
        allColors: 19.95,
      },
    },
    dtg: {
      // Kleding en textiel - DTG - Voorkant borst logo
      frontChestLogo: {
        white: 8.95,
        color: 9.95,
      },
      // Kleding en textiel - DTG - Voor- of achterkant groot
      frontOrBacklarge: {
        white: 11.95,
        color: 12.95,
      },
      // Kleding en textiel - DTG - Voorkant klein en achterkant groot
      frontSmallBackLarge: {
        white: 18.95,
        color: 19.95,
      },
    },
  },
};
