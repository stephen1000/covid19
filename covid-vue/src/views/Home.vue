<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <div class="item">
          <CountrySelector />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="item">
          <CountryLatestTable />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountrySelector from "@/components/CountrySelector.vue";
import CountryLatestTable from "@/components/CountryLatestTable.vue";

export default {
  name: "Home",
  components: {
    CountrySelector,
    CountryLatestTable,
  },
  data() {
    return {
      theme: "light"
    };
  },
  computed: {
    covid_data() {
      return this.$store.state.covid_data;
    }
  }
};
</script>

<style lang="scss"></style>
