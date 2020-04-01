<template>
  <v-autocomplete :items="country_options" :value="selected_country" @input="update_selection"></v-autocomplete>
</template>

<script>
export default {
  name: "CountrySelector",
  data() {
    return {};
  },
  methods: {
    update_selection(e) {
      console.log(e);
      this.$store.commit("select_country", { country: e });
    }
  },
  computed: {
    countries() {
      return Object.keys(this.covid_data);
    },
    country_options() {
      return this.countries.map(o => {
        return { text: o, value: o };
      });
    },
    covid_data() {
      return this.$store.state.covid_data;
    },
    selected_country() {
      return this.$store.state.selected_country;
    }
  }
};
</script>