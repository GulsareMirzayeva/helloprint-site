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
                '135gr': 110,
                '170gr': 115,
                '250gr': 130,
              },
              1000: {
                '135gr': 130,
                '170gr': 145,
                '250gr': 169,
              },
              2500: {
                '135gr': 180,
                '170gr': 215,
                '250gr': 310,
              },
              5000: {
                '135gr': 285,
                '170gr': 345,
                '250gr': 510,
              },
              10000: {
                '135gr': 480,
                '170gr': 600,
                '250gr': 949,
              },
            },
            // Drukwerk - Folders - Drukwerk - A4 - Kleur - 3-slag
            triFold: {
              500: {
                '135gr': 105,
                '170gr': 120,
                '250gr': 130,
              },
              1000: {
                '135gr': 130,
                '170gr': 150,
                '250gr': 165,
              },
              2500: {
                '135gr': 185,
                '170gr': 205,
                '250gr': 300,
              },
              5000: {
                '135gr': 280,
                '170gr': 350,
                '250gr': 495,
              },
              10000: {
                '135gr': 490,
                '170gr': 615,
                '250gr': 895,
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
                '135gr': 170,
                '170gr': 195,
                '250gr': 215,
              },
              1000: {
                '135gr': 209,
                '170gr': 245,
                '250gr': 300,
              },
              2500: {
                '135gr': 353,
                '170gr': 435,
                '250gr': 520,
              },
              5000: {
                '135gr': 550,
                '170gr': 695,
                '250gr': 880,
              },
              10000: {
                '135gr': 960,
                '170gr': 1280,
                '250gr': 1640,
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
              '135gr': 63,
              '170gr': 65,
              '250gr': 71,
            },
            1000: {
              '135gr': 78,
              '170gr': 82,
              '250gr': 89,
            },
            2500: {
              '135gr': 98,
              '170gr': 108,
              '250gr': 129,
            },
            5000: {
              '135gr': 144,
              '170gr': 163,
              '250gr': 218,
            },
            10000: {
              '135gr': 249,
              '170gr': 265,
              '250gr': 353,
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
              '135gr': 50,
              '170gr': 53,
              '250gr': 55,
            },
            1000: {
              '135gr': 60,
              '170gr': 64,
              '250gr': 68,
            },
            2500: {
              '135gr': 75,
              '170gr': 78,
              '250gr': 81,
            },
            5000: {
              '135gr': 95,
              '170gr': 100,
              '250gr': 113,
            },
            10000: {
              '135gr': 130,
              '170gr': 150,
              '250gr': 208,
            },
            20000: {
              '135gr': 225,
              '170gr': 258,
              '250gr': 348,
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
          '42x59.4': 3.25,
        },
        B2: {
          '50x70': 3.75,
        },
        A1: {
          '59.4x84.1': 4.5,
        },
        B1: {
          '70x100': 4.75,
        },
        A0: {
          '84.1x118.9': 5,
        },
      },
      // Drukwerk - Posters - Kleur - 80 grams
      color: {
        '80gr': {
          A2: {
            '1-5': 10,
            '6-10': 9,
            '10+': 8,
          },
          B2: {
            '1-5': 12,
            '6-10': 11,
            '10+': 10,
          },
          A1: {
            '1-5': 16,
            '6-10': 15,
            '10+': 14,
          },
          B1: {
            '1-5': 18,
            '6-10': 17,
            '10+': 16,
          },
          A0: {
            '1-5': 19,
            '6-10': 18,
            '10+': 17,
          },
        },
        // Drukwerk - Posters - Kleur - 160 grams Mat
        '160grMat': {
          A2: {
            '1-5': 12,
            '6-10': 11,
            '10+': 10,
          },
          B2: {
            '1-5': 16,
            '6-10': 15,
            '10+': 14,
          },
          A1: {
            '1-5': 18.5,
            '6-10': 17.5,
            '10+': 16.5,
          },
          B1: {
            '1-5': 21,
            '6-10': 20,
            '10+': 19,
          },
          A0: {
            '1-5': 24.5,
            '6-10': 23.5,
            '10+': 22.5,
          },
        },
        // Drukwerk - Posters - Kleur - 160 grams Satijn
        '160grSatin': {
          A2: {
            '1-5': 14.5,
            '6-10': 13.5,
            '10+': 12.5,
          },
          B2: {
            '1-5': 17.5,
            '6-10': 16.5,
            '10+': 15.5,
          },
          A1: {
            '1-5': 20.5,
            '6-10': 19.5,
            '10+': 18.5,
          },
          B1: {
            '1-5': 23.5,
            '6-10': 22.5,
            '10+': 21.5,
          },
          A0: {
            '1-5': 26.5,
            '6-10': 25.5,
            '10+': 24.5,
          },
        },
        // Drukwerk - Posters - Kleur - 190 grams Glans
        '190grGloss': {
          A2: {
            '1-5': 14.5,
            '6-10': 13.5,
            '10+': 12.5,
          },
          B2: {
            '1-5': 17.5,
            '6-10': 16.5,
            '10+': 15.5,
          },
          A1: {
            '1-5': 20.5,
            '6-10': 19.5,
            '10+': 18.5,
          },
          B1: {
            '1-5': 23.5,
            '6-10': 22.5,
            '10+': 21.5,
          },
          A0: {
            '1-5': 26.5,
            '6-10': 25.5,
            '10+': 24.5,
          },
        },
        // Drukwerk - Posters - Kleur - 260 grams Satijn
        '260grSatin': {
          A2: {
            '1-5': 15.5,
            '6-10': 14.5,
            '10+': 13.5,
          },
          B2: {
            '1-5': 19.5,
            '6-10': 18.5,
            '10+': 17.5,
          },
          A1: {
            '1-5': 23.5,
            '6-10': 22.5,
            '10+': 21.5,
          },
          B1: {
            '1-5': 27.5,
            '6-10': 26.5,
            '10+': 25.5,
          },
          A0: {
            '1-5': 30.5,
            '6-10': 29.5,
            '10+': 28.5,
          },
        },
        // Drukwerk - Posters - Kleur - Polypropyleen
        polypropylene: {
          A2: {
            perPiece: 18.5,
          },
          B2: {
            perPiece: 22.5,
          },
          A1: {
            perPiece: 26.5,
          },
          B1: {
            perPiece: 32.5,
          },
          A0: {
            perPiece: 38.5,
          },
        },
        // Drukwerk - Posters - Kleur - 260 grams Geschept papier
        '260grHandMade': {
          A2: {
            perPiece: 18.5,
          },
          B2: {
            perPiece: 22.5,
          },
          A1: {
            perPiece: 26.5,
          },
          B1: {
            perPiece: 32.5,
          },
          A0: {
            perPiece: 38.5,
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
      // squareMeter: {
      //   perMeter: 69,
      // },
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
