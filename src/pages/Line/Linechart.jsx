import { Box , useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

 const data = [
  {
    "id": "japan",
    "color": "hsl(265, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 224
      },
      {
        "x": "helicopter",
        "y": 115
      },
      {
        "x": "boat",
        "y": 91
      },
      {
        "x": "train",
        "y": 296
      },
      {
        "x": "subway",
        "y": 96
      },
      {
        "x": "bus",
        "y": 296
      },
      {
        "x": "car",
        "y": 162
      },
      {
        "x": "moto",
        "y": 299
      },
      {
        "x": "bicycle",
        "y": 254
      },
      {
        "x": "horse",
        "y": 261
      },
      {
        "x": "skateboard",
        "y": 138
      },
      {
        "x": "others",
        "y": 216
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(341, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 168
      },
      {
        "x": "helicopter",
        "y": 19
      },
      {
        "x": "boat",
        "y": 159
      },
      {
        "x": "train",
        "y": 183
      },
      {
        "x": "subway",
        "y": 237
      },
      {
        "x": "bus",
        "y": 288
      },
      {
        "x": "car",
        "y": 118
      },
      {
        "x": "moto",
        "y": 150
      },
      {
        "x": "bicycle",
        "y": 114
      },
      {
        "x": "horse",
        "y": 210
      },
      {
        "x": "skateboard",
        "y": 70
      },
      {
        "x": "others",
        "y": 120
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(10, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 191
      },
      {
        "x": "helicopter",
        "y": 70
      },
      {
        "x": "boat",
        "y": 275
      },
      {
        "x": "train",
        "y": 117
      },
      {
        "x": "subway",
        "y": 100
      },
      {
        "x": "bus",
        "y": 92
      },
      {
        "x": "car",
        "y": 253
      },
      {
        "x": "moto",
        "y": 25
      },
      {
        "x": "bicycle",
        "y": 0
      },
      {
        "x": "horse",
        "y": 53
      },
      {
        "x": "skateboard",
        "y": 193
      },
      {
        "x": "others",
        "y": 249
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(69, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 90
      },
      {
        "x": "helicopter",
        "y": 124
      },
      {
        "x": "boat",
        "y": 177
      },
      {
        "x": "train",
        "y": 249
      },
      {
        "x": "subway",
        "y": 59
      },
      {
        "x": "bus",
        "y": 16
      },
      {
        "x": "car",
        "y": 273
      },
      {
        "x": "moto",
        "y": 125
      },
      {
        "x": "bicycle",
        "y": 95
      },
      {
        "x": "horse",
        "y": 260
      },
      {
        "x": "skateboard",
        "y": 178
      },
      {
        "x": "others",
        "y": 56
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(131, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 1
      },
      {
        "x": "helicopter",
        "y": 40
      },
      {
        "x": "boat",
        "y": 221
      },
      {
        "x": "train",
        "y": 95
      },
      {
        "x": "subway",
        "y": 67
      },
      {
        "x": "bus",
        "y": 145
      },
      {
        "x": "car",
        "y": 280
      },
      {
        "x": "moto",
        "y": 68
      },
      {
        "x": "bicycle",
        "y": 7
      },
      {
        "x": "horse",
        "y": 118
      },
      {
        "x": "skateboard",
        "y": 159
      },
      {
        "x": "others",
        "y": 87
      }
    ]
  }
]
 const Linechart = ({inDashboard = false}) => {

  const Theme = useTheme();
  return (
    <Box sx={{height: inDashboard ? "250px": "85vh"}}>
   <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        theme={{
          // "background": "#ffffff",
          "text": {
              "fontSize": 11,
              "fill": "grey",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "axis": {
              "domain": {
                  "line": {
                      "stroke": Theme.palette.divider,
                      "strokeWidth": 1
                  }
              },
              "legend": {
                  "text": {
                      "fontSize": 12,
                      "fill": Theme.palette.text.primary ,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": Theme.palette.divider,
                      "strokeWidth": 1
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": Theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": Theme.palette.divider,
                  "strokeWidth": 1
              }
          },
          "legends": {
              "title": {
                  "text": {
                      "fontSize": 11,
                      "fill": Theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "text": {
                  "fontSize": 11,
                  "fill": Theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              },
              "ticks": {
                  "line": {},
                  "text": {
                      "fontSize": 10,
                      "fill": Theme.palette.text.primary,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "annotations": {
              "text": {
                  "fontSize": 13,
                  "fill": Theme.palette.text.primary,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              }
          },
          "tooltip": {
              "wrapper": {},
              "container": {
                  "background": Theme.palette.background.default,
                  "color": Theme.palette.text.primary,
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
      }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:  inDashboard ? null:'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:  inDashboard ? null: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  
  
  </Box>
  )
}

export default  Linechart;