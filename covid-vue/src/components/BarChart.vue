<template>
  <div :id="id"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "BarChart",
  props: {
    id: String,
    data: Object,
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
    }
  },
  methods: {
    configure_d3() {
      // configure dimensions
      this.margin = {
        top: 20,
        right: 20,
        bottom: 70,
        left: 40
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
        .padding(2);
      this.x_axis = d3.axisBottom(this.x_scale);
      this.chart
        .append("g")
        .attr("class", "chart-body")
        .attr("id", this.x_axis_id)
        .attr("transform", `translate(${this.margin.left},${this.height})`)
        .append("text")
        .text(this.x_label);

      // y axis uses a continuous scale
      this.y_scale = d3.scaleLinear().rangeRound([0, this.height]);
      this.y_axis = d3.axisLeft(this.y_scale);
      this.chart
        .append("g")
        .attr("id", this.y_axis_id)
        .attr("transform", `translate(${this.margin.left},${this.height})rotate(-90)`)
        .append("text")
        .text(this.y_label);
    },
    update_chart(data) {
      d3.select(`#${this.x_axis_id}`).call(this.x_axis);
      d3.select(`#${this.y_axis_id}`).call(this.y_axis);
    }
  },
  mounted() {
    // set up d3 binding
    this.configure_d3();
  }
};
</script>
