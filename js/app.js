let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Technology', 'Financials', 'Consumer Discretionary', 'Industrials', 'Health Care', 'Consumer Staples', 'Telecommunications', 'Materials', 'Real Estate', 'Energy' ];
let colorHex = ['#4b6584', '#fbc531', '#44bd32', '#e17055', '#0984e3', '#d63031', '#273c75', '#e84393', '#16a085', '#2d3436', ];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [15, 15, 15, 15, 10, 10, 5, 5, 5, 5],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})