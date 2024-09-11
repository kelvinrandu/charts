
'use client'


import * as React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Song1", "Song2", "Song3"],
  ["August", 1000, 400, 200],
  ["September", 1170, 460, 250],
  ["October", 660, 1120, 300],
  ["November", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Streams",
    subtitle: "Song1, Song2, and Song3: August-November",
  },
};
export const data1 = [
  ["ID", "X", "Y", "Temperature"],
  ["", 80, 167, 120],
  ["", 79, 136, 130],
  ["", 78, 184, 50],
  ["", 72, 278, 230],
  ["", 81, 200, 210],
  ["", 72, 170, 100],
  ["", 68, 477, 80],
];

export const options1 = {
  colorAxis: { colors: ["yellow", "red"] },
};
export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options2 = {
  title: "My Daily Activities",
  is3D: true,
};
export const data3 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options3 = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
export const data4 = [
  ["Generation", "Descendants"],
  [0, 1],
  [1, 33],
  [2, 269],
  [3, 2013],
];

export const options4 = {
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
export const data5 = [
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

export const options5 = {
  colors: ["black", "black", "black"],
  wordtree: {
    format: "explicit",
    type: "suffix",
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
      chartType="ScatterChart"
      width="80%"
      height="400px"
      data={data4}
      options={options4}
    />
        <Chart
      chartType="WordTree"
      width="100%"
      height="400px"
      data={data5}
      options={options5}
    />
    </div>
  );
}
