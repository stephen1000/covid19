<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <div class="item">
          <CountrySelector />
        </div>
      </v-col>
    </v-row>
    <v-row v-if="selected_country">
      <v-col>
        <BarChart
          id="first_chart"
          :title="`Changes by day for '${selected_country}'`"
          :max_width="720"
          :max_height="600"
          x_label="Day"
          y_label="Deaths"
        ></BarChart>
      </v-col>
    </v-row>
    <v-row v-if="selected_country">
      <v-col>
        <div class="item">
          <CountryLatestTable />
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <p>Select a country to see stats!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountrySelector from "@/components/CountrySelector.vue";
import CountryLatestTable from "@/components/CountryLatestTable.vue";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "Home",
  components: {
    CountrySelector,
    CountryLatestTable,
    BarChart
  },
  data() {
    return {
      theme: "light"
    };
  },
  computed: {
    covid_data() {
      return this.$store.state.covid_data;
    },
    selected_country() {
      return this.$store.state.selected_country;
    }
  }
};
</script>

<style lang="scss"></style>
