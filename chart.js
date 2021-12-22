import { Chart } from 'chart.js/auto'
let barChartElement = document.getElementById('barChart');
barChartElement.innerHTML = 'Hello';

const data = {
    labels: ['Bin1', 'Bin2', 'Bin3', 'Bin4'],
    datasets: [{
        label: 'My First Dataset',
        data: [15, 39, 70, 81],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',

        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data,

    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    color: 'white'
                }
            },
            x: {
                grid: {
                    display: false,
                    color: '#fff',
                }
            }
        }
    },
};

let barchart = new Chart(barChartElement, config);

let dowchartElement = document.getElementById('doughChart');

var myChart = new Chart(dowchartElement, {
    type: 'doughnut',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai"],
        datasets: [{    
            data: [500,	50,	2424,	14040], // Specify the data values array
          
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});