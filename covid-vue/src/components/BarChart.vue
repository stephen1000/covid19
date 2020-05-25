<template>
  <div :id="id">
    <h1>{{title}}</h1>
    <!-- <p>{{selected_country_data}}</p> -->
  </div>
</template>

<script>
import * as d3 from "d3";
// import math from "mathjs";

export default {
  name: "BarChart",
  props: {
    id: String,
    title: String,
    x_label: String,
    y_label: String,
    max_height: Number,
    max_width: Number
  },
  data() {
    return {
      svg: undefined,
      chart: undefined,
      margin: {},
      width: 0,
      height: 0,
      x_scale: undefined,
      y_scale: undefined,
      x_axis: undefined,
      y_axis: undefined
    };
  },
  computed: {
    x_axis_id() {
      return `${this.id}_x_axis`;
    },
    y_axis_id() {
      return `${this.id}_y_axis`;
    },
    selected_country() {
      return this.$store.state.selected_country;
    },
    selected_country_data() {
      return this.$store.state.selected_country_data.slice(-10);
    }
  },
  methods: {
    initialize_d3() {
      // configure dimensions
      this.margin = {
        top: 20,
        right: 20,
        bottom: 70,
        left: 60
      };
      this.height = this.max_height - this.margin.top - this.margin.bottom;
      this.width = this.max_width - this.margin.left - this.margin.right;

      // initialize canvas
      this.svg = d3
        .select(`#${this.id}`)
        .append("svg")
        .attr("width", this.max_width)
        .attr("height", this.max_height);

      this.chart = this.svg
        .append("g")
        .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

      // initialize scales and axes
      // use ordinal scale for x so categorical values work
      this.x_scale = d3
        .scaleBand()
        .rangeRound([0, this.width])
        .padding(0.1);
      this.x_axis = d3.axisBottom(this.x_scale);
      this.chart
        .append("g")
        .attr("class", "chart-body")
        .attr("id", this.x_axis_id)
        .attr("transform", `translate(0,${this.height})`)
        .append("text")
        .text(this.x_label);

      // y axis uses a continuous scale
      this.y_scale = d3.scaleLinear().rangeRound([0, this.height]);
      this.y_axis = d3.axisLeft(this.y_scale);
      this.chart
        .append("g")
        .attr("id", this.y_axis_id)
        //.attr("transform", `translate(${this.margin.left},0)`)
        .append("text")
        .text(this.y_label);
    },
    update_chart(data) {
      console.log("updating chart");

      const y_data = data.map(o => o.deaths);
      const x_data = data.map(o => o.date);

      console.log("X data:", x_data);
      console.log("Y data:", y_data);

      const data_min = Math.min(...y_data);
      const data_max = Math.max(...y_data);

      console.log(`Y set to ${data_min} to ${data_max}`);
      // const y_varience = math.variance

      this.x_scale.domain(x_data.sort(o => o.date));
      this.y_scale.domain([data_max, data_min]).nice();

      d3.select(`#${this.x_axis_id}`).transition().duration(1000).call(this.x_axis);
      d3.select(`#${this.y_axis_id}`).transition().duration(1000).call(this.y_axis);

      this.chart
        .selectAll(".bar")
        .data(data)
        .join(enter =>
          enter
            .append("rect")
            .classed("bar", true)
            .attr("opacity", 0)
            .attr("x", d => this.x_scale(d.date))
        )
        .transition()
        .duration(1000)
        .delay( (d,i) => i * 25)
        .ease(d3.easePolyInOut)
        .attr("opacity", 1)
        .attr("y", d => this.y_scale(d.deaths))
        .attr("width", this.x_scale.bandwidth())
        .attr("height", d => this.height - this.y_scale(d.deaths));
    }
  },
  mounted() {
    this.initialize_d3();
    this.update_chart(this.selected_country_data);
  },
  watch: {
    selected_country_data(val) {
      this.update_chart(val);
    }
  }
};
</script>

<style lang="scss">
.bar {
  stroke-width: 0%;
  fill: purple;
}
</style>