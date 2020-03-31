<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <div class="item first"><p>first</p></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="item second"><p>second!</p></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="item third">
          <v-autocomplete :items="country_options"></v-autocomplete>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      theme: "light"
    };
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
      return this.$store.state.covid_data
    }
  }
};
</script>

<style lang="scss"></style>
