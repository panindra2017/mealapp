import React from 'react'
import Chart from "react-apexcharts";
interface Props {
  lowSeries?: any
  normalSeries?: any
  hightSeries?: any
  pointer?: { x: Number, y: Number, label: string }
  chartOptions?: any
  label?: any
  value?: any
}

const CircleGraph = ({ lowSeries, normalSeries, hightSeries, pointer, chartOptions, label, value }: Props) => {

  var option = {

    series: [value],
    options: {
      chart: {
        height: 300,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: { value },
              fontSize: '22px',
              color: undefined,
              formatter: function (val) {
                return val + " cal";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        },
      },
      stroke: {
        dashArray: 5
      },
      labels: [label],
    },


  };



  return (
    <React.Fragment>
      <Chart
        options={option.options}
        series={option.series}
        type="radialBar" 

      />
    </React.Fragment>


  )
}

export default CircleGraph
