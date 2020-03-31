<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <span>COVID-19 visualizer</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/stephen1000/covid19" target="_blank" text>
        <span class="mr-2">View on GitHub</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      covid_data: this.$store.state.covid_data,
      theme: "dark"
    };
  },
  mounted() {
    this.$store.dispatch("get_covid_data");
  }
};
</script>
