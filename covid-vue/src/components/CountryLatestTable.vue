<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Latest stats for {{selected_country}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <strong>Date</strong>
        </p>
      </v-col>
      <v-col>
        <p>{{pretty_date}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <strong>Confirmed Cases</strong>
        </p>
      </v-col>
      <v-col>
        <p>{{latest_data.confirmed}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <strong>Deaths</strong>
        </p>
      </v-col>
      <v-col>
        <p>{{latest_data.deaths}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <strong>Recoveries</strong>
        </p>
      </v-col>
      <v-col>
        <p>{{latest_data.recovered}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CountryLatestTable",
  computed: {
    selected_country() {
      return this.$store.state.selected_country;
    },
    selected_country_data() {
      return this.$store.state.selected_country_data;
    },
    latest_data() {
      return (
        this.selected_country_data[this.selected_country_data.length - 1] || {}
      );
    },
    pretty_date() {
      if (this.latest_data && this.latest_data.date) {
        let date = new Date(this.latest_data.date);
        return date.toLocaleDateString();
      }
      return "";
    }
  }
};
</script>