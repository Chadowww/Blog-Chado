<template>
  <div class="w-11/12">
    <canvas id="myChart" width="800" height="500"></canvas>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

export default class LineChart extends Vue {
  @Prop({ required: true, type: Array })
  readonly previous!: any[];
  mounted() {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.previous.map((item: any) => item.dt_txt),
        datasets: [
          {
            label: "Temperature",
            data: this.previous.map((item: any) => item.main.temp),
            backgroundColor: "transparent",
            borderColor: "#48484A",
            borderWidth: 2,
          },
          {
            label: "Température ressentie",
            data: this.previous.map((item: any) => item.main.feels_like),
            backgroundColor: "transparent",
            borderColor: "#EC6E4C",
            borderWidth: 2,
          },
          {
            label: "Vitesse du vent",
            data: this.previous.map((item: any) => item.wind.speed),
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
      },
    });
  }
}
</script>
