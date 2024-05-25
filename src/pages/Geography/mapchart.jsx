import { ResponsiveChoropleth } from '@nivo/geo'
import { Box , useTheme } from "@mui/material";
import { geo } from './feature';
 
const data = [
  {
    "id": "AFG",
    "value": 40427
  },
  {
    "id": "AGO",
    "value": 159437
  },
  {
    "id": "ALB",
    "value": 385492
  },
  {
    "id": "ARE",
    "value": 25958
  },
  {
    "id": "ARG",
    "value": 312474
  },
  {
    "id": "ARM",
    "value": 947268
  },
  {
    "id": "ATA",
    "value": 264186
  },
  {
    "id": "ATF",
    "value": 772876
  },
  {
    "id": "AUT",
    "value": 70215
  },
  {
    "id": "AZE",
    "value": 348755
  },
  {
    "id": "BDI",
    "value": 688536
  },
  {
    "id": "BEL",
    "value": 421352
  },
  {
    "id": "BEN",
    "value": 911800
  },
  {
    "id": "BFA",
    "value": 133409
  },
  {
    "id": "BGD",
    "value": 612829
  },
  {
    "id": "BGR",
    "value": 415736
  },
  {
    "id": "BHS",
    "value": 223668
  },
  {
    "id": "BIH",
    "value": 813794
  },
  {
    "id": "BLR",
    "value": 237987
  },
  {
    "id": "BLZ",
    "value": 239208
  },
  {
    "id": "BOL",
    "value": 325387
  },
  {
    "id": "BRN",
    "value": 401927
  },
  {
    "id": "BTN",
    "value": 649086
  },
  {
    "id": "BWA",
    "value": 548429
  },
  {
    "id": "CAF",
    "value": 360614
  },
  {
    "id": "CAN",
    "value": 117670
  },
  {
    "id": "CHE",
    "value": 499081
  },
  {
    "id": "CHL",
    "value": 106930
  },
  {
    "id": "CHN",
    "value": 588647
  },
  {
    "id": "CIV",
    "value": 176873
  },
  {
    "id": "CMR",
    "value": 484010
  },
  {
    "id": "COG",
    "value": 785512
  },
  {
    "id": "COL",
    "value": 594726
  },
  {
    "id": "CRI",
    "value": 650170
  },
  {
    "id": "CUB",
    "value": 507570
  },
  {
    "id": "-99",
    "value": 596000
  },
  {
    "id": "CYP",
    "value": 483989
  },
  {
    "id": "CZE",
    "value": 72426
  },
  {
    "id": "DEU",
    "value": 273599
  },
  {
    "id": "DJI",
    "value": 250270
  },
  {
    "id": "DNK",
    "value": 842466
  },
  {
    "id": "DOM",
    "value": 197942
  },
  {
    "id": "DZA",
    "value": 568011
  },
  {
    "id": "ECU",
    "value": 919330
  },
  {
    "id": "EGY",
    "value": 399377
  },
  {
    "id": "ERI",
    "value": 495905
  },
  {
    "id": "ESP",
    "value": 392717
  },
  {
    "id": "EST",
    "value": 805083
  },
  {
    "id": "ETH",
    "value": 940962
  },
  {
    "id": "FIN",
    "value": 558995
  },
  {
    "id": "FJI",
    "value": 159436
  },
  {
    "id": "FLK",
    "value": 538457
  },
  {
    "id": "FRA",
    "value": 561550
  },
  {
    "id": "GAB",
    "value": 496925
  },
  {
    "id": "GBR",
    "value": 298700
  },
  {
    "id": "GEO",
    "value": 846766
  },
  {
    "id": "GHA",
    "value": 655894
  },
  {
    "id": "GIN",
    "value": 126162
  },
  {
    "id": "GMB",
    "value": 779783
  },
  {
    "id": "GNB",
    "value": 592445
  },
  {
    "id": "GNQ",
    "value": 786368
  },
  {
    "id": "GRC",
    "value": 399972
  },
  {
    "id": "GTM",
    "value": 618517
  },
  {
    "id": "GUY",
    "value": 738506
  },
  {
    "id": "HND",
    "value": 345094
  },
  {
    "id": "HRV",
    "value": 590248
  },
  {
    "id": "HTI",
    "value": 70976
  },
  {
    "id": "HUN",
    "value": 345088
  },
  {
    "id": "IDN",
    "value": 752725
  },
  {
    "id": "IND",
    "value": 393165
  },
  {
    "id": "IRL",
    "value": 616145
  },
  {
    "id": "IRN",
    "value": 187147
  },
  {
    "id": "IRQ",
    "value": 550494
  },
  {
    "id": "ISL",
    "value": 331694
  },
  {
    "id": "ISR",
    "value": 197174
  },
  {
    "id": "ITA",
    "value": 464322
  },
  {
    "id": "JAM",
    "value": 274338
  },
  {
    "id": "JOR",
    "value": 335742
  },
  {
    "id": "JPN",
    "value": 533727
  },
  {
    "id": "KAZ",
    "value": 240094
  },
  {
    "id": "KEN",
    "value": 417973
  },
  {
    "id": "KGZ",
    "value": 879280
  },
  {
    "id": "KHM",
    "value": 877130
  },
  {
    "id": "OSA",
    "value": 550090
  },
  {
    "id": "KWT",
    "value": 561433
  },
  {
    "id": "LAO",
    "value": 435602
  },
  {
    "id": "LBN",
    "value": 784082
  },
  {
    "id": "LBR",
    "value": 649345
  },
  {
    "id": "LBY",
    "value": 708054
  },
  {
    "id": "LKA",
    "value": 359533
  },
  {
    "id": "LSO",
    "value": 418453
  },
  {
    "id": "LTU",
    "value": 477524
  },
  {
    "id": "LUX",
    "value": 289341
  },
  {
    "id": "LVA",
    "value": 435060
  },
  {
    "id": "MAR",
    "value": 16984
  },
  {
    "id": "MDA",
    "value": 656454
  },
  {
    "id": "MDG",
    "value": 953350
  },
  {
    "id": "MEX",
    "value": 221530
  },
  {
    "id": "MKD",
    "value": 95749
  },
  {
    "id": "MLI",
    "value": 63952
  },
  {
    "id": "MMR",
    "value": 450074
  },
  {
    "id": "MNE",
    "value": 383043
  },
  {
    "id": "MNG",
    "value": 979196
  },
  {
    "id": "MOZ",
    "value": 186422
  },
  {
    "id": "MRT",
    "value": 599569
  },
  {
    "id": "MWI",
    "value": 375244
  },
  {
    "id": "MYS",
    "value": 950075
  },
  {
    "id": "NAM",
    "value": 569180
  },
  {
    "id": "NCL",
    "value": 93668
  },
  {
    "id": "NER",
    "value": 123533
  },
  {
    "id": "NGA",
    "value": 999390
  },
  {
    "id": "NIC",
    "value": 485922
  },
  {
    "id": "NLD",
    "value": 66364
  },
  {
    "id": "NOR",
    "value": 158374
  },
  {
    "id": "NPL",
    "value": 222841
  },
  {
    "id": "NZL",
    "value": 75934
  },
  {
    "id": "OMN",
    "value": 521788
  },
  {
    "id": "PAK",
    "value": 751140
  },
  {
    "id": "PAN",
    "value": 869192
  },
  {
    "id": "PER",
    "value": 252474
  },
  {
    "id": "PHL",
    "value": 610335
  },
  {
    "id": "PNG",
    "value": 868639
  },
  {
    "id": "POL",
    "value": 957592
  },
  {
    "id": "PRI",
    "value": 8274
  },
  {
    "id": "PRT",
    "value": 613874
  },
  {
    "id": "PRY",
    "value": 439578
  },
  {
    "id": "QAT",
    "value": 736685
  },
  {
    "id": "ROU",
    "value": 735799
  },
  {
    "id": "RUS",
    "value": 732011
  },
  {
    "id": "RWA",
    "value": 404788
  },
  {
    "id": "ESH",
    "value": 749843
  },
  {
    "id": "SAU",
    "value": 784074
  },
  {
    "id": "SDN",
    "value": 387729
  },
  {
    "id": "SDS",
    "value": 89688
  },
  {
    "id": "SEN",
    "value": 537869
  },
  {
    "id": "SLB",
    "value": 108090
  },
  {
    "id": "SLE",
    "value": 513204
  },
  {
    "id": "SLV",
    "value": 962959
  },
  {
    "id": "ABV",
    "value": 237155
  },
  {
    "id": "SOM",
    "value": 903053
  },
  {
    "id": "SRB",
    "value": 847340
  },
  {
    "id": "SUR",
    "value": 160444
  },
  {
    "id": "SVK",
    "value": 52686
  },
  {
    "id": "SVN",
    "value": 209869
  },
  {
    "id": "SWZ",
    "value": 849136
  },
  {
    "id": "SYR",
    "value": 591688
  },
  {
    "id": "TCD",
    "value": 420776
  },
  {
    "id": "TGO",
    "value": 863609
  },
  {
    "id": "THA",
    "value": 342334
  },
  {
    "id": "TJK",
    "value": 678862
  },
  {
    "id": "TKM",
    "value": 352993
  },
  {
    "id": "TLS",
    "value": 504636
  },
  {
    "id": "TTO",
    "value": 950231
  },
  {
    "id": "TUN",
    "value": 886451
  },
  {
    "id": "TUR",
    "value": 174363
  },
  {
    "id": "TWN",
    "value": 739548
  },
  {
    "id": "TZA",
    "value": 793974
  },
  {
    "id": "UGA",
    "value": 5761
  },
  {
    "id": "UKR",
    "value": 646118
  },
  {
    "id": "URY",
    "value": 786155
  },
  {
    "id": "USA",
    "value": 219917
  },
  {
    "id": "UZB",
    "value": 819032
  },
  {
    "id": "VEN",
    "value": 688149
  },
  {
    "id": "VNM",
    "value": 274442
  },
  {
    "id": "VUT",
    "value": 182892
  },
  {
    "id": "PSE",
    "value": 560937
  },
  {
    "id": "YEM",
    "value": 865438
  },
  {
    "id": "ZAF",
    "value": 181797
  },
  {
    "id": "ZMB",
    "value": 312980
  },
  {
    "id": "ZWE",
    "value": 207223
  },
  {
    "id": "KOR",
    "value": 931406
  }
]

 const Mapchart = () => {
  const Theme = useTheme();
  return (
    <Box sx={{height:"85vh"}}>
      <ResponsiveChoropleth
        data={data}
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

      projectionScale={190}

        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuBu"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -30,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: Theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
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
export default  Mapchart;