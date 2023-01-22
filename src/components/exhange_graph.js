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

const getBarChartData = async (exchange_firm) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/getCancelledCountByTime`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getScatterData = async (exchange_firm) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/getCancelledCountByTime`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

function bar_chart(obj) {
  let data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Cancelled Orders",
        backgroundColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: [10, 10, 10, 10, 10],
      },
      {
        type: "bar",
        label: "Successful Trades",
        backgroundColor: "rgb(75, 192, 192)",
        data: [10, 10, 10, 10, 10],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };
  return data;
}

function linear_regression(obj) {
  let data = {
    datasets: [
      {
        label: "New Orders Requests",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Acknowledged New Orders",
        data: [],
        backgroundColor: "",
      },
      {
        label: "Trade",
        data: [],
        backgroundColor: "",
      },
    ],
  };
  return data;
}

const labels = ["9:28", "9:29", "9:30", "9:31", "9:32"];

export const order_flow_data = {};

export default function TSX() {
  return (
    <>
      <div>
        <h3>TSX</h3>
        <Chart type="bar" data={bar_chart(getBarChartData("TSX"))} />;
        <Chart type="scatter" data={linear_regression("TSX")} />;
      </div>
      <div>
        <h3>AlphaData</h3>
        <Chart type="bar" data={bar_chart(getBarChartData("AD"))} />;
        <Chart type="scatter" data={linear_regression("AD")} />;
      </div>
      <div>
        <h3>AequitasData</h3>
        <Chart type="bar" data={bar_chart(getBarChartData("ED"))} />;
        <Chart type="scatter" data={linear_regression("ED")} />;
      </div>
    </>
  );
}
