const { dxy, us10y } = window.data;

const data = {
  labels: dxy.map(data => (new Date(data[0])).toISOString().split('-')[0]),
  datasets: [{
    label: 'Mannarino market risk indicator',
    data: dxy.map((_data, i) => us10y[i][1] * dxy[i][1] / 1.61),
    borderColor: 'rgb(99, 132, 255)',
    tension: 0.5
  }]
};
var myChart = new Chart(
  document.getElementById('myChart'), {
    type: 'line',
    data,
    options: {
      interaction: {
        intersect: false,
      },
      radius: 0,
      maintainAspectRatio: false,
      scales: {
          y: {
            beginAtZero: true,
          }
      }
  }
});