
var ctx = document.getElementById('ratingChart').getContext('2d');
var ratingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Five Stars', 'Four Stars', 'Three Stars', 'Two Stars', 'One Star'],
        datasets: [{
            label: 'Number of Ratings',
            data: [0, 0, 0, 0, 0], // Initial data is set to 0
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const updateChart = (summary) => {
    ratingChart.data.datasets[0].data = [
        summary.five_stars,
        summary.four_stars,
        summary.three_stars,
        summary.two_stars,
        summary.one_star
    ];
    ratingChart.update();
};
