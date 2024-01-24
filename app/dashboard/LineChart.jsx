"use client"

import { ResponsiveLine } from '@nivo/line';
import { mockLineData as data } from '@/constants';

const LineChart = () => {
  return (
    <ResponsiveLine
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:'gray'
                    }
                },
                legend:{
                    text:{
                        fill: 'gray'
                    }
                },
                ticks: {
                    lines: {
                        stroke: 'gray',
                        strokeWidth: 1
                    },
                    text: {
                        fill: 'gray',
                    },
                },
            },
            legends: {
                text: {
                    fill: '#F2F4F7',
                }
            },
            tooltip : {
                container: {
                    color: 'gray'
                }
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point'}}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={true}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        colors={{ scheme: 'category10' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
  )
}

export default LineChart