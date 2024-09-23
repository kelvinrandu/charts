"use client"

import * as React from 'react';
import { Chart } from "react-google-charts";
import { Box } from '@chakra-ui/react'

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

 const data2 = [
  ["Songs", "Number of streams"],
  ["Song 1", 11],
  ["Song 2", 2],
  ["Song 3", 2],
  ["Song 4", 2],
  ["Song 5", 7],
];

 const options2 = {
  title: "Streams",
  is3D: true,
};
 const data3 = [
  ["Songs", "Number of streams"],
  ["Song 1", 11],
  ["Song 2", 2],
  ["Song 3", 2],
  ["Song 4", 2],
  ["Song 5", 7],
];

 const options3 = {
  title: "BY SHOP",
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
  title: "TURNOVER PER MONTH",
  hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
  vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
  trendlines: {
    0: {
      type: "exponential",
      color: "orange",
    },
  },
};

//  const data5 = [
//   ["id", "childLabel", "parent", "size", { role: "style" }],
//   [0, "Life", -1, 1, "black"],
//   [1, "Archaea", 0, 1, "black"],
//   [2, "Eukarya", 0, 5, "black"],
//   [3, "Bacteria", 0, 1, "black"],
//   [4, "Crenarchaeota", 1, 1, "black"],
//   [5, "Euryarchaeota", 1, 1, "black"],
//   [6, "Korarchaeota", 1, 1, "black"],
//   [7, "Nanoarchaeota", 1, 1, "black"],
//   [8, "Thaumarchaeota", 1, 1, "black"],
//   [9, "Amoebae", 2, 1, "black"],
//   [10, "Plants", 2, 1, "black"],
//   [11, "Chromalveolata", 2, 1, "black"],
//   [12, "Opisthokonta", 2, 5, "black"],
//   [13, "Rhizaria", 2, 1, "black"],
//   [14, "Excavata", 2, 1, "black"],
//   [15, "Animalia", 12, 5, "black"],
//   [16, "Fungi", 12, 2, "black"],
//   [17, "Parazoa", 15, 2, "black"],
//   [18, "Eumetazoa", 15, 5, "black"],
//   [19, "Radiata", 18, 2, "black"],
//   [20, "Bilateria", 18, 5, "black"],
//   [21, "Orthonectida", 20, 2, "black"],
//   [22, "Rhombozoa", 20, 2, "black"],
//   [23, "Acoelomorpha", 20, 1, "black"],
//   [24, "Deuterostomia", 20, 5, "black"],
//   [25, "Chaetognatha", 20, 2, "black"],
//   [26, "Protostomia", 20, 2, "black"],
//   [27, "Chordata", 24, 5, "black"],
//   [28, "Hemichordata", 24, 1, "black"],
//   [29, "Echinodermata", 24, 1, "black"],
//   [30, "Xenoturbellida", 24, 1, "black"],
//   [31, "Vetulicolia", 24, 1, "black"],
// ];

//  const options5 = {
//   colors: ["black", "black", "black"],
//   wordtree: {
//     format: "explicit",
//     type: "suffix",
//   },
// };
 const data6 = [
  ["Country", "streams"],
  ["Algeria", 364],
  ["Angola", 204],
  ["Benin", 64],
  ["Botswana", 24],
  ["Burkina Faso", 12],
  ["Burundi", 3],
  ["Cameroon", 3],
  ["Canary Islands", 28],
  ["Cape Verde", 15],
  ["Central African Republic", 4],
  ["Ceuta", 35],
  ["Chad", 12],
  ["Comoros", 32],
  ["Cote d'Ivoire", 6],
  ["Democratic Republic of the Congo", 30],
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
  ["Kenya", 71],
  ["Lesotho", 29],
  ["Liberia", 6],
  ["Libya", 32],
  ["Madagascar", null],
  ["Madeira", 33],
  ["Malawi", 14],
  ["Mali", 12],
  ["Mauritania", 18],
  ["Mauritius", 20],
  ["Mayotte", 13],
  ["Melilla", 35],
  ["Morocco", 32],
  ["Mozambique", 25],
  ["Namibia", 22],
  ["Niger", 14],
  ["Nigeria", 8],
  ["Republic of the Congo", 166],
  ["Réunion", 21],
  ["Rwanda", 92],
  ["Saint Helena", 16],
  ["São Tomé and Principe", 0],
  ["Senegal", 15],
  ["Seychelles", 75],
  ["Sierra Leone", 8],
  ["Somalia", 2],
  ["Sudan", 15],
  ["South Africa", 30],
  ["South Sudan", 5],
  ["Swaziland", 26],
  ["Tanzania", 6],
  ["Togo", 6],
  ["Tunisia", 34],
  ["Uganda", 1],
  ["Western Sahara", 25],
  ["Zambia", 15],
  ["Zimbabwe", 18],
];

 const options6 = {
  region: "002", // Africa
  // colorAxis: { colors: ["#00853f", "black", "orange"] },
  colorAxis: { colors: [ "white", "orange"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "white",
  defaultColor: "#f5f5f5",
};


 const data9 = [
  [
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];

 const options9 = {
  chart: {
    title: "PERFORMANCE PER TRACK",
    subtitle: "in streams",
  },
};

export default function Home() {
  return (
    <Box paddingTop={20} paddingX={20}>
      
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
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

        {/* <Chart
      chartType="WordTree"
      width="100%"
      height="400px"
      data={data5}
      options={options5}
    /> */}
        <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data6}
      options={options6}
    />

        <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data9}
      options={options9}
    />
    </Box>
  );
}
