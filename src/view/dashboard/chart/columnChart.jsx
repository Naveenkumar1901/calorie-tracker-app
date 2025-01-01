import React, { useState } from "react";
import { Card, Row, Col, } from "antd";
import Chart from "react-apexcharts";

export default function ColumnChart() {

  const [data] = useState({
    series: [
      // {
      //   name: "Contacts",
      //   color: "#33475b",
      //   data: [
      //     28877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783, 39457,
      //     22459, 39840,
      //   ],
      // },
      {
        name: "Deals",
        color: "#425b76",
        data: [
          10, 313, 623, 935, 345, 465, 813, 125, 156, 356,
          233, 570,
        ],
      },
      {
        name: "Tickets",
        color: "#0091ae",
        data: [
          877, 254, 233, 439, 675, 333, 457, 165, 783, 457,
          459, 840,
        ],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "bar",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      labels: {
        style: {
          fontSize: "14px",
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: "#DFE6E9",
        row: {
          opacity: 0.5,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          columnWidth: "65%",
          endingShape: "rounded",
        },
        colors: {
          backgroundBarColors: ["#0c65fa", "#61c9ff", "#f6c837"],
        },
      },

      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        axisTicks: {
          show: false,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },

        tickPlacement: "between",
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        horizontalAlign: "center",
        offsetX: 40,
        position: "bottom",
        markers: {
          radius: 12,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["636E72"],
            fontSize: "14px",
          },
          // formatter: (value) => {
          //   return value / 1000 + "K";
          // },
        },

        min: 0,
        max: 1000,
        tickAmount: 4,
      },
    },
  });

  return (
    <div id="chart" className="hp-w-100">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={395}
        legend="legend"
      />
    </div>
  );
}
