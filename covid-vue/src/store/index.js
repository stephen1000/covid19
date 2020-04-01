import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const covid_url = "https://pomber.github.io/covid19/timeseries.json";

export default new Vuex.Store({
  state: {
    covid_data: {},
    selected_country: '',
    selected_country_data: {}
  },
  mutations: {
    set_covid_data(state, payload) {
      state.covid_data = payload
    },
    select_country(state, payload) {
      state.selected_country = payload.country;
      state.selected_country_data = state.covid_data[payload.country];
    }
  },
  actions: {
    get_covid_data(context) {
      fetch(covid_url)
        .then(response => response.json())
        .then(data => {
          data['United States'] = data['US'];
          delete data['US']
          context.commit('set_covid_data', data);
        });
    }
  },
  modules: {}
});
