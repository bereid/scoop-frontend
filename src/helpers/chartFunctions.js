const colors = {
  chart1: '#6b7b8e',
  chart2: '#8fbbaf',
  chart3: '#acdeaa',
  chart4: '#d6f8b8',
};

const hoverColors = {
  chart1: '#deecfc',
  chart2: '#b9ceeb',
  chart3: '#87a8d0',
  chart4: '#c3b4d2',
};

export function pieData() {
  return {
    labels: ['Living', 'Fuel', 'Food',
      'Recreation'],
    datasets: [
      {
        label: 'Rainfall',
        borderWidth: 0,
        hoverBorderWidth: 0,
        backgroundColor: [
          colors.chart1,
          colors.chart2,
          colors.chart3,
          colors.chart4,
        ],
        hoverBackgroundColor: [
          hoverColors.chart1,
          hoverColors.chart2,
          hoverColors.chart3,
          hoverColors.chart4,
        ],
        data: [65, 20, 80, 11]
      }
    ]
  }
}

export function barData() {
  return {
    labels: ['Planned', 'Actual'],
    datasets: [
      {
        label: 'Expenses',
        backgroundColor: colors.chart1,
        borderWidth: 0,
        data: [65, 43]
      }
    ]
  }
}