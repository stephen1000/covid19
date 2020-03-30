import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#126440",
        anchor: "#2C7E5A",
        accent: "#222521",
        secondary: "#F8F769",
        success: "#05DC0E",
        info: "#0562AB",
        warning: "#FF7E00",
        error: "#D20000"
      },
      light: {
        primary: "#126440",
        accent: "#e91e63",
        secondary: "#30b1dc",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }
});
