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


const getBarChartData = async (index) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/getCancelledCountByTime`);
    const data = await res.json();
    const obj = data[index]
    let cancelCounts = [null, null, null, null]
    if (obj.Cancelled.length > 0) {
      for (let i = 0; i < obj.Cancelled.length; i++) {
        if (obj.Cancelled[i].Time.endsWith("8")) {
          cancelCounts[0] = obj.Cancelled[i].Count;
        } else if (obj.Cancelled[i].Time.endsWith("9")){
          cancelCounts[1] = obj.Cancelled[i].Count;
        } else if (obj.Cancelled[i].Time.endsWith("0")){
          cancelCounts[2] = obj.Cancelled[i].Count;
        } else {
        cancelCounts[3] = obj.Cancelled[i].Count;
        }
      }
    }
    let tradeCounts = [null, null, null, null]
    if (obj.Trade.length > 0) {
      for (let i = 0; i < obj.Trade.length; i++) {
        if (obj.Trade[i].Time.endsWith("8")){
          tradeCounts[0] = obj.Trade[i].Count;
        } else if (obj.Trade[i].Time.endsWith("9")){
          tradeCounts[1] = obj.Trade[i].Count;
        } else if (obj.Trade[i].Time.endsWith("0")){
          tradeCounts[2] = obj.Trade[i].Count;
        } else {
          tradeCounts[3] = obj.Trade[i].Count;
        }
      }
    }
    return [tradeCounts, cancelCounts]
  } catch (err) {
    console.log(err);
  }
};

async function chartData(index) {
  let results = await getBarChartData(index)
  console.log(results)
  const cancelCount = results[0]
  console.log(cancelCount)
  const tradeCount = results[1]
}

let TSX = {
  datasets: [
  {
    type: "bar",
    label: "Cancelled Orders",
    backgroundColor: "rgb(255, 99, 132)",
    borderWidth: 2,
    fill: false,
    data: [5173, 5136, 16722, 14903],
  },
  {
    type: "bar",
    label: "Successful Trades",
    backgroundColor: "rgb(75, 192, 192)",
    borderColor: "white",
    borderWidth: 2,
    data: [null, null, 2536, 24]
  },
],
labels : ["9:28", "9:29", "9:30", "9:31"],
}

let AD = {
  datasets: [
    {
      type: "bar",
      label: "Cancelled Orders",
      backgroundColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [null, null, 22, 7],
    },
    {
      type: "bar",
      label: "Successful Trades",
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "white",
      borderWidth: 2,
      data: [null, null, null, null]
    },
  ],
  labels : ["9:28", "9:29", "9:30", "9:31"],
}

let ED = {datasets: [
  {
    type: "bar",
    label: "Cancelled Orders",
    backgroundColor: "rgb(255, 99, 132)",
    borderWidth: 2,
    fill: false,
    data: [381, 212, 1638, 1653],
  },
  {
    type: "bar",
    label: "Successful Trades",
    backgroundColor: "rgb(75, 192, 192)",
    borderColor: "white",
    borderWidth: 2,
    data: [null, null, 11, 1]
  },
],
labels : ["9:28", "9:29", "9:30", "9:31"],
}

export default function graphs() {
  return (
    <>
      <div>
        <h1>TSX</h1>
        <Chart type="bar" data={TSX} />
      </div>
      <div>
        <h1>AlphaData</h1>
        <Chart type="bar" data={AD} />
      </div>
      <div>
        <h1>AequitasData</h1>
        <Chart type="bar" data={ED} />
      </div>
    </>
    
  );
}
