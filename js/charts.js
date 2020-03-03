let primaryColor = "#003d77";
let primaryColorLight = "#1561a8";
let primaryColorHover = "#003566";
let secondaryColor = "#8dc63f";
let secondaryColorLight = "#a0df49";
let secondaryColorHover = "#7bad36";

/* ------------------ EGX ------------------- */
var elevationData = [
    [10, 14744],
    [10.05, 14745.3],
    [10.1, 14745.86],
    [10.15, 14739.5],
    [10.2, 14739.51],
    [10.25, 14768.72],
    [10.3, 14768.6],
    [10.35, 14768.52],
    [10.4, 14767.07],
    [10.45, 14765.02],
    [10.5, 14764.6],
    [10.55, 14761],
    [10.6, 14758],
    [10.65, 14752.5],
    [10.7, 14747.5],
    [10.75, 14744.2],
    [10.8, 14741.05],
    [10.85, 14740],
    [10.9, 14738.2],
    [10.95, 14735.7],
    [11, 14733]
];

// Now create the chart
Highcharts.chart('egxChart', {

    chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 400
        },
        height: 250,
        backgroundColor: "transparent"
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    scrollbar: {
        enabled: false
    },

    annotations: [{
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'top',
            y: 15
        },

    }, {
        labelOptions: {
            shape: 'connector',
            align: 'right',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        }
    }],

    xAxis: {
        labels: {
            format: '{value}'
        },
        minRange: 1,
        title: {
            text: null
        },
        showLastLabel: true,
        endOnTick: false
    },

    yAxis: {
        gridLineWidth: 0.05,
        startOnTick: true,
        endOnTick: true,
        maxPadding: 0.2,
        title: {
            text: null
        },
        labels: {
            format: '{value}'
        }
    },

    tooltip: {
        headerFormat: '{point.x}<br>',
        pointFormat: '<strong>Value</strong> {point.y}',
        shared: true
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        data: elevationData,
        lineColor: secondaryColor,
        color: secondaryColorLight,
        fillOpacity: 0.75,
        name: 'EGX',
        marker: {
            enabled: false
        },
        threshold: null
    }]

});


/* -------------- Market Breadth ---------- */
Highcharts.chart('marketBreadthChart', {
    chart: {
        type: 'bar',
        backgroundColor: "transparent"
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Advancing', 'Declining', 'Unchanged', 'Total'],
        labels: {
            style: {
                color: primaryColor,
                fontWeight: 'bold'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: primaryColor,
                fontWeight: 'bold'
            }
        },
        gridLineWidth: 0.05,
        min: 0,
        max: 100,
        color: primaryColor,
        title: {
            text: null
        }
    },
    legend: {
        enabled: true,
        itemStyle: {
            'color': secondaryColor
        },
        itemHoverStyle: {
            color: secondaryColorHover
        }
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            events: {
                legendItemClick: function () {
                    return false; // <== returning false will cancel the default action
                }
            }
        }
    },
    series: [{
        name: 'Advancing',
        data: [54, 0, 0, 54],
        color: secondaryColor
    }, {
        name: 'Declining',
        data: [0, 16, 0, 16],
        color: primaryColorHover
    }, {
        name: 'Unchanged',
        data: [0, 0, 30, 30],
        color: primaryColorLight
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

/*----------------------- TID ------------------*/
Highcharts.chart("TIDChart1", {
    chart: {
        backgroundColor: "transparent",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        width: 350,
        height: 250
    },
    title: {
        text: "INSTITUTIONAL VS. INDIVIDUAL",
        style: {
            'color': primaryColor,
            'fontSize': '16px',
            'fontWeight': '700'
        }
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            point: {
                events: {
                    legendItemClick: function () {
                        return false; // <== returning false will cancel the default action
                    }
                }
            }
        }
    },
    series: [{
        name: "percentage",
        colorByPoint: true,
        data: [{
                name: "Individual",
                y: 26.5,
                color: primaryColor
            },
            {
                name: "Institutional",
                y: 60.6,
                sliced: false,
                selected: false,
                color: secondaryColor
            }
        ]
    }],
    legend: {
        itemStyle: {
            color: primaryColor,
            fontSize: '14px'
        },
        reversed: true,
        itemHoverStyle: {
            color: primaryColorLight
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        reversed: true
    },
    yAxis: {
        reversed: true
    }
});

Highcharts.chart("TIDChart2", {
    chart: {
        backgroundColor: "transparent",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        width: 350,
        height: 250
    },
    title: {
        text: "FOREIGN VS. DOMESTIC",
        style: {
            'color': primaryColor,
            'fontSize': '16px',
            'fontWeight': '700'
        }
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            point: {
                events: {
                    legendItemClick: function () {
                        return false; // <== returning false will cancel the default action
                    }
                }
            }
        }
    },
    series: [{
        name: "percentage",
        colorByPoint: true,
        data: [{
                name: "Egyptians",
                y: 83.8,
                color: primaryColor
            },
            {
                name: "Foreigners",
                y: 8.8,
                sliced: false,
                selected: false,
                color: secondaryColorHover
            },
            {
                name: "Arab",
                y: 7.4,
                sliced: false,
                selected: false,
                color: secondaryColorLight
            }
        ]
    }],
    legend: {
        itemStyle: {
            color: primaryColor,
            fontSize: '14px'
        },
        reversed: false,
        itemHoverStyle: {
            color: primaryColorLight
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        reversed: true
    },
    yAxis: {
        reversed: true
    }
});