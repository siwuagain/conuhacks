import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [10, 10, 10, 10, 10],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: [10, 10, 10, 10, 10],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

export default function TSX() {
  return <Chart type="bar" data={data} />;
}
