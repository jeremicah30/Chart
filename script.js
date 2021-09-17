let myChart = document.getElementById('chart').getContext('2d');
let myGraph = document.getElementById('graph').getContext('2d');

let dateChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['January','February','March','April','May','June','July','August','September'],
        datasets: [{
            label: 'Added Advertisers',
            data: [20, 30, 47, 70, 60, 50, 33, 45, 10],
            fill: true,
            backgroundColor: '	#FFA07A',
            tension: 0.6,
        }]
    }
});

let dateGraph = new Chart(myGraph, {
    type: 'bar',
    data: {
        labels: ['January','February','March','April','May','June','July','August','September'],
        datasets: [{
            label: 'Added Advertisers',
            data: [20, 30, 47, 90, 60, 50, 33, 45, 10],
            fill: true,
            backgroundColor: '#3CB371'
        }]
    }
})
