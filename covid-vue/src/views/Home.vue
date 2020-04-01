<template>
  <v-container class="home">
    <v-row>
      <v-col>
        <div class="item first">
          <p>first</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="item second">
          <p>second!</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="item third">
          <CountrySelector />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountrySelector from "@/components/CountrySelector.vue";

export default {
  name: "Home",
  components: {
    CountrySelector
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
