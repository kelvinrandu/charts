"use client"

import * as React from 'react';
import { Chart } from "react-google-charts";

 const data = [
  ["Year", "Song1", "Song2", "Song3"],
  ["August", 1000, 400, 200],
  ["September", 1170, 460, 250],
  ["October", 660, 1120, 300],
  ["November", 1030, 540, 350],
];

 const options = {
  chart: {
    title: "Streams",
    subtitle: "Song1, Song2, and Song3: August-November",
  },
};
 const data1 = [
  ["ID", "X", "Y", "Temperature"],
  ["", 80, 167, 120],
  ["", 79, 136, 130],
  ["", 78, 184, 50],
  ["", 72, 278, 230],
  ["", 81, 200, 210],
  ["", 72, 170, 100],
  ["", 68, 477, 80],
];

 const options1 = {
  colorAxis: { colors: ["yellow", "red"] },
};
 const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

 const options2 = {
  title: "My Daily Activities",
  is3D: true,
};
 const data3 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

 const options3 = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
 const data4 = [
  ["Generation", "Descendants"],
  [0, 1],
  [1, 33],
  [2, 269],
  [3, 2013],
];

 const options4 = {
  title: "Descendants by Generation",
  hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
  vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
  trendlines: {
    0: {
      type: "exponential",
      color: "green",
    },
  },
};
 const data5 = [
  ["id", "childLabel", "parent", "size", { role: "style" }],
  [0, "Life", -1, 1, "black"],
  [1, "Archaea", 0, 1, "black"],
  [2, "Eukarya", 0, 5, "black"],
  [3, "Bacteria", 0, 1, "black"],
  [4, "Crenarchaeota", 1, 1, "black"],
  [5, "Euryarchaeota", 1, 1, "black"],
  [6, "Korarchaeota", 1, 1, "black"],
  [7, "Nanoarchaeota", 1, 1, "black"],
  [8, "Thaumarchaeota", 1, 1, "black"],
  [9, "Amoebae", 2, 1, "black"],
  [10, "Plants", 2, 1, "black"],
  [11, "Chromalveolata", 2, 1, "black"],
  [12, "Opisthokonta", 2, 5, "black"],
  [13, "Rhizaria", 2, 1, "black"],
  [14, "Excavata", 2, 1, "black"],
  [15, "Animalia", 12, 5, "black"],
  [16, "Fungi", 12, 2, "black"],
  [17, "Parazoa", 15, 2, "black"],
  [18, "Eumetazoa", 15, 5, "black"],
  [19, "Radiata", 18, 2, "black"],
  [20, "Bilateria", 18, 5, "black"],
  [21, "Orthonectida", 20, 2, "black"],
  [22, "Rhombozoa", 20, 2, "black"],
  [23, "Acoelomorpha", 20, 1, "black"],
  [24, "Deuterostomia", 20, 5, "black"],
  [25, "Chaetognatha", 20, 2, "black"],
  [26, "Protostomia", 20, 2, "black"],
  [27, "Chordata", 24, 5, "black"],
  [28, "Hemichordata", 24, 1, "black"],
  [29, "Echinodermata", 24, 1, "black"],
  [30, "Xenoturbellida", 24, 1, "black"],
  [31, "Vetulicolia", 24, 1, "black"],
];

 const options5 = {
  colors: ["black", "black", "black"],
  wordtree: {
    format: "explicit",
    type: "suffix",
  },
};
 const data6 = [
  ["Country", "Latitude"],
  ["Algeria", 36],
  ["Angola", -8],
  ["Benin", 6],
  ["Botswana", -24],
  ["Burkina Faso", 12],
  ["Burundi", -3],
  ["Cameroon", 3],
  ["Canary Islands", 28],
  ["Cape Verde", 15],
  ["Central African Republic", 4],
  ["Ceuta", 35],
  ["Chad", 12],
  ["Comoros", -12],
  ["Cote d'Ivoire", 6],
  ["Democratic Republic of the Congo", -3],
  ["Djibouti", 12],
  ["Egypt", 26],
  ["Equatorial Guinea", 3],
  ["Eritrea", 15],
  ["Ethiopia", 9],
  ["Gabon", 0],
  ["Gambia", 13],
  ["Ghana", 5],
  ["Guinea", 10],
  ["Guinea-Bissau", 12],
  ["Kenya", -1],
  ["Lesotho", -29],
  ["Liberia", 6],
  ["Libya", 32],
  ["Madagascar", null],
  ["Madeira", 33],
  ["Malawi", -14],
  ["Mali", 12],
  ["Mauritania", 18],
  ["Mauritius", -20],
  ["Mayotte", -13],
  ["Melilla", 35],
  ["Morocco", 32],
  ["Mozambique", -25],
  ["Namibia", -22],
  ["Niger", 14],
  ["Nigeria", 8],
  ["Republic of the Congo", -1],
  ["Réunion", -21],
  ["Rwanda", -2],
  ["Saint Helena", -16],
  ["São Tomé and Principe", 0],
  ["Senegal", 15],
  ["Seychelles", -5],
  ["Sierra Leone", 8],
  ["Somalia", 2],
  ["Sudan", 15],
  ["South Africa", -30],
  ["South Sudan", 5],
  ["Swaziland", -26],
  ["Tanzania", -6],
  ["Togo", 6],
  ["Tunisia", 34],
  ["Uganda", 1],
  ["Western Sahara", 25],
  ["Zambia", -15],
  ["Zimbabwe", -18],
];

 const options6 = {
  region: "002", // Africa
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};
 const data7 = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

 const options7 = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};
export const data8 = [
  [
    { type: "date", label: "Day" },
    "Average temperature",
    "Average hours of daylight",
  ],
  [new Date(2014, 0), -0.5, 5.7],
  [new Date(2014, 1), 0.4, 8.7],
  [new Date(2014, 2), 0.5, 12],
  [new Date(2014, 3), 2.9, 15.3],
  [new Date(2014, 4), 6.3, 18.6],
  [new Date(2014, 5), 9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8), 7.4, 13.3],
  [new Date(2014, 9), 4.4, 9.9],
  [new Date(2014, 10), 1.1, 6.6],
  [new Date(2014, 11), -0.2, 4.5],
];

export const options8 = {
  chart: {
    title: "Average Temperatures and Daylight in Iceland Throughout the Year",
  },
  width: 900,
  height: 500,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};

export default function Home() {
  return (
    <div>
      
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
         <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={data1}
      options={options1}
    />
       <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"400px"}
    />
        <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data3}
      options={options3}
    />

        <Chart
      chartType="WordTree"
      width="100%"
      height="400px"
      data={data5}
      options={options5}
    />
        <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data6}
      options={options6}
    />
        <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={data7}
      options={options7}
    />
        <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data8}
      options={options8}
    />
    </div>
  );
}
