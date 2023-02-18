module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins"]
    },
    fontSize: {
      2_13: "0.8125rem" /*13px*/,
      2_14: "0.875em" /*14px*/,
      4_18: "1.125em" /*18px*/,
      5_21: "1.3125rem" /*21px*/,
      t30: "1.875rem" /*30px */,
      t36: "2.25rem" /*36px */,
      9_45: "2.8125rem" /*45px*/
    },
    lineHeight: {
      40: "2.5rem" /*40px*/,
      44: "2.75rem" /*44px*/,
      6_27: "1.6875rem" /*27px*/,
      12_54: "3.375rem" /*54px*/,
      12_68: "4.25rem" /*68px*/
    },

    extend: {
      backgroundImage: {
        img1: "url('../assets/img1.jpg')",
        img2: "url('../assets/img2.jpg')",
        img3: "url('../assets/img3.jpg')",
        img4: "url('../assets/img4.jpg')",
        img5: "url('../assets/img5.jpg')",
        img6: "url('../assets/img6.jpg')",
        img7: "url('../assets/img7.jpg')"
      },
      colors: {
        dotGray: "#333333",
        iconGray: "#F4F4F4",
        saleColor: "#F4B840"
      },
      spacing: {
        0.5_3: "0.1875em" /*3px */,
        1_5: "0.3125em" /*5px */,
        2_9: "0.5625em" /*9px */,
        2_95: "0.594375em" /*9.51px */,
        2_11: "0.6875em" /*11px*/,
        2_13: "0.8125em" /*13px*/,
        3.5_15: "0.9375em" /*15px*/,
        3.5_17: "1.0625em" /*17px*/,
        4_18: "1.125em" /*18px*/,
        4_19: "1.1875em" /*19px*/,
        5_21: "1.3125em" /*21px*/,
        5_22: "1.375em" /*22px*/,
        5_23: "1.4375em" /*23px*/,
        6_26: "1.625em" /*26px*/,
        6_27: "1.6875em" /*27px*/,
        7_30: "1.875em" /*30px*/,
        7_31: "1.9375em" /*31px*/,
        7_37: "2.3125em" /*37px*/,
        9_38: "2.375em" /*38px*/,
        9_39: "2.4375em" /*39px*/,
        12_50: "3.125em" /*50px*/,
        12_54: "3.375em" /*54px*/,
        12_58: "3.625em" /*58px*/,
        14_60: "3.75em" /*60px*/,
        20_90: "5.625em" /*90px*/,
        24_98: "6.125em" /*98px*/,
        24_100: "6.25em" /*100px*/,
        24_108: "6.75em" /*108px*/,
        32_139: "8.6875em" /*139px*/,
        32_135: "8.4375em" /*135px */,
        32_142: "8.875em" /*142px */,
        32_200: "12.5em" /*200px */,
        32_300: "18.75em" /*300px */,
        80_348: "21.75em" /*348px */,
        80_388: "24.25em" /*388px */,
        1200: "75em" /*1200px */
      },
      borderRadius: {
        "10br": "1.125em" /*10px */,
        "2.5xl": "1.125em" /*18px */,
        "3.5xl": "1.5625em" /*25px */,
        1.5: "0.3125em" /*5px */
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
