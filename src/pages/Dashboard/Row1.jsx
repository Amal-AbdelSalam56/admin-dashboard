import { EmailOutlined, Person2Outlined, PointOfSaleOutlined, TrafficOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { data } from "../../pages/Pie/data";

const BoxCard = ({ icons, title1, title2, increase ,}) => {

  // console.log(colors);
  const Theme = useTheme();

  return (
    <Paper sx={{ flexGrow:1,minWidth: "333px", padding: 1.5, display: "flex", justifyContent: "space-between" }}>
      <Stack sx={{gap:1}}>
        {icons}
        <Typography variant="body2" sx={{ fontSize: "18px" }}> {title1}</Typography>
        <Typography variant="body2" sx={{ fontSize: "18px" }}> {title2}</Typography>
      </Stack>
      <Stack sx={{textAlign:"center"}}>
        
       <Box height={"80px"} width={"80px"} >
       <ResponsivePie
        data={data}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        colors={{
          scheme: 'category10', 
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
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        // arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsTextColor="#333333"
        // arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        // arcLabelsSkipAngle={10}
        // arcLabelsTextColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             2
        //         ]
        //     ]
        // }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'ruby'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'c'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'go'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'python'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'scala'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'lisp'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'elixir'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'javascript'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 0,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
       </Box>

        <Typography variant="body2" sx={{ fontSize: "18px" }}> {increase}</Typography>
      </Stack>
    </Paper>
  )
}


const Row1 = () => {
  const Theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{ xs: "center", sm: "center", lg: "space-between" }} mb={3} >

      <BoxCard
        icons={<EmailOutlined sx={{ color: Theme.palette.secondary.main }} />}
        title1={"12,361"}
        title2={"Email sent"}
        increase={"+14%"}
        // colors={'category10'}

      />

      <BoxCard
        icons={<PointOfSaleOutlined sx={{ color: Theme.palette.secondary.main }} />}
        title1={"12,361"}
        title2={"Email sent"}
        increase={"+14%"}
        // colors={'set2'}

      />

      <BoxCard
        icons={<Person2Outlined sx={{ color: Theme.palette.secondary.main }} />}
        title1={"12,361"}
        title2={"Email sent"}
        increase={"+14%"}
        // colors={'tableau10'}

      />

      <BoxCard
        icons={<TrafficOutlined sx={{ color: Theme.palette.secondary.main }} />}
        title1={"12,361"}
        title2={"Email sent"}
        increase={"+14%"}
        // colors={'nivo'}

      />

    </Stack>
  );
}
export default Row1;