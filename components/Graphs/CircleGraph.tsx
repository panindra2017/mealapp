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

const CircleGraph = ({ label, value }: Props) => {

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

        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        gradient: {
          shadeIntensity: 0.25,
          gradientToColors: ["#000", "#ffbf00", "#c9de00"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 40, 70, 91]
        },
      },
      stroke: {
        dashArray: 2
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
