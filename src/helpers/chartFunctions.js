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

export function pieData(expenses) {
  let dataToRender = {}
  expenses.forEach(e => {
    if (!Object.keys(dataToRender).includes(e.type)) {
      Object.assign(dataToRender, { [e.type]: e.price })
    } else {
      dataToRender[e.type] += e.price
    }
  });

  return {
    labels: Object.keys(dataToRender),
    datasets: [
      {
        borderWidth: 2,
        hoverBorderWidth: 2,
        backgroundColor: Object.values(colors),
        hoverBackgroundColor: Object.values(hoverColors),
        data: Object.values(dataToRender),
      }
    ]
  }
}

export function barData(expenses) {
  let sumOfExpenses = 0;
  expenses.forEach(e => { sumOfExpenses += e.price});
  return {
    labels: ['Planned', 'Actual'],
    datasets: [
      {
        label: 'Expenses',
        backgroundColor: colors.chart1,
        borderWidth: 0,
        data: [111, sumOfExpenses]
      }
    ]
  }
}