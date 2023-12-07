<template>
  <div class="w-11/12 md:9/12">
    <canvas id="myChart" width="800" height="500"></canvas>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import "chartjs-adapter-date-fns";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  registerables,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  ...registerables
);

export default class LineChart extends Vue {
  @Prop({ required: true, type: Array })
  readonly previous!: any[];
  private chart?: Chart;

  mounted() {
    this.createChart();
  }

  @Watch("previous", { immediate: true, deep: true })
  onPreviousChanged() {
    this.createChart();
  }

  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;

    const filteredLabels = this.previous
      .map((item: any, index: number) => (index % 2 === 0 ? item.dt_txt : null))
      .filter((label) => label !== null);

    const filteredTemp = this.previous
      .map((item: any, index: number) =>
        index % 2 === 0 ? item.main.temp : null
      )
      .filter((label) => label !== null);

    const filteredFeelsLike = this.previous
      .map((item: any, index: number) =>
        index % 2 === 0 ? item.main.feels_like : null
      )
      .filter((label) => label !== null);

    const filteredWind = this.previous
      .map((item: any, index: number) =>
        index % 2 === 0 ? item.wind.speed : null
      )
      .filter((label) => label !== null);

    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: filteredLabels,
        datasets: [
          {
            label: "Temperature",
            data: filteredTemp,
            backgroundColor: "transparent",
            borderColor: "#48484A",
            borderWidth: 2,
          },
          {
            label: "Température ressentie",
            data: filteredFeelsLike,
            backgroundColor: "transparent",
            borderColor: "#EC6E4C",
            borderWidth: 2,
          },
          {
            label: "Vitesse du vent",
            data: filteredWind,
            backgroundColor: "transparent",
            borderColor: "#F2F2F1",
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "white",
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return tooltipItem.yLabel;
              },
            },
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              tooltipFormat: "dd:MM:yyyy HH:mm",
            },
            title: {
              display: true,
              text: "Prévisions sur 5 jours",
            },
          },
        },
      },
    });
  }
}
</script>
